# Anime Favorites Web Application

## Description
The **Anime Favorites** web application allows users to track and share their favorite anime. Users can add their favorite anime by entering their name and the anime they love, update their entries, and delete them if necessary. The app provides an interactive interface using Tailwind CSS to make the experience visually appealing.

## Features
- Add new favorite anime
- Delete anime entries
- Simple, user-friendly design with Tailwind CSS
- Dynamic list of anime favorites stored in a database

## How to Run Locally

### Prerequisites
Before running this project locally, make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **SQLite** (for database management)

### Steps to Run Locally

1. **Clone the repository**:
   Open your terminal and run the following command to clone the repository:

   git clone https://github.com/your-username/anime-favorites.git

2. **Navigate to the project directory**:

    cd web-app

3. **Install dependencies: Run the following command to install the required npm packages**:

    npm install

4. **Set up the database**: The app uses SQLite to store the anime data. Make sure the database is set up correctly. If you don't have a database set up, you can manually create it or use the provided migration script if available.

5. **Start the development server**: Once the dependencies are installed and the database is set up, run the following command to start the server:

    npm start

    This will start the application on http://localhost:3000 by default.

6. **Open the app**: Open your browser and navigate to http://localhost:3000 to start using the Anime Favorites web app.