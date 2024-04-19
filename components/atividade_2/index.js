import{ View,Text }from 'react-native'

import Mensagem from './mensagem'

import styles from './styles';


function Atividade_2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Mensagem ingrediente= 'Batata-'   comida='Croquete de batata com queijo'/>
            <Mensagem ingrediente= 'Carne-'   comida='Fraldinha com alho e mostarda'/>
            <Mensagem ingrediente= 'Pimenta'   comida=' pimenta recheada'/>
            <Mensagem ingrediente= ''   comida=''/>
            <Mensagem ingrediente= ''   comida=''/>
   
        </View> 
    );
}
export default Atividade_2;