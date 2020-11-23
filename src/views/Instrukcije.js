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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import Face1 from 'assets/img/instruktor1.png'
import Face2 from 'assets/img/instruktor2.png'
import Face3 from 'assets/img/instruktor3.png'


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";


class Instrukcije extends React.Component {
  state = {
    open: false
  };
  
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }

  toggleDropdown = () => {
    this.setState({
      open: !this.state.open
    });
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="">
                <CardHeader>
                  <Row>
                    <Col className="text-left" xs="12">
                      <CardTitle tag="h1">Izbira predmeta</CardTitle>
                      <p className="category">
                        Izberite predmet, pri katerem potrebujete inštrukcije
                      </p>
                    </Col>
      
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col style={{textAlign: 'left'}}>
                    <div class="dropdown">
                      <button onClick={this.toggleDropdown} class="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Izbira predmeta
                      </button>
                      <div style={{display: (this.state.open ? 'block' : 'none')}}class="dropdown-menu predmeti-dropdown" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Slovenščina</a>
                        <a class="dropdown-item" href="#">Matematika</a>
                        <a class="dropdown-item" href="#">Tuji jeziki</a>
                        <a class="dropdown-item" href="#">Programiranje</a>
                        <a class="dropdown-item" href="#">Fizika</a>
                        <a class="dropdown-item" href="#">Kemija</a>
                        <a class="dropdown-item" href="#">Sociologija</a>
                        <a class="dropdown-item" href="#">Elektrotehnika</a>
                        <a class="dropdown-item" href="#">Geografija</a>
                        <a class="dropdown-item" href="#">Fiziologija</a>
                        <a class="dropdown-item" href="#">Ostali predmeti</a>
                      </div>
                    </div>
                  </Col>
                  </Row>
                </CardBody>

              </Card>
            </Col>

            <Col xs="12">
              <Card className="">
                <CardHeader>
                  <Row>
                    <Col className="text-left" xs="12">
                      <CardTitle tag="h1">Inštruktorji</CardTitle>
                      <p className="category">
                        Tukaj lahko vidiš inštruktorje, ki inštruirajo izbrani predmet
                      </p>
                    </Col>
      
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row className="instruktorji">
                    <Col xs="4" style={{textAlign: 'center'}}>
                      <div className="insturktor-div">
                        <div style={{padding: 0}}>
                          <img src={Face1}></img>
                        </div>
                        <div>
                          <h4>Inštruktor Matej</h4>
                        </div>
                        <hr />
                        <div>
                          <strong>52</strong> opravljenih inštrukcij
                        </div>
                        <div>
                          Povprečna ocena <strong>4.7</strong>
                        </div>
                        <div>
                          Možnost inštruiranja na daljavo
                        </div>
                        <hr />
                        <div>
                          <a className="btn btn-primary w-100 mt-15" href="#">Kontakt</a>
                        </div>
                      </div>
                    </Col>
                    <Col xs="4" style={{textAlign: 'center'}}>
                    <div className="insturktor-div">

                      <div style={{padding: 0}}>
                        <img src={Face3}></img>
                      </div>
                      <div>
                        <h4>Inštruktor Peter</h4>
                      </div>
                      <hr />
                      <div>
                        <strong>86</strong> opravljenih inštrukcij
                      </div>
                      <div>
                        Povprečna ocena <strong>3.2</strong>
                      </div>
                      <div>
                        Možnost inštruiranja na daljavo
                      </div>
                      <hr />
                      <div>
                        <a className="btn btn-primary w-100 mt-15" href="#">Kontakt</a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="4" style={{textAlign: 'center'}}>
                    <div className="insturktor-div">

                      <div style={{padding: 0}}>
                        <img src={Face2}></img>
                      </div>
                      <div>
                        <h4>Inštruktorica Iza</h4>
                      </div>
                      <hr />
                      <div>
                        <strong>14</strong> opravljenih inštrukcij
                      </div>
                      <div>
                        Povprečna ocena <strong>4.3</strong>
                      </div>
                      <div>
                        Pride na dom
                      </div>
                      <hr />
                      <div>
                        <a className="btn btn-primary w-100 mt-15" href="#">Kontakt</a>
                      </div>
                      </div>
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

export default Instrukcije;
