import React from "react"
import Axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Hero from '../components/Hero'
import Content from '../components/Content'
 
class ContactPage extends React.Component {

    state = {
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Send Message'
    }

  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
}

formSubmit = (e) => {
  e.preventDefault()

  this.setState({
      buttonText: '...sending'
  })

  let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
  }
  
  Axios.post('https://portfolio-react-api.herokuapp.com/v1', data)
  .then( res => {
      this.setState({ sent: true }, this.resetForm())
      console.log("Network success " + data.name, data.email)
  })
  .catch( () => {
    console.log('Message not sent')
  })
}

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
            <Form.Group className="message">
              <Form.Label htmlFor="message-input">Your Message</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={e => this.setState({ message: e.target.value })} name="message" type="text" placeholder="Please write your message here" value={this.state.message} required />
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-name">Your Name</Form.Label>
              <Form.Control onChange={e => this.setState({ name: e.target.value })} name="name" type="text" placeholder="Your Name" value={this.state.name} />
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-email">Your Email</Form.Label>
              <Form.Control onChange={(e) => this.setState({ email: e.target.value })} name="email" type="email" placeholder="your@email.com" required value={this.state.email} />
            </Form.Group>

            <div className="button--container">
              <Button className="d-inline-block" variant="primary" type="submit">{this.state.buttonText}</Button>
            </div>
          </Form>
        </Content>
      </div>
    )
  }

}
 
export default ContactPage