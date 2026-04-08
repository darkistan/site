@echo off
setlocal

cd /d e:\Projects\site

if not exist "logs" mkdir "logs"

echo [%date% %time%] Building...>> "logs\\web-server.log"
call npm run build >> "logs\\web-server.log" 2>&1
if errorlevel 1 (
  echo [%date% %time%] Build failed.>> "logs\\web-server.log"
  exit /b 1
)

echo [%date% %time%] Starting preview server on 127.0.0.1:4173...>> "logs\\web-server.log"
call npm run preview -- --host 127.0.0.1 --port 4173 >> "logs\\web-server.log" 2>&1

endlocal
