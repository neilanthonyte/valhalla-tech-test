import React from "react";
import {fetchList} from '../hooks';

beforeAll(() => jest.spyOn(global, 'fetch'))

it('should fetch', async () => {
    const props = {pageParam: 1, queryKey: ['nature']};
    
    global.fetch.mockResolvedValue({
        ok: true,
        json: async () => ({
            success: true,
            data: [{"category":"nature","name":"nature_4","url":"https://valhall-tech-test.herokuapp.com/static/images/nature/nature_4.jpeg"},{"category":"nature","name":"nature_5","url":"https://valhall-tech-test.herokuapp.com/static/images/nature/nature_5.jpeg"},{"category":"nature","name":"nature_6","url":"https://valhall-tech-test.herokuapp.com/static/images/nature/nature_6.jpeg"}]
        })
    });

    const res = await fetchList(props);

    expect(res.data.length).toBe(3)
});