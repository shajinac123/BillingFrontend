import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StaffList() {
  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
console.log(staff);



  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/staff");
      const data = await res.json();
      setStaff(data.staff || []);
    } catch (error) {
      console.error(error);
    }
  };



  const deleteStaff = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this staff member?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/staff/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      alert(data.message);
      fetchStaff();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  const filteredStaff = staff.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.employeeId?.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Staff List</h2>

        <button
          onClick={() => navigate("/staff/add")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Staff
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Staff..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-80 border rounded-lg px-4 py-2 mb-5"
      />

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Employee ID</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStaff.length > 0 ? (
              filteredStaff.map((item) => (
                <tr key={item._id} className="border-t">

                  <td className="p-3">{item.name}</td>

                  <td className="p-3">{item.employeeId}</td>

                  <td className="p-3">{item.email}</td>

                  <td className="p-3">{item.phone}</td>

                  <td className="p-3">{item.role}</td>

                  <td className="p-3">₹ {item.salary}</td>

                  <td className="p-3">
                    {item.active ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        Inactive
                      </span>
                    )}
                  </td>

                  <td className="p-3 flex justify-center gap-2">

                    <button
                     
                      onClick={() => navigate(`/staff/edit/${item._id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStaff(item._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500"
                >
                  No staff found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}