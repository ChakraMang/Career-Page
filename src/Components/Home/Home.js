import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { jobsData, locations, titles } from "../../data/data";
import JobCard from "./JobCard";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'

const Home = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("Information Technology (IT)");
  const [timeType, setTimeType] = useState("Full Time");
  const [jobType, setjobType] = useState("Regular");
  const [filteredData, setFilteredData] = useState(jobsData);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {

    const newFilteredData = jobsData.filter(
        (d) => 
        (title === "" || d.title === title) &&
        (location === "" || d.location === location)
    )
    setFilteredData(newFilteredData);
  }, [ title, location])


  return (
    <Container className="home">
      <Container className="home-filter">
      <div className="div-filter-title">
      Title: 
        <Form.Select className="filter-title" onChange={handleTitleChange}>
          <option value=""></option>
          {titles.map((d) => (
        <option 
          value={d}
           >{d}</option>))}
        </Form.Select>
      </div>
      <div className="div-filter-location">
      Location: 
        <Form.Select className="filter-location" onChange={handleLocationChange}>
          <option value=""></option>
          {locations.map((d) => (
        <option 
          value={d}
        onChange={handleLocationChange}
           >{d}</option>))}
        </Form.Select>
      </div>
      <div className="div-filter-timeType">
      Type: 
        <Form.Select className="filter-type">
          <option value={timeType}>{timeType}</option>
        </Form.Select>
      </div>
      <div className="div-filter-jobType">
      Job type: 
        <Form.Select className="filter-jobType">
          <option value={jobType}>{jobType}</option>
        </Form.Select>
      </div>
      <div className="div-filter-industry">
      Job type: 
        <Form.Select className="filter-industry">
          <option value={industry}>{industry}</option>
        </Form.Select>
      </div>
      </Container>
      <Container className="job-cards">
  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    {filteredData.map((job, index) => (
      <Col xs={6} sm={6} md={4} lg={3} key={index} className="job-cards-col">
          <JobCard job={job} />
      </Col>
    ))}
  </Row>
</Container>
    </Container>
  );
};

export default Home;
