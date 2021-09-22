import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButoon from './components/LoginButton'
import LogoutButoon from './components/logoutButton'
import SpecialContent from './components/SpecialContent'
import { withAuth0 } from '@auth0/auth0-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Carousel, Row,
  Col,
  FloatingLabel,
  Form,
  Button
}
  from 'react-bootstrap';
import './style.css';
// import Books from './components/Books';
import axios from 'axios';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      data: [],
      title: '',
      status: '',
      description: '',
      email: '',
      showForm: false,
      id: ''
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  componentDidMount = () => {
    axios.get(`https://can-of-books-backend-moegts.herokuapp.com/books`).then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  titleSelect = (e) => {
    let title = e.target.value
    this.setState({
      title: title,
    })
  }

  descriptionSelect = (e) => {
    let description = e.target.value
    this.setState({
      description: description,
    })
  }

  StatusSelect = (e) => {
    let StatusSelect = e.target.value
    this.setState({
      status: StatusSelect,
    })
  }

  emailSelect = (e) => {
    let email = e.target.value
    this.setState({
      email: email,
    })
  }

  handleDelete = (id) => {
    axios.delete(`https://can-of-books-backend-moegts.herokuapp.com/delete-book/${id}`).then(response => {
      console.log(response.data);
      this.setState({
        data: response.data
      })
    })
  }

  handleUpdate = () => {
    let data = {
      title: this.state.title,
      status: this.state.status,
      description: this.state.description,
      email: this.state.email
    }
    axios.patch(`https://can-of-books-backend-moegts.herokuapp.com/update-book/${this.state.id}`, data).then(response => {
      this.setState({
        data: response.data
      })
    }).then(this.refreshPage);
  }

  refreshPage = () => {
    window.location.reload();
  }

  updateForm = (id) => {
    this.setState({
      id: id,
      showForm: true,
    })
  }

  createBook = (e) => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      status: this.state.status,
      description: this.state.description,
      email: this.state.email
    }
    axios.post(`https://can-of-books-backend-moegts.herokuapp.com/create-book`, data).then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    return (
      <>
        {
          this.props.auth0.isAuthenticated ?
            <>

              <Router>
                <Header user={this.state.user} onLogout={this.logoutHandler} />
                {/* <LogoutButoon /> */}


                {/* <SpecialContent text="  I'm a Special Content" /> */}

                <Switch>
                  <Route exact path="/">
                    {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                  </Route>
                  {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                </Switch>
                {this.state.data.length > 0 && <Carousel indicators={false} className="Carousel" >
                  {
                    this.state.data.map((Element, i) => {
                      return <Carousel.Item key={Math.random().toString(36).substr(2, 9)}>
                        <img
                          className="d-block w-100"
                          src="https://colorcasters.com/wp-content/uploads/2014/05/Black-300x300.jpeg"
                          alt="First slide"
                        />
                        <Carousel.Caption className="color">
                          <h3 className="ele">Book Title: {Element.title}</h3>
                          <p className="ele">Description: {Element.description}</p>
                          <p className="ele">Status: {Element.status}</p>
                          <p className="ele">E-mail: {Element.email}</p>
                          <button onClick={() => this.handleDelete(Element._id)}>Delete Book</button>
                          <button onClick={() => this.updateForm(Element._id)}>Update Book</button>
                        </Carousel.Caption>
                      </Carousel.Item>
                    })}

                </Carousel>
                }
                {
                  <Row className="g-2">
                    <Col md>
                      <FloatingLabel controlId="floatingInputGrid" label="Title">
                        <Form.Control type="text" onChange={this.titleSelect} />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingInputGrid" label="Description">
                        <Form.Control type="text" onChange={this.descriptionSelect} />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingInputGrid" label="Status">
                        <Form.Control type="text" onChange={this.StatusSelect} />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingInputGrid" label="E-mail">
                        <Form.Control type="text" onChange={this.emailSelect} />
                      </FloatingLabel>
                      <Col>
                        <Button onClick={this.createBook} type="submit">Create!</Button>
                        <hr />
                        <Button onClick={() => this.handleUpdate()}>Update!</Button>
                      </Col>

                    </Col>

                  </Row>
                }
                {
                  this.state.data.length === 0 && <h3>The book collection is empty.</h3>
                }
                <Footer />
              </Router>
            </> :
            <LoginButoon />
        }

      </>
    )
  }
}

export default withAuth0(App);
