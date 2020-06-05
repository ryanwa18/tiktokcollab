import styled, { css } from 'styled-components';
import { color, layout } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { Box } from 'rebass/styled-components'

export const OffCanvaseWrap = styled(Box)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: ${themeGet("transition")};
    z-index: 9999;
    background: rgba(0,0,0,0.7);
    overflow-y: hidden;
    visibility: hidden;
    opacity: 0;
    ${props => props.isOpen && css`
        visibility: visible;
        opacity: 1;
    `}
`;

export const OffCanvasInner = styled(Box)`
    ${color};
    ${layout};
    ${props => props.sx.float === 'left' && css`
        float: left;
        transform: translateX(-120%);
    `}
    ${props => props.sx.float === 'right' && css`
        float: right;
        transform: translateX(120%);
    `}
    height: 100%;
    cursor: default;
    transition: ${themeGet("transition")};
    overflow-y: hidden;
    ${props => props.isOpen && css`
        transform: translateX(0%);
    `}
`;