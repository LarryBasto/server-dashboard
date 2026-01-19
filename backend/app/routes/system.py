from fastapi import APIRouter, Depends
from app.core.security import verify_api_key
import psutil
import platform
import time

router = APIRouter(
    dependencies=[Depends(verify_api_key)]
)

BOOT_TIME = psutil.boot_time()

@router.get("/system")
def system_info():
    return {
        "os": platform.system(),
        "os_version": platform.version(),
        "cpu_percent": psutil.cpu_percent(interval=1),
        "ram_percent": psutil.virtual_memory().percent,
        "disk_percent": psutil.disk_usage("/").percent,
        "uptime_seconds": int(time.time() - BOOT_TIME),
    }
