import {changeFirstName, changeLastName, changeEmail, changeRegion, changeTel, changeBio} from "./formSlice"
import Input from './Input'
import FormFooter from './FormFooter'
export default function Form() { 
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('thank you for the submition')
    }
    return(
        <form onSubmit={handleSubmit}>       {/* when the user click the submit button*/}
            <div class='first-and-last-Name'> 
                <div>
                    <Input 
                        title="First Name"
                        type="text"
                        name="firstName"    
                        id="firstName"
                        placeholder="John"
                        handleChange={changeFirstName}
                    />
                </div>
                <div>
                    <Input 
                        title="Last Name"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        handleChange={changeLastName}
                    />
                </div>
            </div>
            <Input 
                title="Work Email"
                type="email"
                name="email"
                id="email"
                placeholder="name@mail.com"
                handleChange={changeEmail}
            />
            <Input 
                title="Region"
                type="text"
                name="region"
                id="region"
                placeholder="Ex: Beirut"
                handleChange={changeRegion}
            />
            <Input
                title='Telephone'
                type='tel'
                name='tel'
                id='tel'
                placeholder='Tel'
                handleChange={changeTel}
            />
            <FormFooter                //contains textaria and button
                handleChange={changeBio}
            />
        </form>
    )
}