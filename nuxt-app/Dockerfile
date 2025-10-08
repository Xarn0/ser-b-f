# Этап сборки
FROM node:18-alpine AS build

WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем проект
COPY . .

# Собираем Nuxt
RUN npm run build

# Этап запуска (чистый контейнер без dev-зависимостей)
FROM node:18-alpine

WORKDIR /app

# Копируем только нужное из build-образа
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./

# Ставим только production зависимости
RUN npm install --omit=dev

# Экспонируем порт Nuxt
EXPOSE 3000

# Запуск
CMD ["node", ".output/server/index.mjs"]
