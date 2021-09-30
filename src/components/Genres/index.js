import React from 'react';




import { Container, NameGeners } from './styles'

export default function Genres({data}){ 

    return(
        <Container>
            <NameGeners>{data.name}</NameGeners>
        </Container>
       
    )
}