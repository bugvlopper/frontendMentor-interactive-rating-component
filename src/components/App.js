import React from 'react';
import '../css/App.css';
import iconStar from "../images/icon-star.svg";
import Thanks from "./Thanks";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: null,
    };
    this._toggleActive = this._toggleActive.bind(this);
    this._submit = this._submit.bind(this);
  }

  liNumber = 5;

  _toggleActive(params) {
    let target = params.target
    if(target.className === "active"){
      target.removeAttribute("class", "active")
      this.setState({ rate: null})
    }else{
      let lastActive = target.parentElement.getElementsByClassName("active")
      if (lastActive[0]) {
        lastActive[0].removeAttribute("class", "active")
      }
      target.setAttribute("class", "active")
      this.setState({rate: target.innerHTML})
    }
  }

  _submit(){
      this.props.root.render(<Thanks rate={this.state.rate}/>)
  }

  _forLoop(){
    let list = []
    for (let i = 0; i < this.liNumber; i++) {
      list.push(<li key={i} onClick={this._toggleActive}>{i+1}</li>)   
    };
    return list
  }
  
  render() {
      return (
        <React.Fragment>
          <div className="App">
              <div className='star-container'>
                <img src={iconStar} alt="Star" />
              </div>
              <h1>How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
              </p>
              <ol>
                {this._forLoop()}
              </ol>
              <button onClick={this._submit}>submit</button>
          </div>


          <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/bugvlopper" target="_blank" rel='noreferrer'>Bugvlopper</a>.
  </div>
        </React.Fragment>
      );
  }
}

export default App;
