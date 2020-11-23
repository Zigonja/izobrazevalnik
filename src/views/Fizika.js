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
import Ang from "assets/img/predmeti/ang.png";
import Gos from "assets/img/predmeti/gos.png";
import Zgo from "assets/img/predmeti/zgo.png";
import Kem from "assets/img/predmeti/kem.png";
import Fiz from "assets/img/predmeti/fiz.png";


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
  Col,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody
} from "reactstrap";

class Fizika extends React.Component {
  state = {
    modalOpen: false
  };

  setModalOpen = () => {
    this.setState({modalOpen: true});
  }

  closeModal = () => {
    this.setState({modalOpen: false});
  }

  render() {
    return (
      <>
        <Modal 
          isOpen={this.state.modalOpen}
          fade={true}
          backdrop
          size="lg"
        >
          <ModalHeader toggle={this.closeModal}>
            <h3>Sile v ravnovesju</h3>
          </ModalHeader>

          <ModalBody>
            <p style={{fontSize: 24}}>
                Pisano razlago in predstavitev snovi lahko najdete v učbeniku <strong>
                <a style={{color: '#1c6bff'}}target="_blank" href="https://wdn.ipublishcentral.com/mladinska/viewinsidehtml/515931304552678"><strong>Fizika 1</strong></a>
                </strong> na strani <strong>96</strong>.
              
            </p>

            <p style={{fontSize: 24}}>
              Prostor za druge materijale, razlage, skice in podobno.
            </p>

            <h1 style={{color: '#27293d', marginTop: 30, marginBottom: 30}}>Video predstavitev snovi z nalogami</h1>
            <iframe style={{width: '100%', marginBottom: 30,borderRadius: '5px'}} width="560" height="465" src="https://www.youtube.com/embed/tbDStYJ9CqU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </ModalBody>
        </Modal>

        <div className="content snov-buttons">
        <Row>
            <Col md="12">
              <Card>
                <CardBody onClick={this.setModalOpen} className="">
                    <Row >
                      <Col xs={12}><h3>Merjenje</h3></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Potence</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Prepone in pretrarjanje</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Napake pri merjenju</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Grafični prikaz rezultatov</button></Col>
                    </Row>
                    <Row className="y">
                      <Col xs={12}><h3>Gibanje</h3></Col>
                      
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Premo enakomerno gibanje</button></Col>
                      <Col xs={3} ><button class="btn btn-secondary btn-lg w-100">Trenje in upor</button></Col>
                      <Col xs={3} ><button class="btn btn-secondary btn-lg w-100">Vodoravni met</button></Col>
                      <Col xs={3} ><button class="btn btn-secondary btn-lg w-100">Kroženje</button></Col>
                    </Row>
                    <Row className="r">
                      <Col xs={12}><h3>Newtonovi zakoni</h3></Col>
                      
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Sila</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Newtonovi zakoni</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Hookov zakon</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Sile v ravnovesju</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">II. Newtonov zakon</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Ravnovesje</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Težišče</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Vrtenje</button></Col>
                    </Row>

                    <Row className="">
                      <Col xs={12}><h3>Gravitacija</h3></Col>
                      
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Keplerjevi zakoni</button></Col>
                      <Col xs={3}><button class="btn btn-secondary btn-lg w-100">Newtonov gravitacijski zakon</button></Col>
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

export default Fizika;
