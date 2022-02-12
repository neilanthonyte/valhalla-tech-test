import React from 'react';
import {View, FlatList} from 'react-native';
import useStyle from './index.styles';

import ImageLoader from '../../lib/ImageLoader';
import Config from '../../config.json';

const Fashion = () => {
    const Style = useStyle();
    const arr = ['1','2','3'];

    return (
        <View style={Style.container}>
            <FlatList
                data={arr}
                numColumns={Config.num_column}
                renderItem={ImageLoader}
                keyExtractor={item => item}
            />
        </View>
    )
}

export default Fashion;