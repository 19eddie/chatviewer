FROM postgres:16-alpine

RUN apk add --no-cache openssl

COPY docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/*.sh
