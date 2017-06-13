const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message body', () => {
    const from = 'Jen';
    const text = 'Some message';
    const message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct message body', () => {
    const from = 'Jen';
    const latitude = 15;
    const longitude = 19;
    const locationMessage = generateLocationMessage(from, latitude, longitude);
    const url = 'https://www.google.com/maps?q=15,19';
    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({ from, url });
  });
});
