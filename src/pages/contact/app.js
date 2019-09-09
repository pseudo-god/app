import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import TopNav from "component/TopNav";
import Footer from "component/Footer";
import withIntl from "component/withIntl";
import intl from "react-intl-universal";
import axios from "axios";
import { Formik } from "formik";
import { CONTACT_US } from 'src/url';

import topBanner from "src/assets/Contact/1.png";

class App extends Component {
  handleSubmit = (e) => {
		axios.post(CONTACT_US, e)
			.then(r => {
				console.log(r);
				alert('提交成功！');
			})
			.catch(e => {
				console.log(e);
        alert('提交失败！');
			});
  }

  render() {
    return (
      <div className="contact-section">
        <TopNav bg="dark" />
        <div
          className="section-hd"
          className="top-banner"
          style={{
            backgroundImage: `url(${topBanner})`,
            backgroundSize: "cover"
          }}
        >
          <div className="title-lg red">{intl.get("CONTACT_TITLE")}</div>
        </div>

        <div className="section-md">
          <Formik onSubmit={this.handleSubmit}>
            {({ handleSubmit, handleChange, handleBlur, values }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("CONTACT_PH1")}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="mail" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("CONTACT_PH2")}
                    name="mail"
                    value={values.mail}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="content" role="form">
                  <Form.Control
                    as="textarea"
                    rows="10"
                    placeholder={intl.get("CONTACT_PH4")}
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="secondary" type="submit" className="btn">
                  {intl.get("CONTACT_BTN")}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withIntl(App);
