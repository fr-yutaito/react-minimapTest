import React, { Component } from 'react';
import {Yellow, Red, SimpleList} from './Block'
import './App.css';
import Minimap, {Child as ChildComponent} from 'react-minimap';
import 'react-minimap.css'
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*eslint-disable */
const COMMIT_HASH = __COMMIT_HASH__
/*eslint-enable */


const styles ={
  paper: {margin: '64px 0 0 0'}
  //list: {}
}

const YELLOW = 'yellow'
const RED    = 'red'
const DARK   = 'dark'
const SIMPLE = 'simplelist'

const HEX = {
  [YELLOW]: 'FFAB00', 
  [RED]   : 'DD2C00',
  [DARK]  : '212121',
  [SIMPLE] : 'ffffff',
}

class App extends Component {

  state = {
    checked: false,
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({
        ...this.state,
        
      })
    }, 2000)
  }

  renderChild({ width, height, left, top, node }) {

    const classNames = [YELLOW, RED, DARK, SIMPLE]
    let classNameFound = null
    node.classList.forEach(className => {
      if (classNames.includes(className))
      {
        classNameFound = className
        return false
      }
    })

    if (classNameFound === null)
      return <ChildComponent {...{width, height, left, top}} />

    return (
      <div className="t">
      <div
        style={{
          position: 'absolute',
          width,
          height,
          left,
          top,
          backgroundColor: '#' + HEX[classNameFound],
        }}
      />
      </div>
      
    )
  }

  render() {

    return (
      <div className="App">
        <div className="nav-bar">
          <span><a>Mini-map Prototype</a></span>
          <div className="keep-aspect-ratio">
            keep aspect ratio
            <input 
              type="checkbox" 
              checked={this.state.checked} 
              onChange={(event) => {
                this.setState({...this.state, checked: event.target.checked})}} 
            />
          </div> 
        </div>
        <div className="container">
        
          <MuiThemeProvider>
            <Minimap selector=".simplelist" keepAspectRatio={this.state.checked} childComponent={this.renderChild.bind(this)}>
              <Paper style={styles.paper} rounded={false} zDepth={0}>
                    <Yellow className="pos-rlt"/>
                    <Red className="pos-rlt"/>
                    <SimpleList className="simplelist"/>
                    <SimpleList className="simplelist"/>
                    <SimpleList className="simplelist"/>
                    <SimpleList className="simplelist"/>
                    <SimpleList className="simplelist"/>
                    <SimpleList className="simplelist"/>
                    <SimpleList className="simplelist"/>

              </Paper>
            </Minimap>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;