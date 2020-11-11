import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton'
import RecentCard from '../components/RecentFeed/RecentCard'
import Loader from '../components/Loader'

const Mail = () => {
    return(
        <Fragment>
            <Skeleton>
                <RecentCard />
            </Skeleton>
        </Fragment>
    )
}

export default Mail;