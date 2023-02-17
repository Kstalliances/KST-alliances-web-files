import {Col, List, Row} from "reactstrap";
import service from '../images/service2.png';

export const ServicePage = () => {
    return (
        <div className="menu" id="service">
            <div style={{borderBottom: '2px solid #fbb034'}}/>
            <div className="d-flex justify-content-center mb-5">
                <div className="card" style={{background: 'transparent', border: 'none', width: '22rem'}}>
                    <img src={service} className="card-img-top" alt="..."/>
                </div>
            </div>
            {/*<div className="text-center mb-5">*/}
            {/*    <img src={service} alt="" width="350px"/>*/}
            {/*</div>*/}
            <div className="text-body">
                <Row className="d-flex justify-content-between">
                    <Col lg={3} md={6}>
                        <b>Customer or Team Support</b>
                        <List>
                            <li>Customer Service Representatives</li>
                            <li>Technical Support</li>
                            <li>Chat, phone or email Support</li>
                            <li>Help Desk support</li>
                            <li>IT Support</li>
                            <li>Project Support Administration</li>
                        </List>
                    </Col>
                    <Col lg={3} md={6}>
                        <b>Design, Modelling &amp; Multimedia</b>
                        <List>
                            <li>Web Developer</li>
                            <li>Web Designer</li>
                            <li>Video Editing</li>
                            <li>Graphic Designer</li>
                        </List>
                    </Col>
                    <Col lg={3} md={6}>
                        <b>Administrative &amp; Assistance</b>
                        <List>
                            <li>Data Entry</li>
                            <li>Data Processing</li>
                            <li>Human Resources</li>
                        </List>
                    </Col>
                    <Col lg={3} md={6}>
                        <b>Bookkeeping, Accounting &amp; Finance</b>
                        <List>
                            <li>Bookkeeping</li>
                            <li>General Accounting</li>
                        </List>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between">
                    <Col lg={4} md={6}>
                        <b>IT Development, Web Developer, Mobile Developer, Programming &amp; Networking</b>
                        <List>
                            <li>Server Administrator</li>
                            <li>Web Development</li>
                            <li>Database Administrator</li>
                            <li>Network Administrator</li>
                            <li>IT Infrastructure Support</li>
                            <li>System Administrators</li>
                            <li>Software QA and Testing</li>
                            <li>IT Auditor</li>
                            <li>Cloud Service Administration</li>
                            <li>Email Handling</li>
                            <li>Front End Developer</li>
                            <li>Back End Developer</li>
                            <li>Database Developer</li>
                            <li>Full Stack Developer</li>
                            <li>Mobile Development (Android and iOS)</li>
                            <li>Software Application Development</li>
                        </List>
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <b>Business Service and Project Managers</b>
                        <List>
                            <li>Analysts</li>
                            <li>Planner</li>
                            <li>Project Manager</li>
                            <li>Product Manager</li>
                            <li>Cost analyst</li>
                            <li>Budget and planning</li>
                            <li>Purchasing</li>
                            <li>Procurement Specialist</li>
                            <li>Buyer</li>
                            <li>Team Leader</li>
                            <li>QA specialists</li>
                            <li>Six Sigma Experts</li>
                            <li>Supply Chain Management</li>
                        </List>
                    </Col>
                    <Col lg={4} md={12} sm={6}>
                        <b>Sales, Marketing &amp; Social Media</b>
                        <List>
                            <li>Lead Generation</li>
                            <li>Social Media Posting and Scheduling</li>
                            <li>Facebook, Google, Amazon ads.</li>
                            <li>Telemarketing</li>
                            <li>Digital Marketing</li>
                            <li>SEO &amp; Social Media Marketing</li>
                            <li>Appointment Setting</li>
                        </List>
                    </Col>
                </Row>
            </div>
        </div>
    )
}