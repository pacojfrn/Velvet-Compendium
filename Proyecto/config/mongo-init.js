db = db.getSiblingDB('Compendium');

db.createCollection('Persona');

db.Persona.insertMany([{
    "arcana": "Devil",
    "debilidades": ["Hielo", "Santo"],
    "estadisticas": {
      "St": 56,
      "Ma": 67,
      "En": 52,
      "Ag": 34,
      "Lu": 47
    },
    "fortalezas": ["Cortante", "Contundente", "Fuego", "Oscuro"],
    "nivel": 81,
    "nombre": "Abaddon"
  },
  {
    "arcana": "Death",
    "debilidades": ["Santo"],
    "estadisticas": {
      "St": 38,
      "Ma": 67,
      "En": 35,
      "Ag": 52,
      "Lu": 46
    },
    "fortalezas": ["Oscuro"],
    "nivel": 73,
    "nombre": "Alice"
  },
  {
    "arcana": "Empress",
    "debilidades": ["Oscuro"],
    "estadisticas": {
      "St": 51,
      "Ma": 73,
      "En": 64,
      "Ag": 53,
      "Lu": 57
    },
    "fortalezas": ["Cortante", "Contundente", "Fuego", "Hielo", "Viento"],
    "nivel": 89,
    "nombre": "Alilat"
  },
  {
    "arcana": "Aeon",
    "debilidades": ["Cortante", "Rayo"],
    "estadisticas": {
      "St": 55,
      "Ma": 55,
      "En": 71,
      "Ag": 39,
      "Lu": 42
    },
    "fortalezas": ["Perforante", "Hielo", "Santo"],
    "nivel": 78,
    "nombre": "Ananta"
  },
  {
    "arcana": "Justice",
    "debilidades": ["Oscuro"],
    "estadisticas": {
      "St": 4,
      "Ma": 5,
      "En": 3,
      "Ag": 4,
      "Lu": 3
    },
    "fortalezas": ["Rayo", "Santo"],
    "nivel": 4,
    "nombre": "Ángel"
  },
  {
    "arcana": "Judgment",
    "debilidades": [],
    "estadisticas": {
      "St": 30,
      "Ma": 42,
      "En": 33,
      "Ag": 22,
      "Lu": 30
    },
    "fortalezas": ["Santo", "Oscuro"],
    "nivel": 46,
    "nombre": "Anubis"
  },
  {
    "arcana": "Priestess",
    "debilidades": ["Fuego"],
    "estadisticas": {
      "St": 2,
      "Ma": 4,
      "En": 2,
      "Ag": 3,
      "Lu": 2
    },
    "fortalezas": ["Hielo"],
    "nivel": 2,
    "nombre": "Apsaras"
  },
  {
    "arcana": "Chariot",
    "debilidades": ["Viento"],
    "estadisticas": {
      "St": 8,
      "Ma": 3,
      "En": 4,
      "Ag": 5,
      "Lu": 5
    },
    "fortalezas": ["Contundente", "Fuego"],
    "nivel": 6,
    "nombre": "Ara Mitama"
  },
  {
    "arcana": "Hermit",
    "debilidades": ["Contundente", "Hielo"],
    "estadisticas": {
      "St": 52,
      "Ma": 55,
      "En": 53,
      "Ag": 38,
      "Lu": 37
    },
    "fortalezas": ["Cortante", "Contundente", "Santo", "Oscuro"],
    "nivel": 73,
    "nombre": "Arahabaki"
  },
  {
    "arcana": "Justice",
    "debilidades": ["Rayo", "Oscuro"],
    "estadisticas": {
      "St": 10,
      "Ma": 9,
      "En": 9,
      "Ag": 10,
      "Lu": 8
    },
    "fortalezas": ["Cortante", "Santo"],
    "nivel": 13,
    "nombre": "Arcángel"
  },
  {
    "arcana": "Sun",
    "debilidades": ["Viento"],
    "estadisticas": {
      "St": 81,
      "Ma": 57,
      "En": 52,
      "Ag": 51,
      "Lu": 59
    },
    "fortalezas": ["Contundente", "Fuego", "Santo"],
    "nivel": 91,
    "nombre": "Asura"
  },
  {
    "arcana": "Strength",
    "debilidades": ["Hielo"],
    "estadisticas": {
      "St": 67,
      "Ma": 40,
      "En": 67,
      "Ag": 41,
      "Lu": 38
    },
    "fortalezas": ["Perforante", "Santo"],
    "nivel": 77,
    "nombre": "Atavaka"
  },
  {
    "arcana": "Fortune",
    "debilidades": ["Fuego"],
    "estadisticas": {
      "St": 26,
      "Ma": 50,
      "En": 35,
      "Ag": 39,
      "Lu": 47
    },
    "fortalezas": ["Viento", "Santo", "Oscuro"],
    "nivel": 62,
    "nombre": "Atropos"
  },
  {
    "arcana": "Hanged",
    "debilidades": ["Santo", "Oscuro"],
    "estadisticas": {
      "St": 47,
      "Ma": 57,
      "En": 55,
      "Ag": 62,
      "Lu": 32
    },
    "fortalezas": ["Cortante", "Contundente", "Perforante", "Fuego", "Viento"],
    "nivel": 78,
    "nombre": "Attis"
  },
  {
    "arcana": "Moon",
    "debilidades": ["Fuego", "Santo"],
    "estadisticas": {
      "St": 57,
      "Ma": 57,
      "En": 47,
      "Ag": 45,
      "Lu": 44
    },
    "fortalezas": ["Hielo", "Rayo", "Viento", "Oscuro"],
    "nivel": 77,
    "nombre": "Baal Zebul"
  },
  {
    "arcana": "Devil",
    "debilidades": ["Viento", "Santo"],
    "estadisticas": {
      "St": 20,
      "Ma": 25,
      "En": 22,
      "Ag": 16,
      "Lu": 19
    },
    "fortalezas": ["Fuego", "Oscuro"],
    "nivel": 30,
    "nombre": "Baphomet"
  },
  {
    "arcana": "Empreror",
    "debilidades": ["Viento"],
    "estadisticas": {
      "St": 45,
      "Ma": 57,
      "En": 46,
      "Ag": 36,
      "Lu": 33
    },
    "fortalezas": ["Rayo", "Santo"],
    "nivel": 68,
    "nombre": "Barong"
  },
  {
    "arcana": "Devil",
    "debilidades": ["Fuego", "Santo"],
    "estadisticas": {
      "St": 52,
      "Ma": 67,
      "En": 54,
      "Ag": 54,
      "Lu": 52
    },
    "fortalezas": ["Contundente", "Rayo", "Viento", "Oscuro"],
    "nivel": 86,
    "nombre": "Belcebú"
  },
  {
    "arcana": "Emperor",
    "debilidades": ["Rayo", "Santo"],
    "estadisticas": {
      "St": 36,
      "Ma": 47,
      "En": 41,
      "Ag": 30,
      "Lu": 33
    },
    "fortalezas": ["Hielo", "Rayo", "Oscuridad"],
    "nivel": 58,
    "nombre": "Belphegor"
  },
  {
    "arcana": "Hierophant",
    "debilidades": ["Rayo"],
    "estadisticas": {
      "St": 12,
      "Ma": 7,
      "En": 10,
      "Ag": 11,
      "Lu": 6
    },
    "fortalezas": ["Fuego", "Viento"],
    "nivel": 13,
    "nombre": "Berith"
  },
  {
    "arcana": "Tower",
    "debilidades": ["Hielo"],
    "estadisticas": {
      "St": 50,
      "Ma": 38,
      "En": 45,
      "Ag": 36,
      "Lu": 30
    },
    "fortalezas": ["Contundente", "Fuego", "Santo"],
    "nivel": 60,
    "nombre": "Bishamonten"
  },
  {
    "arcana": "Fool",
    "debilidades": ["Santo"],
    "estadisticas": {
      "St": 26,
      "Ma": 37,
      "En": 25,
      "Ag": 30,
      "Lu": 20
    },
    "fortalezas": ["Fuego", "Hielo", "Oscuridad"],
    "nivel": 42,
    "nombre": "Escarcha Negra"
  },
  {
    "arcana": "Temperance",
    "debilidades": ["Fuego"],
    "estadisticas": {
      "St": 50,
      "Ma": 48,
      "En": 51,
      "Ag": 42,
      "Lu": 35
    },
    "fortalezas": ["Hielo", "Rayo"],
    "nivel": 69,
    "nombre": "Byakko"
  },
  {
    "arcana": "Moon",
    "debilidades": ["Fuego"],
    "estadisticas": {
      "St": 48,
      "Ma": 41,
      "En": 31,
      "Ag": 35,
      "Lu": 32
    },
    "fortalezas": ["Cortante", "Perforante", "Oscuro"],
    "nivel": 56,
    "nombre": "Chernobog"
  },
  {
    "arcana": "Tower",
    "debilidades": ["Rayo"],
    "estadisticas": {
      "St": 73,
      "Ma": 56,
      "En": 53,
      "Ag": 55,
      "Lu": 63
    },
    "fortalezas": ["Cortante", "Perforante"],
    "nivel": 91,
    "nombre": "Chi tú"
  },
  {
    "arcana": "Chariot",
    "debilidades": ["Oscuro"],
    "estadisticas": {
      "St": 11,
      "Ma": 6,
      "En": 19,
      "Ag": 4,
      "Lu": 9
    },
    "fortalezas": ["Contundente", "Fuego"],
    "nivel": 14,
    "nombre": "Quimera"
  },
  {
    "arcana": "Fortune",
    "debilidades": ["Fuego"],
    "estadisticas": {
      "St": 20,
      "Ma": 29,
      "En": 22,
      "Ag": 24,
      "Lu": 25
    },
    "fortalezas": ["Viento"],
    "nivel": 37,
    "nombre": "Clotho"
  },
  {
    "arcana": "Tower",
    "debilidades": ["Hielo"],
    "estadisticas": {
      "St": 40,
      "Ma": 33,
      "En": 25,
      "Ag": 30,
      "Lu": 23
    },
    "fortalezas": ["Perforante", "Rayo", "Viento"],
    "nivel": 46,
    "nombre": "Cu chulainn"
  },
  {
    "arcana": "Lovers",
    "debilidades": ["Rayo"],
    "estadisticas": {
      "St": 40,
      "Ma": 59,
      "En": 40,
      "Ag": 47,
      "Lu": 49
    },
    "fortalezas": ["Fuego", "Hielo", "Santo"],
    "nivel": 72,
    "nombre": "Cibeles"
  },
  {
    "arcana": "Hierophant",
    "debilidades": ["Oscuro"],
    "estadisticas": {
      "St": 37,
      "Ma": 52,
      "En": 40,
      "Ag": 33,
      "Lu": 46
    },
    "fortalezas": ["Santo"],
    "nivel": 64,
    "nombre": "Daisoujou"
  },
  {
    "arcana": "Hermit",
    "debilidades": ["Hielo"],
    "estadisticas": {
      "St": 36,
      "Ma": 22,
      "En": 16,
      "Ag": 29,
      "Lu": 18
    },
    "fortalezas": ["Contundente", "Fuego"],
    "nivel": 38,
    "nombre": "Dakini"
  },
  {
    "arcana": "Fool",
    "debilidades": ["Cortante"],
    "estadisticas": {
      "St": 41,
      "Ma": 37,
      "En": 36,
      "Ag": 38,
      "Lu": 38
    },
    "fortalezas": [],
    "nivel": 59,
    "nombre": "Decarabia"
  }
]);
