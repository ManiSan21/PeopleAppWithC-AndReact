import React, { PureComponent } from 'react'
import Table from './Table';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';

export class Form extends PureComponent {
    constructor(){    
        super();    
        this.state = {
            name: '',
            lastName: '',
            age: 0,
            gender: false
        }
    };
    onChangeHandler=(event)=>{        
        this.setState({
            [event.target.name]:event.target.value            
        });
    }

    //Esta función se ejecuta cuando le das click al botón del form, y que hace el submit.
    onSubmit = () => {                      
        this.props.addPerson(this.state);            
        this.setState({
            name: '',
            lastName: '',
            age: 0,
            gender: false
        });
    }
  render() {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" className='form-control' id="name" name="name" placeholder="Enter your name" value={this.state.name} onChange={(event)=>{this.onChangeHandler(event, "name")}}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" value={this.state.lastName} onChange={(event)=>{this.onChangeHandler(event, "name")}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" className="form-control" id="age" name="age" placeholder="Enter your age" value={this.state.age} onChange={(event)=>{this.onChangeHandler(event)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    {/*El pedo lo tengo aqui, en los radio buttons del gender. Se supone que le estoy pasando valores booleanos, true para Male y false para Female (maldito patriarcado :V),
                    No sé por qué vergas le cuando veo el objeto que le estoy pasando a la función del Submit, todos los datos están bien, excepto el gender. A lo que recuerdo, si seleccionas male le pasa un valor de false
                    (que se supone que es para female), pero al momento de mostrarlo en la tabla lo muestra como Male. Y si seleccionas Female, ni siquiera le pasa valor, pero aún así cuando lo muestra en la tabla lo muestra como female :v.
                    La neta yo no le encontré explicación, porque pues por lo que te acabo de contar, esta mierda ni siquiera debería funcionar, pero de alguna forma sí funciona :V
                    */}
                    <div className="radio" id="gender">                        
                        <label htmlFor="male">Male:</label>
                        <input type="radio" className="col-md-1" id="male" name="gender" value={this.state.gender} onChange={(event) => { this.onChangeHandler(event) }}></input>
                        <label htmlFor="female">Female:</label>                             {/*Aquí no sé porqué vergas le puse el valueOf, pero si se lo quito no jala y no entiendo porqué :V */}
                        <input type="radio" className="col-md-1" id="female" name="gender" value={this.state.gender} onChange={(event) => { this.onChangeHandler(event) }}></input>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </div>
        </div> 
        {/*Aqui le mando el array de people como una prop al componente de Table, para que muestre los datos en una tabla */}
        <Table people={this.props.people} delperson={() => this.props.delperson}></Table>       
      </div>
    )
  }
}

export default Form
