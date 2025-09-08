import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to </h1>
      <p className="mb-6">Learn anytime, anywhere with the best courses!</p>
      <div>
        <Link to="/courses" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">View Courses</Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Get Started</Link>
      </div>
    </div>
  );
}

export default Home;
