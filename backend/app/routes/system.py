import psutil
import platform
import time
from fastapi import APIRouter

router = APIRouter()

@router.get("/system")
def system_status():
    return {
        "os": platform.system(),
        "os_version": platform.version(),
        "cpu_percent": psutil.cpu_percent(interval=1),
        "ram_percent": psutil.virtual_memory().percent,
        "disk_percent": psutil.disk_usage("/").percent,
        "uptime_seconds": int(time.time() - psutil.boot_time())
    }
