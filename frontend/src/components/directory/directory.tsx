import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from '../menu-item/menu-item';
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { selectCollectionIsFetching, selectCollections, } from "../../redux/shop/shop.selectors";
import { SpinnerContainer, SpinnerOverlay } from "../with-spiner/with-spiner.styles";
import './directory.scss';
import { Collection } from "../../model/Collection";
import { Dispatch } from "redux";
import { RootState } from "../../redux/root-state";

interface IDirectory {
    sections: Array<Collection>,
    getCollection: Function,
    isLoading: boolean
}

const Directory: React.FC<IDirectory> = ({ sections, getCollection, isLoading }) => {

    useEffect(() => {
        getCollection();
    }, [getCollection])

    if (isLoading) {
        return <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    }

    return <div className='directory-menu'>
        {sections?.map((section) =>
            <MenuItem key={section.id} collection={section} />)}

    </div>
}

const mapStateToProps = createStructuredSelector<RootState, {
    sections: Array<Collection>,
    isLoading: boolean
}>(
    {
        sections: selectCollections,
        isLoading: selectCollectionIsFetching
    }
)

const mapToDispatchProps = (dispatch: Dispatch) => ({
    getCollection: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapToDispatchProps)(Directory)