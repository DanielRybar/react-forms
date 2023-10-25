import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const HookFormSimple = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, /*control,*/ formState: { errors } } = useForm({
        defaultValues: {
            name: "Zoltán",
            gender: "man",
            birthdate: new Date("2004-01-14").toISOString().slice(0, 10)
        }
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data, " ", 4));
        navigate("/result");
    }

    return (
        <div className="simpleForm">
            <h1>Registrace pomocí hákového formuláře bez použití Bootstrapu</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Jméno</label>
                    <input type="text" {...register("name", { required: true, minLength: 5 })} />
                    {errors.name?.type === "required" && <p className="error">Toto pole je povinné.</p>}
                    {errors.name?.type === "minLength" && <p className="error">Minimální délka jména je 5 znaků.</p>}
                </div>
                <div>
                    <label htmlFor="password">Heslo</label>
                    <input type="password" {...register("password", { required: true, minLength: 4, pattern: /\d/ })} />
                    {errors.password?.type === "required" && <p className="error">Toto pole je povinné.</p>}
                    {errors.password?.type === "minLength" && <p className="error">Minimální délka hesla jsou 4 znaky.</p>}
                    {errors.password?.type === "pattern" && <p className="error">Heslo musí obsahovat číslici.</p>}
                </div>
                <div>
                    <label htmlFor="birthdate">Datum narození</label>
                    <input type="date" {...register("birthdate", { required: true, validate: value => new Date(value) < new Date() })} />
                    {errors.birthdate?.type === "required" && <p className="error">Toto pole je povinné.</p>}
                    {errors.birthdate?.type === "validate" && <p className="error">Datum narození musí být v minulosti.</p>}
                </div>
                <div>
                    <label htmlFor="gender">Pohlaví</label>
                    <select name="gender" {...register("gender", { required: true })}>
                        <option value="">Vyberte pohlaví</option>
                        <option value="man">Muž</option>
                        <option value="woman">Žena</option>
                        <option value="other">Jiné</option>
                    </select>
                    {errors.gender && <p className="error">Toto pole je povinné.</p>}
                </div>
                <div>
                    <label htmlFor="checkbox">Souhlasím s podmínkami</label>
                    <input type="checkbox" {...register("checkbox", { required: true })} />
                    {errors.checkbox && <p className="error">Toto pole je povinné.</p>}
                </div>
                <div>
                    <button type="submit">Odeslat</button>
                </div>
            </form>
        </div>
    );
};

export default HookFormSimple;