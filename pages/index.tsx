import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { fetchProducts } from "@/services/productService";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts({ page: currentPage }).then((data) => {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 10));
    });
  }, [category, currentPage, searchQuery]);

  const handleCategorySelect = (newCategory: string) => {
    if (newCategory !== category) {
      setCategory(newCategory);
      setCurrentPage(1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onSearch={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />
      <div className="flex flex-1">
        <Sidebar
          onSelectCategory={handleCategorySelect}
          selectedCategory={category}
        />
        <div className="flex-grow">
          <ProductList products={products} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
