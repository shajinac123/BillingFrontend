import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Login from "./pages/Login";
import StaffLogin from "./pages/StaffLogin";

import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Sales from "./components/Sales"
import AdminOrders from "./pages/AdminOrders"

//Inventory
import InventoryForm from "./Inventory/InventoryForm"
import InventoryList from "./Inventory/InventoryList"


// Products
import ProductList from "./Products/ProductList";
import AddProduct from "./Products/AddProduct";

// Categories
import CategoryList from "./Category/CategoryList";
import AddCategory from "./Category/AddCategory";

// Staff
import StaffList from "./Staff/StaffList";
import AddStaff from "./Staff/AddStaff";
import EditStaff from "./Staff/EditStaff";

// Manager
import ManagerDashboard from "./staff/Manager/ManagerDashboard";
import CashierDashboard from "./Staff/Cashier/CashierDashboard"
import ChefDashboard from "./Staff/Chef/ChefDashboard"
import WaiterDashboard from "./Staff/Waiter/WaiterDashboard"
import CashierProductList from "./Staff/Cashier/CashierProductList"
import SaleTables from "./Staff/Manager/SaleTables"
import Orders from "./Staff/Manager/Orders"

import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";
import StaffProtectedRoute from "./components/StaffProtectedRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>

          <Routes>

            {/* Admin Login */}
            <Route path="/" element={<Login />} />

            {/* Staff Login */}
            <Route path="/staff/login" element={<StaffLogin />} />

            {/* ================= ADMIN ================= */}

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/billing"
              element={
                <ProtectedRoute>
                  <Billing />
                </ProtectedRoute>
              }
            />

            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <ProductList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/products/add"
              element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              }
            />

            <Route
              path="/categories"
              element={
                <ProtectedRoute>
                  <CategoryList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/categories/add"
              element={
                <ProtectedRoute>
                  <AddCategory />
                </ProtectedRoute>
              }
            />

            <Route
              path="/staff"
              element={
                <ProtectedRoute>
                  <StaffList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/staff/add"
              element={
                <ProtectedRoute>
                  <AddStaff />
                </ProtectedRoute>
              }
            />

            <Route
              path="/staff/edit/:id"
              element={
                <ProtectedRoute>
                  <EditStaff />
                </ProtectedRoute>
              }
            />

            <Route
              path="/sales"
              element={
                <ProtectedRoute>
                  <Sales />
                </ProtectedRoute>
              }
            />
            
             <Route
              path="/adminorders"
              element={
                <ProtectedRoute>
                  <AdminOrders />
                </ProtectedRoute>
              }
            />

            {/* ================= MANAGER ================= */}

            <Route
              path="/Managerdashboard"
              element={
                <StaffProtectedRoute allowedRole="Manager">
                  <ManagerDashboard />
                </StaffProtectedRoute>
              }
            />
            <Route
              path="/saletables"
              element={
                <StaffProtectedRoute allowedRole="Manager">
                  <SaleTables />
                </StaffProtectedRoute>
              }
            />
            <Route
              path="/manageorder"
              element={
                <StaffProtectedRoute allowedRole="Manager">
                  <Orders />
                </StaffProtectedRoute>
              }
            />

            <Route
              path="/inventory"
              element={
                <ProtectedRoute>
                  <InventoryList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/inventory/add"
              element={
                <ProtectedRoute>
                  <InventoryForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/inventory/edit/:id"
              element={
                <ProtectedRoute>
                  <InventoryForm isEdit={true} />
                </ProtectedRoute>
              }
            />
            {/* ================= CASHIER ================= */}
            <Route
              path="/Cashierdashboard"
              element={
                <StaffProtectedRoute allowedRole="Cashier">
                  <CashierDashboard />
                </StaffProtectedRoute>
              }
            />

            <Route
              path="/CashierProductList"
              element={
                <StaffProtectedRoute allowedRole="Cashier">
                  <CashierProductList />
                </StaffProtectedRoute>
              }
            />

            {/* ================= CHEF ================= */}
            <Route
              path="/ChefDashboard"
              element={
                <StaffProtectedRoute allowedRole="Chef">
                  <ChefDashboard />
                </StaffProtectedRoute>
              }
            />

            {/* ================= WAITER ================= */}
            <Route
              path="/WaiterDashboard"
              element={
                <StaffProtectedRoute allowedRole="Waiter">
                  <WaiterDashboard />
                </StaffProtectedRoute>
              }
            />
          </Routes>

        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);