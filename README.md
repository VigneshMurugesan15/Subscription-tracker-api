💳 Subscription Tracker API

A powerful and secure Node.js + Express + MongoDB API for managing user subscriptions with authentication, email reminders, and analytics.

🚀 Features

🔐 JWT Authentication – Secure user login and token-based access control

📅 Subscription Management – Add, update, and delete user subscriptions

🔁 Automatic Renewal Tracking – Calculates renewal dates based on frequency

📧 Email Notifications – Sends reminder emails before renewal using NodeMailer

📊 Categories & Filters – Organize subscriptions by type (entertainment, sports, etc.)

🕵️ Owner Verification – Prevent unauthorized access to other users’ data

🧠 Smart Status Updates – Automatically marks expired subscriptions

🧩 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Auth: JSON Web Token (JWT)

Email: NodeMailer (Gmail App Password Auth)

Environment Config: dotenv

⚙️ API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/v1/auth/register	Register new user
POST	/api/v1/auth/login	User login (returns JWT)
GET	/api/v1/subscriptions	Fetch all user subscriptions
POST	/api/v1/subscriptions	Create new subscription
PUT	/api/v1/subscriptions/:id	Update existing subscription
DELETE	/api/v1/subscriptions/:id	Delete subscription
📨 Email Reminder System

Automatically sends reminder emails:

7 days before renewal

5 days before renewal

2 days before renewal

1 day before renewal

🧠 Example Use Case

A user adds their Netflix, Spotify, or Amazon Prime plan — the system tracks renewal dates, sends reminders before billing, and marks expired plans automatically.
