import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginAdmin } from "../services/Authservices";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginAdmin(form.email, form.password);

    if (data.token) {
      login(data.admin, data.token);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border w-full p-3 rounded mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border w-full p-3 rounded mb-4"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}