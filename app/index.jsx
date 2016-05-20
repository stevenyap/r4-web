import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider  } from 'react-redux'
import App from './app'
import { loadMessages } from './actions'
import ActionCable from 'actioncable'

let store = createStore(reducer, {}, window.devToolsExtension ? window.devToolsExtension() : undefined)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

var consumer = ActionCable.createConsumer('ws://localhost:3000/cable')
var subscription = consumer.subscriptions.create('MessagesChannel', {
  received: (data) => {
    store.dispatch(loadMessages(data.message.new_val.content))
  }
})
