import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9c4c4',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',

    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#b73a3a',
    },
    botao: {
        borderWidth: 3,
        padding: 10,
        width: '40%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#8a1a1a',
        marginHorizontal:20,

    },
    txtBotao: {
        fontSize: 25,
        color: '#b73a3a',
    },
    botaoPress: {
        backgroundColor: '3c1752',
    },
    txtNumero: {
        fontSize: 60,
        color: '#b73a3a',
        marginVertical: 10,
    },
    numeroconteiner :{

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }
});
export default styles;