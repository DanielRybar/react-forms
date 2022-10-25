import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NAME = "name";
export const PASSWORD = "password";
export const DATE = "date";

// https://reactjs.org/docs/hooks-reference.html
// https://www.w3schools.com/react/react_useref.asp
export const FormWithRef = () => { 
    const navigate = useNavigate();

    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const dateRef = useRef(null);
    const [isValid, setIsValid] = useState(true);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const errors = useRef({});

    const validate = (el) => { 
        switch(el) {
            case NAME:
                if (nameRef.current.value.length < 5) {
                    errors[NAME] = "Jméno musí mít alespoň 5 znaků";
                } else errors[NAME] = "";
                break;
            case PASSWORD:
                if (passwordRef.current.value.length < 5) {
                    errors[PASSWORD] = "Heslo musí mít alespoň 5 znaků";
                }
                else if (!/\d/.test(passwordRef.current.value)) {
                    errors[PASSWORD] = "Heslo musí obsahovat alespoň jedno číslo";
                } else errors[PASSWORD] = "";
                break;
            case DATE:
                if (dateRef.current.value === "") {
                    errors[DATE] = "Datum musí být vyplněno";
                } else if (new Date(dateRef.current.value) > new Date()) {
                    errors[DATE] = "Datum musí být v minulosti";
                } else errors[DATE] = "";
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        errors.current = errors;
    }, [isValid]);

    const submitForm = (e) => { 
        e.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const date = dateRef.current.value;
        validate(NAME);
        validate(PASSWORD);
        validate(DATE);
        if (errors.name === "" && errors.password === "" && errors.date === "") {
            setIsValid(true); 
            alert(JSON.stringify({name, password, date}, " ", 4));
            navigate('/result');
        } else {
            setIsValid(false);
        }
    }

    return (
        <div>
            <h1>Stavové háky</h1>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name}
                        innerRef={nameRef}
                        onChange={e => {setName(nameRef.current.value); validate(NAME);}} 
                        onBlur={e => {setName(nameRef.current.value); validate(NAME)}} 
                        />
                    {errors.name && <Alert color="danger">{errors.name}</Alert>}
                </FormGroup>
                <FormGroup>
                    <Label for="password">Heslo</Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        innerRef={passwordRef}
                        onChange={e => {setPassword(passwordRef.current.value); validate(PASSWORD);}}
                        onBlur={e => {setPassword(passwordRef.current.value); validate(PASSWORD)}}
                        />
                    {errors.password && <Alert color="danger">{errors.password}</Alert>}
                </FormGroup>
                <FormGroup>
                    <Label for="date">Datum narození</Label>
                    <Input 
                        type="date" 
                        name="date" 
                        id="date" 
                        value={date}
                        innerRef={dateRef} 
                        onChange={e => {setDate(dateRef.current.value); validate(DATE);}}
                        onBlur={e => {setDate(dateRef.current.value); validate(DATE)}}
                    />
                </FormGroup>
                {errors.date && <Alert color="danger">{errors.date}</Alert>}
                <Button type="submit">Odeslat</Button>
            </Form>
        </div>
    );
};

export default FormWithRef;