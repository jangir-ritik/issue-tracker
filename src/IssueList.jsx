import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import IssueAdd from './IssueAdd.jsx';
import IssueFilter from './IssueFilter.jsx';

const IssueTable = ({ issues, loadData }) => {
  function deleteIssue(id) {
    console.log('Deleting issue:', id);
    fetch(`/api/issues/${id}`, { method: 'DELETE' }).then(response => {
      console.log('Delete response:', response);
      if (!response.ok) alert('Failed to delete issue');
      else loadData();
    });
  }
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion Date</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {issues.map(issue => (
        <IssueRow key={issue._id} deleteIssue={deleteIssue} issue={issue} />
        ))}
      </tbody>
    </table>
  );
};

const IssueRow = ({ issue, deleteIssue }) => {
  const borderedStyle = { border: '1px solid silver', padding: 4 };
  function onDeleteClick() {
    deleteIssue(issue._id);
  }
  return (
    <tr>
      <td style={borderedStyle}>
        <Link to={`/issues/${issue._id}`}>{issue._id.substr(-4)} </Link>
      </td>
      <td style={borderedStyle}>{issue.status}</td>
      <td style={borderedStyle}>{issue.owner}</td>
      <td style={borderedStyle}>{issue.created.toDateString()}</td>
      <td style={borderedStyle}>{issue.effort}</td>
      <td style={borderedStyle}>
        {issue.completionDate ? issue.completionDate.toDateString() : ''}
      </td>
      <td style={borderedStyle}>{issue.title}</td>
      <td><button onClick={onDeleteClick}>Delete</button></td>
    </tr>
  );
};


export default function IssueList({status}) {
  const [issues, setIssues] = useState([]);
  const [ statusFilter ] = useState(status.get('status'));
  const location = useLocation();
  const navigate = useNavigate();

  function setFilter(query) {
    navigate({
      pathname: location.pathname,
      search: `?status=${query}`
    });
  }

  const createIssue = newIssue => {
    fetch('/api/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue),
    })
      .then(response => {
        if (response.ok) {
          response.json().then(updatedIssue => {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate)
              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
            setIssues([...issues, updatedIssue]);
          });
        } else {
          response.json().then(error => {
            alert('Failed to add issue: ' + error.message);
          });
        }
      })
      .catch(err => {
        alert('Error in sending data to server: ' + err.message);
      });
  };

  const loadData = async () => {
    try {
      const response = await fetch(`/api/issues${location.search}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Total count of records: ', data._metaData.total_count);
        data.records.forEach(issue => {
          issue.created = new Date(issue.created);
          if (issue.completionDate) issue.completionDate = new Date(issue.completionDate);
        });
        setIssues(data.records);
      } else {
        const error = await response.json();
        alert('Failed to fetch issues:' + error.message);
      }
    } catch (err) {
      console.log('Error in fetching data from server:', err);
    }
  };

  useEffect(() => {
    if (statusFilter === location.search.status) {
      return;
    }
    loadData();
  }, [location.search]);

  return (
    <div>
      <IssueFilter setFilter={setFilter} />
      {/* <IssueFilter /> */}
      <hr />
      <h1>{status? status.get('status'): null}</h1>
      <IssueTable loadData={loadData} issues={issues} />
      <hr />
      <IssueAdd createIssue={createIssue} />
    </div>
    )
    }

