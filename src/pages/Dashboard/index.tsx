import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {ScrollableContainer} from '../../Components/Container';
import {StoryHeader} from '../../Components/Header';
import {metrics} from '../../style';
import MoreIcon from '../../assets/svgs/more_ic.svg';
import {IconButton} from '../../Components/Buttons';
import HeartIcon from '../../assets/svgs/heart_outline_ic.svg';
import CommentIcon from '../../assets/svgs/comment_outline_ic.svg';
import DirectIcon from '../../assets/svgs/direct_ic.svg';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import {TapGestureHandlerStateChangeEvent} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function PostCard() {
  const {PRIMARY_TEXT_COLOR, PRIMARY_BACKGROUND_COLOR} = useTheme();
  const [isLiked, setLiked] = useState<boolean>(false);
  const doubleTapRef = React.useRef<any>();

  const postLike = (e: TapGestureHandlerStateChangeEvent) => {
    if (e.nativeEvent.state === State.ACTIVE) {
      setLiked(true);
    }
  };

  return (
    <GestureHandlerRootView>
      <PostCardWrapper>
        <PostCardHeader>
          <PostCardHeaderRight>
            <PostCardAvatar source={require('../../mockData/Avatar.png')} />
            <PostCardTitle>@akshay1997</PostCardTitle>
          </PostCardHeaderRight>
          <IconButton icon={<MoreIcon fill={PRIMARY_TEXT_COLOR} />} />
        </PostCardHeader>
        <PostCardImageContainer>
          <TapGestureHandler
            ref={doubleTapRef}
            numberOfTaps={2}
            onHandlerStateChange={postLike}>
            <PostCardImage source={require('../../mockData/post_image.png')} />
          </TapGestureHandler>
        </PostCardImageContainer>
        <PostCardFooter>
          <PostCardFooterLeft>
            <IconButton
              icon={
                <HeartIcon
                  fill={isLiked ? 'red' : PRIMARY_BACKGROUND_COLOR}
                  stroke={isLiked ? 'red' : PRIMARY_TEXT_COLOR}
                  strokeWidth={2}
                />
              }
            />
            <IconButton
              icon={<CommentIcon stroke={PRIMARY_TEXT_COLOR} strokeWidth={1} />}
            />
            <IconButton
              icon={
                <DirectIcon stroke={PRIMARY_TEXT_COLOR} strokeWidth={1.5} />
              }
            />
          </PostCardFooterLeft>
        </PostCardFooter>
      </PostCardWrapper>
    </GestureHandlerRootView>
  );
}

export default function Dashboard() {
  return (
    <ScrollableContainer>
      <StoryHeader />
      <PostCard />
      <PostCard />
      <PostCard />
    </ScrollableContainer>
  );
}

const PostCardWrapper = styled.View(() => ({
  width: metrics.screenWidth,
  height: metrics.screenWidth,
}));

const PostCardHeader = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: metrics.basePadding,
});

const PostCardHeaderRight = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const PostCardTitle = styled.Text((props) => ({
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontWeight: 'bold',
}));

const PostCardImageContainer = styled(Pressable)(() => ({
  flex: 1,
}));

const PostCardImage = styled.Image(() => ({
  width: '100%',
  height: '100%',
}));

const PostCardFooter = styled.View(() => ({
  height: 50,
}));

const PostCardFooterLeft = styled.View({
  flexDirection: 'row',
});

const PostCardAvatar = styled.Image(() => ({
  width: 40,
  height: 40,
  marginRight: metrics.baseMargin,
}));
