import React from "react";

import { Card, CardBody, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

class Snov extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody className="all-icons">
                  <Row style={{marginBottom: 30}}>
                    <Col xs={12}><h1 className="title">Strokovna srednja šola</h1>
                      <p className="category">
                        Snov za strokovne srednje šole, deljena po letnikih in predmetih
                      </p>
                    </Col>
                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Prvi letnik</NavLink></Col>
                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Drugi letnik</NavLink></Col>

                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Tretji letnik</NavLink></Col>
                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Četrti letnik</NavLink></Col>
                  </Row>
                 
                  <Row>
                    <Col xs={12}><h1 className="title">Gimnazija</h1>
                      <p className="category">
                        Snov za gimnazije, deljena po letnikih in predmetih
                      </p>
                    </Col>
                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Prvi letnik</NavLink></Col>
                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Drugi letnik</NavLink></Col>

                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Tretji letnik</NavLink></Col>
                      <Col xs={3}><NavLink style={{lineHeight: "72px"}} to="/admin/gim-prvi-letnik" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Četrti letnik</NavLink></Col>
              
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Snov;
