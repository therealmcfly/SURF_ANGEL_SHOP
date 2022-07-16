import { useContext } from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import CartIcon from "../../components/CartIcon/CartIcon";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
	const { cartFocus } = useContext(CartContext);

  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <h1>SURF ANGEL</h1>
        </Link>
        <div className="nav-links-container">
          {currentUser && <span>Hello {currentUser.displayName||currentUser.email}</span>}
					<Link className="nav-link" to="/shop">
              SHOP
            </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
					<CartIcon/>
        </div>
				{cartFocus&&<CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
