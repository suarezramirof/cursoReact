import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { CartContextProvider } from "./context/CartContext";
import { ProductsContextProvider } from "./context/ProductsContext";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3uTW1gR4Ku0r4e9v8Bfc4Gs83GdlcfvA",
  authDomain: "prueba-firebase-aefcd.firebaseapp.com",
  projectId: "prueba-firebase-aefcd",
  storageBucket: "prueba-firebase-aefcd.appspot.com",
  messagingSenderId: "538375098680",
  appId: "1:538375098680:web:89ed569fc35da4c238b1cd",
  measurementId: "G-PB783L8ERR",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
