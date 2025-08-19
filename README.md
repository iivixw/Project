วิธีทดสอบบนเครื่องใหม่ (หรือหลัง clone)
# 1) โคลน
git clone https://github.com/iivixw/Project.git
cd Project

# 2) (สำคัญ) สร้างไฟล์ .env สำหรับ API ถ้ายังไม่มีใน repo
#   *ไฟล์นี้ปกติเราไม่ commit ไว้*
type NUL > api\.env
echo PORT=5000>> api\.env
echo DB_HOST=mysql>> api\.env
echo DB_PORT=3306>> api\.env
echo DB_NAME=appdb>> api\.env
echo DB_USER=appuser>> api\.env
echo DB_PASS=apppass>> api\.env

# 3) รัน docker
docker compose up -d --build

# 4) ดูสถานะ/โล๊ก
docker compose ps
docker compose logs -f
