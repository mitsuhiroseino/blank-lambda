import { handler } from './index';

describe('handler', () => {
  test('type', async () => {
    const BODY = JSON.stringify({ message: 'OK!' });
    const result = await handler({
      body: JSON.stringify(BODY),
      headers: undefined,
      multiValueHeaders: undefined,
      httpMethod: '',
      isBase64Encoded: false,
      path: '',
      pathParameters: undefined,
      queryStringParameters: undefined,
      multiValueQueryStringParameters: undefined,
      stageVariables: undefined,
      requestContext: undefined,
      resource: '',
    });

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify(BODY));
  });
});
