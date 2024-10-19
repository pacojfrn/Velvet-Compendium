# Usa una imagen base de Python (slim)
FROM python:3-slim

# Exponer el puerto donde correrá la aplicación (ajusta según sea necesario)
EXPOSE 8084

# Evita que Python genere archivos .pyc en el contenedor
ENV PYTHONDONTWRITEBYTECODE=1

# Desactiva el buffer para hacer más fácil el logging en el contenedor
ENV PYTHONUNBUFFERED=1

# Copia el archivo de dependencias
COPY requirements.txt ./

# Instala las dependencias desde requirements.txt (incluye pymongo aquí)
RUN python -m pip install --no-cache-dir -r requirements.txt

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el código de la app dentro del contenedor
COPY . /app

# Crea un usuario no root con un UID específico y otorga permisos a la carpeta /app
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

# Comando por defecto para correr la app (usa Gunicorn y Uvicorn)
CMD ["gunicorn", "--bind", "0.0.0.0:8084", "-k", "uvicorn.workers.UvicornWorker", "main:app"]
