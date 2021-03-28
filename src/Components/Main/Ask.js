import React from 'react'
import CommonLink from '../CommonComponent/CommonLink';
import * as api from '../../Api/all.api'

const Ask = () => {
    console.log("ask")
    return (
        <React.Fragment>
            <CommonLink api={api.askStories()} />

        </React.Fragment>
    )
}

export default Ask
