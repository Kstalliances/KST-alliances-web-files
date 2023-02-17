import {Container} from "reactstrap";
import why from "../images/why-kst.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const WhyKST = () => {
    return (
        <div id="whyKst">
            <Container>
                <div style={{borderBottom: '2px solid #fbb034'}}/>
                <div className="d-flex justify-content-center mb-5 mt-5">
                    <div className="card" style={{background: 'transparent', border: 'none', width: '22rem'}}>
                        <img src={why} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <Container>
                    <p><span style={{fontSize: '6px', position: "absolute"}}>
                        <i style={{position: "relative", top:"8px"}} className="bi bi-circle-fill"></i></span>
                        Auxiliary team for operational or administrative
                        support</p>
                    <p>Scaling for new or existing projects</p>
                    <p>Chat, phone or email Support</p>
                    <p>Transition of an existing team</p>
                    <p>Offshore staff size flexibility from one person (such as a virtual assistant) to a whole
                        team.</p>
                    <p>Eliminate the time and resource burden of active employee management, while also
                        reducing the turnover rate.</p>
                </Container>
            </Container>
        </div>
    )
}