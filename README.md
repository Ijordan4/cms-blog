# CMS-Style Blog Site

## Description

A CMS-style blog site that allows developers to publish articles, blog posts, and their thoughts and opinions.

## Table of Contents

Installation
Usage
Features
Contributing
Credits
License

## Installation

Clone this repository to your local machine.
Create a .env file in the root directory with your database credentials (see example).
Run npm install to install project dependencies.
Set up your MySQL database and configure Sequelize (see database configuration).
Run npm start to start the server.

## Database Configuration

The DB_NAME and DB_USER variables should match your MySQL database and user credentials.
Adjust DB_HOST and DB_PORT as needed for your MySQL server.

## Usage

Visit the homepage to read existing blog posts.
Sign up or log in to create, edit, and delete your own blog posts.
Leave comments on blog posts when logged in.
Use the dashboard to manage your blog posts.

## Features

User authentication (sign up, log in, log out).
Create, read, update, and delete blog posts.
Leave and view comments on blog posts.
Idle session handling (reauthentication required).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test thoroughly.
Submit a pull request with a clear description of your changes.

## Credits

Sources that could have helped with this project:

Express.js Documentation: Official documentation for Express.js, the web application framework used in this project.

Sequelize Documentation: Official documentation for Sequelize, the ORM used for database operations.

Handlebars.js Documentation: Official documentation for Handlebars.js, the templating engine used for views.

dotenv Documentation: Documentation for the dotenv package, used for managing environment variables.

OpenAI GPT-3.5: OpenAI's GPT-3.5 was used to assist with project-related queries and code samples.
