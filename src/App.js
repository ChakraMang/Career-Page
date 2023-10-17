import React, { useState } from 'react';
import Navbar from './Components/NavBar/NavBar';
import Filters from './Components/Filters/Filters'
import Home from './Components/Home/Home';
import JobCard from './Components/Home/JobCard';
import {jobsData} from './data/data'; // Import your job data

function App() {
  const [jobs, setJobs] = useState(jobsData);

  // Define filtering functions here

  return (
    <div className="app">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
