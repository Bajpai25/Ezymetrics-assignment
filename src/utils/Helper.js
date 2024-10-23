import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Helper = (data) => {
  const generateCSV = () => {
    const csvContent = "Month,New Leads,Converted,Lost\n" +
      data.monthly.map(row =>
        `${row.month},${row.newLeads},${row.converted},${row.lost}`
      ).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lead-report.csv';
    a.click();
    
    // Clean up
    window.URL.revokeObjectURL(url);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text('Lead Report', 14, 15);
    doc.setFontSize(12);

    // Prepare data for table
    const tableHeaders = [['Month', 'New Leads', 'Converted', 'Lost']];
    const tableData = data.monthly.map(row => [
      row.month,
      row.newLeads.toString(),
      row.converted.toString(),
      row.lost.toString()
    ]);

    // Add summary 
    const totalNewLeads = data.monthly.reduce((sum, row) => sum + row.newLeads, 0);
    const totalConverted = data.monthly.reduce((sum, row) => sum + row.converted, 0);
    const totalLost = data.monthly.reduce((sum, row) => sum + row.lost, 0);
    const conversionRate = ((totalConverted / totalNewLeads) * 100).toFixed(1);

    // Add table
    autoTable(doc, {
      head: tableHeaders,
      body: tableData,
      startY: 25,
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [66, 139, 202]
      }
    });

    // Add summary after table
    const finalY = doc.lastAutoTable.finalY || 150;
    doc.text(`Total New Leads: ${totalNewLeads}`, 14, finalY + 10);
    doc.text(`Total Converted: ${totalConverted}`, 14, finalY + 20);
    doc.text(`Total Lost: ${totalLost}`, 14, finalY + 30);
    doc.text(`Conversion Rate: ${conversionRate}%`, 14, finalY + 40);

    // Add footer with date
    const today = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Generated on: ${today}`, 14, doc.internal.pageSize.height - 10);

    // Save PDF
    doc.save('lead-report.pdf');
  };

  return {
    generateCSV,
    generatePDF
  };
};

export default Helper;