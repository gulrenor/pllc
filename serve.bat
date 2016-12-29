@echo off
start /b compass watch
hugo server --config config-%1.toml --contentDir content-%1
