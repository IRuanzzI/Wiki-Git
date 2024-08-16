import React, { useState } from 'react'
import git from '../assets/git.png'
import Input from '../components/input';
import ItemRepo from '../components/itemRepo/index';
import { api } from '../components/services/api'
import Button from '../components/Button/Button'

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')

  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    console.log('Buscando repositório:', currentRepo); // Diagnóstico
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
        }
      } else {
        alert('Repositório não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar repositório:', error);
      alert('Erro ao buscar repositório');
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  };

  return (
    <Container>
      <img src={git} height={72} width={72} alt='git' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
    <ItemRepo
        key={repo.id} 
        handleRemoveRepo={handleRemoveRepo}
        repo={repo}
    />
))}

    </Container>
  );
}
export default App;
