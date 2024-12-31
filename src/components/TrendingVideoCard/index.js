import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import AppContext from '../../context/AppContext'

import {
  VideoCardItem,
  ThumbnailVideoImage,
  ProfileImage,
  Title,
  ChannelName,
  ProfileViewsContainer,
  ViewsItem,
  ProfileDetailsContainer,
  ProfileSection,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {VideoItemDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewsCount,
    channelName,
    channelProfileImageUrl,
    id,
  } = VideoItemDetails

  const parsedDate = new Date(publishedAt)
  const publishedTime = formatDistanceToNow(parsedDate)

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoCardItem>
              <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />
              <ProfileSection>
                <ProfileImage src={channelProfileImageUrl} alt="channel logo" />
                <ProfileDetailsContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {channelName}
                  </ChannelName>
                  <ProfileViewsContainer>
                    <ViewsItem views isDarkTheme={isDarkTheme}>
                      <p>{viewsCount}</p>
                    </ViewsItem>
                    <viewsCount isDarkTheme={isDarkTheme}>
                      <p> {publishedTime} ago</p>
                    </viewsCount>
                  </ProfileViewsContainer>
                </ProfileDetailsContainer>
              </ProfileSection>
            </VideoCardItem>
          </Link>
        )
      }}
    </AppContext.Consumer>
  )
}

export default TrendingVideoCard
