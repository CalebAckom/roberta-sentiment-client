#!/bin/bash

echo "Stopping old container"
DOCKER_IMAGE=calebackom/roberta-frontend
docker ps -q --filter ancestor=$DOCKER_IMAGE | xargs -r docker stop
docker stop frontend
