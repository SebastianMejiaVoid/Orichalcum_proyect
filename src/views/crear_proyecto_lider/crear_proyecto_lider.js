import React from "react";
import "./crear_proyecto_lider.css";
import { Col } from "react-bootstrap";
import { FormGroup, FormLabel, FormControl, Alert } from "react-bootstrap";
// import {FormLabel } from "@mui/material";

const crear_proyecto_lider = () => {
  return (
    <FormGroup
      controlId="formBasicText"
      validationState={this.props.error.status}
    >
      <FormLabel>
        {this.props.label}
        <span className="help-text">{this.props.helpText}</span>
      </FormLabel>
      <FormControl
        type={this.props.type}
        value={this.props.value}
        name={this.props.name}
        onChange={this.props.onChange}
        className={this.props.className}
        onBlur={this.props.validate}
      />
      <FormControl.Feedback />
      <Alert>{this.props.error.message}</Alert>
    </FormGroup>
  );
};

export default crear_proyecto_lider;
