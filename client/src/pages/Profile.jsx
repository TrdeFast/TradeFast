// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/users/me');
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <div className="text-white">Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 text-white">
      <div className="bg-emerald-950 p-6 rounded-2xl shadow-lg col-span-1">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="avatar"
            className="w-16 h-16 rounded-full border-2 border-emerald-400"
          />
          <div>
            <h3 className="text-xl font-bold">Nickname</h3>
            <Button size="sm" className="mt-1 bg-emerald-800 hover:bg-emerald-700">Edit</Button>
          </div>
        </div>
        <p className="text-sm">{user.email} <span className="text-emerald-400 cursor-pointer">Change email</span></p>
        <p className="text-sm">Пароль: <span className="text-emerald-400 cursor-pointer">Change password</span></p>
        <p className="text-sm">Login: {user.name}</p>
        <p className="text-sm">Registered: {new Date(user.createdAt).toLocaleDateString()}</p>
        <p className="text-sm">Tatalays: 24 days</p>
        <Button variant="outline" className="mt-4 w-full">Sign out</Button>
      </div>

      <div className="bg-emerald-950 p-6 rounded-2xl shadow-lg">Activity</div>
      <div className="bg-emerald-950 p-6 rounded-2xl shadow-lg">Settings</div>
      <div className="bg-emerald-950 p-6 rounded-2xl shadow-lg col-span-1 lg:col-span-2">Data</div>
    </div>
  );
};

export default Profile;
