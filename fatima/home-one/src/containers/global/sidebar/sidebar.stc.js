import styled from "styled-components";
import { WidgetBoxWrap } from '../../../components/shared/widget-box/widget-box.stc'
import { device } from '../../../theme'

export const SidebarWrap = styled.aside`
    ${device.medium}{
        margin-top: 12px;
    }
    ${WidgetBoxWrap}{
        &:not(:last-child){
            margin-bottom: 30px;
        }
    }
`; 