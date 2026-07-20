FROM nginx:alpine
COPY dist/laboratorio-pwa/browser /usr/share/nginx/html
EXPOSE 8081
RUN sed -i 's/listen       80;/listen       8081;/g' /etc/nginx/conf.d/default.conf