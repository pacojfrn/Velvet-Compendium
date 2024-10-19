from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List
from fastapi.responses import JSONResponse
from app.Dtos import CreatePerRequest, PerResponse, UpdatePerRequest
from app.Repository.PerRepository import PerRepository
from motor.motor_asyncio import AsyncIOMotorClient
from starlette import status
from app.config.redis_cache import get_redis_cache 

mongo_client = AsyncIOMotorClient("mongodb://localhost:27019")
repository = PerRepository(mongo_client)

router = APIRouter()

@router.get("/{id}", response_model=PerResponse.Persona)
async def get_Persona_by_id(id: str, redis_cache = Depends(get_redis_cache)):
    persona_cache = await redis_cache.get_cache(f"persona:{id}")
    if persona_cache:
        return persona_cache

    persona = await repository.get_by_id_async(id)
    
    if persona is None:
        raise HTTPException(status_code=404, detail="Persona no encontrada")
    
    await redis_cache.set_cache(f"persona:{id}", persona.dict(), expire_seconds=300)

    return persona

@router.get("/", response_model=List[PerResponse.Personas])
async def get_Persona_by_name(
    name: str = Query(None),
    page_index: int = Query(1),
    page_size: int = Query(10),
    order_by: str = Query("name"),
    redis_cache = Depends(get_redis_cache)
):
    cache_key = f"persona:name:{name}:page:{page_index}:size:{page_size}:order:{order_by}"
    
    personas_cache = await redis_cache.get_cache(cache_key)
    if personas_cache:
        return personas_cache

    Pers = await repository.get_by_name_async(name, page_index, page_size, order_by)
    
    await redis_cache.set_cache(cache_key, [per.dict() for per in Pers], expire_seconds=300)

    return Pers if Pers else []

@router.post("/", response_model=CreatePerRequest.Persona, status_code=status.HTTP_201_CREATED)
async def create_Persona(request: CreatePerRequest.CreatePerRequest, redis_cache = Depends(get_redis_cache)):
    existing_per = await repository.get_by_name_spec_async(request.name)
    
    if existing_per:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Persona ya existe")
    
    new_persona = await repository.create_per_async(
        name=request.name,
        debilidades=request.debilidades,
        estadisticas=request.estadisticas,
        fortalezas=request.fortalezas
    )
    
    await redis_cache.redis.flushall()  

    return JSONResponse(content=new_persona.dict(), status_code=status.HTTP_201_CREATED)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_Persona(id: str, redis_cache = Depends(get_redis_cache)):
    persona = await repository.get_by_id_async(id)
    
    if persona is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Persona no encontrada")
    
    await repository.delete_by_id_async(id)
    
    await redis_cache.redis.delete(f"persona:{id}")
    await redis_cache.redis.flushall()  

@router.put("/{id}")
async def update_Persona(id: str, Per_request: UpdatePerRequest.UpdatePerRequest, redis_cache = Depends(get_redis_cache)):
    persona = await repository.get_by_id_async(id)
    
    if persona is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Persona no encontrada")
    
    existing_per = await repository.get_by_name_spec_async(Per_request.name)
    if existing_per:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Persona ya existe")
    
    await repository.update_per_async(
        id=id,
        name=Per_request.name,
        debilidades=Per_request.debilidades,
        estadisticas=Per_request.estadisticas,
        fortalezas=Per_request.fortalezas
    )
    
    await redis_cache.redis.delete(f"persona:{id}")
    await redis_cache.redis.flushall() 

    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)
