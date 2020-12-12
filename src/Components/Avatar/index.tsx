import React from 'react';
import styled from 'styled-components/native';
import {metrics} from '../../style';
import Feather from 'react-native-vector-icons/Feather';

export function AvatarIcon() {
    return (
        <AvatarContaeinr>
            <Feather name="user" size={70} />
        </AvatarContaeinr>
    );
}

const AvatarContaeinr = styled.View(() => {
    return {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 100,
        width: metrics.screenWidth / 3,
        height: metrics.screenWidth / 3,
        borderColor: 'black',
        marginTop: metrics.baseMargin,
        marginBottom: metrics.baseMargin,
    };
});
