import { useState } from 'react';
import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export const IssueAddDialog = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Issue</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

// const MyComponent = () => {
//   const [open, setOpen] = useState(false);

//   const handleIssueAddDialogOpen = () => {
//     setOpen(true);
//   };

//   const handleIssueAddDialogClose = () => {
//     setOpen(false);
//   };

//   const handleIssueAddSubmit = (issue) => {
//     // Submit the issue to your backend or update the state with the new issue
//     console.log(issue);
//   };

//   return (
//     <div>
//       <IconButton
//         sx={{
//           backgroundColor: themeMode === 'light' ? lightTheme.palette.secondary.main : darkTheme.palette.primaryDark[900],
//           border: `1px solid ${themeMode === 'light' ? lightTheme.palette.secondary.main : darkTheme.palette.primaryDark[600]}`,
//         }}
//         onClick={handleIssueAddDialogOpen}
//       >
//         Add Issue
//       </IconButton>
//       <IssueAddDialog open={open} onClose={handleIssueAddDialogClose} onSubmit={handleIssueAddSubmit} />
//     </div>
//   );
// };