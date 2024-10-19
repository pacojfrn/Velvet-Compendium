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

class Personas(BaseModel):
    personas: List[Persona]

class PerResponse(BaseModel):
    status: str
    data: Personas
    message: str = None 