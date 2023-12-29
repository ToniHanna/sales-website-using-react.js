import { changeTech } from "../../../slice";
export default function Product({dispatch,renderTechList}){
    return(
        <div className='products'>
            <h1> Explore our new products </h1>
            <div className='buttons'>
                <button onClick={()=>dispatch(changeTech('laptops'))}>laptops</button>
                <button onClick={()=>dispatch(changeTech('tablets'))}>tablets</button>
                <button onClick={()=>dispatch(changeTech('phones'))}>phones</button>
            </div>
            <div className='productList'>{renderTechList()}</div>
        </div>
    )
}