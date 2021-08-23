FROM nginx:stable-alpine

COPY ./dist /var/www/html/public
COPY ./reverseproxy.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
