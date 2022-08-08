import styled from '@emotion/styled';

const buttonVariants = {
  primary: {
    background: '#3f51b5',
    color: 'white',
  },
  secondary: {
    background: '#f1f2f7',
    color: '#434449',
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

const Input = styled.input({
  borderRadius: '3px',
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
});

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
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
});

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export { Button, Input, CircleButton, FormGroup };
