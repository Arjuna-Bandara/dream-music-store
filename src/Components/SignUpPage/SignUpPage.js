import React from "react";
import { useForm } from 'react-hook-form';
import NavHeader from "../NavHeader/NavHeader";

import "./SignUpPage.css"
import { postData } from "../../Services/StoreService";


function SignUpPage() {

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
    // const onSubmit = (data) => alert(JSON.stringify(data));
    const onSubmit = (data) => {
        postData("/users",data);
        alert("user added !")
    }

    if (submissionId) {
        return <p>Thank you! Submission Id: {submissionId}</p>;
    }

    return (
        <>
            <NavHeader />

            <div className="container form-boader col-lg-3">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h3>Let's create an account </h3>

                    <div className="form-group">
                        <label>
                            <span>First Name</span>
                            <input className="form-control"
                                {...register("first-name")}
                                placeholder="John"
                                type="text"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <span>Last Name</span>
                            <input className="form-control"
                                {...register("last-name")}
                                placeholder="Doe"
                                type="text"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <span>Email</span>
                            <input className="form-control"
                                {...register("email")}
                                placeholder="abc@foo.com"
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
                                autoComplete="new-password" 
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


export default SignUpPage;