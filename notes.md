Panels- 
1. Visitor - products view, filters, product details  
2. User  - Add to cart and wishlist , checkout , view profile and edit profile, change password, 
forget password, delete profile, 
1. Admin - manage products ( CRUD ) , manage users ( CRUD ) , manage categories and sub 
categories ( CRUD ) , total products, total users, total categories , sees payments , recent activity


Models - 
User - 
- name
- number
- email
- password
- profileImage
- role (user / admin)
- isBlocked
- createdAt 
- authProvide - email, Google
- refreshToken
- resetOTP key
- resetOTP expriy time 
- userIsVerified
- googleUserId
- verifyOtp
- verifyOtpExpiryTime
- noOfAttempts


Orders 
- items 
- user

Product  
- title
- slug 
- description
- images[]
- category
- status (draft / published / hidden)
- isFeatured
- createdBy (adminId)
- createdAt

Category 
- name
- slug 
- parentCategory (optional) 
- isActive

AdminLog 
- adminId
- action
- targetType (product/user)
- targetId
- timestamp


APIs
1. Users - login, register, forgetPassword, resetPassword, resetPassword, editProfile, products (curd),
addToCart, addToWishList
1. Checkout - checkout, paymentSuccessful
2. Admin - products (curd), users (curd), categories (curd), stats, adminViewPayments, 
admdinRecentActivity 
1. Cateogies - 


Topics - 
1. Populate (populate())
2. Parent–Child / Self-Referencing Schema
3. Indexes (Unique & Normal)
4. Slug & Unique Fields
5. Aggregation Pipeline


<!-- Total Models -->
1. User ✔
2. Orders - foreign key - user id and payment and product id ✔
3. Payment - foreign key -  order id ✔
4. Product - foreign key - main (parent category) id
5. Categories 