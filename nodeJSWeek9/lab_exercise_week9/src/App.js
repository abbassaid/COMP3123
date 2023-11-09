import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react'
import Student from "./components/student/Student"
import Faculty from "./components/faculty/Faculty";
const facultyDetails = {
    fnm: "Paul",
    lnm: "Wall"
}

function App() {
  return (
    //   If you are wanting to return multiple tags you must add it to a div tag also with return make sure you
    //   surround it with () brackets
    //   Previously we added it with a div tag, but you do not need a tag
    <React.Fragment>
      <h1>Abbas Said</h1>
      <h2>George Brown College</h2>
        <Student/>
        <Student fnm = "Abbas" lnm = "Said"/>
        <Student fnm = "John" lnm = "Snow"/>
        <Faculty f = {facultyDetails}/>
    </React.Fragment>
  )
}

export default App;
