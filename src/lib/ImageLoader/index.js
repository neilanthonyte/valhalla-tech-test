import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import useStyle from './index.styles';

import DownloadBtn from '../DownloadBtn';
import {showDownloadBtnHook} from './hooks';

const ImageLoader = (props) => {
    const Style = useStyle();
    const {item, index} = props;
    const {showBtn, setShowBtn} = showDownloadBtnHook(index);

    return (
        <TouchableOpacity style={Style.container} activeOpacity={0.9} onPress={() => setShowBtn(!showBtn)}>
            <View style={Style.img_wrapper}>
                <Image 
                    source={{uri: item.url}}
                    style={Style.img}
                />
            </View>

            {
                showBtn ? (
                    <DownloadBtn {...{
                        imgURL: item.url,
                        width: Style.img.width,
                        height: Style.img.height
                    }} />
                ) : null
            }
        </TouchableOpacity>
    )
}

export default ImageLoader;