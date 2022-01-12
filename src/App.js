import React, { useState, useEffect } from "react";
import "./App.css";
import laptops from "laptops";

function App() {
  const [brandArr, setBrandArr] = useState([]);
  const [brand, setBrand] = useState("Apple");
  const [modelArr, setModelArr] = useState([]);
  const [seriesArr, setSeriesArr] = useState("");
  // const brand = ()=> useState("Apple");
  //  console.log(brand)

  useEffect(() => {
    const UpdateSeries = () => {
      const series = laptops.getSeries(`${brand}`);

      const mapSeries = series.map((serial, i) => (
        <option key={i} value={serial}>
          {serial}
        </option>
      ));
      setSeriesArr(mapSeries);
    };
    const UpdateModel = () => {
      const models = laptops.getModel(`${brand}`);
      const mapModel = models.map((model, i) => (
        <option key={i} value={model}>
          {model}
        </option>
      ));
      setModelArr(mapModel);
    };
    const UpdateBrand = () => {
      const brands = laptops.getBrand("all");
      const mapBrand = brands.models.map((brand, i) => (
        <option key={i} value={brand}>
          {brand}
        </option>
      ));
      setBrandArr(mapBrand);
      setBrand("Apple");
    };
    UpdateBrand();
    UpdateModel();
    UpdateSeries();
  }, [brand]);
  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (name === "selectModel") {
      const models = laptops.getModel(`${value}`);
      const mapModel = models.map((model, i) => (
        <option key={i} value={model}>
          {model}
        </option>
      ));
      setModelArr(mapModel);
      const series = laptops.getSeries(`${value}`);
      const mapSeries = series.map((serial, i) => (
        <option key={i} value={serial}>
          {serial}
        </option>
      ));
      setSeriesArr(mapSeries);
    }
  };
  return (
    <div className="App">
      <h2>Test Out npm laptops</h2>
      <div>
        <label className="label">Select Laptop Brand</label>
        <select className="select" name="selectModel" onChange={handleChange}>
          {brandArr}
        </select>
      </div>
      <div>
        <label className="label">Select Laptop Model</label>
        <select className="select">{modelArr}</select>
      </div>
      <div>
        <label className="label">Select Laptop Series</label>
        <select className="select" name="selectSeries" onChange={handleChange}>
          {seriesArr}
        </select>
      </div>
    </div>
  );
}

export default App;
