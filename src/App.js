import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done:false },
        { id: 2, name: "Hacer la cama", done:true },
        { id: 3, name: "Leer un rato", done:false }
      ],
      newTask: ''
    }
    this.text = this.text.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  
  text(e) {
    this.setState({ newTask: e.target.value });
  }

  keyPress(e) {
    e.preventDefault();
    if(this.state.newTask){ 
     this.setState({
       tasks: this.state.tasks.concat([{
        id:this.state.tasks.length+1, 
        name:this.state.newTask,
        done:false
        }]),
       newTask:''
     })
    } 
  }

  tachar(id){
 const newTasks= this.state.tasks.filter(newelem=>{

    if(newelem.id === id){
      newelem.done=!newelem.done
    }
    return newelem
  })
  this.setState({
    tasks:newTasks
  });
  }

  render() {
    ///const{newTask,tasks}=this.state; => Para evitar el this.state en el return
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={task.done?'done':''} key={task.id} onClick={(e)=>this.tachar(task.id)}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.keyPress}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" 
            className={this.state.newTask?'':'error'}
            value={this.state.newTask}
            onChange={this.text}/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
