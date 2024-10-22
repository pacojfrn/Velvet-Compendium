const express = require('express');
const compendio = express.Router();
const Persona = require('../schema/persona'); // Importando el esquema de Persona

const redisClient = require('redis').createClient({
    url: 'redis://redis:6379'
});
redisClient.connect();

// Métodos GET
/**
 * @swagger
 * components:
 *   schemas:
 *     Persona:
 *       type: object
 *       properties:
 *         arcana:
 *           type: string
 *           description: Arcana de la Persona.
 *         weak:
 *           type: array
 *           items:
 *             type: string
 *           description: Debilidades de la Persona.
 *         stats:
 *           type: object
 *           properties:
 *             St:
 *               type: number
 *             Ma:
 *               type: number
 *             En:
 *               type: number
 *             Ag:
 *               type: number
 *             Lu:
 *               type: number
 *           description: Estadísticas de la Persona.
 *         strengths:
 *           type: array
 *           items:
 *             type: string
 *           description: Fortalezas de la Persona.
 *         level:
 *           type: number
 *           description: Nivel de la Persona.
 *         name:
 *           type: string
 *           description: Nombre de la Persona.
 */
/**
 * @swagger
 * /compendio:
 *   get:
 *     summary: Obtener todas las Personas
 *     description: Retorna una lista paginada de todas las Personas registradas.
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: "Número de página (por defecto: 1)."
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *         description: "Cantidad de resultados por página (por defecto: 4)."
 *     responses:
 *       200:
 *         description: Lista de Personas con paginación.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPersonas:
 *                   type: integer
 *                   description: "Número total de Personas."
 *                 totalPages:
 *                   type: integer
 *                   description: "Número total de páginas."
 *                 currentPage:
 *                   type: integer
 *                   description: "Página actual."
 *                 personas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Persona'
 *       500:
 *         description: Error interno del servidor.
 */
compendio.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const cacheKey = `personas:page:${page}:limit:${limit}`;

    try {
        const cachedPersonas = await redisClient.get(cacheKey);
        if (cachedPersonas) {
            return res.json(JSON.parse(cachedPersonas));
        }

        const personas = await Persona.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Persona.countDocuments();
        const result = {
            totalPersonas: total,
            totalPages: Math.ceil(total / limit),
            currentPage: parseInt(page),
            personas
        };

        await redisClient.set(cacheKey, JSON.stringify(result), { EX: 30 });
        res.json(result);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

/**
 * @swagger
 * /compendio/name/{name}:
 *   get:
 *     summary: Buscar una Persona por su nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Se busca una Persona por su nombre exacto
 *     responses:
 *       200:
 *         description: A single Persona
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       404:
 *         description: Persona not found
 */
compendio.get('/name/:name', async (req, res) => {
    try {
        const persona = await Persona.findOne({ name: req.params.name });
        if (!persona) {
            return res.status(404).json({ message: 'Persona not found' });
        }
        res.json(persona);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/**
 * @swagger
 * /compendio/{id}:
 *   get:
 *     summary: Obtener una Persona por su ID
 *     description: Retorna una Persona específica de la base de datos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la Persona.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna la Persona solicitada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       404:
 *         description: No se encontró la Persona.
 *       500:
 *         description: Error interno del servidor.
 */
compendio.get('/:id', async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        if (!persona) {
            return res.status(404).json({ error: 'Persona not found' });
        }
        res.json(persona);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

/**
 * @swagger
 * /compendio/type/{arcana}:
 *   get:
 *     summary: Buscar Persona por Arcana
 *     description: Obtiene una lista de Personas filtradas por su Arcana
 *     parameters:
 *       - in: path
 *         name: arcana
 *         required: true
 *         schema:
 *           type: string
 *         description: "Arcana de la Persona a buscar."
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: "Número de página (por defecto: 1)."
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           default: 4
 *         description: "Cantidad de resultados por página (por defecto: 4)."
 *     responses:
 *       200:
 *         description: "Lista de Personas filtradas por Arcana con paginación."
 *       500:
 *         description: "Error interno del servidor."
 */
compendio.get('/type/:arcana', async (req, res) => {
    const { arcana } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;
    const skip = (page - 1) * limit;
    const cacheKey = `personas:${arcana}:page:${page}`;

    try {
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) {
            return res.json(JSON.parse(cachedData));
        }

        const personas = await Persona.find({ arcana })
            .skip(skip)
            .limit(limit);

        await redisClient.setEx(cacheKey, 600, JSON.stringify(personas));
        res.json(personas);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Método POST

/**
 * @swagger
 * /compendio:
 *   post:
 *     summary: Agregar una nueva Persona
 *     description: Crea una nueva Persona en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       200:
 *         description: Persona creada exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */
compendio.post('/', async (req, res) => {
    try {
        const { arcana, weak, stats, strengths, level, name } = req.body;

        const persona = new Persona({
            arcana, weak, stats, strengths, level, name
        });

        await persona.save();
        res.json({ success: true, persona });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Métodos PATCH y PUT

/**
 * @swagger
 * /compendio/{id}:
 *   patch:
 *     summary: Actualizar parcialmente una Persona por ID
 *     description: Permite actualizar parcialmente una Persona existente en la base de datos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la Persona a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       200:
 *         description: Persona actualizada exitosamente.
 *       404:
 *         description: Persona no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
compendio.patch('/:id', async (req, res) => {
    try {
        const updates = req.body;
        const updateFields = {};

        if (updates.stats) {
            for (const [key, value] of Object.entries(updates.stats)) {
                updateFields[`stats.${key}`] = value;
            }
        }

        for (const [key, value] of Object.entries(updates)) {
            if (key !== 'stats') {
                updateFields[key] = value;
            }
        }

        const persona = await Persona.findByIdAndUpdate(req.params.id, { $set: updateFields }, { new: true });

        if (!persona) {
            return res.status(404).json({ message: 'Persona not found' });
        }

        res.json({ success: true, persona });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/**
 * @swagger
 * /compendio/{id}:
 *   put:
 *     summary: Reemplazar una Persona por ID
 *     description: Reemplaza una Persona existente con los datos proporcionados.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la Persona a reemplazar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       200:
 *         description: Persona reemplazada exitosamente.
 *       404:
 *         description: Persona no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
compendio.put('/:id', async (req, res) => {
    try {
        const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true });

        if (!persona) {
            return res.status(404).json({ error: 'Persona not found' });
        }

        res.json(persona);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Método DELETE

/**
 * @swagger
 * /compendio/{id}:
 *   delete:
 *     summary: Eliminar una Persona por ID
 *     description: Elimina una Persona de la base de datos utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la Persona a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Persona eliminada exitosamente.
 *       404:
 *         description: Persona no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
compendio.delete('/:id', async (req, res) => {
    try {
        const persona = await Persona.findByIdAndDelete(req.params.id);
        if (!persona) {
            return res.status(404).json({ message: 'Persona not found' });
        }

        res.json({ success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = compendio;
