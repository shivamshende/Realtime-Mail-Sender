# Realtime Email Sender App

A ReactJS application integrated with an email sender API that allows users to send emails in real-time.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Send emails in real-time
- User-friendly interface
- Error handling and validation
- Lightweight and fast

## Installation

### Prerequisites

- Node.js and npm installed
- Git installed

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/shivamshende/Realtime-Mail-Sender.git
    cd Realtime-Mail-Sender
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your email service credentials:

    ```env
    REACT_APP_EMAIL_SERVICE_API_KEY=your_api_key
    REACT_APP_EMAIL_SERVICE_DOMAIN=your_domain
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Fill in the required fields and click the "Send Email" button.
3. Check the status of the email in the response section.

## API Endpoints

Send an email using the provided API.

- **URL:** `/send-email`
- **Method:** `POST`
- **Headers:** 
  - `Content-Type: application/json`
- **Body Parameters:**
  - `sendto` (string): Recipient email address
  - `name` (string): Custom Name Here
  - `replyTo` (string): Your Email address where users can send their reply
  - `ishtml` (string): false
  - `title` (string): Email subject
  - `body` (string): Email message

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to add more sections or details based on your project requirements. This template provides a solid foundation and covers the most common aspects of a README file.