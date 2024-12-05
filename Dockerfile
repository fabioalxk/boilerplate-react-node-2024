FROM node:20.10-alpine3.19
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build # Adicione essa linha para compilar o TypeScript
EXPOSE 3000
CMD ["npm", "run", "start"]
