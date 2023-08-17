#!/bin/bash

echo "Running new container"
DOCKER_IMAGE=calebackom/roberta-frontend
docker run -d -p 3000:3000 --name roberta-frontend $DOCKER_IMAGE
