import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
// import FarmAuctionsBanner from './components/Banners/FarmAuctionsBanner'
import IFOBanner from './components/Banners/IFOBanner'

const showBanner = false

const HomeBanner = ({ account }: { account: string }) => {
  if (!showBanner) {
    return null
  }

  return (
    <Flex
      pt={[account ? '220px' : '0', null, null, account ? '76px' : '0']}
      mt={[account ? '0' : '-16px', null, null, account ? '0' : '-48px']}
      pb="24px"
    >
      <IFOBanner />
    </Flex>
  )
}

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #0c285d 0%, #191326 100%)'
            : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <HomeBanner account={account} />
        <Hero />
      </StyledHeroSection>
      <OuterWedgeWrapper>
        <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
          <WedgeTopLeft />
        </InnerWedgeWrapper>
      </OuterWedgeWrapper>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={theme.isDark ? 'linear-gradient(139.73deg, #05152d 0%, #144486 100%)' : theme.card.dropShadow}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? theme.colors.binance : theme.card.background}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.isDark? theme.colors.contrast: theme.card.boxShadowWarning}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? theme.colors.binance : theme.card.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.isDark ? 'linear-gradient(139.73deg, #05152d 0%, #144486 100%)' : theme.card.dropShadow}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.isDark ? theme.colors.binance : theme.card.background}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData(t)} />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.contrast}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.isDark ? theme.colors.binance : theme.card.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...cakeSectionData(t)} />
      </PageSection>
    </>
  )
}

export default Home
