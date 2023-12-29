import {createSlice} from '@reduxjs/toolkit'
const initialState={
    firstName: "", lastName: "",email:"",region:"",tel:"",bio:""
}
export const slice = createSlice({
    name:'formData',
    initialState,
    reducers: {  
        changeFirstName: (state,action) => {
            state.firstName = action.payload
        },
        changeLastName: (state,action) => {
            state.lastName=action.payload
        },
        changeEmail: (state,action) => {
            state.email=action.payload
        },
        changeRegion: (state,action) => {
            state.region=action.payload
        },
        changeTel: (state,action) => {
            state.tel=action.payload
        },
        changeBio: (state,action) => {
            state.bio=action.payload
        },
    },
})
export const {changeFirstName, changeLastName, changeEmail, changeRegion, changeTel, changeBio} = slice.actions
export default slice.reducer