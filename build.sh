#!/bin/bash
if [ $1 == "us" ] || [ $1 == "ca" ]; then
  if [ ! -d "public-$1" ]; then
    mkdir public-$1
  fi
  echo "Clearing" public-$1
  echo "==================="
  rm -r public-$1/*
  hugo --config config-$1.toml --destination public-$1
  echo "========================"
  echo "Build complete, exiting."
else 
  echo $1 "is not a valid country."
fi
