# Fanztar Challenge

This project is a backend application that simulates a mobile factory's ordering system. It allows users to place orders for mobile parts via an API, and stores these orders in memory.

## Features

- Place orders for mobile parts through a API.
- Validate orders based on available parts.
- Calculate total price for the ordered parts.
- Store orders in memory for retrieval.

## How It Works

The application reads a predefined set of mobile parts and their prices from a `config.json` file. Users can place orders by sending a POST request to the `/order` endpoint with the desired parts. The server validates the order, calculates the total price, and stores the order in memory. Users can retrieve all stored orders by sending a GET request to the `/orders` endpoint.

## Tech Stack

- **Server:** Node.js, Express.js
- **Data Storage:** In-memory array

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:
   
   https://github.com/Abhay7apk/Fanztar_code_challenge.git
   
3. Navigate to the project directory:
   
   cd mobile-factory-code-challenge
   
4. Install the dependencies:
   npm install
   

## Running the Server

To start the server, run the following command in the terminal:

npm start


The server will start on port 8004. You can access the API through `http://localhost:8004`.

## Usage

### Placing an Order

Send a POST request to `http://localhost:8004/order` with the following query parameters:

- `screen`: Screen type (A, B, or C)
- `camera`: Camera type (D or E)
- `port`: Port type (F, G, or H)
- `os`: Operating system (I or J)
- `body`: Body type (K or L)

Example using `curl`:


curl -X POST 'http://localhost:8004/order?screen=A&camera=D&port=F&os=I&body=K'


### Retrieving All Orders

Send a GET request to `http://localhost:8004/orders` to retrieve all the orders that have been placed.

Example using `curl`:


curl http://localhost:8004/orders


## How I Made It

As a beginner, I started by understanding the requirements and setting up a basic Node.js and Express.js server. I used the `fs` module to read from a `config.json` file, which contains the parts and their prices. I then set up routes to handle POST requests for placing orders and GET requests for retrieving them. I used Postman to test the API endpoints and ensure they were working as expected.

## Lessons Learned

This project was challenging but rewarding. I learned about server setup, routing, handling JSON data, and the importance of testing with tools like Postman.


## Author

Abhay Tiwari - LINKEDIN: https://www.linkedin.com/in/abhay-tiwari-software-enigneer/
abhaytiw33@gmail.com


##IMPORTANT:
I any error occurs please delete node modules and reinstall it using :
npm install
this should work,
if still have any error contact me.
