import React, { Component } from 'react';
import Drawer from './drawer';

class App extends Component {
  state = {
    mode: 'pen'
  }
  render() {
    return (
      <div>
        <div style={{ position: 'relative', width: '600px', height: '400px', backgroundColor: 'blue'}}>
          <Drawer width={600} height={400} lineColor="yellow" lineWidth="2" mode={this.state.mode} />
        </div>
        <button style={{color:this.state.mode==='pen'?'blue':'black'}} onClick={() => this.setState({mode:'pen'})}>pen</button>
        <button style={{color:this.state.mode==='eraser'?'blue':'black'}} onClick={() => this.setState({mode:'eraser'})}>eraser</button>
      </div>
    );
  }
}

export default App;
