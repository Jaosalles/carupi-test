import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { ApplicationState } from '../../../store';
import * as GamesActions from '../../../store/modules/games/actions';
import { GamesList } from '../../../store/modules/games/types';
import {
  Container,
  ContainerBody,
  ContainerHeader,
} from '../../../styles/general';

const List: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const games = useSelector((state: ApplicationState) => state.games.data.list);

  useEffect(() => {
    dispatch(GamesActions.listRequest());
  }, [dispatch]);

  const handleGameInfo = useCallback(() => {
    history.push('teste');
  }, [history]);

  return (
    <Container>
      <ContainerHeader>
        <h1>Games List</h1>
      </ContainerHeader>

      <ContainerBody>
        {games.map((elem: GamesList) => (
          <div key={elem.id}>
            <h1>{elem.name}</h1>
            <h1>{elem.rating}</h1>
            <img
              alt={elem.name}
              src={elem.background_image}
              style={{ height: 30, width: 30 }}
            />
          </div>
        ))}
      </ContainerBody>
    </Container>
  );
};

export default List;
