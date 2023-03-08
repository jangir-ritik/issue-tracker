import React, { useContext, useState } from 'react';
import { Link,  } from 'react-router-dom';

const Separator = () => <span> | </span>;

function IssueFilter({ setFilter }) {
    // console.log(setFilter("Open"), " => setFilter ")
    const [status, setStatus] = useState('');
    const [effortGte, setEffortGte] = useState('');
    const [effortLte, setEffortLte] = useState('');
    const [changed, setChanged] = useState(false);
  
    const onChangeStatus = (e) => {
      setStatus(e.target.value);
      setChanged(true);
    };
  
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
   <div>
      Status:
      <select value={status} onChange={onChangeStatus}>
        <option value="">(Any)</option>
        <option value="New">New</option>
        <option value="Open">Open</option>
        <option value="Assigned">Assigned</option>
        <option value="Fixed">Fixed</option>
        <option value="Verified">Verified</option>
        <option value="Closed">Closed</option>
      </select>
      &nbsp;Effort between:
      <input size={5} value={effortGte} onChange={onChangeEffortGte} />
      &nbsp;-&nbsp;
      <input size={5} value={effortLte} onChange={onChangeEffortLte} />
      <button onClick={applyFilter}>Apply</button>
      <button onClick={resetFilter} disabled={!changed}>
        Reset
      </button>
      <button onClick={clearFilter}>Clear</button>
    </div>
    );
    }

export default IssueFilter;