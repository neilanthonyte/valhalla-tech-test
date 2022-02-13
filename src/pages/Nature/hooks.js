import Config from '../../config.json';

// THIS CAN SET TO GLOBAL HOOKS SINCE IT IS REUSABLE BUT
// FOR THE SAKE OF STRUCTURE I WILL PUT THIS PER PAGE
export const fetchList = async ({queryKey}) => {
    const category = queryKey[1];
    try {
        return fetch(`${Config.host}/images?category=${category}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            return result;
        });
    } catch (error) {
        throw error;
    }
}