import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as utils from './scripts/Util.jsx'

function App() {

  const hobbies = ["Cooking", "Reading", "Working"]

  const newHobbies = ['Coding'];

  const lastestHobbies = [...hobbies , ...newHobbies];

  console.log("Hobbies : " , hobbies);
  console.log("New Hobbies : " , newHobbies);
  console.log("Lastest Hobbies : " , lastestHobbies);

  const obj = {
    username : "quang",
    age: 21
  }

  const newObj = {
    rank : "challenge"
  }

  const lastestObj = {...obj , ...newObj};

  console.log("Obj : " , obj);

  console.log("New Obj : " , newObj);

  console.log("Lastest Obj : " , lastestObj);


  return (
    <>
      <h1>
        {utils.apiKey}
      </h1>
      <h1>
        {utils.apiKey1}
      </h1>
      <h1>
        {utils.apiKey2}
      </h1>
    </>
  )
}

export default App
