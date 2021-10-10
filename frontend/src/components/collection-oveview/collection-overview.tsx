import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Collection } from '../../model/Collection';
import { RootState } from '../../redux/root-state';
import { fetchCollectionsPreviewStart } from '../../redux/shop/shop.actions';
import { selectCollectionIsFetching, selectCollections } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection';
import { SpinnerContainer, SpinnerOverlay } from '../with-spiner/with-spiner.styles';
import './collection-overview.scss';

interface ICollectionOverview {
    fetchCollections: Function,
    collections: Array<Collection>,
    isLoading: boolean
}

const CollectionOverview: React.FC<ICollectionOverview> = ({ fetchCollections, collections, isLoading }) => {

    useEffect(() => {
        fetchCollections()
    }, [fetchCollections])

    if (isLoading) {
        return <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    }

    return <div className='collections-overview'>
        {
            collections?.map((collection) => <PreviewCollection key={collection.id} collection={collection}/>)
        }
    </div>
}

const mapStateToProps = createStructuredSelector<RootState, {
    collections: Array<Collection>,
    isLoading: boolean
}>(
    {
        collections: selectCollections,
        isLoading: selectCollectionIsFetching
    }
)

const mapToDispatchProps = (dispatch: Dispatch) => ({
    fetchCollections: () => dispatch(fetchCollectionsPreviewStart())
})

export default connect(mapStateToProps, mapToDispatchProps)(CollectionOverview)