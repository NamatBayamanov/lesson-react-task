import mainImage from "../../assets/main__pizza.jpg";





function PizzaCart() {
  return ( 
    <>
      

            <section className="main__cart">
              <div className="pizza__items">
                <div className="item">
                  <div className="img__container">
                    <img src={mainImage} alt="#" />
                  </div>
                  <h3 className="pizza__title">ChizBurger-pizza</h3>
                  <div className="preferences">
                    <button>Thick</button>
                    <button>Traditional</button>
                    <button>26sm</button>
                    <button>30sm</button>
                    <button className="preference__last">43sm</button>
                  </div>
                  <div className="wish">
                    <h4>from 395$</h4>
                    <button>+Add</button>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
}

export default PizzaCart;