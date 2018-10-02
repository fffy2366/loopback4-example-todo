docker-build :
	docker build -t lb4-example .
docker-run :
	docker run -d -p 3000:3000  --name lb4-example lb4-example:latest
docker-exec :
	docker exec -it lb4-example sh
docker-rm :
	docker rm -f lb4-example
