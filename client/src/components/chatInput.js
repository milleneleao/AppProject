import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <form className="form-row align-items-center"
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <div className="col-auto">
          <input
            className="form-control"
            type="text"
            placeholder={'Enter message...'}
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />
        </div>
        <div className="col-auto">
          <input className="btn btn-primary" type="submit" value={'Send'} />
        </div>

      </form>
    )
  }
}

export default ChatInput