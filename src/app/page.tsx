import ReimbursementForm from './components/ReimbursementForm';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Submit Reimbursement Request</h2>
        <ReimbursementForm />
      </div>
    </div>
  );
} 