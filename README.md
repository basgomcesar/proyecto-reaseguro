📦 Proyecto Reaseguro - Backend y Frontend
Este proyecto contiene una aplicación backend desarrollada con NestJS y un frontend con Vanilla JS, ambos preparados para ejecutarse con Docker y Docker Compose.

🚀 Instrucciones para ejecutar el proyecto
1. Clona el repositorio
bash
Copy
Edit
git clone https://github.com/basgomcesar/proyecto-reaseguro.git
cd proyecto-reaseguro
2. Crea el archivo .env en la raíz del proyecto
Antes de levantar los contenedores con Docker Compose, necesitas crear un archivo .env con las siguientes variables de entorno (utilizadas por el backend):

env
Copy
Edit
DB_HOST='XXX'
DB_PORT=XXX
DB_USERNAME=XXX
DB_PASSWORD=XXX
DB_NAME=XXX


3. Ejecuta Docker Compose
Este comando construirá y levantará tanto el backend como el frontend:

bash
Copy
Edit
docker-compose up --build
4. Accede a la aplicación
🛠 Backend (API NestJS): http://localhost:3000

🌐 Frontend (Vanilla JS): http://localhost