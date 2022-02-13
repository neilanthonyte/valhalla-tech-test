import {StyleSheet, Dimensions} from 'react-native';

const useStyle = () => {
    const {width} = Dimensions.get('window');
    const PBAR_WIDTH = width * 0.75;
    const PBAR_HEIGHT = 30;

    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)'
        },
        pBar: {
            width: PBAR_WIDTH,
            height: PBAR_HEIGHT,
            borderWidth: 2,
            borderColor: '#fff',
            borderRadius: 5,
            overflow: 'hidden'
        },
        pbar_label: {
            color: '#fff',
            marginTop: 5
        },
        progress: (percentage = 0) => {
            const convertToPercent = percentage / 100;

            return {
                flex: 1,
                width: PBAR_WIDTH * convertToPercent,
                backgroundColor: '#7ffc03'
            }
        }
    });
}

export default useStyle;