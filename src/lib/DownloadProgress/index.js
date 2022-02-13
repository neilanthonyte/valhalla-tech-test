import React from "react";
import {View, Text, Modal} from 'react-native';
import {showProgressHook, pBarPercentageHook} from './hooks';
import useStyle from './index.styles';

const DownloadProgress = () => {
    const Styles = useStyle();
    const {showProgress} = showProgressHook();
    const {percentage} = pBarPercentageHook();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showProgress}
            onRequestClose={() => {}}
        >
            <View style={Styles.container}>
                <View style={Styles.pBar}>
                    <View style={Styles.progress(percentage)} />
                </View>
                <Text style={Styles.pbar_label}>Downloading {`${percentage}%`}</Text>
            </View>
        </Modal>
    )
}

export default DownloadProgress;