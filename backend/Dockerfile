FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Run tests first
RUN npm test -- --runInBand

EXPOSE 5000

CMD ["node", "index.js"]