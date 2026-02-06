function downloadPDF() {
  const element = document.getElementById("resume");

  html2pdf().from(element).set({
    margin: 0.4,
    filename: "Resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  }).save();
}