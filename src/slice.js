import {createSlice} from '@reduxjs/toolkit'
const initialState={
    tech:'laptops',
    products:[],
    finalPrice:0,
    budget:2000,
    myItems:[]
}
export const slice = createSlice({
    name:'techItems',
    initialState,
    reducers: {
        changeTech: (state,action) => {
            state.tech = action.payload
        },
        addProduct: (state, action) => {
            const { productModel, productPrice } = action.payload; //destructuring the object that I passed it to the reducer
            state.products = [...state.products, productModel];
            state.finalPrice += Number(productPrice.toFixed(0)); //I added Number() to prevent concatenation instead of addition
        },
        checkOut: (state, action) => {
                let price = state.finalPrice
                if(price>0)
                {
                    if(state.budget<price)
                        {
                            alert('sorry your budget is not enough')
                            state.products=[]      //empty the shopping cart
                            state.finalPrice=0
                        }
                    else if(state.budget>=price){
                        state.budget -= action.payload
                        alert('Thank you for buying from our products!')
                        state.myItems=[...state.myItems ,...state.products] //the reason I spread state.product is that when I add to cart multiple products at the same time they will get mixed in one array(which is nested), I used the spread  operator to ensure they are seperate products
                        state.products=[]      //empty the shopping cart 
                        state.finalPrice=0
                    }
                }
                else{
                    alert('your cart is empty')
                }
            }
    },
})
export const {changeTech,addProduct,checkOut} = slice.actions
export default slice.reducer