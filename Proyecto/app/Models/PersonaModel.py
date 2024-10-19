from pydantic import BaseModel, Field
from bson import ObjectId
from typing import List, Dict, Any

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid objectid')
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, schema, _field):
        schema.update(type='string')
        return schema

class PersonaModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias='_id')
    arcana: str
    debilidades: List[str]
    estadisticas: Dict[str, int]
    fortalezas: List[str]
    nivel: int
    nombre: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
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
            }
        }
