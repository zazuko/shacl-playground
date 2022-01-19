# Create builder image
FROM docker.io/library/node:16-alpine AS builder
WORKDIR /build

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Copy remaining required files and create production build
COPY src ./src/
COPY webpack.config.js ./
COPY CHANGELOG.md ./
COPY LICENSE ./
COPY README.md ./
RUN yarn run build

# Copy production build into an nginx image
FROM docker.io/library/nginx:1.21-alpine
COPY --from=builder /build/dist /usr/share/nginx/html
