import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


export const UseRefForm = () => {
    const navigate = useNavigate();

    const nameInput = useRef(); // reference na formularove pole
    const [name, setName] = useState("");

    // chyby
    const [errors, setErrors] = useState({});

    const validate = () => {
        let isOk = false;
        if (nameInput.current.value.length < 5) { // zde lepsi testovat referenci
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
            <h1>Validace pomocí useRef</h1>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        innerRef={nameInput}
                        onChange={e => { setName(nameInput.current.value); validate(); }}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </FormGroup>
                <Button type="submit">Odeslat</Button>
            </Form>
        </div>
    );
};

export default UseRefForm;