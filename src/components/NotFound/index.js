import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundImage,
  SidebarContainer,
  NotFoundContain,
  NotFoundHeading,
  NotFoundDescription,
  MainContainer,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <MainContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <NotFoundContain>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundDescription as="p">
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
      </NotFoundContain>
    </MainContainer>
  </>
)

export default NotFound
