# 🚀 InterviewIQ.AI – AI Mock Interview SaaS Platform

An end-to-end **AI-powered mock interview platform** that helps users practice interviews, receive intelligent feedback, and improve performance using real-world SaaS architecture.

Live Demo - https://interviewiq-0tat.onrender.com/

---

## ✨ Features

* 📄 Upload Resume (PDF)
* 🤖 AI-Generated Interview Questions
* 💻 Practice Technical & HR Interviews
* 📊 Get Smart AI Feedback & Analysis
* 💳 Credit-Based Usage System
* 💰 Buy Credits via Razorpay Integration
* 🔐 Google Authentication (Firebase)
* 🎬 Smooth Animations (Framer Motion)
* 🌐 Fully Deployed on Render

---

## 🧠 What This Project Demonstrates

This project showcases real-world SaaS development concepts:

* Full-stack architecture (Frontend + Backend)
* Secure authentication using Firebase (Google Login)
* REST API design with Express.js
* MongoDB database integration
* Payment gateway integration (Razorpay)
* Protected routes & session handling
* Deployment & production debugging (Render)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Framer Motion
* Axios
* Redux Toolkit

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Services & Tools

* Firebase Authentication (Google Sign-In)
* Razorpay (Payments)
* Render (Deployment)

---

## 📂 Project Structure

```
InterviewIQ/
│
├── client/        # React Frontend
│
├── server/        # Express Backend
│
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sanskrity0804/InterviewIQ.git
cd InterviewIQ
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (.env)

* `PORT`
* `MONGO_URI`
* `JWT_SECRET`
* `RAZORPAY_KEY`
* `RAZORPAY_SECRET`
* `CLIENT_URL`

### Frontend

* Firebase config keys

---

## 🚀 Deployment

* Frontend deployed on **Render (Static Site / Web Service)**
* Backend deployed on **Render Web Service**

---

## 🙌 Acknowledgements

* Firebase
* Razorpay
* Render
* OpenAI (for AI capabilities)

---

### 👨‍💻 Built with passion to crack interviews smarter 🚀
