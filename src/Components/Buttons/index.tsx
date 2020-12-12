import React from 'react';
import {
    ActivityIndicator,
    Pressable,
    PressableProps,
    TouchableNativeFeedback,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps,
} from 'react-native';
import styled from 'styled-components/native';
import {metrics} from '../../style';

interface PrimaryButtonProps extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
}

interface TransparentButtonProps extends PressableProps {
    children?: React.ReactNode;
}

interface IconButtonProps extends TouchableWithoutFeedbackProps {
    icon: React.ReactNode;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <ButtonContainer {...props}>
            {!props.isLoading ? (
                <ButtonText>{props.title}</ButtonText>
            ) : (
                <ActivityIndicator color="#fff" size="large" />
            )}
        </ButtonContainer>
    );
};

export const TransparentButton = (props: TransparentButtonProps) => {
    return (
        <Pressable {...props} android_disableSound>
            <TransparentButtonContainer>
                {props.children}
            </TransparentButtonContainer>
        </Pressable>
    );
};

export function IconButton(props: IconButtonProps) {
    return (
        <IconButtonWrapper>
            <TouchableNativeFeedback {...props} touchSoundDisabled={true}>
                <IconButtonContainer>{props.icon}</IconButtonContainer>
            </TouchableNativeFeedback>
        </IconButtonWrapper>
    );
}
const IconButtonWrapper = styled.View(() => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
}));

const IconButtonContainer = styled.View(() => ({
    padding: 10,
}));

const ButtonContainer = styled.TouchableOpacity((props) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.theme.PRIMARY_BUTTON_COLOR,
    width: '100%',
    height: metrics.screenHeight * 0.06,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    opacity: !props.disabled ? 1 : 0.5,
}));

const TransparentButtonContainer = styled.View({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: metrics.screenWidth,
    height: '100%',
});

const ButtonText = styled.Text((props) => ({
    color: '#fff',
    fontSize: props.theme.FONT_SIZE_LARGE,
}));
