import { pipeline } from 'node:stream/promises'

import type { APIGatewayEvent, Context } from 'aws-lambda'
import { ChatCompletionChunk } from 'openai/resources'

import { logger } from 'src/lib/logger'
import { chatCompletion } from 'src/lib/openai'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: completion function`)

  const response = await chatCompletion(event.body)

  for await (const row of generateReportData()) {
    // use stringify() to convert the row into CSV format
    res.write(stringify([row]))
  }

  const res = {
    statusCode: 200,
    body: response,
  }

  return res
}
