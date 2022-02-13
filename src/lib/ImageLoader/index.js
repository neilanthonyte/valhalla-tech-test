import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import useStyle from './index.styles';

const ImageLoader = ({item}) => {
    const Style = useStyle();

    return (
        <TouchableOpacity style={Style.container} activeOpacity={0.9}>
            <Image 
                source={{uri: item.url}}
                style={Style.img}
            />
        </TouchableOpacity>
    )
}

export default ImageLoader;