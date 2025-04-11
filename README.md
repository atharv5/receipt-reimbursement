# Receipt Reimbursement System

A web application that allows university employees to submit receipts for reimbursement.

## Features

- Submit reimbursement requests with date, amount, and description
- Upload receipt files (supports PDF, JPG, PNG formats)
- Store submissions in PostgreSQL database
- Modern, responsive UI with Tailwind CSS
- Form validation on both client and server side

## Tech Stack

- **Frontend**: Next.js with TypeScript and React
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Form Handling**: React Hook Form
- **API**: Next.js API Routes

## Prerequisites

- Node.js 18+ installed
- PostgreSQL installed and running
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
```bash
git clone [your-repo-url]
cd receipt-reimbursement
```

2. Run the setup script:
```bash
npm run setup
```
This will:
- Create a `.env` file from `.env.example`
- Install all dependencies
- Create the necessary directories
- Generate the Prisma client

3. Configure your database:
Update the `.env` file with your PostgreSQL credentials if needed:
```
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]"
```

4. Create the database schema:
```bash
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
receipt-reimbursement/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/         # API routes
│   │   ├── components/  # React components
│   │   └── page.tsx    # Home page
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── prisma/              # Database schema and migrations
├── public/              # Static files
│   └── uploads/        # Uploaded receipt files
└── setup.js            # Setup script
```

## Development Decisions

1. **Next.js App Router**: Used for both frontend rendering and API routes, providing a unified development experience.

2. **Database Schema**: Created a simple but effective schema with proper constraints and indexing for future scalability.

3. **File Storage**: Implemented secure file upload handling with unique filenames and proper directory structure.

4. **Form Validation**: Applied client-side validation for immediate feedback and server-side validation for security.

5. **User Experience**: Designed with a clean, responsive interface and clear error/success messages.

## Future Enhancements

- User authentication and authorization
- Status tracking for reimbursement requests
- Admin dashboard for approving/rejecting requests
- Email notifications for status updates
- Reporting and analytics features

## Estimated vs. Actual Development Time

- **Estimated time**: [Fill in your estimate]
- **Actual time**: [8 hours]

## Justification for Tech Stack Choice

1. **Next.js**: Provides a cohesive full-stack development experience with both frontend and API capabilities, eliminating the need for separate frontend and backend codebases.

2. **TypeScript**: Enhances code quality through static typing, improving maintainability and reducing bugs.

3. **PostgreSQL**: Offers robust relational database capabilities, perfect for structured data like reimbursement records with strong data integrity requirements.

4. **Prisma**: Simplifies database operations with type-safe queries and schema management, reducing boilerplate code.

5. **Tailwind CSS**: Enables rapid UI development with utility-first approach, ensuring consistent styling and responsive design.

6. **React Hook Form**: Provides efficient form handling with minimal re-renders and built-in validation capabilities.

## Comments

### Assumptions Made During Implementation

1. **User Authentication**: The current implementation focuses on the core functionality of submitting reimbursements. In a production environment, this would be integrated with the university's authentication system.

2. **Receipt Storage**: Receipts are stored in the local filesystem for simplicity. In a production environment, these would likely be stored in a cloud storage service like AWS S3 or Azure Blob Storage.

3. **Business Rules**: I assumed basic validation rules such as requiring a minimum description length and positive amounts. In a real-world scenario, these rules would be defined by the university's finance department.

4. **Database Structure**: I assumed a simple database structure focusing on the core requirements. A production system might include additional fields like employee ID, department, approval status, etc.

### Challenges Encountered and Solutions

1. **File Upload Handling**: Implementing secure file upload was challenging. I solved this by:
   - Generating unique filenames to prevent collisions
   - Validating file types on both client and server sides
   - Creating a dedicated uploads directory with proper permissions

2. **Form Validation**: Balancing user experience with proper validation was tricky. I implemented:
   - Immediate client-side feedback for user-friendly experience
   - Thorough server-side validation for security
   - Descriptive error messages for user guidance

3. **Database Schema Design**: Designing a schema that's both simple for the MVP but extensible for future features required careful consideration. I used Prisma's schema capabilities to include proper indexing and constraints.

### Code Highlights

1. **Clean Component Architecture**: The form component is designed with proper separation of concerns, making it easy to maintain and extend.

2. **Error Handling**: Comprehensive error handling throughout the application provides a robust user experience.

3. **TypeScript Integration**: Strong typing across the application ensures type safety and reduces potential runtime errors.

4. **Responsive Design**: The UI is fully responsive and works well on mobile devices as well as desktop.

5. **Setup Script**: The included setup script simplifies the onboarding process for new developers or users setting up the application.

6. **API Design**: The API endpoints follow RESTful principles and include proper error handling and status codes.