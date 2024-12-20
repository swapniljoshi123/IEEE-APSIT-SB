
# IEEE APSIT SB Project

## Overview

This repository contains the project for the **IEEE APSIT Student Branch (SB)**. The project aims to streamline various IEEE-related activities, including event management, membership handling, and resource sharing, with a user-friendly platform. Developed using **React.js**, it integrates modern tools and technologies to deliver a seamless and responsive web application.

## Features

### 🔧 User-Friendly Interface

- Intuitive design with clear navigation.
- Responsive layout for mobile and desktop devices.

### 🔒 Comprehensive Components

- **Home Page**: Overview of the platform.
- **About Us**: Details about the IEEE APSIT SB.
- **Contact**: Reach out to the team.
- **Events**: Manage and participate in upcoming events.
- **Membership**: Membership status tracking and details.
- **Resources**: Access shared resources and documentation.
- **FAQs**: Answers to common queries.
- **Sign-Up/Sign-In**: User authentication and registration.

### 🏢 Event Management

- Create, update, and manage events.
- Participant registration and tracking.

### 🔑 Membership Handling

- Manage member details.
- Enable and track membership renewals.

### 💳 Payment Integration

- Secure payment gateway for membership fees and event registrations.

## Technologies Used

### Frontend

- **React.js**: For building the user interface.
- **Vite**: As the development environment and build tool.
- **Tailwind CSS**: For styling and responsive design.

### Backend

- **Node.js**: For handling server-side operations.
- **Express.js**: As the web framework for APIs.
- **MongoDB**: For the database to store application data.

### Payment Gateway

- **Stripe**: For secure and reliable payment processing.

## Installation

### 🔧 Clone the Repository

```bash
git clone https://github.com/swapniljoshi123/IEEE-APSIT-SB.git
cd IEEE-APSIT-SB
```

### 💡 Install Dependencies

```bash
npm install
```

### 🔐 Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
MONGO_URI=<your-mongodb-connection-string>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
```

### 🚀 Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Folder Structure

```
IEEE-APSIT-SB/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Profile.jsx
│   │   ├── Contact.jsx
│   ├── pages/
│   │   ├── AboutUs.js
│   │   ├── Contact.js
│   │   ├── Events.js
│   │   ├── FAQs.js
│   │   ├── Home.js
│   │   ├── Membership.js
│   │   ├── Resources.js
│   │   ├── Sign.js
│   │   ├── SignUp.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── .env
├── package.json
├── README.md
```

## Usage

### Running the Application

- Access the home page to explore features.
- Use the navigation bar to visit different sections like **Membership**, **Events**, **Resources**, and **Contact**.

### 💳 Payment Integration

- Navigate to the **Membership** or **Events** section.
- Enter the required details and complete the transaction securely using **Stripe**.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## Contact

For any inquiries or support, please contact:

- **Swapnil Joshi**
- Email: [swapniljoshi@example.com](mailto:swapniljoshi@example.com)
- GitHub: [swapniljoshi123](https://github.com/swapniljoshi123)
