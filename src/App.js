import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop';
import sideDrawer from './components/SideDrawer/SideDrawer';

 class App extends Component {
   state = {
     sideDrawerOpen:false
   }
   ToggleHandler = () =>{
     console.log('testing..')
        this.setState((prevState)=>{
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
   };
   backDropToggle =() => {
     this.setState({sideDrawerOpen:false})
   }
  render() {
    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer/>
      backdrop = <Backdrop backToggle ={this.backDropToggle}/>
    }
    return (
      <div style={{height:'100%'}}>
        <Toolbar ClickHandler ={this.ToggleHandler}/>
        {sideDrawer}
        {backdrop}
        <main style={{marginTop:'64px'}}>
         <p>This is the page content</p>
        </main>
      </div>
    )
  }
}

export default App