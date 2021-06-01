import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addForm} from '../../redux/formSlice'

const FormData = ()=>{
     const [formsValues,selectedFormValues] = useState({
         firstName:"",
         password:"",
         gender:"",
        react:false,
        redux:false,
        nodejs:false,
        email:"",
        state:"",
        date:""
    })
    const dispatch = useDispatch()
 const submitDetails = (event)=>{
     event.preventDefault()
     console.log(formsValues)
     dispatch(addForm(formsValues))
     }
 



  const states = ["Select Your State","Telengana","Andhra Pradesh","Tamil Nadu","Kerala","Karnataka"]
  
    return(
        <form onSubmit = {submitDetails}>
            <div>
                <label>Full Name</label>
                <input type = "text" name = "firstName" value = {formsValues.firstName} onChange = {(event)=>selectedFormValues({...formsValues,firstName:event.target.value})} placeholder = "First Name"/>
            </div>
            <div>
                <label>Password</label>
                <input type = "password" name = "password" value = {formsValues.password} onChange = {(e)=>selectedFormValues({...formsValues,password:e.target.value})} placeholder = "password"/>
            </div>
            <div>
                <label>Email</label>
                <input type = "email" name = "email" value = {formsValues.email} onChange={(e)=>selectedFormValues({...formsValues,email:e.target.value})} placeholder = "Email"/>
            </div>
            <div>
                <label>male</label>
                <input type = "radio" name = "gender" value = "male" onChange = {(e)=>selectedFormValues({...formsValues,gender:e.target.value})}/>
                <label>female</label>
                <input type  = "radio" name = "gender" value = "female" onChange = {(e)=>selectedFormValues({...formsValues,gender:e.target.value})}/>
            </div>
            <div>
                <label>React</label>
                <input type ="checkbox" name = "languages" value = "react" checked = {formsValues.react} onChange ={(e)=>selectedFormValues({...formsValues,react:e.target.checked})}/>
                <label>Redux</label>
                <input type ="checkbox" name = "languages" value = "redux" checked = {formsValues.redux} onChange ={(e)=>selectedFormValues({...formsValues,redux:e.target.checked})}/>
                <label>NodeJs</label>
                <input type ="checkbox" name = "languages" value = "nodejs" checked = {formsValues.nodejs} onChange ={(e)=>selectedFormValues({...formsValues,nodejs:e.target.checked})}/>
            </div>
            
            <div>
                <select name="state" onChange = {(e)=>selectedFormValues({...formsValues,state:e.target.value})}>
                    {states.map((each,index)=>(
                        <option key = {index}>{each}</option>
                    ))}
                </select>
            </div>
            <div>
                <input type = "date" name="date" onChange = {(e)=>selectedFormValues({...formsValues,date:e.target.value})}/>
            </div>
            <button type ="submit">submit</button>
        </form>
    )
}


export default FormData