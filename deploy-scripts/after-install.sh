#!/bin/bash

echo "Stopping old container"
docker stop roberta-frontend
docker system prune -f

