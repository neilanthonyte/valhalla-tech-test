import React from "react";
import {render} from '@testing-library/react-native';
import DownloadButton from '../index';

jest.mock('rn-fetch-blob', () => {
    return {
        __esModule: true,
        default: {
            fs: {
                unlink: jest.fn(),
            },
        },
    };
});

jest.mock('react-native-fs', () => {
    return {
        __esModule: true,
        ExternalStorageDirectoryPath: '',
        LibraryDirectoryPath: ''
    };
});

jest.mock('my-react-global-states', () => {
    return {
        __esModule: true,
        updateState: () => {}
    };
});

it('should render download button', () => {
    const {getAllByText} = render(<DownloadButton />);

    expect(getAllByText('Download').length).toBe(1);
})