import { db } from "../../config/firestore";
import { doc, runTransaction } from "firebase/firestore";

const updateProductQuantity = async (productId, decrement) => {
  if (!productId) {
    console.error("Product ID is undefined.");
    return;
  }

  const productRef = doc(db, "products", productId);

  await runTransaction(db, async (transaction) => {
    const productDoc = await transaction.get(productRef);
    if (!productDoc.exists()) {
      throw new Error("Document does not exist!");
    }

    const newQuantity = productDoc.data().quantity - decrement;
    if (newQuantity >= 0) {
      transaction.update(productRef, { quantity: newQuantity });
    } else {
      throw "Not enough inventory.";
    }
  });
};

export { updateProductQuantity };
