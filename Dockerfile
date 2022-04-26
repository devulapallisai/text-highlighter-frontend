FROM node:latest

WORKDIR /frontend

COPY package.json ./

RUN npm install --force

COPY . .

EXPOSE 3000

RUN npm run build

RUN npm install -g serve

CMD ["serve","-s","./build"]