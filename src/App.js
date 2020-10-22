import React, { useState } from 'react';
import styled from 'styled-components';

function App() {  // useState는 길이가 2인 배열을 반환한다. 반환값:[state,state를 변경시키는 함수]
  const [color, setColor] = useState("powderblue"); // 인자로 전달한 값("black")은 state의 초기값. 즉, color state가 변화-> 화면에서 color state를 사용하고 있는 부분(Pallete)이 자동으로 리렌더링


  return (
    <Container>
      <Pallete color={color} />{/* Pallete에 color값을 전달*/}
      <ButtonContainer>
        <CyanButton onClick={() => { setColor("cyan") }} /> {/* 버튼에 onClick이벤트 핸들러 달기*/}
        <BrownButton onClick={() => setColor("brown")} />
        <PinkButton onClick={() => setColor("pink")} />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//${props => props.color}; styled-components의 규칙이다,,따르자,,
const Pallete = styled.div`
  width: 700px;
  height: 700px;
  border: 1px solid black;
  background: ${props => props.color}; 
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 700px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 5px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const CyanButton = styled(Button)`
  background: cyan;
`;

const BrownButton = styled(Button)`
  background: brown;
`;

const PinkButton = styled(Button)`
  background: pink;
`;

export default App;
