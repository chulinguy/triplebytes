import React from 'react';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
    this.imgChange = this.imgChange.bind(this);
  }

  imgChange(val){
    this.setState({value: val});
    // console.log('imgChange is invoked, state.value = ', this.state.value)
  }

  render() {
    return (
      <div className='container-fluid' id='big-container'>
        <Header />
        <div className='row'>
          </div>
      </div>
    )
  }
}

export default App; 