# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine
# Step 2: Set the working directory
WORKDIR /app
# Step 3: Copy only necessary files for dependencies
COPY package.json package-lock.json ./
# Step 4: Install dependencies
RUN npm install --legacy-peer-deps
# Step 5: Copy the rest of the application files
COPY . .
# Step 6: Build the Vite app
RUN npm run build
# Step 7: Expose the port that the app will run on
EXPOSE 3001
# Step 8: Define the command to start the Vite app
CMD ["npm", "start"]