import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2);
    let r = await fetch("http://localhost:3100/", {
      method: "POST",
      headers: { "Content-Type": "applicatio/json" },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    if (data.username == "Harry")
      setError("myform", { message: "This username is not acceptable" });
  };

  return (
    <>
      {isSubmitting && <div>loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This is a required field" },
              minLength: { value: 3, message: "Minimum length is 3" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })}
            type="text"
          />
          {errors.username && <div>Error is- {errors.username.message}</div>}
          <br />
          <input
            placeholder="password"
            {...register("password")}
            type="password"
          />
          {errors.myform && <div>{errors.myform.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
