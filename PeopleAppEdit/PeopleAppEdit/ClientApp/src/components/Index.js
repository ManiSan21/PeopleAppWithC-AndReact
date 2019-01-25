import React, { Component } from 'react'

export class Index extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Exam</h1>
        <hr/>
        <h4 style={{textAlign: "center"}}>Instructions</h4>
        <br/>
        <ul>
            <li>
                Add Gender Property to the Person Model (Models/Person.cs) and include it to the Form in Exercise JQuery and/or Exercise AngularJS.
            </li>
            <li>
                Complete POST and DELETE method for Controllers/PeopleController.cs.
            </li>
            <li>
                Complete Form submit event in Exercise JQuery and/or Exercise AngularJS.
            </li>
            <li>
                Complete display results table in Exercise JQuery and/or Exercise AngularJS.
            </li>
        </ul>
        <hr></hr>
      </div>
    )
  }
}

export default Index
