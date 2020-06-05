import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import BannerShape from '../../../assets/img/home-one-banner-shape.png'
import {device} from '../../../theme'

export const HeroWrapper = styled.section `
    height: 500px;
    position: relative;
    ${device.xsmall}{
        height: 650px;
    }
    ${device.medium}{
        height: 750px;
    }
    ${device.large}{
        height: 850px;
    }
    ${device.xlarge}{
        height: 1080px;
    }
    &:before{
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgb( 0, 0, 0, .2 );
    }
    &:after{
        position: absolute;
        content: '';
        left: 0;
        bottom: -5px;
        z-index: 1;
        width: 100%;
        height: 100px;
        background: url(${BannerShape}) no-repeat scroll 0 0;
        background-size: 100% 100%;
        ${device.xsmall}{
            height: 160px;
        }
        ${device.small}{
            height: 200px;
        }
        ${device.medium}{
            height: 240px;
        }
        ${device.large}{
            height: 280px;
        }
    }
`;

export const HeroBG = styled(BackgroundImage) `
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const HeroTextBox = styled.div `
    padding-top: 200px;
    ${device.xsmall}{
        padding-top: 210px;
    }
    ${device.medium}{
        padding-top: 230px;
    }
    ${device.large}{
        padding-top: 268px;
    }
    * {
        position: relative;
        z-index: 9;
    }
`; 