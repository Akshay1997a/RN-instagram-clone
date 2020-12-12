import React, {useState} from 'react';
import {Text} from 'react-native';
import Container from '../../Components/Container';
import TextInput from '../../Components/TextFields';
import {LoginScreenNavigationProp} from '../../navigations/Types';
import styled from 'styled-components/native';
import {metrics} from '../../style';
import {PrimaryButton, TransparentButton} from '../../Components/Buttons';
import Logo from '../../Components/Logo';

type Props = {
    navigation: LoginScreenNavigationProp;
};

export default function Login({navigation}: Props) {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleEyePress = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <Container>
            <Logo />
            <TextInput
                placeholder="email address or username"
                value={emailId}
                onChangeText={(text) => setEmailId(text)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                isSecureText={true}
                onEyePress={handleEyePress}
                secureTextEntry={isPasswordVisible}
            />
            <PrimaryButton
                title="Login"
                disabled={emailId === '' || password === ''}
            />
            <Footer>
                <TransparentButton
                    onPress={() => {
                        navigation.navigate('SignUp');
                    }}>
                    <Text>Dont't have an account?</Text>
                </TransparentButton>
            </Footer>
        </Container>
    );
}

export const Footer = styled.View((props) => ({
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
    bottom: 0,
    width: metrics.screenWidth,
    height: 60,
    borderTopWidth: 1,
    borderColor: props.theme.HAIRLINE_COLOR,
}));
