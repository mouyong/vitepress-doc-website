#!/usr/bin/env bash

set -ex

cp -r src/ docs/
rm -rf src/*
cp docs/userConfig.ts src/