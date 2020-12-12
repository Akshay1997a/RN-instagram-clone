import React, {useState} from 'react';
import {InteractionManager, PlatformColor, Text} from 'react-native';
import Container from '../../Components/Container';
import TextInput from '../../Components/TextFields';
import {AvatarIcon} from '../../Components/Avatar';
import {PrimaryButton, TransparentButton} from '../../Components/Buttons';
import {Footer} from './Login';
import {SignupScreenNavigationProps} from '../../navigations/Types';

interface SignupProps {
    navigation: SignupScreenNavigationProps;
}

export default function SignUp(props: SignupProps) {
    const [emailId, setEmailId] = useState('');
    const {navigation} = props;
    const [isLoaded, setLoaded] = useState(false);
    const [isLoading, setLoading] = useState(false);

    InteractionManager.runAfterInteractions(() => {
        setLoaded(true);
    });

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Verification');
        }, 500);
    };

    return (
        <Container>
            {isLoaded && (
                <>
                    <AvatarIcon />
                    <TextInput
                        placeholder="Email address"
                        value={emailId}
                        onChangeText={(text) => setEmailId(text)}
                    />
                    <PrimaryButton
                        title="Next"
                        onPress={handleSubmit}
                        isLoading={isLoading}
                        disabled={emailId === ''}
                    />
                    <Footer>
                        <TransparentButton
                            onPress={() => {
                                navigation.navigate('Login');
                            }}>
                            <Text>Already have an account?</Text>
                        </TransparentButton>
                    </Footer>
                </>
            )}
        </Container>
    );
}
