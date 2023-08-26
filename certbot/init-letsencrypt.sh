#!/bin/bash

set -e

domains=(yourdomain.com)
email="youremail@example.com"

for domain in "${domains[@]}"; do
  certbot certonly --standalone \
    --non-interactive \
    --agree-tos \
    --preferred-challenges http \
    --email "$email" \
    -d "$domain" \
    --http-01-port 8888 \
    --pre-hook "nginx -s stop" \
    --post-hook "nginx"
done
