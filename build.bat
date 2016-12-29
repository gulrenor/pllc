@echo off
hugo --config config-%1.toml --contentDir content-%1 --destination public-%1
