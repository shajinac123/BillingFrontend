import axios from "axios";

const API = "http://localhost:5000/api/inventory";

export const getInventory = () => axios.get(API);

export const addInventory = (data) => axios.post(API, data);

export const updateInventory = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteInventory = (id) =>
  axios.delete(`${API}/${id}`);

export const getInventoryById = (id) =>
  axios.get(`${API}/${id}`);