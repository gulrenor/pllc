#!/bin/bash
if [ $1 == "ca" ]; then 
  p=1314 
else 
  p=1313 
fi
hugo server --config config-$1.toml --port $p
