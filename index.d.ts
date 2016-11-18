import { Observable } from 'rx'
import { Readable } from 'stream'

declare module rxNode {
    export function fromStream(stream: Readable, finishEventName?: string, dataEventName?: string): Observable<T>
}

export = rxNode
