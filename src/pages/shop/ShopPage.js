import { Component } from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.js";
import SHOP_DATA from "./ShopData.js";
import "./ShopPage.scss";

class ShopPage extends Component{
    constructor(){
        super();
        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div className='shop-page'>{
                this.state.collections.map(({id, ...otherProps})=><PreviewCollection key={id} {...otherProps}/>)
            }</div>
        );
    }
}

export default ShopPage