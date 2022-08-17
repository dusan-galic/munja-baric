FROM nginx:latest

RUN apt update \
    && apt install certbot python3-certbot-nginx -y

COPY ./default.conf /etc/nginx/conf.d/default.conf

## Set working directory to nginx asset directory
#WORKDIR /usr/share/nginx/html
#
## Remove default nginx static assets
#RUN rm -rf ./*
#
## Copy static assets from builder stage
#COPY --from=build-stage /usr/app/build .
#
## Containers run nginx with global directives and daemon off
#ENTRYPOINT ["nginx", "-g", "daemon off;"]