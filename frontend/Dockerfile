# Etapa 1: Build
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Construye la app para producción
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiamos la build al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
