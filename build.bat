@echo off
hugo --config config-%1.toml --destination public-%1
