import JobBoard from "../components/JobBoard";
import JobForm from "../components/JobForm";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">AI Job Board for F1 Students</h1>
      <JobForm />
      <JobBoard />
    </div>
  );
}
