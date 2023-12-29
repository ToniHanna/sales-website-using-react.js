import {checkOut} from "../../../slice";
export default function Aside({dispatch,techItems}){
    const productsList = techItems.products?.map((product,index)=><p key={index} className='addedProduct'>{product}</p>) //if array is empty don't map
    const purchasedList = techItems.myItems.map((item,index)=><p key={index} className='purchased-item'>{item}</p>)
    return(
        <aside>
            <div className='purchased-items'>{purchasedList}</div>
            <p className='budget'>{`Budget: $${techItems.budget}`}</p>    {/*using template literals inside JSX*/}
            <button onClick={()=>dispatch(checkOut(techItems.finalPrice))}>Proceed to Checkout</button>
            <p className='price'>{`$${techItems.finalPrice}`}</p>
            <div> {productsList} </div>   {/* items I added to cart*/}
        </aside>
    )
}