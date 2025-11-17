curl -s http://localhost:3000/api/users/create
docker compose up -d && docker compose logs -f
docker exec otel-observe-postgres-1 psql -U user -d otel-observe -c "\d users"
