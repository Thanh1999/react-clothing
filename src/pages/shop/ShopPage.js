import { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collection-oveview/collection-overview";
import WithSpiner from "../../components/with-spiner/with-spiner";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectCollectionIsFetching } from "../../redux/shop/shop.selectors";
import CollectionPage from "../collection/collection";
import "./ShopPage.scss";

const CollectionOverviewSpinner = WithSpiner(CollectionOverview);
const CollectionPageSpinner = WithSpiner(CollectionPage);

const ShopPage = ({ fetchCollections, isLoading, match }) => {

    useEffect(() => {
        fetchCollections()
    }, [fetchCollections])

    return (
        <div className='shop-page'>
            <Route path={`${match.path}`} exact render={(props) => <CollectionOverviewSpinner isLoading={isLoading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} exact
                render={(props) => <CollectionPageSpinner isLoading={isLoading} {...props} />}
            />
        </div>
    );
}

const mapStateToProps = createStructuredSelector(
    { isLoading: selectCollectionIsFetching }
)

const mapToDispatchProps = (dispatch) => ({
    fetchCollections: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps, mapToDispatchProps)(ShopPage)