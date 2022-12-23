import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues={
    email:"",
    password:"",
    first_name:"",
    last_name:"",
    birthday:""
}

const FormUsers = ({createUser,userUpadate,updateUser,isShowForm,handleChangeShowModal}) => {
    
    const{handleSubmit,register, reset}=useForm()

    const submitForm=(data)=>{
        if(userUpadate){
            updateUser(userUpadate.id, data)
        }else{
            createUser(data)
        }
        reset(defaultValues) 
    }

    useEffect(() => {
        if(userUpadate){
            reset(userUpadate)
        }else{
            reset(defaultValues)
        }
    }, [userUpadate])

    
  return (
    <div className={`container_form ${isShowForm && "disable_form"}`}>
    <form className='form' onSubmit={handleSubmit(submitForm)}>
        <i onClick={handleChangeShowModal} className='form_x bx bx-x'></i>
        <h1 className='form_title'>{userUpadate? "Edit User": "New User"}</h1>
        <div className='form_div'>
            <label className='form_label' htmlFor="">Email</label>
            <input className='form_input' placeholder='Enter your email' type="email" {...register("email")}/>
        </div>
        <div className='form_div'>
            <label  className='form_label'htmlFor="">First Name</label>
            <input className='form_input'  placeholder='Enter your first name' type="text" {...register("first_name")} />
        </div>
        <div className='form_div'>
            <label className='form_label' htmlFor="">Last Name</label>
            <input className='form_input'  placeholder='Enter your last name' type="text" {...register("last_name")}/>
        </div>
        <div className='form_div'>
            <label className='form_label' htmlFor="">Password</label>
            <input className='form_input'  placeholder='Enter your password' type="password"{...register("password")}/>
        </div>
        <div className='form_div'>
            <label className='form_label' htmlFor="">Birthday</label>
            <input className='form_input'  type="date" {...register("birthday")}/>
        </div>
        <button className='form_btn'>{userUpadate? "Edit User": "New User"}</button>
    </form>
    </div>
  )
}

export default FormUsers