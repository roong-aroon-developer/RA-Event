import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NotificationData } from '../../store/NotificationMock.js';

import NotificationCard from './NotificationCard';
import './NotificationPage.css'

const NotificationPage = () => {
    return(
        <Fragment>
            <div id='notification-header'>
                Notifications
            </div>
            {
                NotificationData.map(data => (
                    <Link style={{textDecoration:'none'}} 
                    to={{pathname: data.path,}}
                    key={data._id}>
                        <NotificationCard />
                    </Link>
                ))
            }
        </Fragment>
    )
}

export default NotificationPage;