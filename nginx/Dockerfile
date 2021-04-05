FROM nginx

COPY default.conf /etc/nginx/conf.d/
RUN mkdir /etc/letsencrypt
COPY /etc/letsencrypt/live /etc/letsencrypt

CMD ["nginx", "-g", "daemon off;"]
