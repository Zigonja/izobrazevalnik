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
                <CardHeader>
                  <h5 className="title">Osnovna šola</h5>
                  <p className="category">
                    Snov za učence osnovnih šol, deljeno po predmetih in razredih
                  </p>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row style={{marginBottom: 30}}>
                    <Col><a href="/admin/fizika" class="btn btn-primary btn-lg w-100 class-btn">Prvi razred</a></Col>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Drugi razred</button></Col>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Tretji razred</button></Col>
                  </Row>
                 
                  <Row style={{marginBottom: 30}}>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Četrti razred</button></Col>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Peti razred</button></Col>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Šesti razred</button></Col>
                  </Row>

                  <Row>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Sedmi razred</button></Col>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Osmi razred</button></Col>
                    <Col><button class="btn btn-primary btn-lg w-100 class-btn">Deveti razred</button></Col>
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
