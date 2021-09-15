import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Link, Button } from '@swap-org/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const rotatingAnim = () => keyframes`
  from {
    transform: rotate(deg);
  }
  50% {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(deg);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 75%;
  animation: ${rotatingAnim} 15s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const imagePath = '/images/home/swap-world/'
const imageSrc = 's-logo'

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="secondary" mb="24px">
            {t('Swap the world')}
          </Heading>
          <Heading scale="md" mb="24px">
            {t('Trade and earn crypto with swap.org, the decentralized exchange on Binance Smart Chain (BSC) network.')}
          </Heading>
          <Flex>
            {!account && <ConnectWalletButton mr="8px" />}
            <Link mr="16px" href="/swap">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </Link>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('Swap world')} />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
