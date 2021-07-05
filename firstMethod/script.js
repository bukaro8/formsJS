const form=     document.querySelector('#form')
const button=   document.querySelector('#button')

const name=     document.querySelector('#name')
const email=    document.querySelector('#email')
const gender=   document.querySelector('#gender')
const terms=    document.querySelector('#terms')

// I can create an object with the valid information
const formIsValid={
  name:false,
  email:false,
  gender:false,
  terms:false,
  //i have to use false because the form is going to be empty
}
//now i have to stop the sending(because is empty)
form.addEventListener('submit',(evento)=>{
  evento.preventDefault()//wont send any data
  validateForm()
})

name.addEventListener('change',(e)=>{//this will register any change on the field
  if(e.target.value.trim().length>0){
    formIsValid.name=true
  }
})
email.addEventListener('change',(e)=>{//this will register any change on the field
  if(e.target.value.trim().length>0){
    formIsValid.email=true
  }
})
gender.addEventListener('change',(e)=>{
  if(e.target.checked== true){
    formIsValid.gender=true
  }
})
//1.  this will check if the checked box is active
//2.  if the button is checked will remove the attribute for the button
//3.  if the button is unchecked will set a new attribute to button
terms.addEventListener('change',(e)=>{
  formIsValid.terms =e.target.checked
  if(e.target.checked==true){
    button.removeAttribute('disabled')
  }else button.setAttribute('disabled',true)
})
const validateForm=()=>{
  // Object.values will return an array instead than a object
  const formValues= Object.values(formIsValid)
  const valid= formValues.findIndex(value => value==false)
  if(valid==-1){
    form.submit()
  }else alert ('form invalid')
}
