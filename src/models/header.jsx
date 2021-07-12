const Header = ({
  blueDollarBuy,
  blueDollarSell,
  officialDollarBuy,
  officialDollarSell,
}) => {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Blue Compra
          </label>
          <label htmlFor="">{blueDollarBuy}</label>
        </div>
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Blue Venta
          </label>
          <label htmlFor=""> {blueDollarSell}</label>
        </div>
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Oficial Compra
          </label>
          <label htmlFor=""> {officialDollarBuy}</label>
        </div>
        <div className="app-nav-values">
          <label className="app-nav-label" htmlFor="">
            Dolar Oficial Venta
          </label>
          <label htmlFor="">{officialDollarSell}</label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
