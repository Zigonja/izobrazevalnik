import React from "react";
import EquationEditor from "equation-editor-react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Button,
  Col,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  Label,
  FormText
} from "reactstrap";

class Pomoc extends React.Component {
  state = {
    modalOdgovoriOpen: false,
    modalOdgovorOpen: false
  };
 
  closeModal = () => {
    this.setState({modalOdgovoriOpen: false, modalOdgovorOpen: false, modalVprasajOpen: false});
  };

  openOdgovoriModal = () => {
    this.setState({modalOdgovoriOpen: true});
  };

  openOdgovorModal = () => {
    this.setState({modalOdgovorOpen: true});
  };

  openVprasajModal = () => {
    this.setState({modalVprasajOpen: true});
  };

  render() {
    return (
      <>
        <Modal 
          isOpen={this.state.modalOdgovoriOpen}
          fade={true}
          backdrop
          size="lg"
        >
          <ModalHeader toggle={this.closeModal}>
            <h3>Odgovori</h3>
          </ModalHeader>

          <ModalBody>
          <Form>
            <Row>
              <Col md="12">
                <FormGroup>
                  <h3 style={{color: "black",  marginBottom: 0}}>Vprašanje</h3>
                  <p style={{marginBottom: 10}}>
                    Katera beseda v stavku "Danes sem se prebudil v prelepo jutro." je prilastek?
                  </p>
                  <label><h3 style={{color: 'black', marginBottom: 0}}>Odgovor</h3></label>
                  <Input
                    cols="80"
                    placeholder="Odgovor na vprašanje"
                    rows="5"
                    type="textarea"
                    style={{color: "black"}}
                  />

                  <FormGroup style={{marginTop: 30}}>
                    <Card style={{padding: 15, cursor: "pointer"}}>
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="black" style={{fontSize: 14}}>
                        <i className="tim-icons icon-pin" /> Datoteka
                      </FormText>
                      <FormText>
                        Svojemu odgovoru pripni datoteko (Postopka, razlage...) 
                      </FormText>
                    </Card>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
          </Form>
          </ModalBody>

          <ModalFooter style={{justifyContent: "flex-end"}}>
            <Button size="lg" style={{marginTop: 15, float: "right"}} color="">Shrani odgovor</Button>
          </ModalFooter>
        </Modal>

        <Modal 
          isOpen={this.state.modalOdgovorOpen}
          fade={true}
          backdrop
          size="lg"
        >
          <ModalHeader toggle={this.closeModal}>
            <h3>Odgovor</h3>
          </ModalHeader>

          <ModalBody>
          <Form>
            <Row>
              <Col md="12">
                <FormGroup>
                  <h3 style={{color: "black",  marginBottom: 0}}>Vprašanje</h3>
                  <p style={{marginBottom: 10}}>
                    V katerih primerih se uporablja zapis "will have been"?	
                  </p>
                  <label><h3 style={{color: 'black', marginBottom: 0}}>Odgovor</h3></label>
                  <p style={{marginBottom: 10}}>
                    Will have been uporabljamo takrat, kadar govorimo o nečemu, kar se bo zgodilo v prihodnosti a se je začelo že v preteklosti. Primer bi bil "Next month I will have been working with my company for three years".
                  </p>
                </FormGroup>
              </Col>
            </Row>
          </Form>
          </ModalBody>
        </Modal>

        <Modal 
          isOpen={this.state.modalVprasajOpen}
          fade={true}
          backdrop
          size="lg"
        >
          <ModalHeader toggle={this.closeModal}>
            <h3>Vprašaj</h3>
          </ModalHeader>

          <ModalBody>
          <Form>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label><h3 style={{color: 'black', marginBottom: 0}}>Vprašanje</h3></label>
                  <Input
                    cols="80"
                    placeholder="Vpišite vaše vprašanje"
                    rows="5"
                    type="textarea"
                    style={{color: "black"}}
                  />

                  <FormGroup style={{marginTop: 30}}>
                    <Card style={{padding: 15, cursor: "pointer"}}>
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="black" style={{fontSize: 14}}>
                        <i className="tim-icons icon-pin" /> Datoteka
                      </FormText>
                      <FormText>
                        Svojemu vprašanju pripni datoteko (Enačba, graf, slika...) 
                      </FormText>
                    </Card>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
          </Form>
          </ModalBody>

          <ModalFooter style={{justifyContent: "flex-end"}}>
            <Button size="lg" style={{marginTop: 15, float: "right"}} color="">Pošlji vprašanje</Button>
          </ModalFooter>
        </Modal>

        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col>
                    <CardTitle tag="h1">Vprašanja</CardTitle>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Input
                        placeholder="Poišči vprašanje"
                        type="text"
                      />
                    </FormGroup>
                    </Col>
                    </Row>
                  </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Ime</th>
                        <th>Predmet</th>
                        <th>Vprašanje</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Žiga Klemenčič</td>
                        <td>Slovenščina</td>
                        <td>Katera beseda v stavku "Danes sem se prebudil v prelepo jutro." je prilastek?</td>
                        <td><Button onClick={this.openOdgovoriModal} color="">Odgovori</Button></td>
                      </tr>
                      <tr>
                        <td>Janez Novak</td>
                        <td>Matematika</td>
                        <td>Kako najdemo mediano števil 4, 5, 6, 88, 123, 201?</td>
                        <td><Button onClick={this.openOdgovoriModal} color="">Odgovori</Button></td>
                      </tr>
                      <tr>
                        <td>Luka Škof</td>
                        <td>Fizika</td>
                        <td>Potrebujem pomoč pri nalogi 6 na strani 27 iz učbenika Fizika 1</td>
                        <td><Button onClick={this.openOdgovoriModal} color="">Odgovori</Button></td>
                      </tr>
                      <tr>
                        <td>Zala Žerjal</td>
                        <td>Matematika</td>
                        <td>Potrebovala bi postopek za sledeč račun<br />
                        <EquationEditor
                            value={"sin^2(x) + cos^2(5) = 1"}
                            onChange={() => {}}
                            autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
                            autoOperatorNames="sin cos tan"
                          />

                        </td>
                        <td className="green-gradient"><Button onClick={this.openOdgovorModal} color="primary">Poglej odgovor</Button></td>
                      </tr>
                      <tr>
                        <td>Mateja Zajec</td>
                        <td>Angleščina</td>
                        <td>V katerih primerih se uporablja zapis "will have been"?</td>
                        <td className="green-gradient"><Button onClick={this.openOdgovorModal} color="primary">Poglej odgovor</Button></td>
                      </tr>
                    </tbody>
                  </Table>

                  <Row>
                    <Col>
                      <Button onClick={this.openVprasajModal} size="lg" color="secondary">Vprašaj</Button>
                    </Col>
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

export default Pomoc;
