import { connect } from 'react-redux';
import CollectionItem from '../collection-item/collection-item';
import { selectCollectionError, selectCollectionIsFetching, selectSelectedCollection } from '../../redux/shop/shop.selectors';
import './collection.scss';
import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionDetailStart } from '../../redux/shop/shop.actions';
import { SpinnerContainer, SpinnerOverlay } from '../with-spiner/with-spiner.styles';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Collection } from '../../model/Collection';
import { RootState } from '../../redux/root-state';

interface ICollectionPage extends RouteComponentProps<{ collectionId: string }> {
    collection: Collection,
    fetchCollectionDetail: Function,
    isLoading: boolean,
    errorMessage: string,
}


const CollectionPage: React.FC<ICollectionPage> = ({ collection, match, fetchCollectionDetail, isLoading, errorMessage }) => {

    useEffect(() => {
        fetchCollectionDetail(parseInt(match.params.collectionId))
    }, [fetchCollectionDetail, match.params.collectionId])

    if (isLoading) {
        return <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    }

    if (errorMessage) {
        return <Redirect to="/shop" />
    }


    return (<div className='collection-page'>

        <div className='title'>
            {collection?.title.toUpperCase()}
        </div>
        <div className='items'>
            {
                collection?.items.map((item) => <CollectionItem key={item.id} item={item} />)
            }
        </div>

    </div>)
}

const mapStateToProps = createStructuredSelector<RootState, {
    collection: Collection,
    isLoading: boolean,
    errorMessage: string
}>(
    {
        collection: selectSelectedCollection,
        isLoading: selectCollectionIsFetching,
        errorMessage: selectCollectionError
    }
)

// const mapStateToProps = (state, props) => ({
//     collection: selectCollection(props.match.params.collectionId)(state)
// })

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchCollectionDetail: (id: number) => dispatch(fetchCollectionDetailStart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)