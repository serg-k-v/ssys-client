# ssys-client
Created with CodeSandbox


sudo docker rm <NAME> --force


sudo docker run -itd --rm -v ${PWD}:/ssys-client -v /ssys-client/node_modules -p 5000:3000 -e CHOKIDAR_USEPOLLING=true ssys-client:dev