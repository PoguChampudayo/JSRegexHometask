import Validator from '../src';

const userNames = [
  ['LeroyJenkins', true],
  ['Leroy Jenkins', false],
  ['Leroy-Jenkins', true],
  ['Leroy_Jenkins', true],
  ['Leroy*Jenkins', false],
  ['Leroy999Jenkins', false],
  ['LeroyJenkins99', false],
  ['Leroy50Jenkins', true],
  ['-LeroyJenkins', false],
  ['Leroy&Jenkins', false],
];
test.each(userNames)(
  ('Valifdation of user name %s returns %s'),
  (userName, result) => {
    const user = new Validator(userName);
    expect(user.validateUsername()).toBe(result);
  },
);
