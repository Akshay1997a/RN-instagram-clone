import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import LogoSVG from '../assets/svgs/instagram_logo.svg';
import {metrics} from '../style';

interface LogoProps {
    width?: number | string;
    height?: number | string;
}

export default function Logo({width, height}: LogoProps) {
    const {PRIMARY_TEXT_COLOR} = useTheme();
    return (
        <InstagramLogo
            fill={PRIMARY_TEXT_COLOR}
            width={width || '80%'}
            height={height || 50}
        />
    );
}

const InstagramLogo = styled(LogoSVG)(() => ({
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
}));
