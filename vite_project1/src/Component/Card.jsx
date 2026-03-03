import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";




const JobCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="logo" src={props.logo}alt="amaazon logo" />
        <button className="save-btn">Save <CiBookmarkCheck size={16}/></button>
      </div>

      <div className="company">
        <span className="company-name">{props.company}</span>
        <span className="time">{props.post}</span>
      </div>

      <h2 className="job-title">{props.title}</h2>

      <div className="tags">
        <span className="tag">{props.type}</span>
        <span className="tag">{props.level}</span>
      </div>

      <hr />

      <div className="card-footer">
        <div>
          <h3 className="salary">{props.salary}</h3>
          <p className="location">{props.location}</p>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;