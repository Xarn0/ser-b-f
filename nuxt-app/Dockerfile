# Этап сборки
FROM node:18 AS build

WORKDIR /app

# Копируем только package.json и package-lock.json
COPY package*.json ./

# Ставим зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Собираем Nuxt
RUN npm run build

# Этап запуска
FROM node:18

WORKDIR /app

# Копируем собранный проект
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./

# Устанавливаем только production зависимости
RUN npm install --omit=dev

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
