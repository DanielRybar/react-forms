import { Spinner, Alert } from "reactstrap";

// https://redux-form.com/8.3.0/docs/gettingstarted.md/
export const ReduxForm = () => {
    return (
        <div>
            <h1>Registrace pomocí Redux Form</h1>
            <Spinner color="primary" />
            <Alert><a target="_blank" rel="noreferrer" href="https://redux-form.com/8.3.0/docs/gettingstarted.md/">Redux Form</a></Alert>
        </div>
    );
};

export default ReduxForm;