FROM node:16

# Set the working directory
WORKDIR /app

COPY . .
# Copy package.json and package-lock.json into the container
COPY package*.json ./
# Install dependencies
RUN npm i
# Copy the rest of the application code into the container

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]