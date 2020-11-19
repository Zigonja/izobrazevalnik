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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import Slo from "assets/img/predmeti/slo.png";
import Mat from "assets/img/predmeti/mat.png";
import Geo from "assets/img/predmeti/geo.png";
import Druz from "assets/img/predmeti/druz.png";
import Psi from "assets/img/predmeti/psi.png";

import Ang from "assets/img/predmeti/ang.png";
import Gos from "assets/img/predmeti/gos.png";
import Zgo from "assets/img/predmeti/zgo.png";
import Kem from "assets/img/predmeti/kem.png";
import Fiz from "assets/img/predmeti/fiz.png";
import Phi from "assets/img/predmeti/phi.png";
import Inf from "assets/img/predmeti/inf.png";
import Izb from "assets/img/predmeti/izb.png";


// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component { 
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <div className="content subject-cards">
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <a style={{cursor: 'default'}} href="/admin/fizika">

          <Row>
            <Col md="3">
              <Card>
                <CardImg variant="top" src={Slo} />
                <CardBody>
                  <CardText className="predmet-header">
                    Slovenščina
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Mat} />
                <CardBody>
                  <CardText className="predmet-header">
                    Matematika
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Ang} />
                <CardBody>
                  <CardText className="predmet-header">
                    Tuji jeziki
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Zgo} />
                <CardBody>
                  <CardText className="predmet-header">
                    Zgodovina
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
          <Col md="3">
              <Card>
                <CardImg variant="top" src={Geo} />
                <CardBody>
                  <CardText className="predmet-header">
                    Geografija
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Psi} />
                <CardBody>
                  <CardText className="predmet-header">
                    Psihologija
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Kem} />
                <CardBody>
                  <CardText className="predmet-header">
                    Kemija
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Fiz} />
                <CardBody>
                  <CardText className="predmet-header">
                    Fizika
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            
          </Row>

          <Row>
            <Col md="3">
              <Card>
                <CardImg variant="top" src={Gos} />
                <CardBody>
                  <CardText className="predmet-header">
                    Sociologija
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Phi} />
                <CardBody>
                  <CardText className="predmet-header">
                    Filozofija
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Inf} />
                <CardBody>
                  <CardText className="predmet-header">
                    Informatika
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardImg variant="top" src={Izb} />
                <CardBody>
                  <CardText className="predmet-header">
                    Izbirni predmeti
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          </a>
        </div>
      </>
    );
  }
}

export default Notifications;
