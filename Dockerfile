# Etapa 1: build da aplicação
FROM node:20-alpine AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos essenciais primeiro (para cache eficiente)
COPY package.json pnpm-lock.yaml* ./

# Instala pnpm globalmente
RUN npm install -g pnpm

# Instala dependências (respeitando lockfile)
RUN pnpm install --frozen-lockfile

# Copia o restante do projeto
COPY . .

# Gera o build de produção
RUN pnpm build

# ------------------------------------------------------------

# Etapa 2: imagem final e leve
FROM node:20-alpine AS runner

WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copia apenas o necessário do build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Define variável de ambiente
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Comando de inicialização
CMD ["pnpm", "start"]
