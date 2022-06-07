import logoImage from "../../assets/pizza-logo.jpg";
import { BsCart4 } from "react-icons/bs";


function Logo() {
  return ( 
    <>
      <div className="Logo">
            <div className="logo__left">
              <h2 className="logo__title">REACT PIZZA</h2>
              <span className="logo__span">
                it is just words nothing important
              </span>
              <div className="img__container">
                <img src={logoImage} alt="#" />
              </div>
            </div>

            <button>
              <span className="logo__price">$320</span>
              <span className="fence"></span>
              <span className="logo__cart">
                <BsCart4 />
              </span>
            </button>
          </div>
    </>
    );
}

export default Logo;