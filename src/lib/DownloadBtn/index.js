import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyle from './index.styles';
import {onDownload} from './hooks';

const DownloadBtn = ({width, height}) => {
    const Style = useStyle(width, height);

    return (
        <View style={Style.container}>
            <TouchableOpacity style={Style.download_btn} activeOpacity={1} onPress={onDownload}>
                <Text style={Style.download_label}>Download</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DownloadBtn;