import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Receipt Reimbursement System',
  description: 'A system for submitting and managing receipt reimbursements',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-primary py-4 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-2xl font-semibold">Receipt Reimbursement System</h1>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-100 py-4 border-t">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} University Employee Portal</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 