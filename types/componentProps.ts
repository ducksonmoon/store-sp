import { Product } from "./apiTypes";

export interface ProductListProps {
  products: Product[];
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SidebarProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}
