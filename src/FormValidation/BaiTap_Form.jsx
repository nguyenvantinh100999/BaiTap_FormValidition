import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const BaiTap_Form = () => {
  const frmRegister = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      gender: "true",
      country: "USA",
    },
    validationSchema: yup.object().shape({
      userName: yup.string().required("userName is a required"),
      email: yup
        .string()
        .required("email is a required")
        .email("email is invalid!"),
      password: yup
        .string()
        .required("password is a required")
        .min(8, "Nhập ít nhất 8 ký tự"),
    }),
    onSubmit: (values) => {
      console.log(values);
      //   values.preventDefault();
    },
  });

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={frmRegister.handleSubmit}>
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                data-type="userName"
                id="userName"
                name="userName"
                type="text"
                autoComplete="useName"
                onChange={frmRegister.handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {frmRegister.errors.userName && (
                <p
                  className="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  {frmRegister.errors.userName}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                data-type="email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={frmRegister.handleChange}
                onBlur={frmRegister.handleBlur}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {frmRegister.errors.email && (
                <p
                  className="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  {frmRegister.errors.email}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="checkbox"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Gender
            </label>
            <div>
              <input
                type="checkbox"
                value="true"
                name="gender"
                id="male"
                onChange={frmRegister.handleChange}
                className="me-1"
              />
              <label
                htmlFor="male"
                className="text-sm font-medium leading-6 text-gray-700 me-4"
              >
                Male
              </label>
              <input
                type="checkbox"
                value="false"
                name="gender"
                id="female"
                onChange={frmRegister.handleChange}
                className="me-1"
              />
              <label
                htmlFor="female"
                className="text-sm font-medium leading-6 text-gray-700"
              >
                Female
              </label>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium leading-6 text-gray-700">
              country
            </label>
            <select
              name="country"
              onChange={frmRegister.handleChange}
              //   id="country"
              className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                data-type="password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={frmRegister.handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {frmRegister.errors.password && (
                <p
                  className="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  {frmRegister.errors.password}
                </p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default BaiTap_Form;
