import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post('http://localhost:5000/api/auth/signup', {
      name, email, password
    })
    .then(() => {
      alert('Signup successful');
      navigate('/login');
    })
    .catch(err => alert(err.response.data.error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSignup} className="w-full bg-blue-500 text-white p-2 rounded">Signup</button>
      </div>
    </div>
  );
}

export default Signup;
