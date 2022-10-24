import { Button, Container, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Container className="mt-5">
            <Alert color="danger">Požadovaná stránka nenalezena</Alert>
            <Button color="danger" onClick={e => {navigate(-1)}}>Zpět</Button>
        </Container>
    );
};

export default NotFound;