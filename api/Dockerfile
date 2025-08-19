FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production || npm i
COPY . .
EXPOSE 5000
CMD ["node","server.js"]
