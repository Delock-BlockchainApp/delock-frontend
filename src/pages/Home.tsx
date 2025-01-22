import Card1 from '../components/card1'; // Adjust the path based on where Card1 is located
import Card2 from '../components/card2'; // Import Card2 component

function Home() {
  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      
      {/* Cards Container */}
      <div className="flex space-x-4">
        <Card1 /> {/* Render the Card1 component */}
        <Card2 /> {/* Render the Card2 component */}
      </div>
    </div>
  );
}

export default Home;

