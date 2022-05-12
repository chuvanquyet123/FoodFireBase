import {StyleSheet, View, Text, TouchableOpacity, Image}from 'react-native';

function Wellcome({navigation}){
    return(
        <View style={styles.container}>
            <View styles={styles.viewImage}>
                <View >
                    <Image style={styles.imageIcon} source={require('../assets/logo4.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imageBack} source={require('../assets/family.jpg')}/>
                </View>
                <View style={styles.viewText}>
                    <Text style={{fontSize: 30, fontWeight:'700'}}>Welcom to Bee Food</Text>
                    <Text style={{fontSize: 17, marginTop: 10}}>Start logging in to enjoy delicious meals like at home</Text>
                </View>
            </View>
            <View style={styles.viewGet}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontSize: 19}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Wellcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor: 'white'
    },
    viewImage:{
        flex: 2,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    imageIcon: {
        left: 175,
        marginTop: 60,
        width: 100,
        height: 100
    },
    imageBack: {
        marginTop: 60,
        width: 450,
        height: 400
    },
    viewText:{
        alignItems:'center'
    },
    viewGet:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor: '#fcc827',
        paddingHorizontal: 110,
        paddingVertical: 20,
        borderRadius: 20
    }
});