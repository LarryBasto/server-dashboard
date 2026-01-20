# frontend/Dockerfile
FROM node:20-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Build del frontend
RUN npm run build

# Servir la app con un servidor estático
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]

# Exponer puerto 3000
EXPOSE 3000
