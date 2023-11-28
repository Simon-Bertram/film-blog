import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value.trim(),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/users/auth', formData);
      setLoading(false);
    } catch (error) {
      console.error(error?.message);
      setError('Invalid email or password');
    }
  };

  return ( 
    <div className="p-3 max-w-lg mx-auto -mt-24">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          onChange={handleChange}
          type="email" 
          placeholder="Email" 
          className="border p-3 rounded-lg"  
          id="email"
        />
        <input 
          onChange={handleChange}
          type="password" 
          placeholder="Password" 
          className="border p-3 rounded-lg"  
          id="password"
        />
        <button 
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-50"
        >
          {loading ? 'Loading' : 'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to="/signup" className="hover:underline">
          <span>Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
   );
}
 
export default LoginPage;