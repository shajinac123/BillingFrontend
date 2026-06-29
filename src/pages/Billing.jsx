import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";
import BillSummary from "../components/BillSummary";
import SearchBar from "../components/SearchBar";
import CategoryButtons from "../components/CategoryButtons";

import { useCart } from "../context/CartContext";

export default function Billing() {
   const { cart } = useCart();

const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("All");
const [search, setSearch] = useState("");
const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);
    // products fetching
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/products");

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();

            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    // category fetching
    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");

            if (!response.ok) {
                throw new Error("Failed to fetch categories");
            }

            const data = await response.json();

            setCategories([
                { _id: "all", name: "All" },
                ...data,
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 min-h-screen">

                <Navbar />

                <div className="grid grid-cols-3 gap-5 p-6">

                    <div className="col-span-2">

                        <SearchBar
                            search={search}
                            setSearch={setSearch}
                        />

                        
                        <CategoryButtons
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />

                        <div className="grid grid-cols-3 gap-5 mt-5">

                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}

                        </div>

                    </div>

                    <div>

                        <div className="bg-white rounded-xl shadow p-5">

                            <h2 className="text-xl font-bold mb-4">
                                Current Bill
                            </h2>

                            {cart.map((item) => (
                                <CartItem
                                    key={item._id}
                                    item={item}
                                />
                            ))}

                        </div>

                        <div className="mt-5">
                            <BillSummary />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}