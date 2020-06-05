import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get'
import {device} from '../../../theme'
 
export const FeaturePostWrapper = styled.div `
    padding-top: 26px;
    padding-bottom: 50px;
    .feature-post-slider{
        padding-bottom: 45px;
        border-bottom: 1px solid ${themeGet("colors.borderColor")};
    }
    ${device.small}{
        padding-top: 0;
        margin-top: -8px;
    }
    ${device.medium}{
        margin-top: -250px;
    }
    ${device.large}{
        margin-top: -300px;
    }
    ${device.xlarge}{
        margin-top: -445px;
    }
`;