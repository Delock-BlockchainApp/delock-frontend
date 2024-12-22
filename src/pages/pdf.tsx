
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Pdf() {

  // const generatePdf = async () => {
  //   const card = document.getElementById('card');
  //   if (card) {
  //     const canvas = await html2canvas(card);
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, 'PNG', 10, 10);
  //     pdf.save('id_card.pdf');
  //   }
  // };
  
  // document.getElementById('generate-pdf')?.addEventListener('click', generatePdf);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div id="card" className="bg-white shadow-md rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">ID Card</h2>
        <p className="mb-2"><span className="font-semibold">Name:</span> John Doe</p>
        <p className="mb-2"><span className="font-semibold">Date of Birth:</span> 1995-01-01</p>
        <p className="mb-2"><span className="font-semibold">Address:</span> 123 Main Street</p>
        <p className="mb-2"><span className="font-semibold">Father's Name:</span> Richard Doe</p>
      </div>
    <button
 // onClick={generatePdf}
  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
>
  Generate PDF & Upload
</button>

    </div>
  )
}


export default Pdf