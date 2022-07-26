FROM caddy

# RUN rm -rf /usr/share/nginx/html/*
# RUN mkdir -p /usr/share/nginx/logs
# COPY ./deployment/nginx/default.config /etc/nginx/nginx.conf

COPY ./deployment/caddy/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443

CMD ["caddy", "run"]