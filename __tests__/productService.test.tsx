import { fetchProducts } from "@/services/productService";

describe("fetchProducts function", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ products: ["product1", "product2"] }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches products successfully", async () => {
    const data = await fetchProducts({});
    expect(data).toEqual({ products: ["product1", "product2"] });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://dummyjson.com/products?limit=10&skip=0"
    );
  });
});
