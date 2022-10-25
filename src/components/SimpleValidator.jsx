import { useState, useRef, createRef } from "react";
import * as SimpleReactValidator from "simple-react-validator";
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const SimpleValidator = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();

    const form = createRef();

    const submitForm = () => {
        const formValid = simpleValidator.current.allValid();
        if (!formValid) {
          simpleValidator.current.showMessages(true);
          forceUpdate(1)
        } else {
          alert(JSON.stringify({name}, " ", 4));
          navigate('/result');
        }
    };

    return (
        <div>
            <h1>Simple React Validator</h1>
            <Form ref={form}>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        onBlur={e => {simpleValidator.current.showMessageFor("name"); forceUpdate(1);}} />
                    {simpleValidator.current.message("name", name, "required|min:5")}
                </FormGroup>
                <Button type="button" onClick={submitForm}>Odeslat</Button>
            </Form>
        </div>
    );
};

export default SimpleValidator;