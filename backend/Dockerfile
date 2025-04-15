# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

# Copy all other files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
