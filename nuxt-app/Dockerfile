# Dockerfile для Nuxt 3
FROM node:20.14.0

# Рабочая директория
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальное
COPY . .

# Открываем порт
EXPOSE 3000

# Команда по умолчанию
CMD ["npm", "run", "dev"]
