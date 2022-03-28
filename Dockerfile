FROM node:17 AS build
USER node
WORKDIR /usr/app

COPY package*.json .
RUN npm ci

COPY * .
RUN npm run build

FROM node:17-alpine
USER node
WORKDIR /usr/app
COPY --from=build /usr/app/.output .output

ENV NUXT_HOST 0.0.0.0
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]