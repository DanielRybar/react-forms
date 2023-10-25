import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const UseStateForm = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");

    // chyby
    const [errors, setErrors] = useState({});

    const validate = () => {
        let isOk = false;
        if (name < 5) {
            setErrors(err => ({ ...err, name: "Minimální délka jména je 5 znaků." }));
        } else {
            setErrors(err => ({ ...err, name: "" }));
            isOk = true;
        }
        return isOk;
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Jméno: " + name);
            navigate("/result");
        }
    }

    // vzhledem k tomu, že používáme formuláře z Bootstrapu, tak místo atributu ref používáme innerRef
    return (
        <div>
            <h1>Validace pomocí useState</h1>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={e => { setName(e.target.value); validate(); }}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </FormGroup>
                <Button type="submit">Odeslat</Button>
            </Form>
        </div>
    );
};

export default UseStateForm;