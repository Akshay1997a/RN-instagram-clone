import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const metrics = {
    screenWidth: width,
    screenHeight: height,
    baseMargin: 10,
    basePadding: 10,
    baseRadius: 5,
};
