import React from 'react';
import {Text, View } from 'react-native';

import { Container} from './styles'
import  Header from '../../components/Header'

export default function Home() {
  return (
    <Container>
      <Header title="React Prime" />
      <Text>Tela Home</Text>
  
    </Container>
  );
}

