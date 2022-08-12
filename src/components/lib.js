import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import { Dialog as ReachDialog } from '@reach/dialog';
import { FaSpinner } from 'react-icons/fa';

import * as colors from '../styles/colors';
import * as mq from '../styles/media-queries';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = { 'aria-label': 'Loading' };

const BookListUL = styled.ul({
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
  gridGap: '1em',
});

const buttonVariants = {
  primary: {
    background: colors.indigo,
    color: colors.base,
  },
  secondary: {
    background: colors.gray,
    color: colors.text,
  },
};

const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({ variant = 'primary' }) => buttonVariants[variant]
);

const inputStyles = {
  border: `1px solid ${colors.gray10}`,
  background: colors.gray,
  padding: '8px 12px',
};

const Input = styled.input({ borderRadius: '3px' }, inputStyles);
const Textarea = styled.textarea(inputStyles);

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: colors.text,
  border: `1px solid ${colors.gray10}`,
  cursor: 'pointer',
});

const Dialog = styled(ReachDialog)({
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
});

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const FullPageSpinner = (
  <div
    css={{
      fontSize: '4em',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spinner />
  </div>
);

const Link = styled(RouterLink)({
  color: colors.indigo,
  ':hover': {
    color: colors.indigoDarken10,
    textDecoration: 'underline',
  },
});

const errorMessageVariants = {
  stacked: { display: 'block' },
  inline: { display: 'inline-block' },
};

const ErrorMessage = ({ error, variant = 'stacked', ...props }) => (
  <div
    role='alert'
    css={[{ color: colors.danger }, errorMessageVariants[variant]]}
    {...props}
  >
    <span>There was an error:</span>
    <pre
      css={[
        { whiteSpace: 'break-spaces', margin: '0', marginBottom: '-5' },
        errorMessageVariants[variant],
      ]}
    >
      {error.message}
    </pre>
  </div>
);

const FullPageErrorFallback = ({ error }) => (
  <div
    role='alert'
    css={{
      color: colors.danger,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <p>Uh oh... There's a problem. Try refreshing the app.</p>
    <pre>{error.message}</pre>
  </div>
);

export {
  Button,
  Input,
  CircleButton,
  Dialog,
  FormGroup,
  Spinner,
  BookListUL,
  Textarea,
  Link,
  FullPageSpinner,
  ErrorMessage,
  FullPageErrorFallback,
};
