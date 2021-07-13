import { useSelector } from "react-redux";

const Header = () => {
  const fetchData = useSelector((state) => state.dataReducer);
  return (
    <header className="app-header">
      <nav className="app-nav">
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Blue Compra
          </label>
          <label htmlFor="">{fetchData[1].casa.compra}</label>
        </div>
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Blue Venta
          </label>
          <label htmlFor=""> {fetchData[1].casa.venta}</label>
        </div>
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Oficial Compra
          </label>
          <label htmlFor=""> {fetchData[0].casa.compra}</label>
        </div>
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Oficial Venta
          </label>
          <label htmlFor="">{fetchData[0].casa.venta}</label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
