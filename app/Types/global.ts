/**
 * Represents a type that can be awaited.
 * @template T The type of the value that can be awaited.
 */
export type Awaitable<T> = Promise<T> | T
