import React from 'react'

const UserCard = ({user, deleteUSer,setUserUpadate,handleChangeShowModal}) => {
    const handleChangeClickUpdate=()=>{
        setUserUpadate(user)
        handleChangeShowModal()
    }
    const clickdelete=()=>{
      deleteUSer(user.id)
    }

  return (
    //muestra la informacion
    <article className='user'>
        <h2 className='user_title'>{`${user.first_name} ${user.last_name}`}</h2>
        <div className='linea'></div>
        <ul className='user_list'>
            <li className='user_item'><span>Email: </span>{user.email}</li>
            <li className='user_item'><span>Birthday: </span><i className='bx bx-gift'></i> {user.birthday}</li>
        </ul>
        
        <div className='user_container_btn'>
        <button className='user_btn' onClick={clickdelete}><i  className='bx bxs-trash'></i></button>
        <button className='user_btn' onClick={handleChangeClickUpdate}><i className='bx bx-edit-alt' ></i></button>
        </div>
        
    </article>
  )
}

export default UserCard