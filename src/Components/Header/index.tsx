import React from 'react';
import {Alert, Image, ScrollView} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {metrics} from '../../style';
import Logo from '../Logo';
import DirectIcon from '../../assets/svgs/direct_ic.svg';
import Oval from '../../assets/svgs/oval_ic.svg';
import AddStoryIconSVG from '../../assets/svgs/add_story_ic.svg';
import {IconButton} from '../Buttons';

export function Header() {
  const {PRIMARY_TEXT_COLOR} = useTheme();
  return (
    <HeaderWrapper>
      <Logo width={120} height={40} />
      <IconButton
        onPress={() => {
          Alert.alert('Alert', 'hello', [
            {text: 'OK', style: 'default'},
            {text: 'cancle', style: 'destructive'},
          ]);
        }}
        icon={
          <DirectIcon
            width={25}
            height={25}
            strokeWidth={1.5}
            stroke={PRIMARY_TEXT_COLOR}
          />
        }
      />
    </HeaderWrapper>
  );
}

export function StoryHeader() {
  return (
    <StoryWrapper showsHorizontalScrollIndicator={false} horizontal={true}>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <AddStoryIcon width={25} height={25} />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
        <StoryTitle>Your Story</StoryTitle>
      </StoryContainer>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
      </StoryContainer>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
      </StoryContainer>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
      </StoryContainer>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
      </StoryContainer>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
      </StoryContainer>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
      </StoryContainer>
      <StoryContainer>
        <StoryComponent>
          <OvalBorder width="100%" height="100%" />
          <StoryImage source={require('../../mockData/Avatar.png')} />
        </StoryComponent>
      </StoryContainer>
    </StoryWrapper>
  );
}

const StoryWrapper = styled(ScrollView)({
  marginTop: metrics.baseMargin,
  flexDirection: 'row',
  height: 100,
});

const OvalBorder = styled(Oval)({
  position: 'absolute',
});

const StoryContainer = styled.View(() => ({
  alignItems: 'center',
  height: '100%',
  marginLeft: metrics.basePadding,
  marginRight: metrics.basePadding / 2,
}));

const StoryComponent = styled.View(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: 70,
  height: 70,
}));

const StoryImage = styled(Image)((props) => ({
  width: '92%',
  height: '92%',
  borderWidth: 4,
  borderColor: props.theme.PRIMARY_BACKGROUND_COLOR,
  borderRadius: 1000,
}));

const StoryTitle = styled.Text((props) => ({
  color: props.theme.PRIMARY_TEXT_COLOR,
}));

const AddStoryIcon = styled(AddStoryIconSVG)({
  position: 'absolute',
  zIndex: 1000,
  bottom: 0,
  right: 0,
});

const HeaderWrapper = styled.View((props) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: metrics.screenWidth,
  height: 70,
  backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
  padding: metrics.basePadding,
}));
