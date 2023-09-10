import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Map from "../Component/Map";
import {
    Col,
    FormGroup,
    Input,
    Label,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function App() {
    return (
        <>
            <Navbar color="dark" dark>
                <NavbarBrand>
                    <Link to="/" style={{ color: "#00bcd4" }}>
                        IE.tech
                    </Link>
                </NavbarBrand>
                <div className="nav">
                    <NavItem>
                        <NavLink className="items" to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="items" to="/contact-us">
                            Contact us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="items" to="/services">
                            Services
                        </NavLink>
                    </NavItem>
                </div>
            </Navbar>
            <div
                className="main"
                style={{
                    display: "flex",
                    border: "2px solid red",
                    margin: "auto",
                    width: "50%",
                    height: "50%",
                    padding: "0",
                }}
            >
                <div>
                    <p className="title">SEND US A MESSAGE</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "baseline",
                            width: "60%",
                            height: "40%",
                            padding: 0,
                            margin: "0 80px",
                        }}
                    >
                        <div
                            style={{
                                padding: "0px",
                                margin: "auto",
                            }}
                        >
                            <Label className="labell">Your name</Label>
                            <Input name="Your name" />

                            <Label className="labell">Phone number</Label>
                            <Input
                                name="Phone number"
                                placeholder="+01 234 567 7890"
                                type="number"
                            />

                            <Label className="labell">Email address</Label>
                            <Input
                                name="Email"
                                placeholder="you@example.com"
                                type="Email"
                            />
                        </div>
                        <div
                            style={{
                                width: "100%",
                                marginLeft: "20px",
                                padding: "10px",
                            }}
                        >
                            <FormGroup>
                                <Label className="label2">Text Area</Label>
                                <Col>
                                    <Input
                                        className="area"
                                        name="text"
                                        type="textarea"
                                    />
                                </Col>
                            </FormGroup>
                            <Icon
                                icon="mdi:send-circle"
                                color="green"
                                width="40"
                                height="40"
                            />
                        </div>
                    </div>
                </div>
                <div className="right-side text-white ">
                    <p>CONTACT INFORMATION</p>
                    <p>1100 favoritenstrasse</p>
                    <p>Vienna, Austria.</p>
                    <p>+01 234 567 7890</p>
                    <p>Email:you@example.com </p>
                </div>
            </div>
            <Map />
        </>
    );
}

export default App;
