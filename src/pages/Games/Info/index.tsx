import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../store';

import history from '../../../services/history';
import * as GameActions from '../../../store/modules/games/actions';
import { BtnGlobal, Container } from '../../../styles/general';
import { ContainerImage, GameDescription, GameImage, GameName } from './styles';

const GamesInfo: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const game = useSelector((state: ApplicationState) => state.games.data.info);

  useEffect(() => {
    dispatch(GameActions.showRequest(location.state.id));
  }, [dispatch, location.state.id]);

  const handleGoBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <Container>
      <ContainerImage>
        <GameImage alt={game.name} src={game.image} />
      </ContainerImage>
      <GameName>{game.name}</GameName>
      <GameDescription>{game.description_raw}</GameDescription>
      <ContainerImage>
        <BtnGlobal onClick={handleGoBack} type="button">
          voltar
        </BtnGlobal>
      </ContainerImage>
    </Container>
  );
};

export default GamesInfo;
