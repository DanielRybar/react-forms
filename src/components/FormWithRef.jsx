import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// https://reactjs.org/docs/hooks-reference.html
// https://www.w3schools.com/react/react_useref.asp
export const FormWithRef = () => { // to nejhorší co existuje
    const nameRef = useRef();
    const passwordRef = useRef();
    const dateRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const date = dateRef.current.value;
        const
            nameError = document.getElementById('nameError'),
            passwordError = document.getElementById('passwordError'),
            dateError = document.getElementById('dateError');
            
        if (name.length < 5) {
            nameError.innerText = 'Minimální délka jména je 5 znaků.';
        } else {
            nameError.innerText = '';
        }
        if (password.length < 4 || !/\d/.test(password)) {
            passwordError.innerText = 'Minimální délka hesla je 4 znaky a musí obsahovat číslici.';
        } else {
            passwordError.innerText = '';
        }
        if (!date || new Date(date) > new Date()) {
            dateError.innerText = 'Datum narození musí být v minulosti.';
        } else {
            dateError.innerText = '';
        }
        if (name.length >= 5 && password.length >= 4 && /\d/.test(password) && new Date(date) < new Date()) {
            navigate('/result');
            alert(JSON.stringify({name, password, date}, ' ', 4));
        }
    }

    return (
        <div>
            <h1>Registrace pomocí useRef</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Input type="text" name="name" id="name" innerRef={nameRef} />
                    <div id="nameError" className='error'></div>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Heslo</Label>
                    <Input type="password" name="password" id="password" innerRef={passwordRef} />
                    <div id="passwordError" className='error'></div>
                </FormGroup>
                <FormGroup>
                    <Label for="date">Datum narození</Label>
                    <Input type="date" name="date" id="date" innerRef={dateRef} />
                    <div id="dateError" className='error'></div>
                </FormGroup>
                <Button type="submit">Odeslat</Button>
            </Form>
        </div>
    );
};

export default FormWithRef;