from pydantic import BaseModel
from typing import List

class Estadisticas(BaseModel):
    St: int 
    Ma: int 
    En: int 
    Ag: int 
    Lu: int 

class Persona(BaseModel):
    arcana: str
    debilidades: List[str]
    estadisticas: Estadisticas
    fortalezas: List[str]
    nivel: int
    nombre: str

class CreatePerRequest(BaseModel):
    status: str
    data: Persona
    message: str = None