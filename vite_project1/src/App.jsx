import React from 'react'
import JobCard from './Component/Card'
import "./App.css";

const App = () => {

const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://www.pngmart.com/files/Amazon-Logo-PNG-Transparent.png",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$150/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1 week ago",
    title: "Backend Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    posted: "3 days ago",
    title: "React Developer",
    type: "Contract",
    level: "Mid Level",
    salary: "$130/hr",
    location: "Delhi, India",
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "4 days ago",
    title: "UI Designer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$110/hr",
    location: "Pune, India",
  },
  {
    id: 6,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    posted: "6 days ago",
    title: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$135/hr",
    location: "Noida, India",
  },
  {
    id: 7,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    posted: "1 day ago",
    title: "UX Researcher",
    type: "Part Time",
    level: "Mid Level",
    salary: "$125/hr",
    location: "Chennai, India",
  },
  {
    id: 8,
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    posted: "2 weeks ago",
    title: "Full Stack Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$160/hr",
    location: "Ahmedabad, India",
  },
  {
    id: 9,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "3 days ago",
    title: "iOS Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$170/hr",
    location: "Mumbai, India",
  },
  {
    id: 10,
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    posted: "1 week ago",
    title: "Cloud Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$145/hr",
    location: "Gurgaon, India",
  },
  {
    id: 11,
    company: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    posted: "4 days ago",
    title: "Node.js Developer",
    type: "Contract",
    level: "Mid Level",
    salary: "$150/hr",
    location: "Kolkata, India",
  },
  {
    id: 12,
    company: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    posted: "2 days ago",
    title: "Data Analyst",
    type: "Full Time",
    level: "Junior Level",
    salary: "$100/hr",
    location: "Jaipur, India",
  },
];

  return (
    <div className='parent'>

      {jobs.map(function(elem){
        return <JobCard company = {elem.company} post = {elem.posted} logo = {elem.logo} 
         title = {elem.title}  type = {elem.type} salary = {elem.salary} 
         level = {elem.level} location = {elem.location}/>
      })}

    
    
    </div>
  )
}

export default App