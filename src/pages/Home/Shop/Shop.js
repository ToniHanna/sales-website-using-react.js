import { useDispatch,useSelector } from "react-redux"
import Aside from './Aside'
import Products from './Products'
import LaptopProduct from ".././products/LaptopProduct"
import PhoneProduct from ".././products/PhoneProduct"
import TabletProduct from ".././products/TabletProduct"
import laptopArray from '.././data/laptops_data'
import phoneArray from '.././data/phones_data'
import tabletArray from '.././data/tablets_data'
export default function Shop(){
    const dispatch = useDispatch()
    const techItems = useSelector(state=>state.techItems)
    const laptopList = laptopArray.map(laptop=> 
        <LaptopProduct 
            key={laptop} 
            laptop={laptop}      //passing each laptop object 
        /> 
    )
    const tabletList = tabletArray.map(tablet=> 
        <TabletProduct 
            key={tablet} 
            tablet={tablet} 
        /> 
    )
    const phoneList = phoneArray.map(phone=> 
        <PhoneProduct 
            key={phone} 
            phone={phone} 
        /> 
    )
        //switch between laptops, mobile, tablets....
    const renderTechList = () => {
        if (techItems.tech === 'laptops')
            return laptopList
        else if (techItems.tech === 'tablets')
            return tabletList
        else
            return phoneList
    }
    return(
        <main className='Home-main'>
            <Aside 
                dispatch={dispatch} //passing dispatch as props
                techItems={techItems}
            />
            <Products
                dispatch={dispatch}
                renderTechList={renderTechList}
            />
        </main>
    )
}