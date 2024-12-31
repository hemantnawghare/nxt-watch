import styled from 'styled-components'

export const TrendingHeaderContainer = styled.div`
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  padding: 28px 0px 28px 34px;
`

export const TrendingIconContainer = styled.div`
  background-color: #cbd5e1;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`

export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  @media screen and (min-width: 768px) {
    font-weight: 42px;
  }
`

export const SidebarTrendingContainer = styled.div`
  min-height: 100vh;
  @media screen and (min-height: 768px) {
    display: none;
  }
`

export const TrendingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingVideoImageContainer = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`

export const TrendingVideoContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FailureContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 40%;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #212121;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  text-align: center;
`

export const FailureRetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
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
  justify-content: center;
`
