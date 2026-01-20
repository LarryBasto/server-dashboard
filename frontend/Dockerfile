# Dockerfile para frontend React + Vite
FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_KEY=$VITE_API_KEY

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
