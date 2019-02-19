import * as actions from '../actions/index'

describe('actions', () => {
    it('On change', () => {
        const payload = "name"
        const expectedAction = {
        type: 'HANDLE_CHANGE',
        payload
    }

    expect(actions.HANDLE_CHANGE(payload)).toEqual(expectedAction)
})


})





