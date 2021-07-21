import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-oveview/collection-overview";
import WithSpiner from "../../components/with-spiner/with-spiner";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection";
import "./ShopPage.scss";

const CollectionOverviewSpinner = WithSpiner(CollectionOverview);
const CollectionPageSpinner = WithSpiner(CollectionPage);

class ShopPage extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    unsubcrisbeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const map = convertCollectionSnapshotToMap(snapshot);
            this.props.updateCollections(map);
            this.setState({ isLoading: false })
        }

        )
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route path={`${match.path}`} exact render={(props) => <CollectionOverviewSpinner isLoading={this.state.isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} exact
                    render={(props) => <CollectionPageSpinner isLoading={this.state.isLoading} {...props} />}
                />
            </div>
        );
    }
}

const mapToDispatchProps = (dispatch) => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))
})


export default connect(null, mapToDispatchProps)(ShopPage)