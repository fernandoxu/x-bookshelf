/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { Button, Input, CircleButton, FormGroup } from './components/lib';
import { Logo } from './components/logo';

const LoginForm = ({ onSubmit, buttonText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <form
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <Input id='username' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password</label>
        <Input id='password' />
      </FormGroup>
      <FormGroup>
        <Button type='submit'>{buttonText}</Button>
      </FormGroup>
    </form>
  );
};

function App() {
  const [openModal, setOpenModal] = useState('none');

  const login = (formData) => {
    console.log('login', formData);
  };

  const register = (formData) => {
    console.log('register', formData);
  };

  return (
    <div
      className='App'
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo width='80' height='80' />
      <h1>BookShelf</h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Button variant='primary' onClick={() => setOpenModal('login')}>
          Login
        </Button>

        <Button variant='secondary' onClick={() => setOpenModal('register')}>
          Register
        </Button>
      </div>
      <Dialog aria-label='Login form' isOpen={openModal === 'login'}>
        <div>
          <Button
            onClick={() => {
              setOpenModal('none');
            }}
          >
            Close
          </Button>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText='Login' />
        </div>
      </Dialog>
      <Dialog aria-label='Registration form' isOpen={openModal === 'register'}>
        <div>
          <Button
            onClick={() => {
              setOpenModal('none');
            }}
          >
            Close
          </Button>
          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText='Register' />
        </div>
      </Dialog>
    </div>
  );
}

export default App;
