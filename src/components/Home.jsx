import logo from "../logo.svg";
import { Table } from "reactstrap";

const Home = () => {
    return (
        <div className='App'>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="display-3">Forms demo</p>
            <Table striped>
                <thead>
                    <tr>
                        <th>Jednoduché formuláře</th>
                        <th>Komplexní formuláře</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>Málo polí, typicky jedno textové</i></td>
                        <td><i>Více polí různých typů</i></td>
                    </tr>
                    <tr>
                        <td>Stavové háky (hl. useRef, useState)</td>
                        <td>React Hook Form</td>
                    </tr>
                    <tr>
                        <td>Simple React Validator</td>
                        <td>Formik</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Je doporučeno tyto postupy vhodně kombinovat.</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Home;