# Created 7:24pm Apr 21, 2025
# Dockerfile for NodeJS Apps
FROM node:22
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
EXPOSE 9000

CMD [ "node", "app.js" ]