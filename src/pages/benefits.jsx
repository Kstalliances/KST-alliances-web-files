import {Col, Container, List, Row} from "reactstrap";
import benefits from "../images/benefits.png";


export const Benefits = () => {
    return (
        <div id="benefits">
            <Container>
                <div className="d-flex justify-content-center mb-5 mt-5">
                    <div className="card" style={{background: 'transparent', border: 'none', width: '35rem'}}>
                        <img src={benefits} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg={12} md={12}>
                        <List>
                            <ul>
                                <li>Guaranteed substantial savings on payroll. Increased productivity and profitability.
                                    Offshore staffing helps you to minimize your overhead – in some cases, by as much as 80%!</li>
                                <li>Reduction of employee turnover rate.</li>
                                <li>Chat, phone or email Support</li>
                                <li>Transition of an existing team</li>
                                <li>Offshore staff size flexibility from one person (such as a virtual assistant) to a
                                    whole
                                    team.
                                </li>
                                <li>Eliminate the time and resource burden of active employee management, while also
                                    reducing the turnover rate.
                                </li>
                            </ul>
                        </List>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}