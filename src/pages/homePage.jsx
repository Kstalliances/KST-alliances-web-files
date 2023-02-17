import {Col, Container, Row} from "reactstrap";
import mainImg from '../images/01.jpg';

export const HomePage = () => {
    return (
        <div className="overlay" id="home">
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <Container className="d-flex justify-content-center">
                            <img src={mainImg} alt="" width="500px"/>
                        </Container>
                    </Col>
                    <Col lg={6}>
                        <Container>
                            <p style={{textAlign:'justify', marginTop: '40px', borderLeft: '2px solid #fbb034', paddingLeft: '10px'}}>
                                In these turbulent times business leaders are agonizing over how to sail through fluctuations
                                resulting from political, economic and environmental shocks. Historically, the main driver of staff
                                outsourcing has been cost reduction; today, the main driver is ultra-efficiency-to hire the best at
                                lowest possible cost and have the flexibility to quickly increase or decrease staff levels with fast
                                changing market conditions. In short these dangerously unpredictable external factors
                                necessitate not only unprecedented efficiency but also swift maneuverability in staff levels.
                                Solutions therefore is in staff augmentation with a smart partner like KST Alliances.
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}