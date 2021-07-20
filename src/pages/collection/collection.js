import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.scss';

const CollectionPage = ({ collection, match }) => {
    const { title, items } = collection
    return (<div className='collection-page'>

        <div className='title'>
            {title}
        </div>
        <div className='items'>
            {
                items.map((item) => <CollectionItem key={item.id} item={item} />)
            }
        </div>

    </div>)
}

const mapStateToProps = (state, props) => ({
    collection: selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)