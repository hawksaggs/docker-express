# docker-express
Basic docker setup using dockerfile and docker compose

docker compose up
docker compose up -d
docker compose --env-file .env.dev -f "docker-compose.yml" up --build -d

docker compose logs
docker compose logs -f

docker compose down