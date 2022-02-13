import React from "react";

import {fetchList} from '../hooks';

beforeAll(() => jest.spyOn(global, 'fetch'))

it('should fetch', async () => {
    const props = {pageParam: 1, queryKey: ['architecture']};
    
    global.fetch.mockResolvedValue({
        ok: true,
        json: async () => ({
            success: true,
            data: [{"category":"architecture","name":"architecture_1","url":"https://valhall-tech-test.herokuapp.com/static/images/architecture/architecture_1.jpeg"},{"category":"architecture","name":"architecture_2","url":"https://valhall-tech-test.herokuapp.com/static/images/architecture/architecture_2.jpeg"},{"category":"architecture","name":"architecture_3","url":"https://valhall-tech-test.herokuapp.com/static/images/architecture/architecture_3.jpeg"}]
        })
    });

    const res = await fetchList(props);

    expect(res.data.length).toBe(3)
});