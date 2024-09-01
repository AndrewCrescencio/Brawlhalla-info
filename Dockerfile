FROM node:20-alpine 

WORKDIR /app
RUN corepack enable

ARG PORT=3000

COPY .npmrc package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

COPY . .
EXPOSE 3000

ENV NODE_ENV=production API_URL=https://api.brawlhalla.com

RUN pnpm build --production

CMD ["node", ".output/server/index.mjs" ]

# TODO: add Nginx