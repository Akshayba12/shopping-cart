import React, { useContext } from 'react';
import { Field } from 'formik';
import CustomForm from '../../components/CustomForm';
import {
  LoginFields,
  LoginInitvalues,
} from './Loginfields';
import Checkbox from '../../components/Checkbox';
import { AuthContext } from '../../context/AuthContext';

// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <CustomForm
      initialValues={LoginInitvalues}
      fields={LoginFields}
      onSubmit={login}
      btnProps={{
        children: 'Sign up',
      }}
    >
      <div className="flex items-center justify-between">
        <Field
          component={Checkbox}
          id="remember-me"
          name="rememberme"
          label="remember-me"
        />
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </CustomForm>
  );
  //   return (

  //     <Formik
  //       initialValues={{
  //         email: '',
  //         password: '',
  //       }}
  //       onSubmit={async (values) => {
  //         await wait(3000);
  //         console.log(values);
  //       }}
  //       validate={(values) => {
  //         const errors = {};
  //         if (!values.email) {
  //           errors.email = 'REQUIRED..';
  //         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //           errors.email = 'Invalid email address';
  //         }
  //         if (!values.password) {
  //           errors.password = 'REQUIRED..';
  //         }
  //         return errors;
  //       }}
  //     >
  //       {({
  //         values,
  //         touched,
  //         dirty,
  //         errors,
  //         isValid,
  //         isSubmitting,
  //         handleChange,
  //         handleBlur,
  //         handleSubmit,
  //       }) => (
  //         <form
  //           className="mt-8 space-y-6"
  //           onSubmit={
  //            (handleSubmit,
  //            () => navigate('/', {
  //              state: {
  //                email: 'akshaybajantri@gmail.com',
  //                password: 'password',
  //              },
  //              replace: true,
  //            }))
  // }
  //         >
  //           <input type="hidden" name="remember" defaultValue="true" />
  //           <div className="-space-y-px rounded-md shadow-sm">
  //             <div>
  //               <label htmlFor="email" className="sr-only">
  //                 Email address
  //               </label>
  //               <input
  //                 id="email"
  //                 name="email"
  //                 type="email"
  //                 autoComplete="email"
  //                 value={values.email}
  //                 className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //                 placeholder="Email address"
  //                 onChange={handleChange}
  //                 onBlur={handleBlur}
  //               />
  //               {errors.email && touched.email && (
  //               <p className="text-sm text-red-500 my-1 font-semibold">
  //                 {errors.email}
  //               </p>
  //               )}
  //             </div>
  //             <div>
  //               <label htmlFor="password" className="sr-only">
  //                 Password
  //               </label>
  //               <input
  //                 id="password"
  //                 name="password"
  //                 type="password"
  //                 autoComplete="current-password"
  //                 value={values.password}
  //                 className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //                 placeholder="Password"
  //                 onChange={handleChange}
  //                 onBlur={handleBlur}
  //               />
  //               {errors.password && touched.password && (
  //               <p className="text-sm text-red-500 my-1 font-semibold">
  //                 {errors.password}
  //               </p>
  //               )}
  //             </div>
  //           </div>

  //

  //           <div>
  //             <button
  //               disabled={isSubmitting || !(dirty && isValid)}
  //               type="submit"
  //               className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
  //             >
  //               Sign in
  //             </button>
  //           </div>
  //         </form>
  //       )}
  //     </Formik>

  //   );
}

export default Login;
