
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Navigation from "./Components/Navigation";
import UpdateContact from "./Components/UpdateContact";
import { getContacts } from "./JS/Actions/UsersActions";

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getContacts())
   
  }, [dispatch])
  return (
    <div className="App">
      <Navigation/>
     <Routes>
       <Route path="/" element={<ContactList/>}/>
       <Route path="/addContact" element={<AddContact/>}/>
       <Route path="/Update/:id" element={<UpdateContact/>}/>
     </Routes>
    </div>
  );
}

export default App;
