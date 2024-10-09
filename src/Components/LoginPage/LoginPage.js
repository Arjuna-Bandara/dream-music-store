import React from "react";
import { useForm } from 'react-hook-form';
import NavHeader from "../NavHeader/NavHeader";

import "./LoginPage.css"


function LoginPage() {

    const {
        register,
        handleSubmit,
        control,
        submissionId,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm({
        defaultValues: {
            "first-name": "",
            "last-name": "",
            "email": "",
            "password": ""
        }
    });
    const onSubmit = (data) => alert(JSON.stringify(data));

    if (submissionId) {
        return <p>Thank you! Submission Id: {submissionId}</p>;
    }

    return (
        <>
            <NavHeader />

            <div className="container form-boader col-lg-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login page</h3>



                    <div className="form-group">
                        <label>
                            <span>Email</span>
                            <input className="form-control"
                                {...register("email")}
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <span>Password</span>
                            <input className="form-control"
                                {...register("password", {
                                    required: "Please fill in this field.",
                                    minLength: {
                                        value: 5,
                                        message: "Please lengthen this text to more."
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Please reduce this text to less."
                                    },
                                })}
                                aria-invalid={errors["password"] ? "true" : "false"}
                                placeholder="P@ssword"
                                type="password"
                            />
                        </label>
                        {errors["password"] && <p role="alert">{errors["password"]?.message}</p>}
                    </div>
                    
                    <div className="form-group">
                        <button className="btn btn-success login-submit" disabled={isSubmitting}>Submit</button>
                    </div>
                    
                </form>
            </div>

        </>
    )
}


export default LoginPage;