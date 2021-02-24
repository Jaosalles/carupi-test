import styled from 'styled-components';

import colors from './colors';

// MAIN CONTAINER

interface MainContainerProps {
  backgroundColor?: string;
}

export const MainContainer = styled.div<MainContainerProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.darker};
  min-height: 100%;
  width: 100%;
`;

interface ContainerProps {
  backgroundColor?: string;
  display?: string;
  flexFlow?: string;
  margin?: string;
  maxWidth?: string;
  padding?: string;
  paddingIpad?: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.transparent};
  display: ${props => (props.display ? props.display : 'block')};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : 'row wrap')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1292px')};
  padding: ${props => (props.padding ? props.padding : '0 32px 2em')};
  position: relative;
  width: 100%;
  @media all and (max-width: 1023px) {
    padding: ${props =>
      props.paddingIpad ? props.paddingIpad : '25px 20px 2em'};
    width: 100%;
  }
`;

export const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  padding: 50px;
`;

export const ContainerBody = styled.div`
  display: inline-flex;
`;

interface BtnGlobalProps {
  alignItems?: string;
  alignSelf?: string;
  backgroundColor?: string;
  borderBottomWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  justifyContent?: string;
  letterSpacing?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  textShadow?: string;
  textTransform?: string;
  verticalAlign?: string;
  width?: string;
  borderRadiusMobile?: string;
  fontSizeMobile?: string;
  marginMobile?: string;
  heightMobile?: string;
  widthMobile?: string;
}

export const BtnGlobal = styled.button<BtnGlobalProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'initial')};
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.primary};
  border-bottom-width: ${props =>
    props.borderBottomWidth ? props.borderBottomWidth : '0'};
  border-color: ${props =>
    props.borderColor ? props.borderColor : colors.transparent};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  border-style: solid;
  border-width: ${props => (props.borderWidth ? props.borderWidth : '0')};
  color: ${props => (props.color ? props.color : colors.white)};
  display: ${props => (props.display ? props.display : 'flex')};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'initial')};
  height: ${props => (props.height ? props.height : '40px')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-evenly'};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : '1px'};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'initial')};
  text-shadow: ${props =>
    props.textShadow ? props.textShadow : '0 0 0 transparent'};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'uppercase'};

  ${props =>
    props.verticalAlign ? `vertical-align: ${props.verticalAlign}` : null};
  width: ${props => (props.width ? props.width : '150px')};
  :hover {
    opacity: 0.8;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media screen and (max-width: 767px) {
    border-radius: ${props =>
      props.borderRadiusMobile ? props.borderRadiusMobile : '4px'};
    font-size: ${props =>
      props.fontSizeMobile ? props.fontSizeMobile : '12px'};
    margin: ${props => (props.marginMobile ? props.marginMobile : '0')};
    height: ${props => (props.heightMobile ? props.heightMobile : '35px')};
    width: ${props => (props.widthMobile ? props.widthMobile : '80px')};
    &.forgot {
      font-size: 9px;
    }
  }
  &.btnIcon {
    &[disabled] {
      background: ${colors.transparent};
      color: ${colors.light};
      cursor: not-allowed;
    }
    @media screen and (max-width: 767px) {
      width: auto;
    }
  }
  &.clean {
    transition: width 0.4s;
    visibility: hidden;
    width: 0;
    &.animatedBtn {
      visibility: visible;
      width: 60px;
    }
  }
`;

// UTILITÁRIOS

export const Br = styled.br``;

// Loading Shimmer
interface ShimmerLoadingProps {
  height?: string;
  minHeightMobile?: string;
}

export const ShimmerLoading = styled.div<ShimmerLoadingProps>`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  display: inline-block;
  min-height: ${props => (props.height ? props.height : '265px')};
  position: relative;
  width: 100%;

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
  @media screen and (max-width: 767px) {
    min-height: ${props =>
      props.minHeightMobile ? props.minHeightMobile : '175px'};
  }
`;
