import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { TbShoppingCartMinus } from "react-icons/tb";




const Items = (props) => {
    const {items, del , removeOne,addOne} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.quantity}</p>
                    <p>{item.price}</p>
                    <p  style={{display:'flex',justifyItems:'center',justifyContent:"center", gap:'15px'}}>
                    <FaTrashAlt color='red' size='2rem' cursor='pointer' onClick={() => del(item.id)}/>
                    <MdAddShoppingCart  color='green' size='2rem' cursor='pointer' onClick={() => addOne(item.id)}/>
                    <TbShoppingCartMinus color='brown' size='2rem' cursor='pointer' onClick={() => removeOne(item.id)}/>
                    </p>
                    
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Quantity</p>
                <p>Unit Price</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items