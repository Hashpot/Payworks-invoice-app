// src/components/InvoiceTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const InvoiceTable = ({ data, excludeInvoice }) => {
  return (
    <TableContainer component={Paper} className="invoice-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Invoice Number</TableCell>
            <TableCell>Supplier</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Exclude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((invoice) => (
            <TableRow key={invoice.invoice_number} className={invoice.excluded ? 'excluded' : ''}>
              <TableCell>{invoice.invoice_number}</TableCell>
              <TableCell>{invoice.supplier}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.due_date}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => excludeInvoice(invoice.invoice_number)}
                  disabled={invoice.excluded}
                >
                  Exclude
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceTable;
