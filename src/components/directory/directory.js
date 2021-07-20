import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from '../../components/menu-item/menu-item';
import { selectSections } from "../../redux/directory/directory.selector";
import './directory.scss';

const Directory = ({ sections }) => {
    return <div className='directory-menu'>
        {sections.map((section) =>
            <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />)}
    </div>
}

const mapStateToProps = createStructuredSelector(
    { sections: selectSections }
)

export default connect(mapStateToProps)(Directory)