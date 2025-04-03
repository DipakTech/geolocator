# Use Node.js LTS version
FROM node:18-alpine

# Install system dependencies including FFmpeg
RUN apk add --no-cache \
    python3 \
    build-base \
    g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
