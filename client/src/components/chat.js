import React, { Component } from 'react'
import ChatInput from './chatInput'
import ChatMessage from './chatMessage'

const URL = 'ws://localhost:3030'

class Chat extends Component {
  state = {
    name_client: '',
    name_receiver: '',
    color:"text-project-color-6",
    alignment: "text-right",
    img: './images/mom-icon.png',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }

    this.setState({
      name_client: this.props.name_client,
      name_receiver: this.props.name_receiver,
      color: this.props.color,
      alignment:  this.props.alignment,
      img:  this.props.img
    })

  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    if (messageString){
      const message = { name: this.state.name_client, message: messageString, color: this.state.color, alignment: this.state.alignment }
      this.ws.send(JSON.stringify(message))
      this.addMessage(message)
    }

  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <img className="rounded-circle float-right img-thumbnail" src={this.state.img} alt="Logo" style={{ width: "40px", height: "auto" }} />
            </div>
            <div className="col-9 text-left pt-1">
              <h5 className="font-italic">{this.state.name_receiver}</h5>
            </div>
          
          </div>
        </div>
        <div className="card-body">
          {this.state.messages.map((message, index) =>
            <ChatMessage
              key={index}
              message={message.message}
              name={message.name}
              color= {message.color}
              alignment={message.alignment}
            />,
          )}
        </div>
        <div className="card-footer text-muted">
          <ChatInput
            ws={this.ws}
            onSubmitMessage={messageString => this.submitMessage(messageString)}
          />
        </div>
      </div>
    )
  }
}

export default Chat