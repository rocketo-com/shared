import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: ${({ width = '400px' }) => width};
  background: #fff;
  border: 1px solid #eee;
  font-family: Montserrat;
  box-shadow: 0 0 21px -3px #eee;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 20px 0;

  ${({ center }) =>
    center &&
    `
    text-align: center;
  `}

  ${({ empty }) =>
    empty &&
    `
    min-height: 200px;
  `}
`;

export default Card;
