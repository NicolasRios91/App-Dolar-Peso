import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./models/header";
import NewForm from "./models/newForm";
import Footer from "./models/footer";
import { fetchDolar } from "./api";
import { useDispatch } from "react-redux";
import { SET_FETCH_DATA } from "./actions";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDolar()
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((dataResponse) => {
        dispatch(SET_FETCH_DATA(dataResponse));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return null;
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <div className="main">
            <NewForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
