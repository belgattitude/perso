import { HttpBadGateway } from '../server';

describe('test', () => {
  it('should work', () => {
    expect(new HttpBadGateway()).toBeInstanceOf(Error);
    expect(new HttpBadGateway()).toBeInstanceOf(HttpBadGateway);
    expect(new HttpBadGateway().statusCode).toStrictEqual(502);
    expect(new HttpBadGateway().message).toStrictEqual('Bad Gateway');
    expect(new HttpBadGateway().name).toStrictEqual('HttpBadGateway');
  });
});
