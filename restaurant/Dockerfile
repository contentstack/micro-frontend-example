FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
RUN npm run build

FROM nginx:1.18.0-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /home/node/app/dist /usr/share/nginx/html