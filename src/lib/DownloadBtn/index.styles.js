import {StyleSheet} from 'react-native';

const useStyle = (width, height) => {
    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            height,
            width,
            backgroundColor: 'rgba(225,225,225,0.8)',
            position: 'absolute'
        },
        download_btn: {
            backgroundColor: '#393a3b',
            padding: 10,
            borderRadius: 5
        },
        download_label: {
            color: '#fff',
            fontWeight: 'bold'
        }
    });
}

export default useStyle;