FROM node:20.10-alpine3.19

# Diretório de trabalho
WORKDIR /usr/app

# Copia somente os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install --legacy-peer-deps

# Copia o restante do projeto
COPY . .

# Compila o TypeScript
RUN npm run build

# Exposição da porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
