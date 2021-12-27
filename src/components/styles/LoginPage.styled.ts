import styled from 'styled-components';

const SLoginPage: any = styled.div`
  width: 450px;
  padding: 60px 60px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.gray};
`;

SLoginPage.Caption = styled.p`
  font-size: 14px;

  text-align: center;
`;

export default SLoginPage;
