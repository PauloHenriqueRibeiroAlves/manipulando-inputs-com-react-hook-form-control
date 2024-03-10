import { UseControllerProps, useController } from "react-hook-form";
import { SingUpForm } from "../types/SingUpForm";

export const Input = (props: UseControllerProps<SingUpForm>) => {
    const {field, fieldState} = useController(props);
    
    return(
        <div className="my-3">
            <input 
                {...field}
                placeholder={props.name} 
                className={`border ${fieldState.invalid ? 'border-red-800' : 'border-white'} p-3 text-black`}
            />
            {fieldState.error?.type === 'required' && <p>Campo invalido</p>}
            {fieldState.error?.type === 'minLength' && <p>Minimo de caractéres 2</p>}
            {fieldState.error?.type === 'maxLength' && <p>Maximo de caractéres 20</p>}
            {fieldState.error?.type === 'min' && <p>Menor de idade</p>}
            {fieldState.error?.type === 'max' && <p>Maior de idade</p>}
        </div>
        
    );
}