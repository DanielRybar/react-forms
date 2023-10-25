import { Button, Form, FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const Formik = () => {
    const navigate = useNavigate();

    const sendData = (values) => {
        alert(JSON.stringify(values, " ", 4));
        navigate("/result");
    }

    const formik = useFormik({
        initialValues: {
            name: "Zoltán",
            password: "",
            birthdate: new Date("2004-01-14").toISOString().slice(0, 10),
            gender: "man",
            checkbox: false
        },
        validate: validateForm,
        onSubmit: values => { sendData(values) }
    });

    return (
        <div>
            <h1>Registrace pomocí Formiku</h1>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        invalid={!!formik.errors.name}
                        valid={formik.touched.name} />
                    {formik.errors.name
                        ? <FormFeedback>{formik.errors.name}</FormFeedback>
                        : null}
                </FormGroup>
                <FormGroup>
                    <Label for="password">Heslo</Label>
                    <Input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        invalid={!!formik.errors.password}
                        valid={formik.touched.password} />
                    {formik.errors.password
                        ? <FormFeedback>{formik.errors.password}</FormFeedback>
                        : null}
                </FormGroup>
                <FormGroup>
                    <Label for="birthdate">Datum narození</Label>
                    <Input
                        type="date"
                        name="birthdate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.birthdate}
                        invalid={!!formik.errors.birthdate}
                        valid={formik.touched.birthdate} />
                    {formik.errors.birthdate
                        ? <FormFeedback>{formik.errors.birthdate}</FormFeedback>
                        : null}
                </FormGroup>
                <FormGroup>
                    <Label for="gender">Pohlaví</Label>
                    <Input
                        type="select"
                        name="gender"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                        invalid={!!formik.errors.gender}
                        valid={formik.touched.gender}>
                        <option value="">Vyberte pohlaví</option>
                        <option value="man">Muž</option>
                        <option value="woman">Žena</option>
                        <option value="other">Jiné</option>
                    </Input>
                    {formik.errors.gender
                        ? <FormFeedback>{formik.errors.gender}</FormFeedback>
                        : null}
                </FormGroup>
                <FormGroup check>
                    <Label for="checkbox">Souhlas s podmínkami</Label>
                    <Input
                        type="checkbox"
                        name="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.checkbox}
                        invalid={!!formik.errors.checkbox}
                        valid={formik.touched.checkbox} />
                    {formik.errors.checkbox
                        ? <FormFeedback>{formik.errors.checkbox}</FormFeedback>
                        : null}
                </FormGroup>
                <Button type="submit">Odeslat</Button>
            </Form>
        </div>
    );
};

const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Jméno je povinné.";
    } if (values.name && values.name.length < 5) {
        errors.name = "Minimální délka jména je 5 znaků.";
    } if (!values.password) {
        errors.password = "Heslo je povinné.";
    } if (values.password && values.password.length < 4) {
        errors.password = "Minimální délka hesla jsou 4 znaky.";
    } if (values.password && !/\d/.test(values.password)) {
        errors.password = "Heslo musí obsahovat číslici.";
    } if (!values.birthdate) {
        errors.birthdate = "Datum narození je povinné.";
    } if (values.birthdate && new Date(values.birthdate) > new Date()) {
        errors.birthdate = "Datum narození musí být v minulosti.";
    } if (!values.gender) {
        errors.gender = "Pohlaví je povinné.";
    } if (values.checkbox === false) {
        errors.checkbox = "Souhlas s podmínkami je povinný.";
    }
    //console.log(errors)
    return errors;
}

export default Formik;