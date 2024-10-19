from pydantic import BaseModel
from typing import List, Dict

class Estadisticas(BaseModel):
    St: int 
    Ma: int 
    En: int 
    Ag: int 
    Lu: int 

class UpdatePerRequest(BaseModel):
    id: str
    arcana: str
    debilidades: List[str]
    estadisticas: Estadisticas
    fortalezas: List[str]
    nivel: int
    nombre: str