import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Auth: React.FC = () => {
    const [name, setName] = useState<string>('');

    const navigation = useNavigation();


    const handlePress = () => {
        if (name.length === 0) {
            return;
        }

        navigation.navigate('Chat', { name });
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.viewInputs}>
                    <TextInput
                        value={name}
                        onChangeText={(e) => setName(e)}
                        style={styles.input}
                        placeholder={'Insira seu nome:'}
                    />
                    <RectButton onPress={handlePress} style={styles.buttom}>
                        <Text style={styles.textSubmit}>Enter</Text>
                    </RectButton>
                </View>
            </View>
        </>
    )
}
export default Auth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        width: '70%',
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: '#707070',
        borderRadius: 7
    },
    buttom: {
        width: '70%',
        height: 50,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewInputs: {
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    textSubmit: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    }
});


