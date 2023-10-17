import React, { useState } from 'react';
import './Filters.css'; // Import the CSS file

const Filters = () => {

  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [timeType, setTimeType] = useState('');
  const [jobType, setjobType] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  }

  const handleTimeTypeChange = (e) => {
    setTimeType(e.target.value);
  }
  const handleJobTypeChange = (e) => {
    setjobType(e.target.value);
  }

  return (
   <>
   <div>
    <div className="dropdown">
      <label htmlFor="locationDropdown">Location: </label>
        <select 
        className='select'
          id="locationDropdown"
          value={location}
          onChange={handleLocationChange}>
          <option className="select-option" value=""></option>
          </select>
    </div>
    <div className="dropdown">
    <label htmlFor="industryDropdown">Industry: </label>
        <select 
        className='select'
          id="industryDropdown"
          value={industry}
          onChange={handleIndustryChange}>
          <option value="" className='select-option'></option>
          </select>
    </div>
    <div className="dropdown">
    <label htmlFor="timeTypeDropdown">Time type: </label>
        <select 
        className='select'
          id="timeTypeDropdown"
          value={timeType}
          onChange={handleTimeTypeChange}>
          <option value="" className='select-option'></option>
          </select>
    </div>
    <div className="dropdown">
      <label htmlFor="jobTypeDropdown">Job type: </label>
        <select 
        className='select'
          id="jobTypeDropdown"
          value={jobType}
          onChange={handleJobTypeChange}>
          <option className="select-option" value=""></option>
          </select>
    </div>
   </div>
   </>
  );
};

export default Filters
