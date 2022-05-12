import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { login } from '../util/auth';



function LoginScreens({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [validEmail, setValidEmail] = useState('');
    const [validPass, setValidPass] = useState('');

    const [isAutheticating, setIsAuthenticating] = useState(false);

    function LoginHandler() {
        setIsAuthenticating(true);
        login(email, password);
        setIsAuthenticating(false);
    }
    



    //thiết kê
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View>
                <Image style={styles.imageIcon} source={require('../assets/logo4.jpg')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='PassWord'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={LoginHandler}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, top: 10, color: 'black' }}>----------OR----------</Text>

                <TouchableOpacity
                    // onPress={handlerSignUp}
                    style={styles.buttonGG}
                >
                    <Image style={styles.iconGG} source={require('../assets/gg.png')} />
                    <Text style={styles.buttonOutlineText}>Login with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={handlerSignUp}
                    style={styles.buttonFB}
                >
                    <Image style={styles.iconGG} source={require('../assets/fb.png')} />
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 18,
                        color:'white'
                    }}>Login with Face Book</Text>
                </TouchableOpacity>
                <View style={{ top: 60, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>Don't have an account?</Text>
                    <TouchableOpacity

                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={{ left: 10, color: '#FFD000E1', fontSize: 16, fontWeight: '500' }}>Signup</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}
export default LoginScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    icon: {
        position: 'relative',
        right: 10,
    },
    imageIcon: {
        width: 100,
        height: 100,
        bottom: 70
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 7,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: '#FFD000E1',
        width: '100%',
        padding: 15,
        borderRadius: 13,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: '#01C532E1',
        marginTop: 20,
        borderColor: '#FFD000E1',
        borderWidth: 1
    },
    buttonOutlineText: {
        fontWeight: '400',
        fontSize: 18
    },
    buttonText: {
        fontWeight: '400',
        fontSize: 18
    },
    buttonGG: {
        backgroundColor: '#FFFFFFE1',
        width: '100%',
        padding: 15,
        top: 15,
        borderRadius: 13,
        borderColor: '#470808',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonFB: {
        backgroundColor: '#446daf',
        width: '100%',
        padding: 15,
        top: 40,
        borderRadius: 13,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconGG: {
        height: 25,
        width: 25
    }
});