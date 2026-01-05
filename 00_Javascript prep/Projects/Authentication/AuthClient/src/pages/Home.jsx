import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Make sure to import your new component

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navbar Component */}
      <Navbar />

      {/* 2. Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                System Online
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Master your <br />
              <span className="text-indigo-600">Workflow.</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg">
              Hello,{" "}
              <span className="font-semibold text-gray-900">{user?.name}</span>.
              We've organized your latest updates and project milestones right
              here.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95">
                Launch Dashboard
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">
                Documentation
              </button>
            </div>
          </motion.div>

          {/* Right Side: Visual Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse transition-delay-1000"></div>

            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                alt="Data Visualization"
                className="rounded-2xl w-full object-cover aspect-video shadow-inner"
              />
            </div>
          </motion.div>
        </div>

        {/* 3. Quick Stats Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Tasks Pending" value="08" color="bg-orange-500" />
          <StatCard label="Completed" value="24" color="bg-green-500" />
          <StatCard label="Hours Tracked" value="120" color="bg-blue-500" />
          <StatCard label="Efficiency" value="94%" color="bg-purple-500" />
        </div>
      </main>
    </div>
  );
}

// Small helper component for the stats
function StatCard({ label, value, color }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
    >
      <div className={`w-10 h-1 mb-4 rounded-full ${color}`}></div>
      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
        {label}
      </p>
      <h4 className="text-4xl font-black text-gray-900 mt-2">{value}</h4>
    </motion.div>
  );
}
