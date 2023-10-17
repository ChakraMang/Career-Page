import React from "react";
import Card from "react-bootstrap/Card";
import { GoLocation } from "react-icons/go";
import { MdWork } from "react-icons/md";
import "./JobCard.css";

function JobCard({ job }) {
  return (
    <Card className="job-card-view">
      <Card.Body>
        <Card.Title className="card-title">{job.title}</Card.Title>
        <Card.Subtitle className="card-subTitile">{job.timeType}</Card.Subtitle>
        <Card.Text className="card-text">
          <div className="card-industry">{job.industry}</div>
          <div className="card-location-experience">
            <div className="card-location">
              <GoLocation /> {job.location}
            </div>
            <div className="card-experience">
              <MdWork /> {job.experience}
            </div>
          </div>
        </Card.Text>
        <Card.Link href="#" className="card-link">
          Apply
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
