from fastapi import APIRouter
import psutil
import platform

router = APIRouter(prefix="/system", tags=["System"])

@router.get("/status")
def system_status():
    return {
        "status": "online",
        "os": platform.system(),
        "os_version": platform.version(),
        "cpu_percent": psutil.cpu_percent(interval=1),
        "memory_percent": psutil.virtual_memory().percent
    }
