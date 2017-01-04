#!/bin/bash
rm -r public-$1/*
hugo --config config-$1.toml --destination public-$1
