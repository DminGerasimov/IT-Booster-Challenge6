# syntax=docker/dockerfile:1

# Stage 1: Dependencies
FROM node:alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies based on the lock file
COPY package*.json yarn.lock* pnpm-lock.yaml* ./
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; fi

# Stage 2: Builder
FROM node:alpine AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN ls -la /app/app

# Next.js collects completely anonymous telemetry data. Opt out by setting the NEXT_TELEMETRY_DISABLED environment variable to 1.
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js app in 'standalone' mode
# The "output: 'standalone'" mode in next.config.js is required for this to work efficiently
RUN if [ -f yarn.lock ]; then yarn run build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    else echo "Lockfile not found." && exit 1; fi

# Stage 3: Production Image (Runner)
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Next.js standalone feature copies only necessary files and dependencies
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/app/public ./public

# Expose port 3000 and start the application
EXPOSE 3000
CMD ["node", "server.js"]
