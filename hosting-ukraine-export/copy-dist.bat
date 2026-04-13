@echo off
setlocal
REM Kopiyuye vmist ..\dist u site-export dlia hostingu. Zapusk iz tsiiei papky.

pushd "%~dp0.."
for %%I in ("%cd%\dist") do set "SRC=%%~fI"
popd
for %%I in ("%~dp0site-export") do set "DEST=%%~fI"

if not exist "%SRC%" goto nodist
goto copyok
:nodist
echo Run npm run build in project root first (dist folder missing).
exit /b 1

:copyok
if exist "%DEST%" rmdir /s /q "%DEST%"
mkdir "%DEST%"

robocopy "%SRC%" "%DEST%" /E /NFL /NDL /NJH /NJS /nc /ns /np >nul
if errorlevel 8 (
  echo Copy failed.
  exit /b 1
)

echo Copied: %SRC% -^> %DEST%
exit /b 0
