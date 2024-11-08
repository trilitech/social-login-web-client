import { Buffer } from 'buffer'

export function makeExpression(message: string) {
    const input = Buffer.from(message)

    const prefix = Buffer.from('0501', 'hex')
    const bytesBuffer = Buffer.from(message.length.toString(16).padStart(8, '0'), 'hex')
    const value = Buffer.concat([prefix, bytesBuffer, input], prefix.length + bytesBuffer.length + input.length)

    return value.toString('hex')
}