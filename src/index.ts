import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
}
