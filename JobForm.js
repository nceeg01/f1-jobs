import { useState } from "react";
import { db, collection, addDoc, serverTimestamp } from "../firebase/firebase";

export default function JobForm() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    applyLink: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, "jobs"), { ...job, postedAt: serverTimestamp() });
      alert("Job added!");
      setJob({ title: "", company: "", location: "", description: "", applyLink: "" });
    } catch (error) {
      console.error("Error adding job:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 border rounded-lg">
      <input type="text" placeholder="Job Title" value={job.title} onChange={e => setJob({ ...job, title: e.target.value })} className="w-full p-2 border rounded" required />
      <input type="text" placeholder="Company" value={job.company} onChange={e => setJob({ ...job, company: e.target.value })} className="w-full p-2 border rounded" required />
      <input type="text" placeholder="Location" value={job.location} onChange={e => setJob({ ...job, location: e.target.value })} className="w-full p-2 border rounded" required />
      <textarea placeholder="Job Description" value={job.description} onChange={e => setJob({ ...job, description: e.target.value })} className="w-full p-2 border rounded" required></textarea>
      <input type="text" placeholder="Apply Link" value={job.applyLink} onChange={e => setJob({ ...job, applyLink: e.target.value })} className="w-full p-2 border rounded" required />
      <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded">Post Job</button>
    </form>
  );
}
