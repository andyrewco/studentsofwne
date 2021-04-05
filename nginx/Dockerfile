FROM nginx

COPY default.conf /etc/nginx/conf.d/
COPY /etc/letsencrypt/live /etc/letsencrypt/live

CMD ["nginx", "-g", "daemon off;"]
