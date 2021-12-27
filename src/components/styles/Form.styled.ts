import styled from 'styled-components';
import { lighten } from 'polished';

const SForm: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

SForm.Input = styled.input`
  padding: 16px 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

SForm.Button = styled.button`
  padding: 20px 0;
  margin-bottom: 24px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.bluePrimary};
  color: #fff;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => lighten(0.02, theme.colors.bluePrimary)};
  }
`;

export default SForm;
