import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
//import  LogoEntregas  from "../../../assets/logoEntregas.png";
import  LogoSemFundo  from "../../../assets/logoEntregas-removebg-preview.png";
import { Form } from "../../../src/screens/Form/index";

export const Home = () => {
    return(
        <View style={styles.containerHome}>
            <Image source={LogoSemFundo} style={styles.imgEntregas}/>
            <Form />
        </View>
    )
};

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: "#BC162A",
        alignItems: 'flex-start',
    },

    imgEntregas: {
        width: "80%",
        resizeMode: 'contain',
        marginLeft: 38,
        marginVertical: 'auto',
    },
});