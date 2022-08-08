import { Dialog } from '@reach/dialog';
import { useState } from 'react';
import '@reach/dialog/styles.css';
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' />
      </div>
      <div>
        <button type='submit'>{buttonText}</button>
      </div>
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
    <div className='App'>
      <Logo width='80' height='80' />
      <h1>BookShelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label='Login form' isOpen={openModal === 'login'}>
        <div>
          <button
            onClick={() => {
              setOpenModal('none');
            }}
          >
            Close
          </button>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText='Login' />
        </div>
      </Dialog>
      <Dialog aria-label='Registration form' isOpen={openModal === 'register'}>
        <div>
          <button
            onClick={() => {
              setOpenModal('none');
            }}
          >
            Close
          </button>
          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText='Register' />
        </div>
      </Dialog>
    </div>
  );
}

export default App;
