import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'


const BASE_URL= "http://users-crud.academlo.tech/"

function App() {
  //estado para almacenar los usuarios y poder mostrarlos
  const [users, setUsers] = useState()
  const [userUpadate, setUserUpadate] = useState()
  const [isShowForm, setIsShowForm] = useState(true)
  const [cambiar, setCambiar] = useState(true)


  //obtener todos los usuarioss
  const getAllUsers =()=>{
    const URL=`${BASE_URL}users/`
    axios.get(URL)
      .then(res=>setUsers(res.data))
      .catch(err=> console.log(err))
  }
  //Funcion para crear un usuario
  const createUser=(data)=>{
    const URL=`${BASE_URL}/users/`
    axios.post(URL, data)
      .then(res=> {
        console.log(res.data)
        getAllUsers()
        handleChangeShowModal()
      })
      .catch(err=>console.log(err))
  }
  //funcion Eliminar
  const deleteUSer=(id)=>{
    const URL=`${BASE_URL}/users/${id}/`
    axios.delete(URL)
      .then(res=>{
        console.log(res.data)
        getAllUsers()
      })
      .catch(err=>console.log(err))

  }
  //Funcion para actualizar usuarios
  const updateUser=(id, data)=>{
    const URL=`${BASE_URL}/users/${id}/`
    axios.patch(URL,data)
      .then(res=>{
        console.log(res.data)
        getAllUsers()
        setUserUpadate()
        handleChangeShowModal()
      })
      .then(err=>console.log(err))

  }
  const handleChangeShowModal=()=>{
    setIsShowForm(!isShowForm)
  }
   //Se obtiene todos los usuarioa al cargar la pliacacion
  useEffect(() => {
    getAllUsers()
  }, [])
 
  return (
    <div className="App">
      <div className='header_container'>
        <h1 className='title'>Users</h1>
        <button onClick={handleChangeShowModal} className='header_btn'><i className='bx bx-plus'></i> Create New User</button>
        
      </div>
        <FormUsers 
        createUser={createUser} 
        userUpadate={userUpadate}
        updateUser={updateUser}
        isShowForm={isShowForm}
        handleChangeShowModal={handleChangeShowModal}
        />
      
      <div className='users_container'>
      {
        users?.map(user=>(
          <UserCard 
          key={user.id} 
          user={user}
          deleteUSer={deleteUSer}
          setUserUpadate={setUserUpadate}
          handleChangeShowModal={handleChangeShowModal}
          />
        ))
      }
      </div>
      
      
      
    </div>
  )
}

export default App
