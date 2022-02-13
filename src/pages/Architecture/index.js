import React from 'react';
import {View, FlatList, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import useStyle from './index.styles';

import ImageLoader from '../../lib/ImageLoader';
import Config from '../../config.json';
import {useQuery} from 'react-query';
import {fetchList} from './hooks';

const Architecture = () => {
    const Style = useStyle();
    const {isLoading, isError, data, error, refetch} = useQuery(['ARCHITECTURE_DATA', 'architecture'], fetchList)

    if(isError) {
        return (
            <View style={Style.no_data_container}>
                <Text>{error.message}</Text>
                <TouchableOpacity style={Style.try_again_btn} onPress={refetch}>
                    <Text style={Style.try_again_label}>Try Again</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if(isLoading) {
        return (
            <View style={Style.no_data_container}>
                <ActivityIndicator size="large" color="#325ca8" />
            </View>
        )
    }

    return (
         <View style={Style.container}>
            <FlatList
                data={data}
                numColumns={Config.num_column}
                renderItem={ImageLoader}
                keyExtractor={item => item.name}
            />
        </View>
    )
}

export default Architecture;