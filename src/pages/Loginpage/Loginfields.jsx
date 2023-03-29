
import Input from '../../components/Input';

export const LoginFields = [
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
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
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
];

export const LoginInitvalues = LoginFields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});
