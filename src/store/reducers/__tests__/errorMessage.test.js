import reducer from '../errorMessage';

describe('errorMessage reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('handles SHOW_ERROR action', () => {
    const testMessage = 'Testing error message';
    const errorMessage = reducer({}, {
      type: 'SHOW_ERROR',
      errorMessage: testMessage
    });
    expect(errorMessage).toEqual(testMessage);
  });
});