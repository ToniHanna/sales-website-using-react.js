import { addProduct } from "../../../slice";
import { useDispatch } from "react-redux"
export default function LaptopProduct({laptop:{model,year,cpu,ram,price}}){
    const dispatch = useDispatch()
    
    return(
        <div class='product'>
            <p>{model}</p>
            <p>{year}</p>
            <p>{cpu}</p>
            <p>{ram}</p>
            <p>{price}</p>
            <button onClick={() => dispatch(addProduct({ productModel: model, productPrice:price}))}>Add to Cart</button>
        </div>
    )
}