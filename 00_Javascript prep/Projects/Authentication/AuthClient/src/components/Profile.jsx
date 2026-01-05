import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 p-8">
            {/* Profile Image */}
            <div className="w-full md:w-56 shrink-0">
              <div className="w-full h-56 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                  }}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500 mt-1">{user.email}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Phone
                  </p>
                  <p className="text-gray-900 font-medium mt-1">{user.phone}</p>
                </div>

                {/* Role */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Role
                  </p>
                  <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
                    {user.role}
                  </span>
                </div>

                {/* User ID */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    User ID
                  </p>
                  <p className="text-gray-900 font-medium mt-1 break-all">
                    {user.id}
                  </p>
                </div>

                {/* Account Status */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Account Status
                  </p>
                  <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-8 py-4 bg-gray-50 text-sm text-gray-500">
            Joined recently · Manage your profile details
          </div>
        </div>
      </div>
    </>
  );
}
