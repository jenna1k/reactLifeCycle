import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      title: 'put some words here!',
      globalTitle: 'change the title!'
    };

    this.clickButton = this.clickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  clickButton(){
    document.title = this.state.globalTitle
  }

  handleChange(e){
    this.setState({
      globalTitle: e.target.value
    })
  }

  componentDidMount(){
    console.log('Rendered Form')
  }

  componentDidUpdate(){
    console.log('Title changed')
  }

  render() {
        return (
          <div>
            <h1>{this.state.globalTitle}</h1>
            <form>
              <input type="text" name="text" placeholder={this.state.title} onChange={this.handleChange}/>
              <div>
                <p>if you want to change webpage title</p>
              </div>
              <button onClick={(e) => {
                e.preventDefault();
                this.clickButton();
              }}>click here</button>
            </form>
          </div>
        );
    }
}

export default App;