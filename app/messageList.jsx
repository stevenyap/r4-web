import React from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const MessageList = ({messages}) => (
  <List>
    <Subheader>Chat</Subheader>
    {messages.map((message, n) =>
      <ListItem key={n} primaryText={message} />
    )}
  </List>
)

const mapProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapProps, mapDispatch)(MessageList)
