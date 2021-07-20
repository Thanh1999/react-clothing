import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectCollectionsPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection';
import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
    return <div className='collections-overview'>
        {
            collections.map(({ id, ...otherProps }) => <PreviewCollection key={id} {...otherProps} />)
        }
    </div>
}

const mapStateToProps = createStructuredSelector(
    { collections: selectCollectionsPreview }
)

export default connect(mapStateToProps)(CollectionOverview)