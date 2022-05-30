import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../JS/Actions/UsersActions'
function ContactCard({contact}) {
  const dispatch=useDispatch()
  return (
    <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://brandyourself.com/blog/wp-content/uploads/face-perfect-size-profile-picture.png" />
  <Card.Body>
    <Card.Title>{contact.name}</Card.Title>
    <Card.Text>{contact.email}</Card.Text>
    <Card.Text>{contact.age}</Card.Text>
    <Button variant="primary">edit</Button>
    <Button variant="danger" onClick={()=>dispatch(deleteContact(contact._id))}>delete</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default ContactCard