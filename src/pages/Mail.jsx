import React, { Fragment } from 'react';
import NotificationPage from '../components/NotificationPage';
import '../styles/Mail.css'

const Mail = () => {
    return(
        <Fragment>
            <div id='mail-container'>
                <NotificationPage />
            </div>
        </Fragment>
    )
}

export default Mail;