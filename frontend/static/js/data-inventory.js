function exportData(type) {
    const table = document.getElementById("dataTable");

    if (type === "excel" || type === "csv") {
        const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });

        if (type === "excel") {
            XLSX.writeFile(wb, "data.xlsx");
        } else {
            XLSX.writeFile(wb, "data.csv");
        }
    }

    if (type === "pdf") {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text("Export Data", 14, 15);
        doc.autoTable({
            html: '#dataTable',
            startY: 20
        });

        doc.save("data.pdf");
    }
}











