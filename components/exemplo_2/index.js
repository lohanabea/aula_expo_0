import{ View,Text }from 'react-native'

import Mensagem from './mensagem'

import styles from './styles';


function Exemplo2 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <Mensagem nome= 'Lohana' sobrenome='Ribeiro'/>
            <Mensagem nome= 'Lorraine' sobrenome= 'Teodoro'/>
            <Mensagem nome= 'Beatriz' sobrenome='Ribeiro'/>
   
        </View> 
    );
}
export default Exemplo2;