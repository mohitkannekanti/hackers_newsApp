import React, { useState, useEffect } from 'react';
import api from '../../Api/all.api'
import CommonLink from '../CommonComponent/CommonLink';

const Main = () => {

    const [mainContent, setMainContent] = useState();

    useEffect(() => {
        getTopStories()
    }, [])

    const getTopStories = () => {
        api.topLists().then(res => {
            console.log(res, "res")

        })
            .catch((err) => {
                console.log(err, "err")
            })
    }


    return (
        <React.Fragment>
            <CommonLink />

        </React.Fragment>
    )
}
export default Main