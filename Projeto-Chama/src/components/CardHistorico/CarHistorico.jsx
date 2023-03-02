import React from "react";
import {
  CardHistoricoStyled,
  CardP,
  ButtonHistorico,
  Historico,
} from "./styled";

const CardHistorico = (props) => {
  //Card Historico

  return (
    <CardHistoricoStyled>
      <ButtonHistorico onClick={() => props.pesquisaDnv(props.name)}>
        <p>{props.historico}</p>
        <CardP>Clique aqui para ver este perfil novamente</CardP>
      </ButtonHistorico>
    </CardHistoricoStyled>
  );
};

export default CardHistorico;
