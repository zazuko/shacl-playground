# Create builder image
FROM docker.io/library/node:16-alpine AS builder
WORKDIR /build

# Install dependencies
COPY package.json yarn.lock ./
COPY packages/app/package.json ./packages/app/
RUN yarn --frozen-lockfile

# Copy remaining required files and create production build
COPY packages ./packages/
COPY LICENSE ./
COPY README.md ./
RUN yarn --cwd packages/app run build

# Copy production build into an nginx image
FROM docker.io/library/nginx:1.21-alpine
COPY --from=builder /build/packages/app/dist /usr/share/nginx/html
