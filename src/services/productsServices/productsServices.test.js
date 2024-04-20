// tests/productServices.test.js
import { describe, it, expect, vi, beforeEach } from "vitest";
import { getAllProducts } from "../services/productServices";
import { initializeFirestore, getDocs } from "firebase/firestore";

vi.mock("firebase/firestore", () => {
  const actualFirestore = vi.importActual("firebase/firestore");
  return {
    ...actualFirestore,
    getDocs: vi.fn(),
  };
});

describe("Product Services", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("fetches all products correctly", async () => {
    const mockData = {
      docs: [
        {
          id: "1",
          data: () => ({ name: "Watch 1", price: 100, category: "Men" }),
        },
        {
          id: "2",
          data: () => ({ name: "Watch 2", price: 150, category: "Women" }),
        },
      ],
    };
    getDocs.mockResolvedValue(mockData);

    const products = await getAllProducts();
    expect(products).toEqual([
      { id: "1", name: "Watch 1", price: 100, category: "Men" },
      { id: "2", name: "Watch 2", price: 150, category: "Women" },
    ]);
  });
});
