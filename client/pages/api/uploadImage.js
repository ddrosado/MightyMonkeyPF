import app from "./firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const storage = getStorage(app);

export default async function imageUpload(file,route) {
  const imagesRef = ref(storage, route);
  await uploadBytes(imagesRef, file);
  const url = await getDownloadURL(imagesRef)
  return url
}