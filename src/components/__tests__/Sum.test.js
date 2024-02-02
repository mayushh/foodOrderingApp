import {sum} from '../../Sum'

 test('sum of two number', () => { 
    expect(sum(3,8)).toBe(11);
    expect(sum(3,-3)).toBe(0)
  })