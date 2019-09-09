import React, { Component } from "react";
import TopNav from "component/TopNav";
import Footer from "component/Footer";
import withIntl from "component/withIntl";
import intl from "react-intl-universal";
import axios from "axios";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { PROJECT } from "src/url";
import GIF from 'src/assets/Project/0.gif';

class App extends Component {
  handleSubmit = e => {
    const file = this.fileInput.files[0];
    var formData = new FormData();
    formData.append("attachment", file);
    for (let i in e) {
      formData.append(i, e[i]);
    }
    console.log(formData)
    axios
      .post(PROJECT, formData, {
        headers: { "Content-Type": "multipart/form-data" } 
      })
      .then(r => {
        console.log(r);
        alert("提交成功！");
      })
      .catch(e => {
        console.log(e);
        alert("提交失败！");
      });
  };

  render() {
    return (
      <div className="project-section">
        <TopNav bg="dark" />
        <div className="section-hd">
          <img src={GIF} className='text-center mx-auto d-block w-50' />
          <div className='desc'>{intl.get("PROJ_DESC")}</div>
          <hr />
        </div>
        <div className="section-bd">
          <div className='title'>{intl.get("PROJ_TIT")}</div>
          <Formik onSubmit={this.handleSubmit}>
            {({ handleSubmit, handleChange, handleBlur, values }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("PROJ_PH1")}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="website" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("PROJ_PH2")}
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="doc_addr" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("PROJ_PH3")}
                    name="doc_addr"
                    value={values.doc_addr}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="contact" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("PROJ_PH4")}
                    name="contact"
                    value={values.contact}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="github" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("PROJ_PH5")}
                    name="github"
                    value={values.github}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="mail" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("PROJ_PH6")}
                    name="mail"
                    value={values.mail}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="remarks" role="form">
                  <Form.Control
                    type="text"
                    placeholder={intl.get("PROJ_PH7")}
                    name="remarks"
                    value={values.remarks}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="file">
                  <div>{intl.get("PROJ_PH8")}</div>
                  <Form.Control
                    onChange={handleChange}
                    name="file"
                    style={{ width: "200px" }}
                    ref={ref => {
                      this.fileInput = ref;
                    }}
                    value={values.file}
                    type="file"
                    placeholder="update"
                  />
                  </Form.Group>
                <Button variant="secondary" type="submit" className="btn">
                  {intl.get("PROJ_BTN")}
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
