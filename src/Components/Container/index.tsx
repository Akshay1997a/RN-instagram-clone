import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {metrics} from '../../style';
import {ContainerProps, ScrollableContainerProps} from './index.d';

export default function Container(props: ContainerProps) {
  return <ViewContainer {...props}>{props.children}</ViewContainer>;
}

export function ScrollableContainer(props: ScrollableContainerProps) {
  return (
    <ScrollableContainerWrapper showsVerticalScrollIndicator={false}>
      {props.children}
    </ScrollableContainerWrapper>
  );
}

const ViewContainer = styled(SafeAreaView)((props) => ({
  flex: 1,
  padding: metrics.basePadding * 2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
}));

const ScrollableContainerWrapper = styled(ScrollView)((props) => ({
  backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
}));
