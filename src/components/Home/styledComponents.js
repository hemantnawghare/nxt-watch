import styled from 'styled-components'

export const HomeBackgroundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
`

export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 18px 24px 18px 24px;
  height: 200px;
`

export const WebsiteLogo = styled.img`
  width: 150px;
`

export const BannerText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #0f0f0f;
  font-weight: 400;
`

export const GetNowButton = styled.button`
  width: 110px;
  height: 36px;
  font-size: 14px;
  font-family: "Roboto";
  background-color: transparent;
  color: #1e293b;
  border: 1.5px solid #1e293b;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  margin-top; 10px;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  margin-bottom: auto;
  outline: none;
  cursor: pointer;
`

export const BannerContent = styled.div``

export const SearchInputContainer = styled.div`
  display: flex;
  margin-top: 20px auto;
  max-width: 400px;
  background-color: #fff;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const SearchInputElement = styled.input`
  border: none;
  outline: none;
  background-color: #ffffff;
  font-family: Roboto;
  padding: 8px 10px 8px 10px;
  border-radius: 2px solid #cccccc;
  width: 80%;
  font-weight: 500;
`

export const IconButton = styled.button`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  color: #616e7c;
  border: none;
  cursor; pointer;
`

export const VideoItemContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 20px;
`

export const FailureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const FailureImage = styled.img`
  width: 40%;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  color: #212121;
  margin-bottom: 8px;
  font-family: Roboto;
`

export const FailureDescription = styled.p`
  font-size: 16px;
  color: #616e7c;
  font-family: Roboto;
  text-align: center;
`

export const FailureRetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`

export const SideBarHomeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    background-color: #ffffff;
    width: 400px;
  }
`

export const HomeContent = styled.div`
  width: 100%;
`

// Export all components for easy import
export default {
  HomeBackgroundContainer,
  HomeBannerContainer,
  WebsiteLogo,
  BannerText,
  GetNowButton,
  CloseButton,
  BannerContent,
  SearchInputContainer,
  SearchInputElement,
  IconButton,
  VideoItemContainer,
  FailureContentContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
  LoaderContainer,
  SideBarHomeContainer,
  HomeContent,
}
