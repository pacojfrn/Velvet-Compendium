from app.Dtos import PerResponse
from app.Models.PersonaModel import PersonaModel 

def persona_to_response(persona: PersonaModel) -> PerResponse:
    return PerResponse(
        id=str(persona.id), 
        arcana=persona.arcana,
        debilidades=persona.debilidades,
        estadisticas=persona.estadisticas,
        fortalezas=persona.fortalezas,
        nivel=persona.nivel,
        nombre=persona.nombre
    )

def personas_to_response(personas: list[PersonaModel]) -> list[PerResponse.Personas]:
    return [persona_to_response(persona) for persona in personas]
