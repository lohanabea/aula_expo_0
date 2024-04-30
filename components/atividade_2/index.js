import{ View,Text }from 'react-native'

import Mensagem from './mensagem'

import styles from './styles';


function Atividade_2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Comidas Deliciosas</Text>

            <Mensagem ingrediente= 'Batata='   comida=' Croquete de batata com queijo'/>
            <Mensagem ingrediente= 'Carne='   comida=' Fraldinha com alho e mostarda'/>
            <Mensagem ingrediente= 'Pimenta='   comida=' Pimenta recheada'/>
            <Mensagem ingrediente= 'Presunto='   comida=' Rondelli de presunto e queijo'/>
            <Mensagem ingrediente= 'Salame='   comida=' Rocambole de salame com queijo'/>
            <Mensagem ingrediente= 'Palmito='   comida=' Moqueca de Palmito'/>
   
        </View> 
    );
};
export default Atividade_2;