import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "@mui/material";

import Layout from "../components/layout";

const Contact = () => {
  const form = useRef();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_o31pdfi",
        "template_rdz85ye",
        form.current,
        "user_MFtEbWTXh97Vd9rI94mdV"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message was send.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send your message.");
        }
      );
    reset();
  };

  return (
    <>
      <Layout title="Contact Us">
        <ToastContainer />
        <div className="relative text-center">
          <StaticImage
            src="../images/hero.png"
            alt="hero image"
            className="w-full "
            height="430"
          />
          <div className="absolute text-white items-center text-xs w-full md:text-lg top-7 md:top-16">
            <h3 className="md:text-4xl text-2xl">GET IN TOUCH</h3>
            <p className="text-md pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="md:w-11/12 m-auto md:mb-10 md:h-screen">
            <div className="shadow-md md:px-12 md:py-12 py-5 px-3 text-center md:rounded-lg bottom-0 bg-white md:absolute left-0 right-0 md:w-10/12 m-auto">
              <h1 className="pb-6 md:text-xl text-lg">
                For inquiries and service demonstration requests,
                <br />
                Please use the form below.
              </h1>
              <span className="text-sm md:pb-12">
                <i className="text-red-600">*</i> This item is required to be
                entered.
              </span>
              <form
                className="px-8 pt-6 pb-8 mb-4"
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
              >
                <div className="mb-4 grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="firstname"
                    >
                      First Name <i className="text-red-600">*</i>
                    </label>
                    <Controller
                      name="first_name"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        minLength: 1,
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          type="text"
                          label="First Name"
                          size="small"
                          placeholder="enter your first name"
                          autoFocus
                          variant="outlined"
                          style={{ border: "none!important" }}
                          error={Boolean(errors.first_name)}
                          helperText={
                            errors.first_name
                              ? errors.first_name.type === "minLength"
                                ? "Name is must be 2 character"
                                : "First Name is required"
                              : ""
                          }
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="username"
                    >
                      Last Name <i className="text-red-600">*</i>
                    </label>
                    <Controller
                      name="last_name"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        minLength: 1,
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          label="last Name"
                          placeholder="enter your last name"
                          variant="outlined"
                          style={{ border: "none!important" }}
                          error={Boolean(errors.first_name)}
                          helperText={
                            errors.first_name
                              ? errors.first_name.type === "minLength"
                                ? "Name is must be 2 character"
                                : "Last Name is required"
                              : ""
                          }
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="mb-6 grid gap-6">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="email"
                    >
                      Email <i className="text-red-600">*</i>
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          type="email"
                          size="small"
                          label="Email address"
                          placeholder="enter your email"
                          variant="outlined"
                          style={{ border: "none!important" }}
                          error={Boolean(errors.email)}
                          helperText={
                            errors.email
                              ? errors.email.type === "pattern"
                                ? "Email is not valid"
                                : "Email is required"
                              : ""
                          }
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="Company name"
                    >
                      Company name <i className="text-red-600">*</i>
                    </label>
                    <Controller
                      name="company_name"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        minLength: 1,
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          label="company Name"
                          placeholder="enter your company name"
                          variant="outlined"
                          style={{ border: "none!important" }}
                          error={Boolean(errors.company_name)}
                          helperText={
                            errors.company_name
                              ? errors.company_name.type === "minLength"
                                ? "Company Name is must be 2 character"
                                : "Company Name is required"
                              : ""
                          }
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="Department"
                    >
                      Department <i className="text-red-600">*</i>
                    </label>
                    <Controller
                      name="department"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        minLength: 1,
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          label="Department"
                          placeholder="enter your department name"
                          variant="outlined"
                          style={{ border: "none!important" }}
                          error={Boolean(errors.department)}
                          helperText={
                            errors.department
                              ? errors.department.type === "minLength"
                                ? "Department Name is must be 2 character"
                                : "Department Name is required"
                              : ""
                          }
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="Position"
                    >
                      Position <i className="text-red-600">*</i>
                    </label>
                    <Controller
                      name="position"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        minLength: 1,
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          label="Position"
                          placeholder="enter your position name"
                          variant="outlined"
                          style={{ border: "none!important" }}
                          error={Boolean(errors.position)}
                          helperText={
                            errors.position
                              ? errors.position.type === "minLength"
                                ? "Position Name is must be 2 character"
                                : "Position Name is required"
                              : ""
                          }
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="Message"
                    >
                      Message <i className="text-red-600">*</i>
                    </label>
                    <Controller
                      name="message"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        minLength: 1,
                      }}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          label="Message"
                          multiline
                          rows={3}
                          placeholder="enter your message"
                          variant="outlined"
                          style={{ border: "none!important" }}
                          error={Boolean(errors.message)}
                          helperText={
                            errors.message
                              ? errors.message.type === "minLength"
                                ? "Message is must be 2 character"
                                : "Message is required"
                              : ""
                          }
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
                <div class="text-center">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit(sendEmail)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
