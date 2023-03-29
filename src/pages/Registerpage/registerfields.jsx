import Input from '../../components/Input';

export const registerFields = [
  {
    component: Input,
    name: 'name',
    id: 'name',
    autoComplete: 'name',
    placeholder: 'Name',
    value: '',
    className: 'rounded-t-md',
    validate: (value) => {
      if (!value) {
        return 'REQUIRED..';
      }
      return null;
    },
  },
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    value: '',
    validate: (value) => {
      if (!value) {
        return 'REQUIRED..';
      }
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value,
        )
      ) {
        {
          return 'Invalid emailid';
        }
        return null;
      }
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'password',
    type: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
    value: '',
    validate: (value) => {
      if (!value) {
        return 'REQUIRED..';
      }
      return null;
    },
  },
  {
    component: Input,
    name: 'confirmpassword',
    id: 'confirm password',
    type: 'password',
    autoComplete: 'confirm password',
    placeholder: 'confirm password',
    className: 'rounded-b-md',
    value: '',
    validate: (value) => {
      if (!value) {
        return 'REQUIRED..';
      }
      if (value !== password.value) {
        return 'confirm password should match with password';
        console.log(passowrd);
      }
      return null;
    },
  },
];

export const registerInitvalues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c.value }),
  {},
);
