import { RouteComponentProps, withRouter } from "react-router-dom"
import { Collection } from "../../model/Collection"
import "./menu-item.scss"

interface IMenuItem extends RouteComponentProps {
    collection: Collection
    key: number
}

const MenuItem: React.FC<IMenuItem> = ({ collection, history, match }) => <div className={'menu-item'}>
    <div className='background-image' style={
        { backgroundImage: `url(${collection.imageUrl})` }
    } />
    <div className='content' onClick={() => { history.push(`${match.url}shop/${collection.id}`) }}>
        <h1 className='title'>{collection.title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>

export default withRouter(MenuItem)