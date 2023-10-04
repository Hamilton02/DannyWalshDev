FROM node:18-alpine
WORKDIR /DannyWalshDev/
COPY public/ /DannyWalshDev/public
COPY src/ /DannyWalshDev/src
COPY package.json /DannyWalshDev/
EXPOSE 5173

RUN npm install
CMD ["npm", "run", "dev", "--host"] - Executes npm run dev to start the server


