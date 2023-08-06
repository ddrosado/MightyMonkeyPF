import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBeQSChvNUCfjiwKPRHey5Lf5ZcQEqi2IA",
  authDomain: "mightymonkeyclub-861ae.firebaseapp.com",
  projectId: "mightymonkeyclub-861ae",
  storageBucket: "mightymonkeyclub-861ae.appspot.com",
  messagingSenderId: "81000800451",
  appId: "1:81000800451:web:cbde0eb0e5a4492fbc0276",
  measurementId: "G-XE07K6MKRR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const storage = getStorage(app)

export const uploadImage = async(file, sport)=>{
  const storageRef = ref(storage, `sport/${sport}/${file.name}`)
  await uploadBytes(storageRef ,file)
  return await getDownloadURL(storageRef)
}
