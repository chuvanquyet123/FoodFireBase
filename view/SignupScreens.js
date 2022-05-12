import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {createUser} from '../util/auth';


function SignupScreens({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [againpassword, setAgainPassword] = useState('');

    

    const [isAutheticating, setIsAuthenticating] = useState(false);

    function signupHandler() {
        setIsAuthenticating(true);
        createUser(email, password);
        setIsAuthenticating(false);
    }
    if(isAutheticating) {
        return <Text>Creating user</Text>;
    }


    return (
        <View style={styles.container} >
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
                <TextInput
                    placeholder='Confirm password'
                    value={againpassword}
                    onChangeText={text => setAgainPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={signupHandler}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 20, top: 10, color: 'black' }}>----------OR----------</Text>

                <TouchableOpacity
                    // onPress={handlerSignUp}
                    style={styles.buttonGG}
                >
                    <Image style={styles.iconGG} source={require('../assets/gg.png')}/>
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
                <TouchableOpacity
                    onPress={() => navigation.goBack('Login')}
                    style={styles.buttonBack}
                >
                    <Ionicons name='chevron-back' size={20} color='black'/>
                    <Text style={styles.textBack}>Back To Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default SignupScreens;

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
        borderColor: 'black',
        borderWidth:1
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
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
    buttonBack:{
        flexDirection: 'row',
        top:80,
    },
    textBack:{
        fontWeight: '400',
        fontSize: 18,
        color: 'black'
    },
    iconGG:{
        height: 25,
        width:25
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
});