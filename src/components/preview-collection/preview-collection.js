import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item';
import './preview-collection.scss'

const PreviewCollection = ({ title, items, match, history }) => (
    <div className='collection-preview'>
        <div className='title' onClick={() => {history.push(`${match.url}/${title.toLowerCase()}`)}}>{title.toUpperCase()}</div>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4).map((item) =>
                <CollectionItem key={item.id} item={item} />)}
        </div>
    </div>
);

export default withRouter(PreviewCollection)