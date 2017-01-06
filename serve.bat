@echo off
title Serve PLLC

IF [%1] == [ca] ( goto ca )
IF [%1] == [us] ( goto us )
  
echo %1 is not a valid country.
pause
goto eof

:ca
set port=1314
goto serve

:us
set port=1313
goto serve

:serve
echo Serving %1 on port %port%
hugo server --config config-%1.toml --port %port%
goto eof

:eof
exit /B
