# frontend/Dockerfile

FROM node:20-alpine

WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos TODAS las dependencias, incluyendo devDependencies
RUN npm install

# Copiamos el resto del frontend
COPY . .

# Build de producción
RUN npm run build

# Servir con un servidor simple
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
