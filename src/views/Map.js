/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Icons extends React.Component {
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
                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Prvi letnik</a></Col>
                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Drugi letnik</a></Col>

                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Tretji letnik</a></Col>
                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Četrti letnik</a></Col>
                  </Row>
                 
                  <Row>
                    <Col xs={12}><h1 className="title">Gimnazija</h1>
                      <p className="category">
                        Snov za gimnazije, deljena po letnikih in predmetih
                      </p>
                    </Col>
                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Prvi letnik</a></Col>
                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Drugi letnik</a></Col>

                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Tretji letnik</a></Col>
                      <Col xs={3}><a style={{lineHeight: "72px"}} href="/admin/predmeti" class="btn btn-secondary btn-lg mb-25 w-100 class-btn">Četrti letnik</a></Col>
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

export default Icons;
