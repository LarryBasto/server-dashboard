from fastapi import FastAPI
from app.routes.system import router as system_router

app = FastAPI(
    title="Server Dashboard API",
    description="API para monitoreo básico del servidor",
    version="1.0.0"
)

app.include_router(system_router)

@app.get("/")
def root():
    return {
        "message": "Server Dashboard API activa"
    }
