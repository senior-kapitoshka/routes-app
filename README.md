Деплой на render.com: https://routes-app.onrender.com/routes

# Локально:
Клонируйте репозиторий:
```
git clone https://github.com/your-user/routes-app.git
cd routes-app
```
Установите зависимости клиента и сервера:
```
cd client
npm install

# Сборка клиента
npm run build
# Установка зависимостей Express (сервер)
cd ../server
npm install
```
Запуск сервера
```
cd server
node index.js
```
Сервер будет доступен по адресу: http://localhost:3000
