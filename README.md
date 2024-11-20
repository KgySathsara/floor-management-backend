# Floor Management Backend

The **Floor Management Backend** is a RESTful API designed to manage the backend operations for the Floor Management application. It provides endpoints to handle table data, including creating, updating, retrieving, and deleting tables. This backend ensures smooth communication with the frontend application and stores data efficiently.
---

## Features
1. **RESTful API**: Provides CRUD operations for tables and floor layouts.
2. **Data Validation**: Ensures data integrity using validation techniques.
3. **Database Management**: Connects to a database to persist table and layout data.
4. **Scalable Architecture**: Built with Node.js and Express.js for high performance.
---

## Technologies and Libraries Used

### **Libraries and Tools**:
- **Node.js**: Runtime environment for backend development.
- **Express.js**: Web framework for building APIs and handling routes.
- **Mongoose**: For modeling and managing MongoDB data.
- **Dotenv**: For managing environment variables.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Nodemon**: For auto-restarting the server during development.

### **Database**:
- **MongoDB**: Used for data storage.
---

## Installation Instructions

Follow these steps to set up and run the backend application:

### Steps:
1. **Clone the Repository**:
   ```bash
   git clone (https://github.com/KgySathsara/floor-management-backend)
   cd floor-management-backend
2. **Dependencies**:
   ```bash
   npm install express mysql2 body-parser cors dotenv
   npm install --save-dev typescript @types/express @types/node ts-node
   npx tsc --init
   
