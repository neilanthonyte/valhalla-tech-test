import React from 'react';
import {View, FlatList, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import useStyle from './index.styles';

import ImageLoader from '../../lib/ImageLoader';
import Config from '../../config.json';
import {useInfiniteQuery} from 'react-query';
import {fetchList} from './hooks';
import _ from 'underscore';

const Architecture = () => {
    const Style = useStyle();
    const {isLoading, isError, data, error, isFetching, refetch, fetchNextPage} = useInfiniteQuery(
        ['architecture'], 
        fetchList, 
        {
            getNextPageParam: (lastPage, pages) => {
                let nextPage = _.flatten(pages).length / 3;

                return nextPage + 1;
            },
            staleTime: Infinity,
            cacheTime: Infinity
        }
    );

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

    const list = _.flatten(data.pages);

    return (
         <View style={Style.container}>
            <FlatList
                data={list}
                numColumns={Config.num_column}
                renderItem={(props) => <ImageLoader {...props} />}
                keyExtractor={item => item.name}
            />

            {
                isFetching ? (
                    <ActivityIndicator size="large" color="#325ca8" />
                ) : (
                    <TouchableOpacity style={Style.load_more_btn} onPress={fetchNextPage}>
                        <Text style={Style.load_more_label}>load more</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default Architecture;