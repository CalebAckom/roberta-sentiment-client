# Use an official Node.js runtime as the base image
FROM node:16-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project for production
RUN npm run build

# Building for production
# Use nginx official image
FROM  nginx:stable-alpine-slim AS production

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
