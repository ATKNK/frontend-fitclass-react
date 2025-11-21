FROM node:20-alpine AS builder

WORKDIR /app

COPY frontend-fitclass/package*.json ./

RUN npm install

COPY frontend-fitclass .

EXPOSE 5173

CMD [ "npm", "run", "dev" , "--", "--host=0.0.0.0"]
