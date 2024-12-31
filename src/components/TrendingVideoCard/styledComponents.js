import styled from 'styled-components'

export const VideoCardItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#ffffff')};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ThumbnailVideoImage = styled.img`
  width: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 12px;
  }
`

export const ProfileSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`

export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#212121')};
  margin: 0 0 8px 0;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  margin: 0 0 4px 0;
`

export const ProfileViewsContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  margin-top: 8px;
`

export const ViewsItem = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`
