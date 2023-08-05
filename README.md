
# Project Overview

## Microservices
 - [Flight Service](https://github.com/GauravGhost/Flight-Service)
 - [Flight Booking Service](https://github.com/GauravGhost/Flight-Booking-Service/)
 - [Flight Notification Service](https://github.com/GauravGhost/Flight-Notification-Service)

---
![Airline Management System Design](https://i.ibb.co/h2VQHNb/ss1.png)
The Flight Service Backend Project is based on a microservice architecture, comprising four distinct microservices that collectively provide a comprehensive flight management system.

The first microservice, Flight Service, acts as the core component and encompasses multiple models, including airplane, airport, city, flight, and seat models. This microservice handles all the essential functionalities related to flights, airports, and cities. It enables efficient scheduling and allocation of airplanes, manages flight routes and durations, and facilitates seat reservations for passengers.

The second microservice, Flight Booking Service, focuses on the booking process and includes the booking model. It incorporates cron jobs that run every 30 minutes to automatically check for pending or initiated bookings with expired payment times. In such cases, the bookings are automatically canceled. Additionally, this microservice utilizes RabbitMQ to send booking information to a queue for further processing by the fourth microservice.

The third microservice, Flight API Gateway Service, provides a centralized entry point for accessing the flight service's functionalities. It incorporates user and role models for managing user information and permissions. This microservice includes features such as rate limiting to control API usage, reverse proxy for efficient routing, authentication system using JWT (JSON Web Tokens) for user authentication, and an authorization system to ensure access control based on user roles.

The fourth microservice, Flight Notification Service, is responsible for sending notifications to users regarding their flight bookings. Once a booking is successfully processed and confirmed, the second microservice sends the relevant information to a queue. The Flight Notification Service then consumes the messages from the queue and uses Node Mailer to send emails to users, providing them with details about their successful bookings.

Collectively, these microservices work together to create a robust flight management system. The Flight Service microservice handles flight-related operations and models, the Flight Booking Service automates booking cancellations and manages booking queues, the Flight API Gateway Service provides a secure and efficient gateway for user interactions, and the Flight Notification Service ensures timely and accurate notifications to users via email.
## Tech Stack
- **Node Js**
- **Express Js**
- **mySQL**
- **Sequelize**
- **RabbitMQ**


## Flight Booking Service

## Description

The Flight API Gateway microservice serving as the centralized entry point for accessing various functionalities provided by the flight service. It plays a crucial role in managing user information, handling authentication and authorization, and ensuring controlled access to the flight service's APIs. 

This Service has a model role, user, user_role

### Key Features
- Centralized Entry Point: This microservice acts as a central entry point for all incoming requests from clients and applications that want to interact with the flight service.
- User and Role Models: The Flight API Gateway Service incorporates user and role models to manage user information and permissions. The user model represents individual users of the system, containing details like user ID, username, email, and password (usually stored securely using hashing and salting techniques). The role model represents various roles that users can have, such as "admin," "customer," or "flight_company".
- Rate Limiting: It sets a threshold on the number of requests a client can make within a specified time frame.
- Reverse Proxy: The microservice utilizes a reverse proxy for efficient routing of requests to the backend flight service. 
- Authentication System using JWT: To ensure secure user authentication.
- Authorization System: The microservice also features an authorization system that enforces access control based on user roles. ## API Reference

#### user endpoint
#### role endpoint
## Setup the project


 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev
 ```
    