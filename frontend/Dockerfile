# Dockerfile para frontend React + Vite
FROM node:20-slim

WORKDIR /app

# Copiamos package.json e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del frontend
COPY . .

# Variables de entorno (React solo toma VITE_*)
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_KEY=$VITE_API_KEY

# Exponemos puerto 3000 para acceder desde fuera del contenedor
EXPOSE 3000

# Levantamos Vite en host 0.0.0.0 para que sea accesible desde el servidor
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
