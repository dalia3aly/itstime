import { db } from "../../config/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  runTransaction,
} from "firebase/firestore";

// fetch all products
const getAllProducts = async () => {
  const productsCollectionRef = collection(db, "products");
  const data = await getDocs(productsCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

// fetch products by category
const getProductsByCategory = async (category) => {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", category));
  const data = await getDocs(q);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};


// fetch product by id
const getProductById = async (id) => {
  const productDocRef = doc(db, "products", id);
  const docSnap = await getDoc(productDocRef);
  return docSnap.data();
};


// add a new product
const addProduct = async (product) => {
  const productsCollectionRef = collection(db, "products");
  return await addDoc(productsCollectionRef, product);
};

// update an existing product
const updateProduct = async (id, updatedProduct) => {
  const productDocRef = doc(db, "products", id);
  return await updateDoc(productDocRef, updatedProduct);
};

export {
  getAllProducts,
  getProductsByCategory,
  getProductById,
  addProduct,
  updateProduct
};
