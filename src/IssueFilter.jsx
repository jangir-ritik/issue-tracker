import React, { useContext, useState } from 'react';
import { Link,  } from 'react-router-dom';
import DiscreteSlider from './Components/DiscreteSlider.jsx';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { AccessAlarm, Assignment, AssignmentInd, AssignmentTurnedIn, CheckCircle, TaskAlt, Verified, BugReport } from '@mui/icons-material';


const Separator = () => <span> | </span>;

export const statusOptions = [
  { value: 'New', label: 'New', icon: <Assignment /> },
  { value: 'Open', label: 'Open', icon: <BugReport /> },
  { value: 'Assigned', label: 'Assigned', icon: <AssignmentInd /> },
  { value: 'Fixed', label: 'Fixed', icon: <TaskAlt /> },
  { value: 'Verified', label: 'Verified', icon: <Verified /> },
  { value: 'Closed', label: 'Closed', icon: <CheckCircle /> },
];

function IssueFilter({ setFilter }) {
    // console.log(setFilter("Open"), " => setFilter ")
    const [status, setStatus] = useState('');
    const [effortGte, setEffortGte] = useState('');
    const [effortLte, setEffortLte] = useState('');
    const [changed, setChanged] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');

  
    const handleStatusChange = (status) => {
      setSelectedStatus(status);
      setFilter(status);
    };

    // const statusOptions = ['New', 'Open', 'Assigned', 'Fixed', 'Verified', 'Closed'];

    // const onChangeStatus = (e) => {
    //   setStatus(e.target.value);
    //   setChanged(true);
    // };
  
    const onChangeEffortGte = (e) => {
      const effortValue = e.target.value.replace(/\D/g, '');
      setEffortGte(effortValue);
      setChanged(true);
    };
  
    const onChangeEffortLte = (e) => {
      const effortValue = e.target.value.replace(/\D/g, '');
      setEffortLte(effortValue);
      setChanged(true);
    };
  
    const applyFilter = () => {
      const newFilter = {};
      if (status) newFilter.status = status;
      if (effortGte) newFilter.effort_gte = effortGte;
      if (effortLte) newFilter.effort_lte = effortLte;
    //   console.log(JSON.stringify(newFilter), " => This is new Filter")
      setFilter(JSON.stringify(newFilter));
    };
  
    const resetFilter = () => {
      setStatus('');
      setEffortGte('');
      setEffortLte('');
      setChanged(false);
      setFilter({});
    };
  
    const clearFilter = () => {
      setStatus('');
      setEffortGte('');
      setEffortLte('');
      setChanged(false);
      setFilter({});
    };

    return (
    // <div>
    //     <Link to="/issues">All issues</Link>
    //     <Separator />
    //     <Link to={{ pathname: '/issues', search: '?status=Open' }}>
    //         Open Issues
    //     </Link>
    //     <Separator />
    //     <Link to={{ pathname: '/issues', search: '?status=Assigned' }}>
    //         Assigned Issues
    //     </Link>
    // </div>
  //  <div>
      <Container>
      {/* Status:
      <select value={status} onChange={onChangeStatus}>
        <option value="">(Any)</option>
        <option value="New">New</option>
        <option value="Open">Open</option>
        <option value="Assigned">Assigned</option>
        <option value="Fixed">Fixed</option>
        <option value="Verified">Verified</option>
        <option value="Closed">Closed</option>
      </select> */}
      <Container sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', py: 2 }}>
        {statusOptions.map((status) => (
          <Chip
            key={status.value}
            label={status.label}
            color={selectedStatus === status.value ? 'primary' : 'default'}
            icon={status.icon}
            onClick={() => handleStatusChange(status.value)}
            sx={{ mr: 1, mb: 1 }}
          />
        ))}
        <Box sx={{ ml: 'auto' }}>
          <DiscreteSlider />
        </Box>
      </Container>
      {/* &nbsp;Effort between:
      <input size={5} value={effortGte} onChange={onChangeEffortGte} />
      &nbsp;-&nbsp;

      <input size={5} value={effortLte} onChange={onChangeEffortLte} />
      <button onClick={applyFilter}>Apply</button>
      <button onClick={resetFilter} disabled={!changed}>
        Reset
      </button>
      <button onClick={clearFilter}>Clear</button> */}
    {/* </div> */}
    </Container>
    );
    }

export default IssueFilter;