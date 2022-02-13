import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import useStyle from './index.styles';

import DownloadBtn from '../DownloadBtn';
import {showDownloadBtnHook} from './hooks';

const ImageLoader = ({item}) => {
    const Style = useStyle();
    const {showBtn, setShowBtn} = showDownloadBtnHook();
    
    return (
        <TouchableOpacity style={Style.container} activeOpacity={0.9} onPress={() => setShowBtn(!showBtn)}>
            <Image 
                source={{uri: item.url}}
                style={Style.img}
            />

            {
                showBtn ? (
                    <DownloadBtn {...{
                        width: Style.img.width,
                        height: Style.img.height
                    }} />
                ) : null
            }
        </TouchableOpacity>
    )
}

export default ImageLoader;