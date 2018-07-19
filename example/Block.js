import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

const DEBUG = false

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
  },
});


export class SimpleList extends Component{
  render(){
  return (
    <div className={"simplelist box"}>
      <List component="nav">
        <ListItem button>
            <ContentInbox />
          <ListItem primaryText="Inbox" />
        </ListItem>
        <ListItem button>  
            <ContentDrafts />
          <ListItem primaryText="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItem primaryText="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItem primaryText="Spam" />
        </ListItem>
      </List>
    </div>
  );
  }
}



export class Dark extends Component {
  render() {
    if (DEBUG)
      console.log("render Dark")
    return (
      <div className={`card-container ${this.props.className ? this.props.className : ''}`} style={this.props.style}>
        <div className="box dark">
          <h2>Dark</h2>
        </div>
      </div>
    );
  }
}

export class Red extends Component {
  render() {
    if (DEBUG)
      console.log("render Red")
    return (
      <div className={this.props.className} style={this.props.style}>
        <div className="box red">
          <h2>Red</h2>
        </div>
      </div>
    );
  }
}

export class Yellow extends Component {
  render() {
    if (DEBUG)
      console.log("render Yellow")
    return (
      <div className={this.props.className} style={this.props.style}>
        <div className="box yellow">
          <h2>Yellow</h2>
        </div>
      </div>
    );
  }
}