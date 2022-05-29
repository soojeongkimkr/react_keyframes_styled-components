import './App.css';
import styled, {keyframes} from 'styled-components'

function App() {
  return (
    <div className="App">
      <Box>움직인다아</Box>
    </div>
  );
}
const boxAnimation = keyframes`
  0%{
    top: 0px;
  }
  50%{
    top:700px;
    left: 500px;
  }
  100%{
    top: 200px;
    left:800px;
  }
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background: slateblue;
  border-radius:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  color: #fff;
  position:absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 4s infinite linear alternate;
`;


export default App;
