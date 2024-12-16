# Web Application - DevJournal

This project is a developer's diary in the style of a terminal, using the **MERN** stack (MongoDB, Express, React, Node.js), with **NGINX** as a load balancer and **SASS** as a CSS preprocessor. The application's goal is to provide a simple and efficient space for developers to log their thoughts and daily notes, all within an interface that simulates a terminal.

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Application Features](#application-features)
3. [How to Run the Project](#how-to-run-the-project)
   1. [Requirements](#requirements)
   2. [Step-by-Step](#step-by-step)
   3. [File /etc/hosts Configuration](#file-etchosts-configuration)
   4. [Build and Start Containers](#build-and-start-containers)
   5. [Accessing the Application](#accessing-the-application)
   6. [Accessing MongoDB (Optional)](#accessing-mongodb-optional)
   7. [Testing the Application](#testing-the-application)
4. [Directory Structure](#directory-structure)
5. [Final Notes](#final-notes)

## Technology Stack

- **MongoDB**: NoSQL database to store the diary entries.
- **Express**: Node.js framework for creating the REST API.
- **React**: JavaScript library for building the user interface (UI).
- **Node.js**: Runtime environment for the backend API.
- **NGINX**: Web server and load balancer (reverse proxy) to ensure efficient traffic distribution and security (SSL).
- **SASS**: CSS preprocessor to improve code organization and maintenance.
- **Docker**: Used to create containers and orchestrate with Docker Compose.

## Application Features

- **Developer's Diary**: Log, view, edit, and delete your daily entries.
- **Terminal Simulation**: User interface styled like a terminal.
- **Load Balancing**: The application distributes traffic across multiple containers to ensure scalability.
- **HTTPS**: Secure communication between the client and server, configured with a self-signed SSL certificate.

## How to Run the Project

### Requirements

- **Docker**: To orchestrate the containers.
- **Docker Compose**: To facilitate the configuration and execution of containers.

### Step-by-Step

1. **Clone the Repository**  
   First, clone the repository to your local environment:

    ```bash  
        git clone   
        cd 
    ```
2. **Docker and Docker Compose Configuration**  
   The project uses **Docker** to create containers and **Docker Compose** to orchestrate the services (frontend, backend, MongoDB, and NGINX).

   Make sure Docker and Docker Compose are installed. If not, follow the [Docker documentation](https://docs.docker.com/get-docker/) to install them.

3. **File /etc/hosts Configuration**  
   To ensure the application works properly on local environments, add the following line to your `/etc/hosts` file:

    ```bash  
        127.0.0.1 devjournal www.devjournal
    ```
   This ensures NGINX correctly redirects requests to the local application.

4. **Build and Start the Containers**  
   After cloning the repository, navigate to the root folder and run the following command to build and start the containers:

    ```bash  
        docker-compose up --build
    ```

   This command will:  
   - Build the images for the frontend, backend, MongoDB, and NGINX containers.  
   - Start all the services defined in `docker-compose.yml`.

5. **Accessing the Application**  
   - **Frontend**: Access the application in your browser via `https://localhost`.  
   - **API (Backend)**: The API will be available at `http://localhost/api`.

### 6. **Accessing MongoDB (Optional)**
   - If you need to access MongoDB to check the diary entries, you can use **Mongo Express**, which is already set up in the container.

   - To access Mongo Express, simply open your browser and go to:  
    `http://localhost:8081`
  

### 7. **Testing the Application**  
   - Navigate to the frontend and interact with the application by creating, editing, and deleting diary entries.

### Directory Structure

The project directory structure is as follows:
<pre>
.
├── api
├── app
├── docker-compose.yaml
├── initdb.d
├── LICENSE
├── nginx
├── README.md
└── ssl
</pre>

### Final Notes

- **NGINX** has been configured for load balancing and reverse proxy, distributing traffic between multiple backend and frontend containers.
- The project uses **self-signed SSL certificates** to ensure secure communication via HTTPS.
- **SASS** was used to optimize and modularize the CSS for the frontend, making the code more efficient and maintainable.
