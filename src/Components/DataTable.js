import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
// import { statusOptions } from '../IssueFilter.jsx';

// const StatusIcon = ({ value }) => {
//   const selectedStatusOption = statusOptions.find((option) => option.value === value);
//   const { icon: Icon } = selectedStatusOption;
//   console.log(Icon)
//   return <Icon />;
// };

const columns = [
  { field: 'id', headerName: 'ID', width: 50,     renderCell: (params) => (
    <Link to={`/issues/${params.value}`}>{params.value.substr(-4)}</Link>
  ), },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    // renderCell: (params) => <StatusIcon value={params.value} />
  },
  { field: 'owner', headerName: 'Owner', width: 150 },
  { field: 'created', headerName: 'Created', width: 100 },
  {
    field: 'effort',
    headerName: 'Effort',
    type: 'number',
    width: 50
  },
  {
    field: 'completionDate',
    headerName: ' Completion date',
    type: 'number', width: 100
  
  },
  { field: 'title', headerName: 'Title', width: 250 },
];

export default function DataTable({ issues, loadData }) {

  let rows = [];

  issues.map(issue => {
    rows.push({
      id: issue._id,
      status: issue.status,
      owner: issue.owner,
      created: issue.created,
      effort: issue.effort,
      completionDate: issue.completionDate,
      title: issue.title
    });
  });

  function deleteIssue(id) {
    console.log('Deleting issue:', id);
    fetch(`/api/issues/${id}`, { method: 'DELETE' }).then(response => {
      console.log('Delete response:', response);
      if (!response.ok) alert('Failed to delete issue');
      else loadData();
    });
  }
  
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}