import styled from 'styled-components';

const SHomePage: any = styled.div``;

SHomePage.Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #fff;

  text-align: center;

  &::after {
    content: '';

    width: 32px;
    height: 32px;

    background: url('./assets/hammer-and-wrench.png') no-repeat center / contain;
  }
`;

SHomePage.Button = styled.button`
  position: fixed;
  right: 40px;
  bottom: 40px;

  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

export default SHomePage;
