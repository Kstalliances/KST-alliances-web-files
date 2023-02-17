import {Col, Container, FormGroup, Input, Label, List, Row} from "reactstrap";
import quote from "../images/quote.png";
import requirement from "../images/requirment.png";
import contact_us from "../images/contact_us.png";
import '../styles/form.css';


export const Footer = () => {
    return (
        <div id="benefits">
            <Container>
                <div className="d-flex justify-content-center mb-5 mt-5">
                    <div className="card" style={{background: 'transparent', border: 'none', width: '35rem'}}>
                        <img src={quote} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-5 mt-5">
                    <div className="card" style={{background: 'transparent', border: 'none', width: '30rem'}}>
                        <img src={requirement} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg={6} md={6}>
                        <FormGroup>
                            <Input type="textarea" className="rounded-0"
                                   style={{height: '250px', borderColor: '#fbb034'}}></Input>
                        </FormGroup>
                        <h4>Your Detail</h4>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input className="form-control" type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Conatct Number</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Company Name</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>How did you hear about us?</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mb-5 mt-5">
                    <div className="card" style={{background: 'transparent', border: 'none', width: '30rem'}}>
                        <img src={contact_us} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <Container className="text-center">
                    <FormGroup>
                        <Label>Phone</Label>
                        <Label className="ms-5">+1 (816) 301-7009</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Label className="ms-5">info@kstalliances.com</Label>
                    </FormGroup>
                </Container>
                <div className="text-center">
                    <Container className="d-flex justify-content-center mb-3">
                        <div style={{borderBottom: '2px solid #fbb034', width: '400px'}}></div>
                    </Container>
                    <p>We look forward to exceeding your expectations</p>
                    <Container className="d-flex justify-content-center mb-5">
                        <div style={{borderBottom: '2px solid #fbb034', width: '400px'}}></div>
                    </Container>
                </div>
            </Container>
        </div>
    )
}