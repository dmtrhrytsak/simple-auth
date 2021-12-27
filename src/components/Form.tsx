import { useState } from 'react';

import SForm from './styles/Form.styled';

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: React.FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <SForm>
      <SForm.Input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <SForm.Input
        type="password"
        value={pass}
        placeholder="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPass(e.target.value)
        }
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleClick(email, pass);
          }
        }}
      />

      <SForm.Button onClick={() => handleClick(email, pass)}>
        {title}
      </SForm.Button>
    </SForm>
  );
};

export default Form;
