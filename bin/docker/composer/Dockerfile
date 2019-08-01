FROM php:7.3-alpine

# BUILD: docker build -t symfony/composer .
# CREATE_PROJECT: composer create-project symfony/website-skeleton .

RUN apk update \
    && apk add composer\
    && composer self-update

RUN adduser -D -h /tmp/ -H user

USER user
WORKDIR /app
CMD ["sh"]