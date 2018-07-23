import React, { Component } from 'react';
import {Yellow, Red, SimpleList} from './Block'
import './App.css';
import Minimap, {Child as ChildComponent} from 'react-minimap';
import 'react-minimap.css'
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';
/*eslint-disable */
const COMMIT_HASH = __COMMIT_HASH__
/*eslint-enable */


const styles ={
  paper: {margin: '64px 0 0 0'},
  toggle: {marginBottom: 16},
  labelStyle : {color : 'white'}
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

  // here, I can separate each component types, and assign them each main theme color from material-ui.
}



class App extends Component {

  state = {
    checked: true,
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

    if(this.state.checked){
     return (
            <div className="App">
              <div className="nav-bar">`
                <span><a>Mini-map Prototype</a></span>
                <div className="on-off">
                <MuiThemeProvider>
                  <Toggle
                    label = "on/off"
                    defaultToggled = {true}
                    style = {styles.toggle}
                    toggled = {this.state.checked}
                    labelStyle = {styles.labelStyle}
                    onToggle = {(event) => {
                      this.setState({...this.state, checked: event.target.checked})}}
                  />
                  </MuiThemeProvider>
                </div> 
              </div>
              <div className="container">
                <MuiThemeProvider>
                  <Minimap selector=".simplelist" keepAspectRatio={true} childComponent={this.renderChild.bind(this)}>
                    <Paper style={styles.paper} rounded={false} zDepth={0}>
                          <Yellow className="pos-rlt"/>
                          <Red className="pos-rlt"/>
                          <SimpleList className="simplelist1"/>
                          <SimpleList className="simplelist2"/>
                          <SimpleList className="simplelist3"/>
                          <SimpleList className="simplelist4"/>
                          <SimpleList className="simplelist5"/>
                          <SimpleList className="simplelist6"/>
                          <SimpleList className="simplelist7"/>
                    </Paper>
                  </Minimap>
                </MuiThemeProvider>
              </div>
            </div>
          );
    }else{
       return (
      <div className="App">
        <div className="nav-bar">
          <span><a>Mini-map Prototype</a></span>
           <div className="on-off">
             <MuiThemeProvider>
                  <Toggle
                    label = "on/off"
                    style = {styles.toggle}
                    toggled = {this.state.checked}
                    labelStyle = {styles.labelStyle}
                    onToggle = {(event) => {
                      this.setState({...this.state, checked: event.target.checked})}}
                  />
                  </MuiThemeProvider>
           </div> 
        </div>
        <div className="container">
        
          <MuiThemeProvider>
              <Paper style={styles.paper} rounded={false} zDepth={0}>
                    <Yellow className="pos-rlt"/>
                    <Red className="pos-rlt"/>
                    <SimpleList className="simplelist1"/>
                    <SimpleList className="simplelist2"/>
                    <SimpleList className="simplelist3"/>
                    <SimpleList className="simplelist4"/>
                    <SimpleList className="simplelist5"/>
                    <SimpleList className="simplelist6"/>
                    <SimpleList className="simplelist7"/>

              </Paper>
          </MuiThemeProvider>
        </div>
      </div>
    );
    }
  }
}

export default App;