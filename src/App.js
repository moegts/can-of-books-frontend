import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import './style.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      data: [],
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
    axios.get(`http://localhost:3001/books?id=6147d0aa35848e229a80d636`).then(response => {
      this.setState({
        data: response.data.books
      })
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          {this.state.data.length > 0 && <Carousel indicators={false} className="Carousel" >
                {
                    this.state.data.map((Element, i) => {
                        return <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://colorcasters.com/wp-content/uploads/2014/05/Black-300x300.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption className="color">
                                <h3 className="ele">Book Title: {Element.title}</h3>
                                <p className="ele">Description: {Element.description}</p>
                                <p className="ele">Status: Active{Element.status}</p>
                                <p className="ele">E-mail: moegts@gmail.com{Element.email}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}

            </Carousel>
            }
            {
                this.state.data.length ===0 && <h3>The book collection is empty.</h3>
            }
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
