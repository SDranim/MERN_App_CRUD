import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'
function ContactList() {
  const users = useSelector((state)=>state.UserReducer.users)
  console.log(users)
  return (
    <div>
    {users.map((contact,i)=>(<ContactCard contact={contact} key={i}/>))}
    </div>
  )
}

export default ContactList