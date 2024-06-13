// src/components/ActionButtons.js
import React from 'react';
import { Button } from '@mui/material';

const ActionButtons = ({ handleApproval }) => {
  return (
    <div className="action-buttons">
      <Button variant="contained" color="primary" onClick={handleApproval}>
        Approve Pay Run
      </Button>
    </div>
  );
};

export default ActionButtons;
