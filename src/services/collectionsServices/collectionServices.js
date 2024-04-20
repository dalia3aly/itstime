import { db } from "../../config/firestore";
import { collection, getDocs } from "firebase/firestore";

const getCollectionImages = async () => {
  try {
    const collectionImagesRef = collection(db, "collections");
    const snapshot = await getDocs(collectionImagesRef);
    if (snapshot.empty) {
      console.log("No matching documents in collections.");
      return [];
    }
    const imagesData = snapshot.docs.map((doc) => {
      const data = doc.data();
      const urlKey = Object.keys(data)[0];
      return data[urlKey];
    });

    // console.log("Fetched images data:", imagesData);
    return imagesData;
  } catch (error) {
    console.error("Error fetching collection images:", error);
    return [];
  }
};

export { getCollectionImages };
