Source Code for my Dev site.

 "dependencies": {
    "@material-ui/core": "^3.9.3",
    "chart.js": "^2.8.0",
    "moment": "^2.24.0",
    "react": "^16.8.6",
    "react-chartjs-2": "^2.7.6",
    "react-dom": "^16.8.6"
  }
  
  Docker -- info--
  
  Docker -- 4 Beginners
 
https://docker-curriculum.com/


1. install docker


docker ps
docker images  -> list of docker images.

You can use the docker images command to see a list of all images on your system.
The docker ps command shows you all containers that are currently running.

docker ps -a

$ docker run busybox -> run docker image named busybody on your system.

Running the run command with the -it flags attaches us to an interactive tty in the container.

exit running container by typing exit and enter. OR ctrd+d 

images are like binaries, container is used to run/execute that image, saves local data in the container, and docker removes container data, when container is closed.

docker container prune - delete all stopped containers

also- docker rmi busybox  -> will remove image

docker run --rm prakhar1989/static-site   -> --rm flag automatically removes the container when it exits
Hit Ctrl+C to stop the container.



docker run -d -P --name static-site prakhar1989/static-site
In the above command, -d will detach our terminal, -P will publish all exposed ports to random ports and finally --name corresponds to a name we want to give. Now we can see the ports by running the docker port [CONTAINER] command


docker stop static

docker build -t image-name .
docker run image-name

docker images
docker rmi imagenameorImageID

docker container prune
docker ps -a


docker run -p 4000:8080 myapp





redis,mongodb , mysql


JS, python, clojure
express , node js


docker , aws


Rust is the most loved programming language among our respondents, followed close behind by Python, the fastest-growing major language today.

React.js and Vue.js are both the most loved and most wanted web frameworks by developers, 


Globally, respondents who use Clojure, F#, Elixir, and Rust earn the highest salaries, with median salaries above $70,000 USD. There are regional variations in which languages are associated with the highest pay. Scala developers in the US are among the highest paid, while Clojure and Rust developers earn the most in India.


engineering manager
DevOps , site reliability


