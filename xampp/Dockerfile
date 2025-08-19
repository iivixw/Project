FROM php:8.2-apache

# เปิด mod_rewrite ถ้าจำเป็น
RUN a2enmod rewrite

# ติดตั้ง extension ที่มักใช้กับ MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# ตั้งค่า DocumentRoot เป็น /var/www/html (ค่าเริ่ม)
WORKDIR /var/www/html

# คัดลอกโค้ดเข้า image (ใน compose เรา mount โฟลเดอร์อยู่แล้ว บรรทัดนี้ optional)
# COPY . /var/www/html

# กำหนดสิทธิ์พื้นฐาน
RUN chown -R www-data:www-data /var/www/html
