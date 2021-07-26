import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import collectionOverview from "../../components/collection-oveview/collection-overview";
import WithSpiner from "../../components/with-spiner/with-spiner";
import { fetchCollectionsStart, fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectCollectionIsFetching } from "../../redux/shop/shop.selectors";
import CollectionPage from "../collection/collection";
import "./ShopPage.scss";

const CollectionOverviewSpinner = WithSpiner(collectionOverview);
const CollectionPageSpinner = WithSpiner(CollectionPage);

class ShopPage extends Component {

    componentDidMount() {
        this.props.fetchCollections();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route path={`${match.path}`} exact render={(props) => <CollectionOverviewSpinner isLoading={this.props.isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} exact
                    render={(props) => <CollectionPageSpinner isLoading={this.props.isLoading} {...props} />}
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector(
    { isLoading: selectCollectionIsFetching }
)

const mapToDispatchProps = (dispatch) => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
})


export default connect(mapStateToProps, mapToDispatchProps)(ShopPage)