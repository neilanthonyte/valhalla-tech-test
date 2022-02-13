import React from 'react';
import {stateListener} from 'my-react-global-states';

export const showProgressHook = () => {
    const [showProgress, setShowProgress] = React.useState(false);

    stateListener('show_download_bar', (val) => {
        setShowProgress(val)
    })

    return {showProgress, setShowProgress}
}

export const pBarPercentageHook = () => {
    const [percentage, setPercentage] = React.useState(0);

    stateListener('download_progress', (val) => {
        setPercentage(val)
    })

    return {percentage, setPercentage}
}