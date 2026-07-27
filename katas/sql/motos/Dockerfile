# Descarga e instala la imagen
FROM php:8.2.32-apache
# Instalar conector para MySql
RUN docker-php-ext-install pdo pdo_mysql
# Activar módulo de rutas de apache
RUN a2enmod rewrite