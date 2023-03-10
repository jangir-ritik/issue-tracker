import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from "@mui/material/Button"
import Paper from '@mui/material/Paper';

export default function IssueEdit({ onSubmit }) {
  const { id } = useParams();
  const [issueLoaded, setIssueLoaded] = useState(false);
  const [issue, setIssue] = useState({
    id: '',
    status: '',
    owner: '',
    effort: '',
    completionDate: '',
    title: '',
  });

  const loadData = async () => {
    try {
      const response = await fetch(`/api/issues/${id}`);
      if (response.ok) {
        const data = await response.json();
        setIssue(data);
        setIssueLoaded(true);
      } else {
        const error = await response.json();
        alert('Failed to fetch issues:' + error.message);
      }
    } catch (err) {
      alert(`Error in fetching data from server: ${err.message}`);
    }
  };

  useEffect(() => {
    loadData()
  }, [issueLoaded])
  
  const handleOnChange = (event) => {
    setIssue({ ...issue, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`/api/issues/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(issue)
      });
  
      if (response.ok) {
        // Handle success case
        console.log('Issue updated successfully');
      } else {
        // Handle error case
        const error = await response.json();
        alert('Failed to update issue: ' + error.message);
      }
    } catch (err) {
      alert(`Error in updating issue: ${err.message}`);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        ID: {issue._id}
        <br />
        Created: {issue.created}
        <br />
        Status:{' '}
        <select name="status" value={issue.status} onChange={handleOnChange}>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Verified">Verified</option>
          <option value="Closed">Closed</option>
        </select>
        <br />
        Owner:{' '}
        <input name="owner" value={issue.owner} onChange={handleOnChange} />
        Effort:{' '}
        <input type="number" size={5} name="effort" value={issue.effort} onChange={handleOnChange} />
        <br />
        Completion Date:{' '}
        <input type="date" name="completionDate" value={issue.completionDate} onChange={handleOnChange} />
        <br />
        Title:{' '}
        <input name="title" size={50} value={issue.title} onChange={handleOnChange} />
        <br />
        {/* <button type="submit">Submit</button> */}
        <Button variant="contained" type="submit">Submit</Button>
        <Link to="/issues">Back to issue list</Link>
        <Paper />
      </form>
      <div>
      
    </div>
    </div>
  );
}