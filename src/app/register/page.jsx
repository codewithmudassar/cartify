'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Eye, EyeClosedIcon } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: '',
    userName: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [view,setView]= useState(false)

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/rejister', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      router.push('/login'); // redirect after registration
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          name="userName"
          value={form.userName}
          onChange={handleChange}
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded"
        />
        <div className='relative'>

        <input
        type={view ?"text":"password"}
          
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded "
        />
        <div onClick={()=> setView(!view)} className=' absolute right-1 top-2  text-gray-400'>{view ?<Eye/> :<EyeClosedIcon/>}</div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
        <p className="mt-4 text-sm">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </form>
    </div>
  );
}
