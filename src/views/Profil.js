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

class Profil extends React.Component {
  render() {
    return (
    <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h1 className="title">Uredi svoj profil</h1>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Uporabniško ime</label>
                          <Input
                            defaultValue="uporabnik123"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            E-Mail
                          </label>
                          <Input placeholder="vas.naslov@email.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Ime</label>
                          <Input
                            defaultValue="Janez"
                            placeholder="Ime"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Priimek</label>
                          <Input
                            defaultValue="Novak"
                            placeholder="Priimek"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Naslov</label>
                          <Input
                            defaultValue="Večna pot 18, 1000 Ljubljana"
                            placeholder="Naslov"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>O meni</label>
                          <Input
                            cols="80"
                            defaultValue="Sem študent 3. letnika FRI, VSŠ programa in zelo me veseli predmet Grafično Oblikovanje."
                            placeholder="Vaš opis"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button size="lg" className="btn-fill" style={{float: 'right'}} color="" type="submit">
                    Shrani
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Profil;
