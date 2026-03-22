# syntax=docker/dockerfile:1

# Stage 1: Dependencies
FROM node:alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# Install dependencies based on the lock file
COPY package*.json yarn.lock* pnpm-lock.yaml* ./
RUN if [ -f package-lock.json ]; then npm ci; \
    else echo "Lockfile not found." && exit 1; fi

# Stage 2: Builder
FROM node:alpine AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

# While there's technically no difference between development and production in Node.js and NestJS.
# , it's a good practice to set the NODE_ENV environment variable to production when running your application in a production environment
ENV NODE_ENV=production

# Build the Nest.js app
RUN if [ -f package-lock.json ]; then npm run build; \
    else echo "Lockfile not found." && exit 1; fi

# Stage 3: Production Image (Runner)
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000 and start the application
EXPOSE 3000
CMD ["node", "dist/main.js"]
