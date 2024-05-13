# React Blog with Router

Welcome to the React Blog with Router project! This project is a simple blog application built using React, React Router, and Axios for HTTP requests. It allows users to view posts, create new posts, edit existing posts, and delete posts.

## Features

- **View Posts:** Users can view all posts on the home page.
- **Create New Post:** Users can create a new post with a title and body.
- **Edit Post:** Users can edit existing posts, updating their title and body.
- **Delete Post:** Users can delete posts they no longer wish to keep.
- **Search Posts:** Users can search for posts by title or body.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd React_Blog_Router
   ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

5. Open another terminal window and navigate to the project directory again:
    ```bash
    cd React_Blog_Router
    ```

6. Start the JSON Server:
    ```bash
    npx json-server -p 3500 -w data/db.json
    ```

   This will run the JSON Server on port 3500 and watch the `db.json` file for changes.

## Project Structure

The project structure is organized as follows:

- **src/.js** Contains React components used throughout the application.
- **src/context:** Contains the context provider for managing state across components.
- **src/hooks:** Contains custom React hooks used for specific functionalities.
- **src/api:** Contains Axios instance for making HTTP requests.
- **db.json:** Contains the mock data for the application, used by the JSON server.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** Declarative routing for React applications.
- **Axios:** Promise-based HTTP client for making requests to the server.
- **JSON Server:** Mock server for quickly prototyping RESTful APIs.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

