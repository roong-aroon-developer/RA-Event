import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NotificationData } from '../../store/NotificationMock.js';

import NotificationCard from './NotificationCard';

const NotificationPage = () => {
    return(
        <Fragment>
            {
                NotificationData.map(data => (
                    <Link style={{textDecoration:'none'}} 
                    to={{pathname: data.path,}}
                    key={data.name}>
                        <NotificationCard />
                    </Link>
                ))
            }
        </Fragment>
    )
}

export default NotificationPage;