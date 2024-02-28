import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";

export const Form = () => {
    return(
        <View style={styles.containerForm}>
            <View>
                <Text style={styles.textMessage}>Bem vindo(a)</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containerForm: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    
    textMessage: {
        color: '#FFFFFF',
        paddingTop: 80,
    }
});