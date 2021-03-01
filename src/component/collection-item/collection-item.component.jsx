import React from 'react';
import { connect } from 'react-redux';
import './collection-item.style.scss';
import { addItem } from '../../redux/cart/cart.action'

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, additem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=>additem(item)} inverted> Add to cart</CustomButton>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    additem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);