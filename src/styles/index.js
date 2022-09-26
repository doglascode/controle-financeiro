import styled, { keyframes } from 'styled-components';

const vibrate = keyframes`
  0% { transform: translateX(0) }
  25% { transform: translateX(5px) }
  50% { transform: translateX(-5px) }
  75% { transform: translateX(5px) }
  100% { transform: translateX(0) }
`;

export const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 35vw;

  @media screen and (max-width: 980px) {
    width: 95vw;
  }

  .title {
    font-size: 22px;
    margin-bottom: 30px;
  }

  .balance {
    margin-bottom: 30px;

    h1 {
      color: #00A1FF;
      font-size: 25px;
    }

    &.negative h1 {
      color: #C74900;
    }

    .details {
      color: #303030;
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin: 20px auto;
      width: 25vw;

      @media screen and (max-width: 980px) {
        width: 90%;
      }

      .positive h3 {
        color: #43A931;
      }

      .negative h3 {
        color: #A93131;
      }
    }
  }
`;

export const Input = styled.input`
  background-color: #EFEFEF;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color .1s;
  padding: 10px 15px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: #008CFF;
  }
`;

export const Button = styled.button`
  background-color: #008CFF;
  border: none;
  border-radius: 5px;
  display: block;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 15px;
  width: 100%;
`;

export const List = styled.div`
  margin-top: 30px;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .transactions-list {
    max-height: 170px;
    overflow: hidden;
    overflow-y: auto;

    .transaction {
      display: flex;
      border-bottom: 1px solid #DDDDDD;
      justify-content: space-between;
      padding: 10px 0;

      &.negative span {
        color: #a11010;
      }

      &.positive span {
        color: #00b360;
      }

      .button-delete {
        background-color: #FF5200;
        color: #FFFFFF;
        border-radius: 5px;
        font-size: 16px;
        padding: 8px;
      }
    }
  }
`;

export const Alert = styled.div`
  animation: ${vibrate} .5s;
  color: #dd6300;
  text-align: center;
  margin-bottom: 20px;
`;