#!/bin/bash
if [ $1 == "ca" ]; then 
  hugo server --config config-$1.toml --port 1314
elif [ $1 == "us" ]; then
  hugo server --config config-$1.toml --port 1313
else 
  echo $1 "is not a valid country."
fi
