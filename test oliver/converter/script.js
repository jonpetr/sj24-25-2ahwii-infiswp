document.getElementById("convertButton").addEventListener("click", () => {
    const fileInput = document.getElementById("fileInput");
    const outputMessage = document.getElementById("outputMessage");

    if (!fileInput.files.length) {
        outputMessage.textContent = "Bitte wähle eine JSON-Datei aus.";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        try {
            const jsonData = JSON.parse(event.target.result);
            const excelData = convertToExcel(jsonData);
            downloadExcelFile(excelData);
            outputMessage.textContent = "Die Datei wurde erfolgreich konvertiert!";
        } catch (error) {
            outputMessage.textContent = "Fehler beim Verarbeiten der Datei.";
        }
    };

    reader.readAsText(file);
});

function convertToExcel(jsonData) {
    const rows = [];
    const headers = Object.keys(jsonData[0]);
    rows.push(headers.join("\t"));

    jsonData.forEach((item) => {
        const row = headers.map((header) => item[header]);
        rows.push(row.join("\t"));
    });

    return rows.join("\n");
}

function downloadExcelFile(data) {
    const blob = new Blob([data], { type: "text/tab-separated-values" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted_file.xls";
    a.click();
    URL.revokeObjectURL(url);
}