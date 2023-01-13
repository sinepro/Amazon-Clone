import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link className="header__link" to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type={"text"} />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link className="header__link" to={!user && "/login"}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">
                            Hello {user ? user.email : "Guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <Link className="header__link" to={"/orders"}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>

                <Link className="header__link" to={"/"}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                </Link>

                <Link className="header__link" to={"/checkout"}>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;