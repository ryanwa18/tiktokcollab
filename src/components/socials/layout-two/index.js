import React from 'react'
import { FiInstagram, FiYoutube } from "react-icons/fi";
import Social, {SocialLink} from '../../shared/social'

const SocialOne = ({social, ...restProps}) => {
    const {tiktok, instagram, youtube} = social;
    return (
        <Social {...restProps}>
            {instagram && (
                <SocialLink path={instagram}>
                    <FiInstagram/>
                </SocialLink>
            )}
            {youtube && (
                <SocialLink path={youtube}>
                    <FiYoutube/>
                </SocialLink>
            )}
        </Social>
    )
}

SocialOne.defaultProps = {
    mr: '15px',
    width: '34px',
    height: '34px',
    lineHeight: '26px',
    borderWidth: '2px',
    layout: 2
}

export default SocialOne