
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Post</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Post Title</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Select Category</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Travel</option>
                  <option value="1">Sports</option>
                  <option value="2">Tech</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Post Type</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Published</option>
                  <option value="1">Draft</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Posted By</Form.Label>
                <Form.Control required type="text" disabled={true} placeholder="Joe" />
              </Form.Group>
            </Col>

          </Row>

          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Post Description</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3" >
            <Button variant="primary" type="submit">Add Post</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
