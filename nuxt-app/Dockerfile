FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Генерируем Prisma клиент для Node
RUN npx prisma generate

# Собираем Nuxt
RUN npm run build

# Runtime образ
FROM node:20

WORKDIR /app
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./
COPY --from=build /app/prisma ./prisma

RUN npm install --omit=dev

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
