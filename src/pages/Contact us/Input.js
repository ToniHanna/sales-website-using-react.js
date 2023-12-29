import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
export default function Input({title,type,name,id,placeholder,handleChange}){
    const formData = useSelector(state=>state.formData)  //it selects formData from the store
    const dispatch = useDispatch()
    return(
        <>
            <label htmlFor={name}>{title}</label>
            <br />
            <input 
                type={type}
                name={name}    //name should be exactly like the state name so I can use it to update the state
                id={id}
                placeholder={placeholder}
                onChange={(event) => dispatch(handleChange(event.target.value))}
                value={formData[name]} //good practice is it to use controlled inputs so that the input box has the value (single source of truth instead of only updating the state), also name is a changing method that why I used []
                required
            />
            <br />
            {/*<p>{formData[name]}</p>  to ensure everthing is working fine*/} 
        </>
    )
}