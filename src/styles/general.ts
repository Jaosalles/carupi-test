import styled, { css } from 'styled-components';

import colors from './colors';

// GRID

interface RowProps {
  alignItems?: string;
  justifyContent?: string;
  padding?: string;
  height?: string;
  position?: string;
  paddingLeft?: number;
  paddingRight?: number;
  marginTop?: number;
  marginBottom?: number;
  width?: string;
}

export const Row = styled.div<RowProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : null};
  padding: ${props => (props.padding ? props.padding : '0')};
  ${props => (props.height ? `height: ${props.height}` : null)};
  position: ${props => (props.position ? props.position : 'relative')};
  ${props =>
    props.paddingLeft ? `padding-left: ${props.paddingLeft}px` : null};
  ${props =>
    props.paddingRight ? `padding-right: ${props.paddingRight}px` : null};
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px` : null)};
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px` : null};
  width: ${props => (props.width ? props.width : '100%')};
`;

interface Col100Props {
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  overflow?: string;
  padding?: string;
  position?: string;
  marginTop?: number;
  marginBottom?: number;
  paddingTop?: number;
  fontSize?: string;
  gridArea?: string;
}

export const Col100 = styled.div<Col100Props>`
  align-items: ${props => (props.alignItems ? props.alignItems : null)};
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : null};
  min-height: 1px;
  overflow: ${props => (props.overflow ? props.overflow : 'hidden')};
  padding: ${props => (props.padding ? props.padding : '0')};
  position: ${props => (props.position ? props.position : 'relative')};
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px` : null)};
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px` : null};
  ${props => (props.paddingTop ? `padding-top: ${props.paddingTop}px` : null)};
  ${props => (props.fontSize ? `font-size" ${props.fontSize}` : null)};
  width: 100%;
  &.mobileForms {
    @media screen and (max-width: 767px) {
      grid-area: ${props => (props.gridArea ? props.gridArea : null)};
    }
  }
`;

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

interface ContainerHeaderProps {
  alignItems?: string;
  margin?: string;
  padding?: string;
  paddingIpad?: string;
  marginIpad?: string;
}

export const ContainerHeader = styled.div<ContainerHeaderProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'initial')};
  display: flex;
  flex-flow: column;
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
  @media all and (max-width: 1023px) {
    padding: ${props => (props.paddingIpad ? props.paddingIpad : '0')};
    margin: ${props => (props.marginIpad ? props.marginIpad : '0')};
  }
`;

export const DocsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;
  max-width: 100%;
  width: 100%;
  @media screen and (max-width: 1439px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 80%;
    max-width: 80%;
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    width: 100%;
    max-width: 100%;
  }
`;

// TABELAS

interface SearchContainerProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  padding?: string;
  position?: string;
}

export const SearchContainer = styled.div<SearchContainerProps>`
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-end'};
  padding: ${props => (props.padding ? props.padding : '10px 0')};
  position: ${props => (props.position ? props.position : 'relative')};
`;

// TABELA FAKE
export const FullContainer = styled.div`
  background-color: ${colors.white};
  min-height: calc(100vh - 60px);
  overflow-x: auto;
  padding: 0 4em 2em;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 1239px) {
    padding: 0 15px 2em;
  }
`;

export const ContainerBody = styled.div`
  display: inline-flex;
`;

export const Table = styled.div`
  border: 1px solid ${colors.lighter};
  border-radius: 5px;
  color: ${colors.dark};
  display: flex;
  flex-flow: column;
  margin: 10px 0;
  padding: 10px 25px;
`;

export const Tr = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.lighter};
  display: flex;
  min-height: 35px;
  padding: 6px 0;
  &:last-of-type {
    border-bottom: 0;
  }
`;

interface ThProps {
  alignItems?: string;
  display?: string;
  justifyContent?: string;
  textAlign?: string;
  width?: string;
  mobileWidth?: string;
}

export const Th = styled.div<ThProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'normal')};
  color: ${colors.secondary};
  display: ${props => (props.display ? props.display : null)};
  font-size: 1.1em;
  font-weight: 600;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'normal'};
  margin: 0 0 10px;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  width: ${props => (props.width ? props.width : '190px')};

  & svg {
    padding-left: 5px;
  }
  @media only screen and (max-width: 767px) {
    width: ${props => (props.mobileWidth ? props.mobileWidth : '140px')};
  }
`;

interface TdProps {
  cursor?: string;
  textAlign?: string;
  width?: string;
  mobileWidth?: string;
  display?: string;
  flexDirection?: string;
  fontWeight?: string;
}

export const Td = styled.div<TdProps>`
  align-items: center;
  color: ${props => (props.color ? props.color : colors.dark)};
  cursor: ${props => (props.cursor ? props.cursor : 'default')};
  font-size: 1.1em;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  text-overflow: ellipsis;
  width: ${props => (props.width ? props.width : '190px')};

  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `};

  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `};

  ${props =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `};

  @media only screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    width: ${props => (props.mobileWidth ? props.mobileWidth : '140px')};
  }
`;

// FORMS
interface FormProps {
  alignItems?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  display?: string;
  flexFlow?: string;
  justifyContent?: string;
  margin?: string;
  maxWidth?: string;
  width?: string;
  marginIpad?: string;
  widthIpad?: string;
  marginMobile?: string;
  widthMobile?: string;
}

export const Form = styled.form<FormProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.transparent};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0px')};
  box-shadow: ${props => (props.boxShadow ? props.boxShadow : '0')};
  display: ${props => (props.display ? props.display : 'flex')};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : 'column')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${props => (props.margin ? props.margin : '50px 0')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1000px')};
  width: ${props => (props.width ? props.width : '100%')};
  @media screen and (max-width: 1023px) {
    margin: ${props => (props.marginIpad ? props.marginIpad : '40px 10px')};
    width: ${props =>
      props.widthIpad ? props.widthIpad : 'calc(100% - 20px)'};
  }
  @media screen and (max-width: 767px) {
    margin: ${props => (props.marginMobile ? props.marginMobile : '0')};
    width: ${props => (props.widthMobile ? props.widthMobile : '100%')};
  }
`;

interface FormButtonsProps {
  margin?: string;
}

export const FormButtons = styled.div<FormButtonsProps>`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '0')};
  max-width: 600px;
  width: 100%;
`;

interface H2Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  margin?: string;
  textAlign?: string;
  fontSizeSmall?: string;
  marginSmall?: string;
}

export const H2 = styled.h2<H2Props>`
  color: ${props => (props.color ? props.color : colors.dark)};
  font-size: ${props => (props.fontSize ? props.fontSize : '2em')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 1)}px;
  margin: ${props => (props.margin ? props.margin : '0')};
  text-align: ${props => (props.textAlign ? props.textAlign : null)};
  width: 100%;
  @media screen and (max-width: 767px) {
    font-size: ${props =>
      props.fontSizeSmall ? props.fontSizeSmall : '1.2em'};
    margin: ${props => (props.marginSmall ? props.marginSmall : '0')};
  }
`;

interface FormContentProps {
  alignItems?: string;
  backgroundColor?: string;
  borderRadius?: string;
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  height?: string;
  justifyContent?: string;
  maxWidth?: string;
  padding?: string;
  width?: string;
}

export const FormContent = styled.div<FormContentProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.lightTransparent};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 8)}px;
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : 'wrap')};
  height: ${props => (props.height ? props.height : null)}px;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '100%')};
  padding: ${props => (props.padding ? props.padding : '30px')};
  width: ${props => (props.width ? props.width : '100%')};
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
`;

interface FormDivProps {
  alignItems?: string;
  display?: string;
  gridGap?: string;
  gridTemplateColumns?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
  width?: string;
  maxHeight?: string;
  overflowY?: string;
  gridTemplateColumnsSmall?: string;
  gridGapSmall?: string;
  marginMobile?: string;
  widthSmall?: string;
}

export const FormDiv = styled.div<FormDivProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : 'initial')};
  display: ${props => (props.display ? props.display : 'grid')};
  grid-gap: ${props => (props.gridGap ? props.gridGap : '10px 15px')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : '1fr'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
  width: ${props => (props.width ? props.width : '100%')};
  ${props => (props.maxHeight ? `max-height: ${props.maxHeight}px` : null)};
  ${props => (props.overflowY ? `overflow-y: ${props.overflowY}` : null)};

  &::-webkit-scrollbar {
    background: ${colors.secondary};
    border-radius: 5px;
    width: 5px;
  }
  &::-webkit-scrollbar-button {
    height: 0;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.lighter};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.secondary};
    border-radius: 5px;
    width: 5px;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: ${props =>
      props.gridTemplateColumnsSmall ? props.gridTemplateColumnsSmall : '1fr'};
    grid-gap: ${props => (props.gridGapSmall ? props.gridGapSmall : '5px')};
    margin: ${props => (props.marginMobile ? props.marginMobile : '0')};
    width: ${props => (props.widthSmall ? props.widthSmall : '100%')};
  }
`;

interface LabelProps {
  alignItems?: string;
  alignSelf?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  fontSizeMobile?: string;
}

export const Label = styled.label<LabelProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : null)};
  align-self: ${props => (props.alignSelf ? props.alignSelf : null)};
  color: ${props => (props.color ? props.color : colors.primary)};
  display: ${props => (props.display ? props.display : null)};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  margin: ${props => (props.margin ? props.margin : '5px 0')};
  position: relative;
  &.error {
    color: ${colors.danger};
    font-weight: bold;
  }
  @media screen and (max-width: 1239px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: ${props =>
      props.fontSizeMobile ? props.fontSizeMobile : '12px'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

interface InputProps {
  backgroundColor?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  position?: string;
  textTransform?: string;
  colorDisabled?: string;
  focusBorderColor?: string;
  placeholderFocusColor?: string;
  placeholderColor?: string;
  placeholderfontSize?: string;
}

export const Input = styled.input<InputProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  border: ${props =>
    props.border ? props.border : '1px solid rgba(0, 0, 0, 0.2)'};
  border-bottom: ${props =>
    props.borderBottom ? props.borderBottom : '1px solid rgba(0, 0, 0, 0.2)'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '4px')};
  color: ${props => (props.color ? props.color : colors.primary)};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'initial')};
  height: ${props => (props.height ? props.height : '35px')};
  margin: ${props => (props.margin ? props.margin : '0 0 8px')};
  padding: ${props => (props.padding ? props.padding : '0 8px')};
  position: ${props => (props.position ? props.position : 'relative')};
  transition: all 0.3s ease;
  width: ${props => (props.width ? props.width : '100%')};
  ${props =>
    props.textTransform ? `text-transform: ${props.textTransform}` : null};
  &.disabledInput[disabled] {
    background: transparent;
    border: 0;
    border-bottom: 1px solid ${colors.regular};
    border-radius: 0;
    box-shadow: 0 0 0 transparent;
    color: ${props =>
      props.colorDisabled ? props.colorDisabled : colors.dark};
    cursor: not-allowed;
    height: 40px;
  }
  &.error {
    border-color: ${colors.danger};
  }
  :focus {
    border-color: ${props =>
      props.focusBorderColor ? props.focusBorderColor : colors.primary};
    ::-webkit-input-placeholder {
      color: ${props =>
        props.placeholderFocusColor
          ? props.placeholderFocusColor
          : colors.regular};
    }
  }
  ::-webkit-input-placeholder {
    color: ${props =>
      props.placeholderColor ? props.placeholderColor : colors.regular};
    font-size: ${props =>
      props.placeholderfontSize ? props.placeholderfontSize : '12px'};
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 1239px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
    height: 35px;
  }
`;

interface TextareaProps {
  backgroundColor?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
  fontSize?: string;
  height?: string;
  margin?: string;
  padding?: string;
  position?: string;
  resize?: string;
  width?: string;
  textTransform?: string;
}

export const Textarea = styled.textarea<TextareaProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  border: ${props =>
    props.border ? props.border : '1px solid rgba(0, 0, 0, 0.2)'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  color: ${props => (props.color ? props.color : colors.primary)};
  font-family: 'Montserrat', Arial, sans-serif !important;
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
  height: ${props => (props.height ? props.height : null)};
  margin: ${props => (props.margin ? props.margin : '0 0 8px')};
  padding: ${props => (props.padding ? props.padding : '8px')};
  position: ${props => (props.position ? props.position : 'relative')};
  resize: ${props => (props.resize ? props.resize : 'none')};
  transition: border-color 0.3s;
  width: ${props => (props.width ? props.width : null)};
  ${props =>
    props.textTransform ? `text-transform: ${props.textTransform}` : null};
  &.error {
    border-color: ${colors.danger};
  }
  :focus {
    border-color: ${colors.primary};
  }
  ::-webkit-input-placeholder {
    color: ${colors.regular};
    font-size: 12px;
  }
  &.disabledTextarea[disabled] {
    background: #f1f1f1;
    color: ${colors.primary};
    cursor: not-allowed;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
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

interface ActionButtonProps {
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
  textDecoration?: string;
  width?: string;
  cursor?: string;
  fontSizeMobile?: string;
  heightMobile?: string;
  marginMobile?: string;
}

export const ActionButton = styled.a<ActionButtonProps>`
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.transparent};
  border: ${props => (props.border ? props.border : '0')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0')};
  color: ${props => (props.color ? props.color : colors.dark)};
  display: ${props => (props.display ? props.display : 'flex')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1em')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  height: ${props => (props.height ? props.height : '35px')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  letter-spacing: 1px;
  margin: ${props => (props.margin ? props.margin : '0 5px')};
  padding: ${props => (props.padding ? props.padding : '0 10px')};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : 'underline'};
  width: ${props => (props.width ? props.width : 'auto')};

  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 767px) {
    font-size: ${props =>
      props.fontSizeMobile ? props.fontSizeMobile : '13px'};
    height: ${props => (props.heightMobile ? props.heightMobile : '35px')};
    margin: ${props => (props.marginMobile ? props.marginMobile : '0')};
  }
`;

// UTILITÁRIOS

export const Alert = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 12;
`;

export const AlertContent = styled.div`
  background: ${colors.white};
  border-radius: 6px;
  max-width: 420px;
  overflow: hidden;
  width: 100%;
`;

export const AlertHeader = styled.div`
  background: ${colors.primary};
`;

interface AlertTextProps {
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
}

export const AlertText = styled.span<AlertTextProps>`
  color: ${props => (props.color ? props.color : colors.dark)};
  display: block;
  font-size: ${props => (props.fontSize ? props.fontSize : 14)}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  letter-spacing: 1px;
  padding: ${props => (props.padding ? props.padding : '30px')};
`;

interface AlertTitleProps {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}

export const AlertTitle = styled.span<AlertTitleProps>`
  color: ${props => (props.color ? props.color : colors.dark)};
  display: block;
  font-size: ${props => (props.fontSize ? props.fontSize : 14)}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  letter-spacing: 1px;
  margin: ${props => (props.margin ? props.margin : '0 0 0 0')};
  padding: ${props => (props.padding ? props.padding : '8px 0')};
  &.error {
    color: ${colors.danger};
    font-weight: bold;
  }
`;

export const AlertButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

interface ErrorMessageProps {
  margin?: string;
  float?: string;
  width?: string;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  align-self: center;
  color: ${colors.danger};
  font-size: 10.5px;
  letter-spacing: 0.4px;
  margin: ${props => (props.margin ? props.margin : '0 0 0 0')};
  ${props => (props.float ? `float:${props.float}` : null)}
  ${props => (props.width ? `width:${props.width}` : null)}
`;

interface BadgeProps {
  backgroundColor?: string;
}

export const Badge = styled.div<BadgeProps>`
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 20px;
  justify-content: center;
  line-height: 20px;
  position: absolute;
  right: 4px;
  top: 0;
  width: 20px;
  z-index: 5;
  ${props =>
    props.backgroundColor ? `background-color:${props.backgroundColor}` : null}
`;

export const BadgeText = styled.span`
  color: ${colors.darker};
  font-size: 11px;
  font-weight: 500;
`;

export const Br = styled.br``;

// Loading Shimmer
interface ShimmerLoadingProps {
  height?: string;
  minHeightMobile?: string;
}

interface TabsProps {
  gridTemplateColumns?: string;
  margin?: string;
  width?: string;
}

export const Tabs = styled.div<TabsProps>`
  align-items: initial;
  align-self: initial;
  display: grid;
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : 'repeat(3, 1fr)'};
  justify-content: initial;
  margin: ${props => (props.margin ? props.margin : '50px 0 0')};
  width: ${props => (props.width ? props.width : '400px')};

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

interface TabItemProps {
  borderRadius?: string;
  justifyContent?: string;
}

export const TabItem = styled.div<TabItemProps>`
  align-items: center;
  background: ${colors.transparent};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : '0 0 0 0'};
  display: flex;
  height: 40px;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  overflow: hidden;
`;

interface TabLinkProps {
  borderRadius?: string;
  justifyContent?: string;
}

export const TabLink = styled.a<TabLinkProps>`
  align-items: center;
  background: ${colors.transparent};
  border: 1px solid ${colors.secondary};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : '0 0 0 0'};
  color: ${colors.secondary};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100%;
  &.active {
    background: ${colors.secondary};
    color: ${colors.white};
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ContentTable = styled.div`
  display: block;
  transition: all 0.4s ease-in-out;
  width: 100%;
  &.displayOut {
    display: none;
  }
`;

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
