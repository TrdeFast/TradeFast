// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { User, Settings, BarChart3, DollarSign, LineChart } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { to: '/profile', icon: <User />, label: 'Profile' },
    { to: '/trade', icon: <DollarSign />, label: 'Trade' },
    { to: '/stats', icon: <BarChart3 />, label: 'Stats' },
    { to: '/analytics', icon: <LineChart />, label: 'Analytics' },
    { to: '/settings', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <aside className="bg-emerald-950 text-white w-16 sm:w-20 h-screen flex flex-col items-center py-6 gap-4 shadow-lg rounded-r-2xl">
      <div className="text-sm font-bold text-emerald-400 tracking-widest mb-6">TRADEFAST</div>
      {navItems.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            \`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 \${isActive ? 'bg-emerald-700 text-white' : 'text-white/50 hover:bg-emerald-800'}\`
          }
          title={label}
        >
          {icon}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
