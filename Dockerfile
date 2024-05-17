# Create .env by args
FROM alpine AS env_by_args
ARG GENERATE_SOURCEMAP
ARG VITE_API_URL
WORKDIR /traffic-accident-frontend
RUN echo "GENERATE_SOURCEMAP=$GENERATE_SOURCEMAP" > .env
RUN echo "VITE_API_URL=$VITE_API_URL" >> .env

# Select .env from project or craeted by args
FROM alpine as env
WORKDIR /traffic-accident-frontend
COPY --from=env_by_args /traffic-accident-frontend/.env .
COPY *.env .env

# Prepare build image
FROM alpine AS builder
WORKDIR /traffic-accident-frontend
COPY . .
RUN apk add --update npm
RUN npm install -g pnpm
COPY --from=env /traffic-accident-frontend/.env .env
RUN pnpm install
RUN pnpm run build

# Build production image
FROM nginx:alpine AS runner
EXPOSE 80
COPY /public/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /traffic-accident-frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]