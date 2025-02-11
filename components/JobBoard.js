import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase/firebase";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchJobs();
  }, []);

  return (
    <div className="p-6 space-y-4">
      {jobs.map(job => (
        <div key={job.id} className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-gray-600">{job.company} - {job.location}</p>
          <p className="text-gray-800">{job.description}</p>
          <a href={job.applyLink} target="_blank" className="text-blue-500">Apply Here</a>
        </div>
      ))}
    </div>
  );
}
