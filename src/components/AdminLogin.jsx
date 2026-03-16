import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else navigate('/admin/dashboard');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="max-w-md w-full bg-white p-10 shadow-2xl">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 text-center">Admin <span className="text-blue-600">Access</span></h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Admin Email" className="w-full p-4 border outline-none focus:ring-2 ring-blue-500 font-bold" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full p-4 border outline-none focus:ring-2 ring-blue-500 font-bold" onChange={(e) => setPassword(e.target.value)} required />
          <button className="w-full bg-blue-600 text-white py-4 font-black uppercase tracking-widest hover:bg-blue-700 transition-all">Enter Dashboard</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;