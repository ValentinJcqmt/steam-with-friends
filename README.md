## Run app :
 - Create .env
 - Run : "docker build -t <project_name> ."
 - Run "docker run --rm -it -d -p 80:80  -v $(pwd):/var/www/html --name <project_name> <project_name>"
 - In container bash :
   - Run : "composer install | chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache"
   - Run : "php artisan key:generate"
   - Run : "npm i"
   - Run : "npm start" or "npm build"