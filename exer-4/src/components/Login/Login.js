import React, { Component } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import { Redirect } from 'react-router';

import { connect } from "react-redux";
import { onLogin } from '../../actions/index';

import "./Login.css";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        let { email, password } = this.state;
        if(email.toLowerCase() === "admin@gmail.com" && password.toLowerCase() === "admin"){
            localStorage.setItem('user', 'admin');
            var isLogin = true;
            this.props.onLogin(isLogin)
        }
        else(
            alert('Tài khoản sai! Vui lòng nhập lại!')
        )
    }

    render() {
        let { email, password } = this.state;
        var user = localStorage.getItem('user');
        if(user){
            return <Redirect to='/' />
        }
        return (
            <div className="container-fluid form-login p-4">
                <Row className="p-5">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card >
                            <Card.Body>
                                <h1 className="text-center m-5">Login</h1>
                                <Form className="m-5" onSubmit={this.onSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.onChange}/>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                    </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.onChange}/>
                                    </Form.Group>
                                    
                                    <Button className="text-center" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login
});

const mapDispatchToProps = dispatch => ({
    onLogin: isLogin => dispatch(onLogin(isLogin))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);