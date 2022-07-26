sudo docker-compose down
# sudo docker volume rm ocp_booking_caddy_config
# sudo docker volume rm ocp_booking_caddy_data
sudo docker volume rm ocp_booking_static-content
git pull
sudo docker-compose up --build -d