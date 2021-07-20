import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-oveview/collection-overview";
import CollectionPage from "../collection/collection";
import "./ShopPage.scss";

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route path={`${match.path}`} component={CollectionOverview} exact/>
            <Route path={`${match.path}/:collectionId`} exact component={CollectionPage}/>
        </div>
    );
}


export default ShopPage