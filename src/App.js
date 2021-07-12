import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./models/header";
import Form from "./models/form";
import NewForm from "./models/newForm";
import Footer from "./models/footer";
import { fetchDolar } from "./api";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDolar()
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((dataResponse) => {
        setData(dataResponse);
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
        <Header
          blueDollarBuy={data[1].casa.compra}
          blueDollarSell={data[1].casa.venta}
          officialDollarBuy={data[0].casa.compra}
          officialDollarSell={data[0].casa.venta}
        ></Header>
        <div className="container">
          <div className="main">
            {/* <Form dolarValue={data[1].casa.venta}></Form>  */}
            <NewForm dolarValue={data[1].casa.venta}></NewForm>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
