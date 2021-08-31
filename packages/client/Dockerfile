FROM nginx:stable-alpine

COPY ./dist /var/www/html/public
COPY ./reverseproxy.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK CMD curl --fail http://localhost || exit 1  

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
