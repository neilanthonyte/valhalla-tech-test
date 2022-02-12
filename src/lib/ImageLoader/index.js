import React from 'react';
import {View, Image} from 'react-native';
import useStyle from './index.styles';

const ImageLoader = ({index}) => {
    const Style = useStyle(index);

    return (
        <View style={Style.container}>
            <Image 
                source={{uri: 'https://th-thumbnailer.cdn-si-edu.com/vSnitgUqCQCRSx7mkHZtHZHry4U=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg'}}
                style={Style.img}
            />
        </View>
    )
}

export default ImageLoader;