import {StyleSheet} from 'react-native';

const useStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        no_data_container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        try_again_btn: {
            backgroundColor: '#2975ff',
            padding: 10,
            marginTop: 10,
            borderRadius: 10
        },
        try_again_label: {
            color: '#fff',
        }
    });
}

export default useStyle;