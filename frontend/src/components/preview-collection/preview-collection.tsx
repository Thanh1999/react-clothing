import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Collection } from '../../model/Collection';
import CollectionItem from '../collection-item/collection-item';
import './preview-collection.scss'

interface IPreviewCollection extends RouteComponentProps {
    collection: Collection
    key: number,
}

const PreviewCollection: React.FC<IPreviewCollection> = ({ collection, match, history }) => (
    <div className='collection-preview'>
        <div className='title' onClick={() => { history.push(`${match.url}/${collection.id}`) }}>{collection.title.toUpperCase()}</div>
        <div className='preview'>
            {collection.items?.map((item) =>
                <CollectionItem key={item.id} item={item} />)}
        </div>
    </div>
);

export default withRouter(PreviewCollection)