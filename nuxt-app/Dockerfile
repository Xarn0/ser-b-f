# Build stage
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

# Runtime stage
FROM node:20
WORKDIR /app
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./
COPY --from=build /app/prisma ./prisma
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
