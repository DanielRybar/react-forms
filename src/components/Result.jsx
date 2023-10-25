import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <p className="display-3">OK</p>
            <Button color="primary" onClick={e => { navigate("/react-forms") }}>Domů</Button>
            <Button color="secondary" onClick={e => { navigate(-1) }}>Zpět</Button>
        </div>
    );
};

export default Result;