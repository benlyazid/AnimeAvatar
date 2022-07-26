sudo docker-compose down
# sudo docker volume rm animeavatar_caddy_config
# sudo docker volume rm animeavatar_caddy_data
sudo docker volume rm animeavatar_static-content
git pull
sudo docker-compose up --build -d