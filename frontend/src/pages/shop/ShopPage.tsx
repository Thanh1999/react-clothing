import { Route, RouteComponentProps } from "react-router-dom";
import CollectionOverview from "../../components/collection-oveview/collection-overview";
import CollectionPage from "../../components/collection/collection";
import "./ShopPage.scss"



const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {

    return (
        <div className='shop-page'>
            <Route path={`${match.path}`} exact component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} exact
                component={CollectionPage}
            />
        </div>
    );

}






export default ShopPage