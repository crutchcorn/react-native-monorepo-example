import { Text } from 'react-native';
import styled from 'styled-components/native';

const RedText = styled(Text)`
  color: red;
`

function App() {
  return (
    <RedText>Testing</RedText>
  )
}

export default App
