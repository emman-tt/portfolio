#Install pnpm dependencies 
FROM node:lts-alpine AS dependencer

RUN corepack enable 

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app


COPY package.json  pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./


RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    corepack enable pnpm && pnpm install --frozen-lockfile; 



#Arrange the app from dependencer
FROM node:lts-alpine AS builder

WORKDIR /app


# Copy project dependencies from dependencies stage
COPY --from=dependencer /app/node_modules ./node_modules

COPY . .

RUN  corepack enable &&  pnpm run  build



FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next && chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./

COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# 5. Switch to the built-in non-root user
USER node

USER node
EXPOSE 3000
CMD ["node", "server.js"]

