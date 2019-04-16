FROM node:latest

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install


# Build the app
RUN npm run build

# Expose API port to the outside
EXPOSE 8080

# Launch application
CMD ["npm","start"]
#RUN npm run serve

