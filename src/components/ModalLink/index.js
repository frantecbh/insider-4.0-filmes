import React from "react";

import {CloseButton, Name} from './styles'
import { Feather} from '@expo/vector-icons'

import {WebView} from 'react-native-webview'

export default function ModalLink({link, title, closeModal}){
    return(
        <>
           <CloseButton onPress={closeModal}>
               <Feather name="x" size={35} color="#fff"/>
               <Name namberOfLines={1}>{title}</Name>
           </CloseButton>
           <WebView source={{uri: link}}  />
        </>
    )
}