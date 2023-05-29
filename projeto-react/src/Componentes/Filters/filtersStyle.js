import styled from "styled-components";

const FiltersStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1vw;
  color: white;
  align-items: center;
  div {
    margin-left: 1vw;
  }
  .bot-fil {
    display: flex;
    justify-content: space-around;
    margin-top: 2vh;
  }

  .valor-max,
  .valor-min,
  .nome {
    border-radius: 15px;
    background-color: lightgreen;
  }
`;
export default FiltersStyle;
