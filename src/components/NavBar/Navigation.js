import React, {Component} from "react"; 
import "../NavBar/NavBar.css"
import { CartContext } from "../CartContext";

class NavBar extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        let {item, size, increment } = this.context;
        return(
            <div>
                <div className="navbar_component">
                <div className="navbar_logo"></div>
                <div className="navbar_locator">
                    <div className="navbar_locatorImage"></div>
                    <div className="nav_location">
                    <div className="nav_location_greet">Hello</div>
                    <div className="navbar_location">Lucknow</div>
                    </div>
                </div>
                <div className="navbar_searchcomponent">
                 <div>
                    <select className="nav_dropdown"> 
                        <option value="All">All</option>
                        <option value="Aexal">Alexa</option>
                        <option value="Books">Books</option>
                        <option value="Baby">Baby</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Clothes">Clothes</option>
                    </select>
                 </div>
                 <div>
                    <input type="text" className="navbar_searchbox"></input>
                 </div>
                 <div className="navbar_searchboxdiv">
                    <div className="navbar_searchicon"></div>
                 </div>
                </div>

                <div className="navbar_text navbar_signin">
                    <div style={{fontSize:"14px"}}>Hello,Sign in</div>
                    <div style={{fontWeight:"bold"}}>Accounts & Lists</div>
                </div>
                <div className="navbar_text navbar_returns">
                    <div style={{fontSize:"14px"}}>Returns</div>
                    <div style={{fontWeight:"bold"}}>& Order</div>
                </div>
                <div className="navbar_text navbar_cart">
                    <div className="cart_image"></div>
                        <div className="cart_item">{size}</div>
                    <div className="navbar_text_cart">Cart</div>
                </div>
            </div>
               <div className="navbar_footer">
                 <div className="navbar_footer_text">Amazon miniTV</div>
                 <div className="navbar_footer_text">Best Seller</div>
                 <div className="navbar_footer_text">Mobiles</div>
                 <div className="navbar_footer_text">Today's Deals</div>
                 <div className="navbar_footer_text">Customer Service</div>
                 <div className="navbar_footer_text">Electronics</div>
                 <div className="navbar_footer_text">Prime</div>
                 <div className="navbar_footer_text">New Release</div>
                 <div className="navbar_footer_text">Home & Kitchen</div>
                 <div className="navbar_footer_text">Amazon Pay</div>
               </div>
            </div>
        );
    }
}

export default NavBar;