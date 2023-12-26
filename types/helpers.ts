export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never
        ? ""
        : `.${Leaves<T[K]>}`}`
    }[keyof T]
  : never

export type Paths<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}`
    }[keyof T]
  : never

export type GetPathValueType<
  T,
  P extends Leaves<T>,
> = P extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? // @ts-ignore
      GetField<T[K], R>
    : never
  : P extends keyof T
    ? T[P]
    : never
