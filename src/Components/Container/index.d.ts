import {ScrollViewProps, ViewProps} from 'react-native';

export interface ContainerProps extends ViewProps {
    children?: React.ReactNode;
}

export interface ScrollableContainerProps extends ScrollViewProps {
    children?: React.ReactNode;
}
