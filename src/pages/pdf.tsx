
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
      <div id="card" className="bg-red-500 shadow-md rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">ID Card</h2>
        <p className="mb-2"><span className="font-semibold">Name:</span> John Doe</p>
        <p className="mb-2"><span className="font-semibold">Date of Birth:</span> 1995-01-01</p>
        <p className="mb-2"><span className="font-semibold">Address:</span> 123 Main Street</p>
        <p className="mb-2"><span className="font-semibold">Father's Name:</span> Richard Doe</p>
      </div>
    <button
 onClick={newFunction()}
  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
>
  Generate PDF & Upload
</button>

    </div>
  )

  function newFunction() {
    return async () => {
      const card = document.getElementById('card');
      if (card) {
        try {
          // Convert card to canvas
          const canvas = await html2canvas(card);
          const imgData = canvas.toDataURL('image/png');
  
          // Generate PDF
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 10, 10);
          const pdfBlob = pdf.output('blob'); // Get PDF as a Blob
  
          // Create FormData for upload
          const formData = new FormData();
          formData.append('file', pdfBlob, 'id_card.pdf');
  
          // Pinata API URL
          const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
  
          // API Key, Secret Key, and JWT (use one for authentication)
          const jwtToken = 'YOUR_PINATA_JWT_TOKEN'; // Replace with your JWT token
  
          // Upload to Pinata
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: `Bearer ${jwtToken}`, // Add your JWT token here
            },
          });
  
          const result = await response.json();
          if (response.ok) {
            console.log('PDF pinned to IPFS:', result);
            alert(`Upload successful! IPFS Hash: ${result.IpfsHash}`);
          } else {
            console.error('Pinata API error:', result);
            alert('Failed to upload to Pinata. Check console for details.');
          }
        } catch (error) {
          console.error('Error generating PDF or uploading to Pinata:', error);
          alert('An error occurred. Please check the console for details.');
        }
      } else {
        console.error('Card element not found!');
        alert('Card element not found!');
      }
    };
  }
  
}


export default Pdf



