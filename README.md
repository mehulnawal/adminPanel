# 🛒 E-Commerce Platform (Full Stack)

A full-featured **E-commerce platform** with a user-facing storefront and a powerful **admin dashboard**.  
The application includes **secure, role-based authentication**, product management, cart & checkout flow, and payment integration using **Razorpay (Dummy Mode)**.

---

## 🚀 Features

### 👤 User Side
- User registration & secure login
- Role-based access control
- Forgot password & reset password with **OTP verification via email**
- Browse all available products
- Filter products by categories & subcategories
- Search products by name
- Sort products (price, newest, etc.)
- Add / remove products from cart
- Secure checkout flow
- Payment integration using **Razorpay (Test/Dummy Mode)**
- Order tracking *(Coming soon)*

---

### 🛠️ Admin Panel
- Secure admin login
- Role-based admin access
- Admin dashboard with platform overview
- Add, edit, and manage products
- Manage categories & subcategories
- Soft delete products (recoverable)
- View total users and admins

---

## 🔐 Authentication & Security
- JWT-based authentication
- Role-based authorization (User / Admin)
- Encrypted passwords
- OTP-based email verification for password reset
- Secure session handling

---

## 🧩 Tech Stack

### Frontend
- React
- Tailwind CSS
- Redux and Async-Thunk
- Axios

### Backend
- Node.js
- Express.js
- RESTful APIs

### Database
- MongoDB

### Payments
- Razorpay (Test Mode)

### Email Service
- OTP verification via email (SMTP / Email service)

---

## 📦 Installation & Setup

### Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_test_key
RAZORPAY_KEY_SECRET=your_test_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_id
EMAIL_PASS=your_email_password
```

### Run the project

```bash
npm run dev
```

---

## 🧪 Payment Note

Razorpay is integrated in **test/dummy mode** for development purposes.
No real payments are processed.

---

## 🔮 Upcoming Features

* Order tracking system
* User order history
* Admin order management
* Product reviews & ratings
* Wishlist functionality

---

## ⭐ Support

If you find this project useful, don’t forget to **star the repository**!
