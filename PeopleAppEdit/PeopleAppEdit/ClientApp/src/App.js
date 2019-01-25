import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form';
import Header from './components/Header';
import Index from './components/Index';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import { string } from 'prop-types';


export default class App extends Component {
    static displayName = App.name;

    /*FetchPersonDataState = () => {
        perList: PersonData;
        loading: false;
    }*/

    constructor() {
        super();
        this.state = {
            perList: [],
            loading: true
        };
        /*fetch('/api/People/Index')
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
            //.then(response => response.json())
            .then(response => response.json())
            //.then(text => console.log(text));
            .then(data => {
                { this.setState({ perList: data, loading: false }) };
            })

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);*/
        fetch('/People/Index', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then(response => response.json())        
        .then(data => {
            this.setState({ perList: data, loading: false });
        })        
        .catch(err => {
            console.log("There is an error present: " + err);
        })

        /*this.delperson = this.delperson.bind(this);
        this.handleEdit = this.handleEdit.bind(this);*/
    };

    delPerson = (id) => {        
        /*fetch('/People/Delete' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    perList: this.state.perList.filter((data) => {
                        return (data.personId !== id);
                    })
                }
            );
        })*/
        fetch('/People/Index', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                perList: data
            })
            fetch('/People/Delete' + id, {
                method: 'delete'
            }).then(res => {
                this.setState(
                    {
                        perList: this.state.perList.filter((res) => {
                            return (res.personId !== id);
                        })
                    }
                );
            });
        });               
    }

    handleEdit(id){
        this.props.history.push("/People/Edit");
    }    

    addPerson = (newPerson) => {
        let lastElement = 0;

    }

  render () {
      return (
          //Allows me to use the router class to be able to change between pages in the app      
          <Router>
              <div className="App">
                  <div className="container">
                      <Header></Header>
                      <Route exact path="/" render={props => (
                          <React.Fragment>
                              <Form people={this.state.perList} addPerson={this.handleEdit} delperson={this.delPerson}></Form>
                          </React.Fragment>
                      )} />
                      <Route path="/index" component={Index} />
                  </div>
              </div>
          </Router>
    );
  }
}

export class PersonData {
    id = 0;
    name = "";
    lastName = "";
    age = 0;
    gender = false;
}