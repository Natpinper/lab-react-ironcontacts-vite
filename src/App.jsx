import { useState } from "react";
import "./App.css";
import contactData from '../src/contacts.json'



function App() {
  let fiveFirstContacts = contactData.slice(0,5)
  const [contacts, setContacts]= useState(fiveFirstContacts)
  let remainingContacts= contactData.slice(5,contactData.length)
  const randomIndex= Math.floor(Math.random()*remainingContacts.length)
  function addContact(){
    remainingContacts.splice(randomIndex,1)
    let randomContact= remainingContacts[randomIndex]
    
    setContacts((prevContacts)=>{return [...prevContacts,randomContact]})

  } 
  return (
   
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((oneContact)=>{
          
          return (
            <tr key={oneContact.id}>
              <td><img src={oneContact.pictureUrl}/></td>
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity}</td>
              {oneContact.wonOscar && <td>🏆</td>}
              {!oneContact.wonOscar && <td></td>}
              {oneContact.wonEmmy && <td>🌟</td>}
              {!oneContact.wonEmmy && <td></td>}
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
  
}

export default App;