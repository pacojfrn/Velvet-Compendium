# Velvet Compendium

Velvet Compendium es una API RESTful que actúa como un compendio de Personas de la saga de videojuegos *Persona*. Esta API permite obtener, crear, modificar y eliminar personas del compendio, sirviendo como una referencia para los aficionados de la saga. El proyecto está diseñado para ejecutarse en un contenedor Docker utilizando Docker Compose, y expone su documentación interactiva a través de Swagger.

## Requisitos

- **Docker**: Asegúrate de tener [Docker](https://www.docker.com/) instalado en tu sistema.
- **Docker Compose**: [Docker Compose](https://docs.docker.com/compose/install/) también es necesario para orquestar los contenedores de la aplicación y la base de datos.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/pacojfrn/Velvet-Compendium.git
   cd velvet-compendium

2. **Configurar y construir los contenedores**
   para levantar la aplicación y la base de datos MongoDB, utiliza Docker Compose:

   ```bash
   docker-compose up --build
   ```
   Esto descargará todas las dependencias, configurará la base de datos y levantará la API en el puerto 4000
   
## Endpoints de la API

Los siguientes métodos están disponibles para interactuar con el compendio de personas a través de la API. Estos son accesibles desde `/compendio` y otros puntos finales relacionados.

### 1. **Obtener el listado de personas** (GET `/compendio`)

- **Descripción**: Devuelve el listado completo de personas disponibles en el compendio.
- **Respuesta exitosa**:
  - Código: `200 OK`
  - Ejemplo de respuesta:
    ```json
    {
       "totalPersonas":32,
       "totalPages": 4,
       "currentPage": 1,
       "personas":[
         {
           "_id": "6716ec6651de59400f2924c4",
      "arcana": "Priestess",
      "weak": [
        "Fire"
         ],
      "stats": [
        {
          "_id": "6716f06e528781b84bf01467",
          "St": 2,
          "Ma": 4,
          "En": 2,
          "Ag": 3,
          "Lu": 2
        }
      ],
      "strength": [
        "Ice"
         ],
      "level": 2,
      "name": "Apsaras"
    },
    {
      "_id": "6716ec6651de59400f2924c5",
      "arcana": "Death",
      "weak": [
        "Light"
      ],
      "stats": [
        {
          "_id": "6716f06e528781b84bf01468",
          "St": 38,
          "Ma": 67,
          "En": 35,
          "Ag": 52,
          "Lu": 46
        }
      ],
      "strength": [
        "Darkness"
      ],
      "level": 73,
      "name": "Alice"
    }]
    ```

### 2. **Obtener una persona específica** (GET `/compendio/{id}`)

- **Descripción**: Obtiene la información detallada de una persona por su `id`.
- **Parámetros**:
  - `id`: ID de la persona que se desea obtener.
- **Respuesta exitosa**:
  - Código: `200 OK`
  - Ejemplo de respuesta:
    ```json
    {
      "_id": "6716ec6651de59400f2924c4",
      "arcana": "Priestess",
      "weak": [
        "Fire"
      ],
      "stats": [
        {
          "_id": "6716f06e528781b84bf01467",
          "St": 2,
          "Ma": 4,
          "En": 2,
          "Ag": 3,
          "Lu": 2
        }
      ],
      "strength": [
        "Ice"
      ],
      "level": 2,
      "name": "Apsaras"
    }
    ```

### 3. **Obtener una persona por nombre** (GET `/compendio/name/{name}`)

- **Descripción**: Obtiene la información detallada de una persona por su `name`.
- **Parámetros**:
  - `name`: Nombre de la persona que se desea obtener.
- **Respuesta exitosa**:
  - Código: `200 OK`
  - Ejemplo de respuesta:
    ```json
    {
      "_id": "6716ec6651de59400f2924c4",
      "arcana": "Priestess",
      "weak": [
        "Fire"
      ],
      "stats": [
        {
          "_id": "6716f06e528781b84bf01467",
          "St": 2,
          "Ma": 4,
          "En": 2,
          "Ag": 3,
          "Lu": 2
        }
      ],
      "strength": [
        "Ice"
      ],
      "level": 2,
      "name": "Apsaras"
    }
    ```

### 4. **Obtener una persona por arcana** (GET `/compendio/type/{arcana}`)

- **Descripción**: Obtiene la información detallada de una persona por su `arcana`.
- **Parámetros**:
  - `arcana`: Arcana de la persona que se desea obtener.
- **Respuesta exitosa**:
  - Código: `200 OK`
  - Ejemplo de respuesta:
    ```json
    {
      "_id": "6716ec6651de59400f2924c4",
      "arcana": "Priestess",
      "weak": [
        "Fire"
      ],
      "stats": [
        {
          "_id": "6716f06e528781b84bf01467",
          "St": 2,
          "Ma": 4,
          "En": 2,
          "Ag": 3,
          "Lu": 2
        }
      ],
      "strength": [
        "Ice"
      ],
      "level": 2,
      "name": "Apsaras"
    }
    ```

### 5. **Agregar una nueva persona** (POST `/compendio`)

- **Descripción**: Permite agregar una nueva persona al compendio.
- **Cuerpo de la solicitud**:
  ```json
  {
  "arcana": "string",
  "weak": [
    "string"
  ],
  "stats": {
    "St": 0,
    "Ma": 0,
    "En": 0,
    "Ag": 0,
    "Lu": 0
  },
  "strengths": [
    "string"
  ],
  "level": 0,
  "name": "string"
   }
   ```
- **Respuesta exitosa**:
   - Código: `200 OK`
   - Ejemplo de respuesta:
     ```json
     {
        "success": true,
        "persona": {
          "arcana": "string",
          "weak": [
            "string"
          ],
          "stats": [
            {
              "St": 0,
              "Ma": 0,
              "En": 0,
              "Ag": 0,
              "Lu": 0,
              "_id": "6716f6d5cfdf35a6508b1aba"
            }
          ],
          "strength": [],
          "level": 0,
          "name": "string",
          "_id": "6716f6d5cfdf35a6508b1ab9",
          "__v": 0
        }
      }
     ```
### 6. **Actualizar una persona** (PUT `/compendio/{id}`)
- **Descripción**: Actualiza los detalles de una persona existente.
- **Parametros**:
   - `id`: ID de la persona a actualizar
- **Cuerpo de la solicitud**:
  ```json
     {
     "arcana": "string",
     "weak": [
       "string"
     ],
     "stats": {
       "St": 0,
       "Ma": 0,
       "En": 0,
       "Ag": 0,
       "Lu": 0
     },
     "strengths": [
       "string"
     ],
     "level": 0,
     "name": "string"
      }
  ```
- **Respuesta exitosa**:
   - Codigo:`200 OK`
   - Ejemplo de respuesta:
  ```json
  {
     "_id": "6716f6d5cfdf35a6508b1ab9",
     "arcana": "string",
     "weak": [
       "string"
     ],
     "stats": [
       {
         "St": 0,
         "Ma": 0,
         "En": 0,
         "Ag": 0,
         "Lu": 0,
         "_id": "6716f821cfdf35a6508b1abc"
       }
     ],
     "strength": [],
     "level": 0,
     "name": "string",
     "__v": 0
   }
  ```
### 7. **Actualizar parcialmente una persona por ID** (PATCH `/compendio/{id}`)
- **Descripción**: Actualiza parcialmente los detalles de una persona existente.
- **Parametros**:
   - `id`: ID de la persona a actualizar
- **Cuerpo de la solicitud**:
  ```json
     {
     "arcana": "string",
     "weak": [
       "string"
     ],
     "stats": {
       "St": 0,
       "Ma": 0,
       "En": 0,
       "Ag": 0,
       "Lu": 0
     },
     "strengths": [
       "string"
     ],
     "level": 0,
     "name": "string"
      }
  ```
- **Respuesta exitosa**:
   - Codigo:`200 OK`
   - Ejemplo de respuesta:
  ```json
  {
     "_id": "6716f6d5cfdf35a6508b1ab9",
     "arcana": "string",
     "weak": [
       "string"
     ],
     "stats": [
       {
         "St": 0,
         "Ma": 0,
         "En": 0,
         "Ag": 0,
         "Lu": 0,
         "_id": "6716f821cfdf35a6508b1abc"
       }
     ],
     "strength": [],
     "level": 0,
     "name": "string",
     "__v": 0
   }
  ```

### 8. **Eliminar una persona por ID** (PATCH `/compendio/{id}`)
- **Descripción**: Elimina una persona del compendio.
- **Parametros**:
   - `id`: ID de la persona a eliminar.

- **Respuesta exitosa**:
   - Codigo:`200 OK`
   - Ejemplo de respuesta:
  ```json
  {
  "success": true
  }
  ```

## Estructura del Proyecto

La estructura de carpetas es la siguiente:

```
Proyecto/
├── config/
│   ├── database.js      # Configuración de la base de datos MongoDB
│   ├── swagger.js       # Configuración de Swagger
├── middleware/
│   ├── index.js         # Middleware principal
│   ├── notFound.js      # Middleware para rutas no encontradas
├── routes/
│   ├── compendio.js     # Rutas para el compendio de personas
├── schema/
│   ├── persona.js       # Esquema de la persona en MongoDB
├── .dockerignore        # Archivos que Docker debe ignorar
├── .gitignore           # Archivos que Git debe ignorar
├── app.js               # Archivo principal de la aplicación
├── docker-compose.yml   # Configuración de Docker Compose
├── Dockerfile           # Configuración del contenedor Docker
├── mongo-init.js        # Script de inicialización de MongoDB
├── Personas.json        # Archivo JSON con datos de personas
├── package.json         # Dependencias y scripts de npm
├── package-lock.json    # Archivo de bloqueo de dependencias
```

## Autor

Este proyecto fue desarrollado por Jorge Francisco Acosta Alcalá. Si tienes preguntas o sugerencias, no dudes en contactarme a través de GitHub.
