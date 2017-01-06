@echo off
title Build PLLC

IF [%1] == [ca] ( goto ca )
IF [%1] == [us] ( goto us )
  
echo %1 is not a valid country.
pause
goto eof

:ca
IF EXIST public-%1 (
  echo Clearing public-%1
  echo ==================
  rmdir /S /Q public-%1
)
echo Building Canada in public-%1
hugo --config config-%1.toml --destination public-%1
goto eof

:us
IF EXIST public-%1 (
  echo Clearing public-%1
  rmdir /S /Q public-%1
)
echo Building US in public-%1
hugo --config config-%1.toml --destination public-%1
goto eof

:eof
echo ========================
echo Build complete, exiting.
pause
exit /B
