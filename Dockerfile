# 1. Use an official Node.js runtime as a parent image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# 4. Install the application's dependencies
RUN npm install

# 5. Copy the rest of the application's code to the working directory
COPY . .

# 6. Expose the port on which the app will run (optional, based on your app)
EXPOSE 3000

# 7. Define the command to start the Node.js app
CMD [ "npm", "start" ]