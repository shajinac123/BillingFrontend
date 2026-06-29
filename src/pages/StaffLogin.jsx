import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function StaffLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackToAdmin = () => {
  navigate("/dashboard"); 
};

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/staff/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("staff", JSON.stringify(res.data.staff));

    const role = res.data.staff.role;

    if (role === "Manager") {
      navigate("/ManagerDashboard");
    } else if (role === "Cashier") {
      navigate("/CashierDashboard");
    } else if (role === "Chef") {
      navigate("/ChefDashboard");
    } else if (role === "Waiter") {
      navigate("/WaiterDashboard");
    } else {
      navigate("/");
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form
      onSubmit={handleLogin}
      className="bg-white p-8 rounded-xl shadow-md w-96"
    >
      {/* Back Button */}
      <button
        type="button"
        onClick={handleBackToAdmin}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft size={18} />
        Back to Admin Dashboard
      </button>

      <h2 className="text-3xl font-bold mb-6 text-center">
        Staff Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="border w-full p-3 rounded mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border w-full p-3 rounded mb-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded"
      >
        Login
      </button>
    </form>
  </div>
);
}