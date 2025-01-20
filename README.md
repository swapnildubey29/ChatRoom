# ChatCord

ChatCord is a real-time chat application that allows users to join chat rooms and exchange messages. It is built using Node.js, Express, Socket.IO, and Redis for efficient message broadcasting and scalability.

## Features

- **Real-time Communication:** Exchange messages in real-time with other users in a chat room.
- **Chat Rooms:** Users can join specific rooms to interact with other members.
- **Bot Messages:** A bot welcomes users to the chat and notifies others when a user joins or leaves the room.
- **User List:** Displays the list of users in a chat room.
- **Scalable Architecture:** Uses Redis to enable horizontal scaling of Socket.IO.

## Technologies Used

- **Backend:** Node.js, Express
- **Real-time Communication:** Socket.IO
- **Database:** Redis (for managing WebSocket events)
- **Frontend:** HTML, CSS, JavaScript (static files served by Express)

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or above)
- Redis Server

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/swapnildubey29/chatcord.git
   cd main
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=3000
   REDIS_URL=redis://127.0.0.1:6379
   ```

4. **Run the Redis Server:**

   Make sure your Redis server is running locally:

   ```bash
   redis-server
   ```

5. **Start the Application:**

   ```bash
   npm start
   ```

6. **Access the Application:**

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Project Structure

```
.
├── public/                # Static frontend files (HTML, CSS, JS)
├── utils/                 # Helper functions for messages and user management
├── .env                   # Environment variables
├── server.js              # Main server file
├── package.json           # Node.js project metadata
└── README.md              # Project documentation
```

## Scripts

- `npm start`: Starts the application.
- `npm run dev`: Starts the application in development mode (if using nodemon).

## Future Improvements

- Add private messaging between users.
- Implement user authentication.
- Enhance UI/UX with a modern design.
- Add message persistence using a database.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Socket.IO Documentation](https://socket.io/docs/)
- [Redis Documentation](https://redis.io/documentation)

---

Feel free to customize the content as needed for your project!
