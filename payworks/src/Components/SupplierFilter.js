import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const SupplierFilter = ({ data, excludeSupplier }) => {
  const [selectedSupplier, setSelectedSupplier] = useState('');

  const handleChange = (event) => {
    setSelectedSupplier(event.target.value);
  };

  const handleExclude = () => {
    excludeSupplier(selectedSupplier);
    setSelectedSupplier('');
  };

  const suppliers = Array.from(new Set(data.map(invoice => invoice.supplier)));

  return (
    <div className="supplier-filter">
      <FormControl fullWidth>
        <InputLabel>Supplier</InputLabel>
        <Select value={selectedSupplier} onChange={handleChange}>
          {suppliers.map((supplier) => (
            <MenuItem key={supplier} value={supplier}>{supplier}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button 
        onClick={handleExclude} 
        variant="contained" 
        color="primary" 
        style={{ marginTop: '10px' }}
      >
        Exclude Supplier
      </Button>
    </div>
  );
};

export default SupplierFilter;
