############################################################
# dockerfile to build iportal container images
# Based on nginx:latest images
############################################################
# Set the base image nginx:latest
FROM nginx:1.11.0-alpine
RUN mkdir -p /webroot

COPY start.sh     /webroot
RUN chmod +rx  /webroot/start.sh

COPY Angular-cli-starter /webroot/Angular-cli-starter
COPY nginx.conf   /etc/nginx/nginx.conf

# Expose the default port
EXPOSE 8324
ENTRYPOINT /webroot/start.sh
