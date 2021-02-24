import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { ApplicationState } from '../../../store';
import * as GamesActions from '../../../store/modules/games/actions';
import { GamesList } from '../../../store/modules/games/types';
import { BtnGlobal, Container, ContainerHeader } from '../../../styles/general';
import {
  Card,
  GameImage,
  GameName,
  GameRating,
  GridList,
  Item,
  Title,
} from './styles';
import colors from '../../../styles/colors';

const List: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const games = useSelector((state: ApplicationState) => state.games.data.list);

  useEffect(() => {
    dispatch(GamesActions.listRequest());
  }, [dispatch]);

  const handleGameInfo = useCallback(
    (slug: string, id: string) => {
      history.push(`games/${slug}`, { id });
    },
    [history]
  );

  const rateStars = useCallback(rate => {
    const qtdStars = [];

    for (let i = 0; i < rate; ) {
      qtdStars.push(<FaStar color={colors.terciary} key={i} size={20} />);
      i += 1;
    }

    return qtdStars;
  }, []);

  return (
    <Container>
      <ContainerHeader>
        <Title>Games da atualidade</Title>
      </ContainerHeader>

      <GridList>
        {games.map((elem: GamesList) => (
          <Item
            key={elem.id}
            onClick={() => handleGameInfo(elem.slug, elem.id)}
          >
            <Card>
              <GameName>{elem.name}</GameName>
              <GameImage alt={elem.name} src={elem.background_image} />
              <GameRating>{rateStars(elem.rating)}</GameRating>
              <BtnGlobal margin="0" width="100%" widthMobile="100%">
                informações
              </BtnGlobal>
            </Card>
          </Item>
        ))}
      </GridList>
    </Container>
  );
};

export default List;
