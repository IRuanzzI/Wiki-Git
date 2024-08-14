import React from 'react'
import git from '../assets/git.png'
import Input from '../components/input';
import ItemRepo from '../components/itemRepo/index';
import { Container } from './styles';
function App() {
  return (
    <Container>
      <img src = {git} height={72} width={72} alt='git'/>
      <Input/>
      <ItemRepo/>
    </Container>
  );
}
/*#TODO criar componente de buscar */
export default App;
