import { SidebarProps } from "@/types";
import React, { useEffect, useState } from "react";

const Sidebar: React.FC<SidebarProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <aside className="bg-gray-200 p-4">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`p-2 hover:bg-gray-400 cursor-pointer ${
              selectedCategory === category ? "bg-blue-300" : ""
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
