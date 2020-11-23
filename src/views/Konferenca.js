import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

import Video from 'assets/img/video-thumb.gif'
import { NavLink } from "react-router-dom";


class Konferenca extends React.Component {
  render() {
    return (
    <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                 <h1 className="title">Konferenca z Inštruktorjem - Peter</h1>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="8">
                      <div className="video-call" style={{backgroundImage: 'url(' + Video + ')'}}>


                        <div className="video-controls">
                        <i className="tim-icons icon-settings-gear-63" />

                          <i className="tim-icons icon-video-66" />
                          <i className="tim-icons icon-volume-98" />
                          <i className="tim-icons icon-tv-2" />
                      </div>
                      </div>
                  
                    </Col>

                    <Col>
                      <div className="chat-div">
                        <div>
                          <strong>(17:32) Miha:</strong> Zdravo!
                        </div>
                        <div>
                          <strong>(17:33) Anja:</strong> Ali se slišimo?
                        </div>
                        <div>
                          <strong>(17:40) Jure je dvignil roko  <i style={{verticalAlign: "baseline"}} className="tim-icons icon-tap-02" /></strong>
                        </div>

                        <div className="ask-row">
                          <Input

                              placeholder="Sporočilo"
                              type="text"
                            />
                            &nbsp;
                            <i className="tim-icons  icon-tap-02" />
                            &nbsp;
                            <i className="tim-icons icon-minimal-right" />
                          

                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <NavLink to="/admin/instrukcije">
                      <Button size="lg" className="btn-fill" style={{float: 'right'}} color="" type="submit">
                        Izhod
                      </Button>
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Konferenca;
