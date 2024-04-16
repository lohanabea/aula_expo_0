import{ View,Text }from 'react-native';

import styles from './styles';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function Mensagem(crops){
    return(
        <View style={styles.viewmensagem}>
        <Text style={styles.mensagem}>{Props.nome}</Text>
        </View> 
    );
}