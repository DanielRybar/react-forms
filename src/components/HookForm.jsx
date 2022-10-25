import { useForm, Controller } from 'react-hook-form';
import { useNavigate/*, useParams*/, useSearchParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// https://react-hook-form.com/
export const HookForm = () => {
    const navigate = useNavigate();
    //const { year, month, day } = useParams(); // datum z parametrů URL
    const [, setSearchParams] = useSearchParams(); // parametry URL k nastavení

    const { /*register,*/ handleSubmit, control, formState: {errors} } = useForm();

    const onSubmit = (data) => { 
        setSearchParams({name: data.name, gender: data.gender, date: data.date});
        setTimeout(() => {
            navigate('/result');
            alert(JSON.stringify(data, " ", 4));
        }, 2000);
    }

    return (
        <div>
            <h1>Registrace pomocí hákového formuláře</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Controller name="name" control={control} rules={{required: true, minLength: 5}} render={({ field }) => <Input {...field} />} />
                    {errors.name?.type === 'required' && <p className='error'>Toto pole je povinné.</p>}
                    {errors.name?.type === 'minLength' && <p className='error'>Minimální délka jména je 5 znaků.</p>}
                </FormGroup>
                <FormGroup>
                    <Label for="password">Heslo</Label>
                    <Controller name="password" control={control} rules={{required: true, minLength: 4, pattern: /\d/}} render={({ field }) => <Input type="password" placeholder='beruska' {...field} />} />
                    {errors.password?.type === 'required' && <p className='error'>Toto pole je povinné.</p>}
                    {errors.password?.type === 'minLength' && <p className='error'>Minimální délka hesla jsou 4 znaky.</p>}
                    {errors.password?.type === 'pattern' && <p className='error'>Heslo musí obsahovat číslici.</p>}
                </FormGroup>
                <FormGroup>
                    <Label for="date">Datum narození</Label>
                    <Controller name="date" control={control} rules={{required: true, validate: value => new Date(value) < new Date()}} render={({ field }) => <Input type="date" {...field} /*value={year && month && day ? year + "-" + month + "-" + day : new Date().toISOString().slice(0, 10)}*/ />} />
                    {errors.date?.type === 'required' && <p className='error'>Toto pole je povinné.</p>}
                    {errors.date?.type === 'validate' && <p className='error'>Datum narození nemůže být v budoucnosti.</p>} 
                </FormGroup>
                <FormGroup>
                    <Label for="date">Pohlaví</Label>
                    <Controller name="gender" control={control} rules={{required: true}} render={({ field }) => (
                    <Input type="select" {...field}>
                        <option value="">Vyberte pohlaví</option>
                        <option value="man">Muž</option>
                        <option value="woman">Žena</option>
                        <option value="other">Jiné</option>
                    </Input>)} />
                    {errors.gender?.type === 'required' && <p className='error'>Toto pole je povinné.</p>}
                </FormGroup>
                <FormGroup check>
                    <Label for="checkbox">Souhlasím s podmínkami</Label>
                    <Controller name="checkbox" control={control} rules={{ required: true }} render={({ field }) => <Input type="checkbox" {...field} />} />
                    {errors.checkbox && errors.checkbox.type === "required" && <p className='error'>Toto pole je povinné</p>}
                </FormGroup>
                <Button type="submit">Odeslat</Button>
            </Form>
        </div>
    );
};

export default HookForm;