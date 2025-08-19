# ใช้ PHP 8.1 + Apache
FROM php:8.1-apache

# ติดตั้ง extension พื้นฐานที่ใช้บ่อย (mysqli, pdo_mysql)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# เปิดใช้ mod_rewrite ของ Apache (เผื่อใช้ .htaccess)
RUN a2enmod rewrite

# โฟลเดอร์ทำงานหลัก
WORKDIR /var/www/html

# (ทางเลือก) copy php.ini ถ้ามีไฟล์ปรับแต่ง
# COPY ./php.ini /usr/local/etc/php/php.ini
