FROM node:8.4
WORKDIR /app
# Copy the current directory contents into the container at /app
ADD . /app
RUN npm install
CMD npm start
EXPOSE 3000
