# Docker Instructions

```
docker build -t n2n2-relay -f Dockerfile.mainnet .

docker login -u n2n2
docker tag n2n2-relay:latest n2n2/n2n2-relay:latest  
docker push n2n2/n2n2-relay:latest 

docker-compose up
```