import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStaff() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    role: "",
    address: "",
    joiningDate: "",
    salary: "",
    active: true,
  });

  useEffect(() => {
    if (id) {
      fetchStaff();
    }
  }, [id]);

  const fetchStaff = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/staff/${id}`);
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch staff");
      }

      setFormData({
        name: data.staff.name || "",
        employeeId: data.staff.employeeId || "",
        email: data.staff.email || "",
        phone: data.staff.phone || "",
        role: data.staff.role || "",
        address: data.staff.address || "",
        joiningDate: data.staff.joiningDate
          ? data.staff.joiningDate.split("T")[0]
          : "",
        salary: data.staff.salary || "",
        active: data.staff.active ?? true,
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateStaff = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/staff/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Update failed");
      }

      alert(data.message);
      navigate("/staff");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Staff</h2>

      <form onSubmit={updateStaff} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Update Staff
        </button>
      </form>
    </div>
  );
}