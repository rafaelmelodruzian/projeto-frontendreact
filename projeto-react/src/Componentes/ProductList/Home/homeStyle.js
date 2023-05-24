import styled from "styled-components";


export const HomeStyle = styled.div`
  display: grid;
  border: 1px solid black;
  background-color: lightskyblue;

.header-home{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 1vw;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: 4;
  margin: 1vh 0;
}

.mainzera {
  display: flex;
  flex-wrap: wrap;
}

`

export default HomeStyle;