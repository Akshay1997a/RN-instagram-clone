import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {PrimaryButton} from '../../Components/Buttons';
import Container from '../../Components/Container';
import TextInput from '../../Components/TextFields';

export default function Verification() {
    const [code, setCode] = useState('');

    return (
        <Container style={style.container}>
            <Text>ENTER CONFIRMATION CODE</Text>
            <Text>Enter the confirmation code that we send to</Text>
            <TextInput
                placeholder="Confirmation code"
                value={code}
                onChangeText={(text) => setCode(text)}
            />
            <PrimaryButton title="Next" disabled={code === ''} />
        </Container>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
    },
});
