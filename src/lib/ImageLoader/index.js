import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import useStyle from './index.styles';

import DownloadBtn from '../DownloadBtn';
import {showDownloadBtnHook} from './hooks';

const ImageLoader = (props) => {
    const Style = useStyle();
    const {item, index} = props;
    const {showBtn, setShowBtn} = showDownloadBtnHook(index);
    
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