import React from 'react';
import * as api from '../../Api/all.api'
import CommonLink from '../CommonComponent/CommonLink';

const TopStories = () => {
    console.log("topstories")

    return (
        <>
            <CommonLink api={api.topLists()} />

        </>
    )
}
export default TopStories