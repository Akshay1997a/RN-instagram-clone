import React from 'react';
import {GestureResponderEvent, TextInputProps as TIP} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {metrics} from '../../style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IconButton} from '../Buttons';

interface TextInputProps extends TIP {
    isSecureText?: boolean;
    onEyePress?: (event: GestureResponderEvent) => void;
}

export default function TextInput(props: TextInputProps) {
    const {SECONDARY_TEXT_COLOR, PRIMARY_TEXT_COLOR} = useTheme();
    const EyeIcon = (
        <FontAwesome name="eye" size={20} color={PRIMARY_TEXT_COLOR} />
    );
    const EyeSlashIcon = (
        <FontAwesome name="eye-slash" size={20} color={PRIMARY_TEXT_COLOR} />
    );

    return (
        <TextInputContainer>
            <TextInputComponent
                {...props}
                placeholderTextColor={SECONDARY_TEXT_COLOR}
            />
            {props.isSecureText && (
                <IconButton
                    onPress={props.onEyePress}
                    icon={props.secureTextEntry ? EyeSlashIcon : EyeIcon}
                />
            )}
        </TextInputContainer>
    );
}

const TextInputContainer = styled.View((props) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    width: '100%',
    height: metrics.screenHeight * 0.06,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    borderColor: props.theme.HAIRLINE_COLOR,
    backgroundColor: props.theme.SECONDARY_BACKGROUND_COLOR,
}));

const TextInputComponent = styled.TextInput((props) => ({
    flex: 1,
    color: props.theme.PRIMARY_TEXT_COLOR,
}));
