import React from "react";

import {fetchList} from '../hooks';

beforeAll(() => jest.spyOn(global, 'fetch'))

it('should fetch', async () => {
    const props = {pageParam: 1, queryKey: ['fashion']};
    
    global.fetch.mockResolvedValue({
        ok: true,
        json: async () => ({
            success: true,
            data: [{"category":"fashion","name":"fashion_1","url":"https://valhall-tech-test.herokuapp.com/static/images/fashion/fashion_1.jpeg"},{"category":"fashion","name":"fashion_2","url":"https://valhall-tech-test.herokuapp.com/static/images/fashion/fashion_2.jpeg"},{"category":"fashion","name":"fashion_3","url":"https://valhall-tech-test.herokuapp.com/static/images/fashion/fashion_3.jpeg"}]
        })
    });

    const res = await fetchList(props);

    expect(res.data.length).toBe(3)
});