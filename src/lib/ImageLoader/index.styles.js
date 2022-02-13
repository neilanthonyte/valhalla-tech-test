import {StyleSheet, Dimensions} from 'react-native';
import Config from '../../config.json';

const useStyle = (index) => {
    const {width} = Dimensions.get('window');
    const CONTAINER_HEIGHT = width / Config.num_column;
    const IMG_SIZE = CONTAINER_HEIGHT * 0.9;
    const isIndexEven = index % 2 === 0 ? true : false;

    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            height: CONTAINER_HEIGHT,
            width: CONTAINER_HEIGHT,
        },
        img: {
            height: IMG_SIZE,
            width: IMG_SIZE,
        }
    });
}

export default useStyle;