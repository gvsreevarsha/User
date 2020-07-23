import React from 'react';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';
import Collapsible from 'react-collapsible';
import ReactSpeedometer from "react-d3-speedometer";
import {RadarExample} from './Radar';
import {RadarExample2} from './Radar2';
import {DoughnutExample} from './Doughnut';
import {BarExample} from './SimpleBarchart';
import {BarChart} from './Barchart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


function App() {
  return (
    <div className="App">    
        <Navbar dark color="dark" expand="md">
          <div class="container-fluid">
            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/gitamlogo.png' height="50" width="50"/>GITAM Bengaluru</NavbarBrand>
                <span className="tab1"></span>
                <div class="collapse navbar-collapse" id="Navbar">
                        <ul class="navbar-nav">
                            <li class="nav-item active col-md-2"><a class="nav-link" href="/" style={{color:"lightgreen"}}><span class="fa fa-home fa-lg"></span><br></br>Dashboard</a></li>
                            <li class="nav-item col-md-4"><a class="nav-link" href="./personaldetails" style={{color:"lightgreen"}}><span class="fa fa-info fa-lg"></span><br></br>Personal Details</a></li>
                            <li class="nav-item col-md-2"><a class="nav-link" href="./caleder" style={{color:"lightgreen"}}><span class="fa fa-calendar"></span><br></br>Calender</a></li>
                            <li class="nav-item col-md-4"><a class="nav-link" href="./changepassword" style={{color:"lightgreen"}}><span class="fa fa-key"></span><br></br>Change Password</a></li>
                            <li class="nav-item col-md-2"><a class="nav-link" href="./logout" style={{color:"lightgreen"}}><span class="fa fa-sign-out"></span><br></br>Logout</a></li>
                        </ul>  
                </div>
                <div className="p-2 welcome">  
                  Welcome<br></br>Name
                </div>
                <img src='assets/images/gitamlogo.png' height="50" width="50"></img>

          </div>
        </Navbar>        
        <div class="container-fluid">
            <br></br>
            <Row>
              <Col md="4">
                <Card color="success" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">Tenth Percentage</CardSubtitle>
                </Card>
              </Col>
              <Col md="4">
                <Card color="warning" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">Inter Percentage</CardSubtitle>
                </Card>
              </Col>
              <Col md="4">
                <Card color="danger" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">B Tech Percentage</CardSubtitle>
                </Card>
              </Col>
            </Row>
            <br></br>
          <Collapsible trigger="More Info">
          <br></br>
          <Row>
            <Col md="4">
              <Alert color="success" className="Rounded p-3">
                <CardTitle align="left">CSE</CardTitle>
                <CardSubtitle align="left">Branch</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="warning" className="Rounded p-3">
                <CardTitle align="left">A</CardTitle>
                <CardSubtitle align="left">Pass Category</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="danger" className="Rounded p-3">
                <CardTitle align="left">B</CardTitle>
                <CardSubtitle align="left">Section</CardSubtitle>
              </Alert>
            </Col>
          </Row>
          </Collapsible>
        </div>
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col md="6" className="pr-2 pt-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Job Fitment</CardSubtitle>
                <hr></hr>
                <br></br>
                <ReactSpeedometer responsive
                  maxValue={100}
                  value={75}
                  segments={6}
                />
                <CardText>
                Description : You are 75 % suitable
                to the industry with your current performance
                in all the tests conducted by T&P
                </CardText>
              </Card>
            </Col>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Current Job Suitability</CardSubtitle>
                <hr></hr>
                <div class="container-fluid">
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Analyst
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      CustomerSales
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Plant Engineer
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      RRD Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Network Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Operations Engineer
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Developer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Tester
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col sm="12">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">ARI</CardSubtitle>
                <hr></hr>
                <BarChart/>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Cocubes Analysis</CardSubtitle>
                <hr></hr>
                  <RadarExample/>
              </Card>
            </Col>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Amcat Analysis</CardSubtitle>
                <hr></hr>
                  <RadarExample2/>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>

        <div class="container-fluid">
          <Row>
            <Col md="12">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">ITA</CardSubtitle>
                <hr></hr>
                <BarExample/>
              </Card>
            </Col>
          </Row>
        </div>  
        <br></br>
        <Table striped className="placements" bordered responsive>
            <thead>
              <tr>
                <th colspan="2">Placements Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td md="6">
                  Total Number of Companies:50
                </td>
                <td md="6">
                  Number of written test cleared:0
                </td>
              </tr>
              <tr>
                <td md="6">
                  Number of Companies Attended:0
                </td>
                <td md="6">
                  Number of GD's cleared:0
                </td>
              </tr>
              <tr>
                <td md="6">
                  Number of Companies Eligible:50
                </td>
                <td md="6">
                  Number of technical test cleared:0
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  Number of Offer Letters:0
                </td>
              </tr>
            </tbody>
        </Table>
        <br></br>
        <h6>Placements Analysis</h6>
      <Table className="placements" responsive striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company Logo</th>
            <th>Company Name</th>
            <th>Attendance</th>
            <th>Written Test</th>
            <th>GroupDiscussion</th>
            <th>Technical Test</th>
            <th>Personal Interview</th>
          </tr>
        </thead>
        </Table>
      <br></br><br></br>

      <footer>
        <div className="footer">
            <div className="footer1">
              <div>
                  Developers
              </div>
            </div>
            <div className="footer2">
                  <div className="container-fluid">
                    <Row>
                      <Col>
                        Siddharth Datthathreya
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" sm="12">
                        Devi Priya
                      </Col>
                      <Col lg="6" md="6" sm="12">
                        Avinash Chunduri
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" md="6" sm="12">
                        Soujanya Muthyala
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Sree Varsha
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Charan Varikuti
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Deepak Desai
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" md="6" sm="12">
                        Madhu Priya
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Gulab Jain
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Sindhu Priya
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Nihanth Reddy
                      </Col>
                    </Row>
                  </div>
                  <div className="row justify-content-center">
                          <div className="text-center">
                              <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                              <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                              <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                          </div>
                  </div>
                  <div className="row justify-content-center">             
                      <div className="col-auto">
                          <p>Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                      </div>
                  </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
