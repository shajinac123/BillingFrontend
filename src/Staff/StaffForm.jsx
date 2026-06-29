import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StaffForm({ initialData = {}, isEdit = false }) {
  const navigate = useNavigate();

  const [staff, setStaff] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    role: "Cashier",
    password: "",
    address: "",
    joiningDate: "",
    salary: "",
    active: true,
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setStaff({
        name: initialData.name || "",
        employeeId: initialData.employeeId || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        role: initialData.role || "Cashier",
        password: "",
        address: initialData.address || "",
        joiningDate: initialData.joiningDate
          ? initialData.joiningDate.slice(0, 10)
          : "",
        salary: initialData.salary || "",
        active: initialData.active ?? true,
      });
    }
  }, [initialData, isEdit]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setStaff((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const url = isEdit
      ? `http://localhost:5000/api/staff/${initialData._id}`
      : "http://localhost:5000/api/staff";

    const method = isEdit ? "PUT" : "POST";

    const body = { ...staff };

    if (isEdit && !body.password) {
      delete body.password;
    }

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to save staff.");
    }

    alert(
      isEdit
        ? "Staff Updated Successfully!"
        : "Staff Added Successfully!"
    );

    navigate("/staff");
 } catch (error) {
  console.error("========== ADD STAFF ERROR ==========");
  console.error(error);
  alert(error.message);
}

};

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isEdit ? "Edit Staff" : "Add Staff"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block font-medium mb-2">
            Staff Name
          </label>

          <input
            type="text"
            name="name"
            value={staff.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Employee ID
          </label>

          <input
            type="text"
            name="employeeId"
            value={staff.employeeId}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={staff.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={staff.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Role
          </label>

          <select
            name="role"
            value={staff.role}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="Cashier">Cashier</option>
            <option value="Manager">Manager</option>
            <option value="Waiter">Waiter</option>
            <option value="Chef">Chef</option>
            <option value="Kitchen Staff">Kitchen Staff</option>
            <option value="Delivery Boy">Delivery Boy</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {!isEdit && (
          <div>
            <label className="block font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={staff.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>
        )}

        <div>
          <label className="block font-medium mb-2">
            Address
          </label>

          <textarea
            name="address"
            value={staff.address}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Joining Date
          </label>

          <input
            type="date"
            name="joiningDate"
            value={staff.joiningDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Salary
          </label>

          <input
            type="number"
            name="salary"
            value={staff.salary}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="active"
            checked={staff.active}
            onChange={handleChange}
          />

          <label>Active</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          {isEdit ? "Update Staff" : "Save Staff"}
        </button>

      </form>
    </div>
  );
}