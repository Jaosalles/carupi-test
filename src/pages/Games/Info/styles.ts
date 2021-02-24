import styled from 'styled-components';

import colors from '../../../styles/colors';

export const ContainerImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  width: 100%;
`;

export const GameImage = styled.img`
  border-radius: 10px;
  max-width: 500px;

  @media screen and (max-width: 480px) {
    max-width: 200px;
  }
`;

export const GameName = styled.h1`
  color: ${colors.light};
  font-size: 48px;
  padding: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const GameDescription = styled.span`
  color: ${colors.lighter};
  font-size: 16px;
  text-align: justify;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
