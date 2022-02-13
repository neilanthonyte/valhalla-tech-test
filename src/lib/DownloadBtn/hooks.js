import {Alert, Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {updateState, getStates, getState} from 'my-react-global-states';

const configOptions = Platform.select({
    ios: {
      fileCache: true,
      notification: true,
    },
    android: {
        fileCache: true,
        addAndroidDownloads: {
            useDownloadManager: true,
            mediaScannable: true,
            notification: true,
        },
    },
});

let pCount = 0;

const runProgress = (limit, payload = null) => {
    let interval = null;

    if(interval) clearTimeout(interval);

    interval = setInterval(() => {
        if(pCount < limit) {
            pCount += 10
            updateState('download_progress', pCount, true);
        } else {
            clearTimeout(interval);

            if(limit === 100 && pCount >= limit) {
                updateState('show_download_bar', false, true);
                updateState('download_progress', 0, true);
                pCount = 0;
            }
            
            return 'done';
        }
    }, 1000);
}

export const onDownload = async (downloadURL) => {
    try {
        updateState('show_download_bar', true, true);
        runProgress(50); // run a fake initial progress
        const res = await downloadImg(downloadURL);
        runProgress(100, res); // if download success continue the progress to 100%
    } catch (error) {
        //if error close the progress bar
        updateState('show_download_bar', false, true);
        throw error;
    }
}

export const downloadImg = async (downloadURL) => {
    try {
        const downloadResult = await RNFetchBlob.config(configOptions).fetch('GET', downloadURL ,{
            // headers
        });
        
        return {
            status: 'success', 
            location: downloadResult.data, 
            error: null};
    } catch (error) {
        return {
            status: 'failed', 
            location: null, 
            error
        }
    }
}