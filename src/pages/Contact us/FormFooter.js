import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
export default function FormFooter({handleChange}){
    const formData = useSelector(state=>state.formData)  //it selects formData from the store
    const dispatch = useDispatch()
    return(
        <>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
                id='bio'
                name='bio'
                onChange={(event) => dispatch(handleChange(event.target.value))}
                value={formData.mybio}
                rows='7'
                placeholder='Write about yourself ...'
            />
            <p>By subimitting this form, I agree <a href="">terms and conditions</a></p>
            <button id='submit'>submit</button>
        </>
    )
}