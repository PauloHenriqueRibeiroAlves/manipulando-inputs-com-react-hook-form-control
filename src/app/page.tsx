"use client"

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SingUpForm } from "./types/SingUpForm";
import { Input } from "@mui/material";


const Page = () => {
  const { handleSubmit, control } = useForm <SingUpForm>();


  const handleFormSubmit: SubmitHandler<SingUpForm> = (data) => {
    console.log(data)
  } 
  return (
    <div className="container mx-auto bg-black/60">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          control={control} 
          name="name"
          rules={{required: true, minLength: 2, maxLength: 20}}
          render={({field, fieldState}) => 
            <Input
              {...field}
              error={fieldState.invalid}
              placeholder="Name"
            />
          }
        />
        <Controller
          control={control}
          name="lastName"
          render={({field, fieldState}) => 
            <Input
              {...field}
              error={fieldState.invalid}
              placeholder="LastName"
            />
          }
        />
        <Controller
          control={control}
          name="age"
          rules={{required: true, min: 18, max: 120}}
          render={({field, fieldState}) => 
            <Input
              {...field}
              error={fieldState.invalid}
              placeholder="Idade"
            />
          }
        />
        <input
          type="submit"
          value="Enviar"
          className="border border-white p-3"
        />
       
      </form>
      
    </div>             
  );
}
export default Page;