import React, { Fragment } from 'react'
import Avatar from '@material-ui/core/Avatar';

import './ProfilePage.css'

const ProfilePage = (props) => {
    return(
        <div id="profile-wrapper">
            <Avatar id="profile-img" alt="profile" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/studio77-mckinsey-6653-pai_2_1.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=600&s=99b44ef23a4b1adc068f123672212bd1"/>
        </div>
    )
}

export default ProfilePage
