import React, { useState } from 'react';
import InvoiceTable from './InvoiceTable';
import SupplierFilter from './SupplierFilter';
import ActionButtons from './ActionButtons';
import invoiceData from '../data/pay-run.json';

const PayRun = () => {
    const initialData = invoiceData.pay_run.invoices.map(invoice => ({
      ...invoice,
      excluded: false
    }));
  
    const [data, setData] = useState(initialData);
  
    const excludeSupplier = (supplier) => {
      setData(data.map(invoice =>
        invoice.supplier === supplier ? { ...invoice, excluded: true } : invoice
      ));
    };
  
    const excludeInvoice = (invoiceNumber) => {
      setData(data.map(invoice =>
        invoice.invoice_number === invoiceNumber ? { ...invoice, excluded: true } : invoice
      ));
    };
  
    const handleApproval = () => {
      alert('Pay run approved!');
      // Reset the state
      setData(initialData);
    };
  
    return (
      <div className="payrun-container">
        <SupplierFilter data={data} excludeSupplier={excludeSupplier} />
        <InvoiceTable data={data} excludeInvoice={excludeInvoice} />
        <ActionButtons handleApproval={handleApproval} />
      </div>
    );
  };
  
  export default PayRun;
