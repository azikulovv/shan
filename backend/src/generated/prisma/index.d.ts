/**
 * Client
 **/

import * as runtime from './runtime/client.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model Restaurant
 *
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Hall
 *
 */
export type Hall = $Result.DefaultSelection<Prisma.$HallPayload>
/**
 * Model Client
 *
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Banquet
 *
 */
export type Banquet = $Result.DefaultSelection<Prisma.$BanquetPayload>
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model SubscriptionPlan
 *
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model SubscriptionPayment
 *
 */
export type SubscriptionPayment = $Result.DefaultSelection<Prisma.$SubscriptionPaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
    OWNER: 'OWNER'
    ADMIN: 'ADMIN'
  }

  export type UserRole = (typeof UserRole)[keyof typeof UserRole]

  export const BanquetStatus: {
    NEW: 'NEW'
    IN_PROGRESS: 'IN_PROGRESS'
    WAITING_PREPAYMENT: 'WAITING_PREPAYMENT'
    CONFIRMED: 'CONFIRMED'
    COMPLETED: 'COMPLETED'
    CANCELLED: 'CANCELLED'
  }

  export type BanquetStatus = (typeof BanquetStatus)[keyof typeof BanquetStatus]

  export const PaymentStatus: {
    UNPAID: 'UNPAID'
    PARTIALLY_PAID: 'PARTIALLY_PAID'
    PAID: 'PAID'
  }

  export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

  export const SubscriptionStatus: {
    TRIAL: 'TRIAL'
    ACTIVE: 'ACTIVE'
    PAST_DUE: 'PAST_DUE'
    CANCELLED: 'CANCELLED'
    EXPIRED: 'EXPIRED'
  }

  export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]
}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BanquetStatus = $Enums.BanquetStatus

export const BanquetStatus: typeof $Enums.BanquetStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.BACKEND_DATABASE_URL })
 * })
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.BACKEND_DATABASE_URL })
   * })
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    },
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.hall`: Exposes CRUD operations for the **Hall** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Halls
   * const halls = await prisma.hall.findMany()
   * ```
   */
  get hall(): Prisma.HallDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.banquet`: Exposes CRUD operations for the **Banquet** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Banquets
   * const banquets = await prisma.banquet.findMany()
   * ```
   */
  get banquet(): Prisma.BanquetDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SubscriptionPlans
   * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
   * ```
   */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.subscriptionPayment`: Exposes CRUD operations for the **SubscriptionPayment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SubscriptionPayments
   * const subscriptionPayments = await prisma.subscriptionPayment.findMany()
   * ```
   */
  get subscriptionPayment(): Prisma.SubscriptionPaymentDelegate<ExtArgs, ClientOptions>
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    Restaurant: 'Restaurant'
    User: 'User'
    Hall: 'Hall'
    Client: 'Client'
    Banquet: 'Banquet'
    Payment: 'Payment'
    SubscriptionPlan: 'SubscriptionPlan'
    SubscriptionPayment: 'SubscriptionPayment'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps:
        | 'restaurant'
        | 'user'
        | 'hall'
        | 'client'
        | 'banquet'
        | 'payment'
        | 'subscriptionPlan'
        | 'subscriptionPayment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Hall: {
        payload: Prisma.$HallPayload<ExtArgs>
        fields: Prisma.HallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          findFirst: {
            args: Prisma.HallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          findMany: {
            args: Prisma.HallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>[]
          }
          create: {
            args: Prisma.HallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          createMany: {
            args: Prisma.HallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>[]
          }
          delete: {
            args: Prisma.HallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          update: {
            args: Prisma.HallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          deleteMany: {
            args: Prisma.HallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>[]
          }
          upsert: {
            args: Prisma.HallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          aggregate: {
            args: Prisma.HallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHall>
          }
          groupBy: {
            args: Prisma.HallGroupByArgs<ExtArgs>
            result: $Utils.Optional<HallGroupByOutputType>[]
          }
          count: {
            args: Prisma.HallCountArgs<ExtArgs>
            result: $Utils.Optional<HallCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Banquet: {
        payload: Prisma.$BanquetPayload<ExtArgs>
        fields: Prisma.BanquetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BanquetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BanquetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>
          }
          findFirst: {
            args: Prisma.BanquetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BanquetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>
          }
          findMany: {
            args: Prisma.BanquetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>[]
          }
          create: {
            args: Prisma.BanquetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>
          }
          createMany: {
            args: Prisma.BanquetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BanquetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>[]
          }
          delete: {
            args: Prisma.BanquetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>
          }
          update: {
            args: Prisma.BanquetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>
          }
          deleteMany: {
            args: Prisma.BanquetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BanquetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BanquetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>[]
          }
          upsert: {
            args: Prisma.BanquetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BanquetPayload>
          }
          aggregate: {
            args: Prisma.BanquetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanquet>
          }
          groupBy: {
            args: Prisma.BanquetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BanquetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BanquetCountArgs<ExtArgs>
            result: $Utils.Optional<BanquetCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPayment: {
        payload: Prisma.$SubscriptionPaymentPayload<ExtArgs>
        fields: Prisma.SubscriptionPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>
          }
          update: {
            args: Prisma.SubscriptionPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPayment>
          }
          groupBy: {
            args: Prisma.SubscriptionPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    restaurant?: RestaurantOmit
    user?: UserOmit
    hall?: HallOmit
    client?: ClientOmit
    banquet?: BanquetOmit
    payment?: PaymentOmit
    subscriptionPlan?: SubscriptionPlanOmit
    subscriptionPayment?: SubscriptionPaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never

  export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    users: number
    halls: number
    clients: number
    banquets: number
    payments: number
  }

  export type RestaurantCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | RestaurantCountOutputTypeCountUsersArgs
    halls?: boolean | RestaurantCountOutputTypeCountHallsArgs
    clients?: boolean | RestaurantCountOutputTypeCountClientsArgs
    banquets?: boolean | RestaurantCountOutputTypeCountBanquetsArgs
    payments?: boolean | RestaurantCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountHallsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: HallWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountClientsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClientWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountBanquetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BanquetWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionPaymentWhereInput
  }

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    banquetsCreated: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    banquetsCreated?: boolean | UserCountOutputTypeCountBanquetsCreatedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBanquetsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BanquetWhereInput
  }

  /**
   * Count Type HallCountOutputType
   */

  export type HallCountOutputType = {
    banquets: number
  }

  export type HallCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    banquets?: boolean | HallCountOutputTypeCountBanquetsArgs
  }

  // Custom InputTypes
  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the HallCountOutputType
     */
    select?: HallCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeCountBanquetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BanquetWhereInput
  }

  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    banquets: number
  }

  export type ClientCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    banquets?: boolean | ClientCountOutputTypeCountBanquetsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBanquetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BanquetWhereInput
  }

  /**
   * Count Type BanquetCountOutputType
   */

  export type BanquetCountOutputType = {
    payments: number
  }

  export type BanquetCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payments?: boolean | BanquetCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BanquetCountOutputType without action
   */
  export type BanquetCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BanquetCountOutputType
     */
    select?: BanquetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BanquetCountOutputType without action
   */
  export type BanquetCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput
  }

  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    payments: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payments?: boolean | SubscriptionPlanCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionPaymentWhereInput
  }

  /**
   * Models
   */

  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    trialEndsAt: Date | null
    subscriptionEndsAt: Date | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    trialEndsAt: Date | null
    subscriptionEndsAt: Date | null
    isBlocked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    subscriptionStatus: number
    trialEndsAt: number
    subscriptionEndsAt: number
    isBlocked: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    subscriptionEndsAt?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    subscriptionEndsAt?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    subscriptionEndsAt?: true
    isBlocked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Restaurants
     **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }

  export type RestaurantGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    address: string | null
    subscriptionStatus: $Enums.SubscriptionStatus
    trialEndsAt: Date | null
    subscriptionEndsAt: Date | null
    isBlocked: boolean
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RestaurantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
          : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
      }
    >
  >

  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        phone?: boolean
        address?: boolean
        subscriptionStatus?: boolean
        trialEndsAt?: boolean
        subscriptionEndsAt?: boolean
        isBlocked?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        users?: boolean | Restaurant$usersArgs<ExtArgs>
        halls?: boolean | Restaurant$hallsArgs<ExtArgs>
        clients?: boolean | Restaurant$clientsArgs<ExtArgs>
        banquets?: boolean | Restaurant$banquetsArgs<ExtArgs>
        payments?: boolean | Restaurant$paymentsArgs<ExtArgs>
        _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['restaurant']
    >

  export type RestaurantSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      phone?: boolean
      address?: boolean
      subscriptionStatus?: boolean
      trialEndsAt?: boolean
      subscriptionEndsAt?: boolean
      isBlocked?: boolean
      createdAt?: boolean
      updatedAt?: boolean
    },
    ExtArgs['result']['restaurant']
  >

  export type RestaurantSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      phone?: boolean
      address?: boolean
      subscriptionStatus?: boolean
      trialEndsAt?: boolean
      subscriptionEndsAt?: boolean
      isBlocked?: boolean
      createdAt?: boolean
      updatedAt?: boolean
    },
    ExtArgs['result']['restaurant']
  >

  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    subscriptionEndsAt?: boolean
    isBlocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'name'
      | 'phone'
      | 'address'
      | 'subscriptionStatus'
      | 'trialEndsAt'
      | 'subscriptionEndsAt'
      | 'isBlocked'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['restaurant']
    >
  export type RestaurantInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Restaurant$usersArgs<ExtArgs>
    halls?: boolean | Restaurant$hallsArgs<ExtArgs>
    clients?: boolean | Restaurant$clientsArgs<ExtArgs>
    banquets?: boolean | Restaurant$banquetsArgs<ExtArgs>
    payments?: boolean | Restaurant$paymentsArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type RestaurantIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $RestaurantPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Restaurant'
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      halls: Prisma.$HallPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      banquets: Prisma.$BanquetPayload<ExtArgs>[]
      payments: Prisma.$SubscriptionPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        phone: string | null
        address: string | null
        subscriptionStatus: $Enums.SubscriptionStatus
        trialEndsAt: Date | null
        subscriptionEndsAt: Date | null
        isBlocked: boolean
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['restaurant']
    >
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> =
    $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Restaurant']
      meta: { name: 'Restaurant' }
    }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(
      args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(
      args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     *
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RestaurantFindManyArgs>(
      args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     *
     */
    create<T extends RestaurantCreateArgs>(
      args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RestaurantCreateManyArgs>(
      args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     *
     */
    delete<T extends RestaurantDeleteArgs>(
      args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RestaurantUpdateArgs>(
      args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(
      args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RestaurantUpdateManyArgs>(
      args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(
      args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
     **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RestaurantAggregateArgs>(
      args: Subset<T, RestaurantAggregateArgs>,
    ): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Restaurant model
     */
    readonly fields: RestaurantFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    users<T extends Restaurant$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    halls<T extends Restaurant$hallsArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$hallsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    clients<T extends Restaurant$clientsArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$clientsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    banquets<T extends Restaurant$banquetsArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$banquetsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    payments<T extends Restaurant$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$paymentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubscriptionPaymentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<'Restaurant', 'String'>
    readonly name: FieldRef<'Restaurant', 'String'>
    readonly phone: FieldRef<'Restaurant', 'String'>
    readonly address: FieldRef<'Restaurant', 'String'>
    readonly subscriptionStatus: FieldRef<'Restaurant', 'SubscriptionStatus'>
    readonly trialEndsAt: FieldRef<'Restaurant', 'DateTime'>
    readonly subscriptionEndsAt: FieldRef<'Restaurant', 'DateTime'>
    readonly isBlocked: FieldRef<'Restaurant', 'Boolean'>
    readonly createdAt: FieldRef<'Restaurant', 'DateTime'>
    readonly updatedAt: FieldRef<'Restaurant', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant updateManyAndReturn
   */
  export type RestaurantUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.users
   */
  export type Restaurant$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Restaurant.halls
   */
  export type Restaurant$hallsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    where?: HallWhereInput
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    cursor?: HallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }

  /**
   * Restaurant.clients
   */
  export type Restaurant$clientsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Restaurant.banquets
   */
  export type Restaurant$banquetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    where?: BanquetWhereInput
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    cursor?: BanquetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BanquetScalarFieldEnum | BanquetScalarFieldEnum[]
  }

  /**
   * Restaurant.payments
   */
  export type Restaurant$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    where?: SubscriptionPaymentWhereInput
    orderBy?:
      | SubscriptionPaymentOrderByWithRelationInput
      | SubscriptionPaymentOrderByWithRelationInput[]
    cursor?: SubscriptionPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionPaymentScalarFieldEnum | SubscriptionPaymentScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    passwordHash: number
    role: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
      by: UserScalarFieldEnum[] | UserScalarFieldEnum
      having?: UserScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: UserCountAggregateInputType | true
      _min?: UserMinAggregateInputType
      _max?: UserMaxAggregateInputType
    }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    passwordHash: string
    role: $Enums.UserRole
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        email?: boolean
        phone?: boolean
        passwordHash?: boolean
        role?: boolean
        restaurantId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
        banquetsCreated?: boolean | User$banquetsCreatedArgs<ExtArgs>
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['user']
    >

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      role?: boolean
      restaurantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      role?: boolean
      restaurantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'name'
      | 'email'
      | 'phone'
      | 'passwordHash'
      | 'role'
      | 'restaurantId'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['user']
    >
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    banquetsCreated?: boolean | User$banquetsCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User'
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      banquetsCreated: Prisma.$BanquetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        email: string
        phone: string | null
        passwordHash: string
        role: $Enums.UserRole
        restaurantId: string
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    banquetsCreated<T extends User$banquetsCreatedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$banquetsCreatedArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>
    readonly name: FieldRef<'User', 'String'>
    readonly email: FieldRef<'User', 'String'>
    readonly phone: FieldRef<'User', 'String'>
    readonly passwordHash: FieldRef<'User', 'String'>
    readonly role: FieldRef<'User', 'UserRole'>
    readonly restaurantId: FieldRef<'User', 'String'>
    readonly createdAt: FieldRef<'User', 'DateTime'>
    readonly updatedAt: FieldRef<'User', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Users.
       */
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.banquetsCreated
   */
  export type User$banquetsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    where?: BanquetWhereInput
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    cursor?: BanquetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BanquetScalarFieldEnum | BanquetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null
    }

  /**
   * Model Hall
   */

  export type AggregateHall = {
    _count: HallCountAggregateOutputType | null
    _avg: HallAvgAggregateOutputType | null
    _sum: HallSumAggregateOutputType | null
    _min: HallMinAggregateOutputType | null
    _max: HallMaxAggregateOutputType | null
  }

  export type HallAvgAggregateOutputType = {
    capacity: number | null
  }

  export type HallSumAggregateOutputType = {
    capacity: number | null
  }

  export type HallMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    description: string | null
    isActive: boolean | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HallMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    description: string | null
    isActive: boolean | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HallCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    description: number
    isActive: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type HallAvgAggregateInputType = {
    capacity?: true
  }

  export type HallSumAggregateInputType = {
    capacity?: true
  }

  export type HallMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    description?: true
    isActive?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HallMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    description?: true
    isActive?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HallCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    description?: true
    isActive?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HallAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Hall to aggregate.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Halls
     **/
    _count?: true | HallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: HallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: HallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HallMaxAggregateInputType
  }

  export type GetHallAggregateType<T extends HallAggregateArgs> = {
    [P in keyof T & keyof AggregateHall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHall[P]>
      : GetScalarType<T[P], AggregateHall[P]>
  }

  export type HallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: HallWhereInput
      orderBy?: HallOrderByWithAggregationInput | HallOrderByWithAggregationInput[]
      by: HallScalarFieldEnum[] | HallScalarFieldEnum
      having?: HallScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: HallCountAggregateInputType | true
      _avg?: HallAvgAggregateInputType
      _sum?: HallSumAggregateInputType
      _min?: HallMinAggregateInputType
      _max?: HallMaxAggregateInputType
    }

  export type HallGroupByOutputType = {
    id: string
    name: string
    capacity: number
    description: string | null
    isActive: boolean
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: HallCountAggregateOutputType | null
    _avg: HallAvgAggregateOutputType | null
    _sum: HallSumAggregateOutputType | null
    _min: HallMinAggregateOutputType | null
    _max: HallMaxAggregateOutputType | null
  }

  type GetHallGroupByPayload<T extends HallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HallGroupByOutputType, T['by']> & {
        [P in keyof T & keyof HallGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HallGroupByOutputType[P]>
          : GetScalarType<T[P], HallGroupByOutputType[P]>
      }
    >
  >

  export type HallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        capacity?: boolean
        description?: boolean
        isActive?: boolean
        restaurantId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
        banquets?: boolean | Hall$banquetsArgs<ExtArgs>
        _count?: boolean | HallCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['hall']
    >

  export type HallSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      capacity?: boolean
      description?: boolean
      isActive?: boolean
      restaurantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['hall']
  >

  export type HallSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      capacity?: boolean
      description?: boolean
      isActive?: boolean
      restaurantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['hall']
  >

  export type HallSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    description?: boolean
    isActive?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'name'
      | 'capacity'
      | 'description'
      | 'isActive'
      | 'restaurantId'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['hall']
    >
  export type HallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    banquets?: boolean | Hall$banquetsArgs<ExtArgs>
    _count?: boolean | HallCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HallIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type HallIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $HallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Hall'
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      banquets: Prisma.$BanquetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        capacity: number
        description: string | null
        isActive: boolean
        restaurantId: string
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['hall']
    >
    composites: {}
  }

  type HallGetPayload<S extends boolean | null | undefined | HallDefaultArgs> = $Result.GetResult<
    Prisma.$HallPayload,
    S
  >

  type HallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    HallFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: HallCountAggregateInputType | true
  }

  export interface HallDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hall']; meta: { name: 'Hall' } }
    /**
     * Find zero or one Hall that matches the filter.
     * @param {HallFindUniqueArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HallFindUniqueArgs>(
      args: SelectSubset<T, HallFindUniqueArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Hall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HallFindUniqueOrThrowArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HallFindUniqueOrThrowArgs>(
      args: SelectSubset<T, HallFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Hall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindFirstArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HallFindFirstArgs>(
      args?: SelectSubset<T, HallFindFirstArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Hall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindFirstOrThrowArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HallFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HallFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Halls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Halls
     * const halls = await prisma.hall.findMany()
     *
     * // Get first 10 Halls
     * const halls = await prisma.hall.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hallWithIdOnly = await prisma.hall.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HallFindManyArgs>(
      args?: SelectSubset<T, HallFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Hall.
     * @param {HallCreateArgs} args - Arguments to create a Hall.
     * @example
     * // Create one Hall
     * const Hall = await prisma.hall.create({
     *   data: {
     *     // ... data to create a Hall
     *   }
     * })
     *
     */
    create<T extends HallCreateArgs>(
      args: SelectSubset<T, HallCreateArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Halls.
     * @param {HallCreateManyArgs} args - Arguments to create many Halls.
     * @example
     * // Create many Halls
     * const hall = await prisma.hall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HallCreateManyArgs>(
      args?: SelectSubset<T, HallCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Halls and returns the data saved in the database.
     * @param {HallCreateManyAndReturnArgs} args - Arguments to create many Halls.
     * @example
     * // Create many Halls
     * const hall = await prisma.hall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Halls and only return the `id`
     * const hallWithIdOnly = await prisma.hall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HallCreateManyAndReturnArgs>(
      args?: SelectSubset<T, HallCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Delete a Hall.
     * @param {HallDeleteArgs} args - Arguments to delete one Hall.
     * @example
     * // Delete one Hall
     * const Hall = await prisma.hall.delete({
     *   where: {
     *     // ... filter to delete one Hall
     *   }
     * })
     *
     */
    delete<T extends HallDeleteArgs>(
      args: SelectSubset<T, HallDeleteArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Hall.
     * @param {HallUpdateArgs} args - Arguments to update one Hall.
     * @example
     * // Update one Hall
     * const hall = await prisma.hall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HallUpdateArgs>(
      args: SelectSubset<T, HallUpdateArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Halls.
     * @param {HallDeleteManyArgs} args - Arguments to filter Halls to delete.
     * @example
     * // Delete a few Halls
     * const { count } = await prisma.hall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HallDeleteManyArgs>(
      args?: SelectSubset<T, HallDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Halls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Halls
     * const hall = await prisma.hall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HallUpdateManyArgs>(
      args: SelectSubset<T, HallUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Halls and returns the data updated in the database.
     * @param {HallUpdateManyAndReturnArgs} args - Arguments to update many Halls.
     * @example
     * // Update many Halls
     * const hall = await prisma.hall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Halls and only return the `id`
     * const hallWithIdOnly = await prisma.hall.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends HallUpdateManyAndReturnArgs>(
      args: SelectSubset<T, HallUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Create or update one Hall.
     * @param {HallUpsertArgs} args - Arguments to update or create a Hall.
     * @example
     * // Update or create a Hall
     * const hall = await prisma.hall.upsert({
     *   create: {
     *     // ... data to create a Hall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hall we want to update
     *   }
     * })
     */
    upsert<T extends HallUpsertArgs>(
      args: SelectSubset<T, HallUpsertArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Halls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallCountArgs} args - Arguments to filter Halls to count.
     * @example
     * // Count the number of Halls
     * const count = await prisma.hall.count({
     *   where: {
     *     // ... the filter for the Halls we want to count
     *   }
     * })
     **/
    count<T extends HallCountArgs>(
      args?: Subset<T, HallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HallAggregateArgs>(
      args: Subset<T, HallAggregateArgs>,
    ): Prisma.PrismaPromise<GetHallAggregateType<T>>

    /**
     * Group by Hall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends HallGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HallGroupByArgs['orderBy'] }
        : { orderBy?: HallGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, HallGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Hall model
     */
    readonly fields: HallFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HallClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    banquets<T extends Hall$banquetsArgs<ExtArgs> = {}>(
      args?: Subset<T, Hall$banquetsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Hall model
   */
  interface HallFieldRefs {
    readonly id: FieldRef<'Hall', 'String'>
    readonly name: FieldRef<'Hall', 'String'>
    readonly capacity: FieldRef<'Hall', 'Int'>
    readonly description: FieldRef<'Hall', 'String'>
    readonly isActive: FieldRef<'Hall', 'Boolean'>
    readonly restaurantId: FieldRef<'Hall', 'String'>
    readonly createdAt: FieldRef<'Hall', 'DateTime'>
    readonly updatedAt: FieldRef<'Hall', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Hall findUnique
   */
  export type HallFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall findUniqueOrThrow
   */
  export type HallFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall findFirst
   */
  export type HallFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Halls.
     */
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }

  /**
   * Hall findFirstOrThrow
   */
  export type HallFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Halls.
     */
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }

  /**
   * Hall findMany
   */
  export type HallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Hall
       */
      select?: HallSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Hall
       */
      omit?: HallOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: HallInclude<ExtArgs> | null
      /**
       * Filter, which Halls to fetch.
       */
      where?: HallWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Halls to fetch.
       */
      orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Halls.
       */
      cursor?: HallWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Halls from the position of the cursor.
       */
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Halls.
       */
      skip?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Halls.
       */
      distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
    }

  /**
   * Hall create
   */
  export type HallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The data needed to create a Hall.
     */
    data: XOR<HallCreateInput, HallUncheckedCreateInput>
  }

  /**
   * Hall createMany
   */
  export type HallCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Halls.
     */
    data: HallCreateManyInput | HallCreateManyInput[]
  }

  /**
   * Hall createManyAndReturn
   */
  export type HallCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * The data used to create many Halls.
     */
    data: HallCreateManyInput | HallCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hall update
   */
  export type HallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The data needed to update a Hall.
     */
    data: XOR<HallUpdateInput, HallUncheckedUpdateInput>
    /**
     * Choose, which Hall to update.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall updateMany
   */
  export type HallUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Halls.
     */
    data: XOR<HallUpdateManyMutationInput, HallUncheckedUpdateManyInput>
    /**
     * Filter which Halls to update
     */
    where?: HallWhereInput
    /**
     * Limit how many Halls to update.
     */
    limit?: number
  }

  /**
   * Hall updateManyAndReturn
   */
  export type HallUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * The data used to update Halls.
     */
    data: XOR<HallUpdateManyMutationInput, HallUncheckedUpdateManyInput>
    /**
     * Filter which Halls to update
     */
    where?: HallWhereInput
    /**
     * Limit how many Halls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hall upsert
   */
  export type HallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The filter to search for the Hall to update in case it exists.
     */
    where: HallWhereUniqueInput
    /**
     * In case the Hall found by the `where` argument doesn't exist, create a new Hall with this data.
     */
    create: XOR<HallCreateInput, HallUncheckedCreateInput>
    /**
     * In case the Hall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HallUpdateInput, HallUncheckedUpdateInput>
  }

  /**
   * Hall delete
   */
  export type HallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hall
     */
    omit?: HallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter which Hall to delete.
     */
    where: HallWhereUniqueInput
  }

  /**
   * Hall deleteMany
   */
  export type HallDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Halls to delete
     */
    where?: HallWhereInput
    /**
     * Limit how many Halls to delete.
     */
    limit?: number
  }

  /**
   * Hall.banquets
   */
  export type Hall$banquetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    where?: BanquetWhereInput
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    cursor?: BanquetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BanquetScalarFieldEnum | BanquetScalarFieldEnum[]
  }

  /**
   * Hall without action
   */
  export type HallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Hall
       */
      select?: HallSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Hall
       */
      omit?: HallOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: HallInclude<ExtArgs> | null
    }

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    comment: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    comment: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    comment: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    comment?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    comment?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    comment?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clients
     **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }

  export type ClientGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    phone: string
    comment: string | null
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ClientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
          : GetScalarType<T[P], ClientGroupByOutputType[P]>
      }
    >
  >

  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        phone?: boolean
        comment?: boolean
        restaurantId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
        banquets?: boolean | Client$banquetsArgs<ExtArgs>
        _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['client']
    >

  export type ClientSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      phone?: boolean
      comment?: boolean
      restaurantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['client']
  >

  export type ClientSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      phone?: boolean
      comment?: boolean
      restaurantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['client']
  >

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    comment?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'name' | 'phone' | 'comment' | 'restaurantId' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['client']
    >
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    banquets?: boolean | Client$banquetsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Client'
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      banquets: Prisma.$BanquetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        phone: string
        comment: string | null
        restaurantId: string
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['client']
    >
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> =
    $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ClientFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ClientCountAggregateInputType | true
  }

  export interface ClientDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client']; meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     *
     */
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     *
     */
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
     **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ClientAggregateArgs>(
      args: Subset<T, ClientAggregateArgs>,
    ): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Client model
     */
    readonly fields: ClientFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    banquets<T extends Client$banquetsArgs<ExtArgs> = {}>(
      args?: Subset<T, Client$banquetsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<'Client', 'String'>
    readonly name: FieldRef<'Client', 'String'>
    readonly phone: FieldRef<'Client', 'String'>
    readonly comment: FieldRef<'Client', 'String'>
    readonly restaurantId: FieldRef<'Client', 'String'>
    readonly createdAt: FieldRef<'Client', 'DateTime'>
    readonly updatedAt: FieldRef<'Client', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Client
       */
      select?: ClientSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Client
       */
      omit?: ClientOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ClientInclude<ExtArgs> | null
      /**
       * The data needed to create a Client.
       */
      data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Client
       */
      select?: ClientSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Client
       */
      omit?: ClientOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ClientInclude<ExtArgs> | null
      /**
       * The data needed to update a Client.
       */
      data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
      /**
       * Choose, which Client to update.
       */
      where: ClientWhereUniqueInput
    }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Client
       */
      select?: ClientSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Client
       */
      omit?: ClientOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ClientInclude<ExtArgs> | null
      /**
       * The filter to search for the Client to update in case it exists.
       */
      where: ClientWhereUniqueInput
      /**
       * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
       */
      create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
      /**
       * In case the Client was found with the provided `where` argument, update it with this data.
       */
      update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Client
       */
      select?: ClientSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Client
       */
      omit?: ClientOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: ClientInclude<ExtArgs> | null
      /**
       * Filter which Client to delete.
       */
      where: ClientWhereUniqueInput
    }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.banquets
   */
  export type Client$banquetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    where?: BanquetWhereInput
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    cursor?: BanquetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BanquetScalarFieldEnum | BanquetScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }

  /**
   * Model Banquet
   */

  export type AggregateBanquet = {
    _count: BanquetCountAggregateOutputType | null
    _avg: BanquetAvgAggregateOutputType | null
    _sum: BanquetSumAggregateOutputType | null
    _min: BanquetMinAggregateOutputType | null
    _max: BanquetMaxAggregateOutputType | null
  }

  export type BanquetAvgAggregateOutputType = {
    guestCount: number | null
    totalAmount: number | null
    prepaymentAmount: number | null
    remainingAmount: number | null
  }

  export type BanquetSumAggregateOutputType = {
    guestCount: number | null
    totalAmount: number | null
    prepaymentAmount: number | null
    remainingAmount: number | null
  }

  export type BanquetMinAggregateOutputType = {
    id: string | null
    title: string | null
    eventType: string | null
    guestCount: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.BanquetStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    totalAmount: number | null
    prepaymentAmount: number | null
    remainingAmount: number | null
    comment: string | null
    restaurantId: string | null
    clientId: string | null
    hallId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BanquetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    eventType: string | null
    guestCount: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.BanquetStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    totalAmount: number | null
    prepaymentAmount: number | null
    remainingAmount: number | null
    comment: string | null
    restaurantId: string | null
    clientId: string | null
    hallId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BanquetCountAggregateOutputType = {
    id: number
    title: number
    eventType: number
    guestCount: number
    date: number
    startTime: number
    endTime: number
    status: number
    paymentStatus: number
    totalAmount: number
    prepaymentAmount: number
    remainingAmount: number
    comment: number
    restaurantId: number
    clientId: number
    hallId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type BanquetAvgAggregateInputType = {
    guestCount?: true
    totalAmount?: true
    prepaymentAmount?: true
    remainingAmount?: true
  }

  export type BanquetSumAggregateInputType = {
    guestCount?: true
    totalAmount?: true
    prepaymentAmount?: true
    remainingAmount?: true
  }

  export type BanquetMinAggregateInputType = {
    id?: true
    title?: true
    eventType?: true
    guestCount?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    paymentStatus?: true
    totalAmount?: true
    prepaymentAmount?: true
    remainingAmount?: true
    comment?: true
    restaurantId?: true
    clientId?: true
    hallId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BanquetMaxAggregateInputType = {
    id?: true
    title?: true
    eventType?: true
    guestCount?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    paymentStatus?: true
    totalAmount?: true
    prepaymentAmount?: true
    remainingAmount?: true
    comment?: true
    restaurantId?: true
    clientId?: true
    hallId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BanquetCountAggregateInputType = {
    id?: true
    title?: true
    eventType?: true
    guestCount?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    paymentStatus?: true
    totalAmount?: true
    prepaymentAmount?: true
    remainingAmount?: true
    comment?: true
    restaurantId?: true
    clientId?: true
    hallId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BanquetAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Banquet to aggregate.
     */
    where?: BanquetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banquets to fetch.
     */
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BanquetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Banquets
     **/
    _count?: true | BanquetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BanquetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BanquetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BanquetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BanquetMaxAggregateInputType
  }

  export type GetBanquetAggregateType<T extends BanquetAggregateArgs> = {
    [P in keyof T & keyof AggregateBanquet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanquet[P]>
      : GetScalarType<T[P], AggregateBanquet[P]>
  }

  export type BanquetGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BanquetWhereInput
    orderBy?: BanquetOrderByWithAggregationInput | BanquetOrderByWithAggregationInput[]
    by: BanquetScalarFieldEnum[] | BanquetScalarFieldEnum
    having?: BanquetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BanquetCountAggregateInputType | true
    _avg?: BanquetAvgAggregateInputType
    _sum?: BanquetSumAggregateInputType
    _min?: BanquetMinAggregateInputType
    _max?: BanquetMaxAggregateInputType
  }

  export type BanquetGroupByOutputType = {
    id: string
    title: string | null
    eventType: string | null
    guestCount: number
    date: Date
    startTime: string | null
    endTime: string | null
    status: $Enums.BanquetStatus
    paymentStatus: $Enums.PaymentStatus
    totalAmount: number
    prepaymentAmount: number
    remainingAmount: number
    comment: string | null
    restaurantId: string
    clientId: string
    hallId: string | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: BanquetCountAggregateOutputType | null
    _avg: BanquetAvgAggregateOutputType | null
    _sum: BanquetSumAggregateOutputType | null
    _min: BanquetMinAggregateOutputType | null
    _max: BanquetMaxAggregateOutputType | null
  }

  type GetBanquetGroupByPayload<T extends BanquetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BanquetGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BanquetGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BanquetGroupByOutputType[P]>
          : GetScalarType<T[P], BanquetGroupByOutputType[P]>
      }
    >
  >

  export type BanquetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        title?: boolean
        eventType?: boolean
        guestCount?: boolean
        date?: boolean
        startTime?: boolean
        endTime?: boolean
        status?: boolean
        paymentStatus?: boolean
        totalAmount?: boolean
        prepaymentAmount?: boolean
        remainingAmount?: boolean
        comment?: boolean
        restaurantId?: boolean
        clientId?: boolean
        hallId?: boolean
        createdById?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
        client?: boolean | ClientDefaultArgs<ExtArgs>
        hall?: boolean | Banquet$hallArgs<ExtArgs>
        createdBy?: boolean | UserDefaultArgs<ExtArgs>
        payments?: boolean | Banquet$paymentsArgs<ExtArgs>
        _count?: boolean | BanquetCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['banquet']
    >

  export type BanquetSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      eventType?: boolean
      guestCount?: boolean
      date?: boolean
      startTime?: boolean
      endTime?: boolean
      status?: boolean
      paymentStatus?: boolean
      totalAmount?: boolean
      prepaymentAmount?: boolean
      remainingAmount?: boolean
      comment?: boolean
      restaurantId?: boolean
      clientId?: boolean
      hallId?: boolean
      createdById?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
      client?: boolean | ClientDefaultArgs<ExtArgs>
      hall?: boolean | Banquet$hallArgs<ExtArgs>
      createdBy?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['banquet']
  >

  export type BanquetSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      eventType?: boolean
      guestCount?: boolean
      date?: boolean
      startTime?: boolean
      endTime?: boolean
      status?: boolean
      paymentStatus?: boolean
      totalAmount?: boolean
      prepaymentAmount?: boolean
      remainingAmount?: boolean
      comment?: boolean
      restaurantId?: boolean
      clientId?: boolean
      hallId?: boolean
      createdById?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
      client?: boolean | ClientDefaultArgs<ExtArgs>
      hall?: boolean | Banquet$hallArgs<ExtArgs>
      createdBy?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['banquet']
  >

  export type BanquetSelectScalar = {
    id?: boolean
    title?: boolean
    eventType?: boolean
    guestCount?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    paymentStatus?: boolean
    totalAmount?: boolean
    prepaymentAmount?: boolean
    remainingAmount?: boolean
    comment?: boolean
    restaurantId?: boolean
    clientId?: boolean
    hallId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BanquetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'title'
      | 'eventType'
      | 'guestCount'
      | 'date'
      | 'startTime'
      | 'endTime'
      | 'status'
      | 'paymentStatus'
      | 'totalAmount'
      | 'prepaymentAmount'
      | 'remainingAmount'
      | 'comment'
      | 'restaurantId'
      | 'clientId'
      | 'hallId'
      | 'createdById'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['banquet']
    >
  export type BanquetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    hall?: boolean | Banquet$hallArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Banquet$paymentsArgs<ExtArgs>
    _count?: boolean | BanquetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BanquetIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    hall?: boolean | Banquet$hallArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BanquetIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    hall?: boolean | Banquet$hallArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BanquetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Banquet'
      objects: {
        restaurant: Prisma.$RestaurantPayload<ExtArgs>
        client: Prisma.$ClientPayload<ExtArgs>
        hall: Prisma.$HallPayload<ExtArgs> | null
        createdBy: Prisma.$UserPayload<ExtArgs>
        payments: Prisma.$PaymentPayload<ExtArgs>[]
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          title: string | null
          eventType: string | null
          guestCount: number
          date: Date
          startTime: string | null
          endTime: string | null
          status: $Enums.BanquetStatus
          paymentStatus: $Enums.PaymentStatus
          totalAmount: number
          prepaymentAmount: number
          remainingAmount: number
          comment: string | null
          restaurantId: string
          clientId: string
          hallId: string | null
          createdById: string
          createdAt: Date
          updatedAt: Date
        },
        ExtArgs['result']['banquet']
      >
      composites: {}
    }

  type BanquetGetPayload<S extends boolean | null | undefined | BanquetDefaultArgs> =
    $Result.GetResult<Prisma.$BanquetPayload, S>

  type BanquetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    BanquetFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BanquetCountAggregateInputType | true
  }

  export interface BanquetDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banquet']; meta: { name: 'Banquet' } }
    /**
     * Find zero or one Banquet that matches the filter.
     * @param {BanquetFindUniqueArgs} args - Arguments to find a Banquet
     * @example
     * // Get one Banquet
     * const banquet = await prisma.banquet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BanquetFindUniqueArgs>(
      args: SelectSubset<T, BanquetFindUniqueArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Banquet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BanquetFindUniqueOrThrowArgs} args - Arguments to find a Banquet
     * @example
     * // Get one Banquet
     * const banquet = await prisma.banquet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BanquetFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BanquetFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Banquet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanquetFindFirstArgs} args - Arguments to find a Banquet
     * @example
     * // Get one Banquet
     * const banquet = await prisma.banquet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BanquetFindFirstArgs>(
      args?: SelectSubset<T, BanquetFindFirstArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Banquet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanquetFindFirstOrThrowArgs} args - Arguments to find a Banquet
     * @example
     * // Get one Banquet
     * const banquet = await prisma.banquet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BanquetFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BanquetFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Banquets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanquetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banquets
     * const banquets = await prisma.banquet.findMany()
     *
     * // Get first 10 Banquets
     * const banquets = await prisma.banquet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const banquetWithIdOnly = await prisma.banquet.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BanquetFindManyArgs>(
      args?: SelectSubset<T, BanquetFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Banquet.
     * @param {BanquetCreateArgs} args - Arguments to create a Banquet.
     * @example
     * // Create one Banquet
     * const Banquet = await prisma.banquet.create({
     *   data: {
     *     // ... data to create a Banquet
     *   }
     * })
     *
     */
    create<T extends BanquetCreateArgs>(
      args: SelectSubset<T, BanquetCreateArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Banquets.
     * @param {BanquetCreateManyArgs} args - Arguments to create many Banquets.
     * @example
     * // Create many Banquets
     * const banquet = await prisma.banquet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BanquetCreateManyArgs>(
      args?: SelectSubset<T, BanquetCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banquets and returns the data saved in the database.
     * @param {BanquetCreateManyAndReturnArgs} args - Arguments to create many Banquets.
     * @example
     * // Create many Banquets
     * const banquet = await prisma.banquet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Banquets and only return the `id`
     * const banquetWithIdOnly = await prisma.banquet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BanquetCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BanquetCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BanquetPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Banquet.
     * @param {BanquetDeleteArgs} args - Arguments to delete one Banquet.
     * @example
     * // Delete one Banquet
     * const Banquet = await prisma.banquet.delete({
     *   where: {
     *     // ... filter to delete one Banquet
     *   }
     * })
     *
     */
    delete<T extends BanquetDeleteArgs>(
      args: SelectSubset<T, BanquetDeleteArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Banquet.
     * @param {BanquetUpdateArgs} args - Arguments to update one Banquet.
     * @example
     * // Update one Banquet
     * const banquet = await prisma.banquet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BanquetUpdateArgs>(
      args: SelectSubset<T, BanquetUpdateArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Banquets.
     * @param {BanquetDeleteManyArgs} args - Arguments to filter Banquets to delete.
     * @example
     * // Delete a few Banquets
     * const { count } = await prisma.banquet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BanquetDeleteManyArgs>(
      args?: SelectSubset<T, BanquetDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanquetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banquets
     * const banquet = await prisma.banquet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BanquetUpdateManyArgs>(
      args: SelectSubset<T, BanquetUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banquets and returns the data updated in the database.
     * @param {BanquetUpdateManyAndReturnArgs} args - Arguments to update many Banquets.
     * @example
     * // Update many Banquets
     * const banquet = await prisma.banquet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Banquets and only return the `id`
     * const banquetWithIdOnly = await prisma.banquet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BanquetUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BanquetUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BanquetPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Banquet.
     * @param {BanquetUpsertArgs} args - Arguments to update or create a Banquet.
     * @example
     * // Update or create a Banquet
     * const banquet = await prisma.banquet.upsert({
     *   create: {
     *     // ... data to create a Banquet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banquet we want to update
     *   }
     * })
     */
    upsert<T extends BanquetUpsertArgs>(
      args: SelectSubset<T, BanquetUpsertArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      $Result.GetResult<Prisma.$BanquetPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Banquets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanquetCountArgs} args - Arguments to filter Banquets to count.
     * @example
     * // Count the number of Banquets
     * const count = await prisma.banquet.count({
     *   where: {
     *     // ... the filter for the Banquets we want to count
     *   }
     * })
     **/
    count<T extends BanquetCountArgs>(
      args?: Subset<T, BanquetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BanquetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banquet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanquetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BanquetAggregateArgs>(
      args: Subset<T, BanquetAggregateArgs>,
    ): Prisma.PrismaPromise<GetBanquetAggregateType<T>>

    /**
     * Group by Banquet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanquetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BanquetGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BanquetGroupByArgs['orderBy'] }
        : { orderBy?: BanquetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BanquetGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBanquetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Banquet model
     */
    readonly fields: BanquetFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banquet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BanquetClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientDefaultArgs<ExtArgs>>,
    ): Prisma__ClientClient<
      | $Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    hall<T extends Banquet$hallArgs<ExtArgs> = {}>(
      args?: Subset<T, Banquet$hallArgs<ExtArgs>>,
    ): Prisma__HallClient<
      $Result.GetResult<
        Prisma.$HallPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    payments<T extends Banquet$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Banquet$paymentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Banquet model
   */
  interface BanquetFieldRefs {
    readonly id: FieldRef<'Banquet', 'String'>
    readonly title: FieldRef<'Banquet', 'String'>
    readonly eventType: FieldRef<'Banquet', 'String'>
    readonly guestCount: FieldRef<'Banquet', 'Int'>
    readonly date: FieldRef<'Banquet', 'DateTime'>
    readonly startTime: FieldRef<'Banquet', 'String'>
    readonly endTime: FieldRef<'Banquet', 'String'>
    readonly status: FieldRef<'Banquet', 'BanquetStatus'>
    readonly paymentStatus: FieldRef<'Banquet', 'PaymentStatus'>
    readonly totalAmount: FieldRef<'Banquet', 'Int'>
    readonly prepaymentAmount: FieldRef<'Banquet', 'Int'>
    readonly remainingAmount: FieldRef<'Banquet', 'Int'>
    readonly comment: FieldRef<'Banquet', 'String'>
    readonly restaurantId: FieldRef<'Banquet', 'String'>
    readonly clientId: FieldRef<'Banquet', 'String'>
    readonly hallId: FieldRef<'Banquet', 'String'>
    readonly createdById: FieldRef<'Banquet', 'String'>
    readonly createdAt: FieldRef<'Banquet', 'DateTime'>
    readonly updatedAt: FieldRef<'Banquet', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Banquet findUnique
   */
  export type BanquetFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * Filter, which Banquet to fetch.
     */
    where: BanquetWhereUniqueInput
  }

  /**
   * Banquet findUniqueOrThrow
   */
  export type BanquetFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * Filter, which Banquet to fetch.
     */
    where: BanquetWhereUniqueInput
  }

  /**
   * Banquet findFirst
   */
  export type BanquetFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * Filter, which Banquet to fetch.
     */
    where?: BanquetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banquets to fetch.
     */
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Banquets.
     */
    cursor?: BanquetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Banquets.
     */
    distinct?: BanquetScalarFieldEnum | BanquetScalarFieldEnum[]
  }

  /**
   * Banquet findFirstOrThrow
   */
  export type BanquetFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * Filter, which Banquet to fetch.
     */
    where?: BanquetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banquets to fetch.
     */
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Banquets.
     */
    cursor?: BanquetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Banquets.
     */
    distinct?: BanquetScalarFieldEnum | BanquetScalarFieldEnum[]
  }

  /**
   * Banquet findMany
   */
  export type BanquetFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * Filter, which Banquets to fetch.
     */
    where?: BanquetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banquets to fetch.
     */
    orderBy?: BanquetOrderByWithRelationInput | BanquetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Banquets.
     */
    cursor?: BanquetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banquets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banquets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Banquets.
     */
    distinct?: BanquetScalarFieldEnum | BanquetScalarFieldEnum[]
  }

  /**
   * Banquet create
   */
  export type BanquetCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * The data needed to create a Banquet.
     */
    data: XOR<BanquetCreateInput, BanquetUncheckedCreateInput>
  }

  /**
   * Banquet createMany
   */
  export type BanquetCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Banquets.
     */
    data: BanquetCreateManyInput | BanquetCreateManyInput[]
  }

  /**
   * Banquet createManyAndReturn
   */
  export type BanquetCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * The data used to create many Banquets.
     */
    data: BanquetCreateManyInput | BanquetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banquet update
   */
  export type BanquetUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * The data needed to update a Banquet.
     */
    data: XOR<BanquetUpdateInput, BanquetUncheckedUpdateInput>
    /**
     * Choose, which Banquet to update.
     */
    where: BanquetWhereUniqueInput
  }

  /**
   * Banquet updateMany
   */
  export type BanquetUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Banquets.
     */
    data: XOR<BanquetUpdateManyMutationInput, BanquetUncheckedUpdateManyInput>
    /**
     * Filter which Banquets to update
     */
    where?: BanquetWhereInput
    /**
     * Limit how many Banquets to update.
     */
    limit?: number
  }

  /**
   * Banquet updateManyAndReturn
   */
  export type BanquetUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * The data used to update Banquets.
     */
    data: XOR<BanquetUpdateManyMutationInput, BanquetUncheckedUpdateManyInput>
    /**
     * Filter which Banquets to update
     */
    where?: BanquetWhereInput
    /**
     * Limit how many Banquets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banquet upsert
   */
  export type BanquetUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * The filter to search for the Banquet to update in case it exists.
     */
    where: BanquetWhereUniqueInput
    /**
     * In case the Banquet found by the `where` argument doesn't exist, create a new Banquet with this data.
     */
    create: XOR<BanquetCreateInput, BanquetUncheckedCreateInput>
    /**
     * In case the Banquet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BanquetUpdateInput, BanquetUncheckedUpdateInput>
  }

  /**
   * Banquet delete
   */
  export type BanquetDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
    /**
     * Filter which Banquet to delete.
     */
    where: BanquetWhereUniqueInput
  }

  /**
   * Banquet deleteMany
   */
  export type BanquetDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Banquets to delete
     */
    where?: BanquetWhereInput
    /**
     * Limit how many Banquets to delete.
     */
    limit?: number
  }

  /**
   * Banquet.hall
   */
  export type Banquet$hallArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Hall
       */
      select?: HallSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Hall
       */
      omit?: HallOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: HallInclude<ExtArgs> | null
      where?: HallWhereInput
    }

  /**
   * Banquet.payments
   */
  export type Banquet$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Banquet without action
   */
  export type BanquetDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Banquet
     */
    select?: BanquetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet
     */
    omit?: BanquetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BanquetInclude<ExtArgs> | null
  }

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    method: string | null
    comment: string | null
    banquetId: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    method: string | null
    comment: string | null
    banquetId: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    method: number
    comment: number
    banquetId: number
    paidAt: number
    createdAt: number
    _all: number
  }

  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    comment?: true
    banquetId?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    comment?: true
    banquetId?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    comment?: true
    banquetId?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
     **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }

  export type PaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: number
    method: string | null
    comment: string | null
    banquetId: string
    paidAt: Date
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
          : GetScalarType<T[P], PaymentGroupByOutputType[P]>
      }
    >
  >

  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        amount?: boolean
        method?: boolean
        comment?: boolean
        banquetId?: boolean
        paidAt?: boolean
        createdAt?: boolean
        banquet?: boolean | BanquetDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['payment']
    >

  export type PaymentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      amount?: boolean
      method?: boolean
      comment?: boolean
      banquetId?: boolean
      paidAt?: boolean
      createdAt?: boolean
      banquet?: boolean | BanquetDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['payment']
  >

  export type PaymentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      amount?: boolean
      method?: boolean
      comment?: boolean
      banquetId?: boolean
      paidAt?: boolean
      createdAt?: boolean
      banquet?: boolean | BanquetDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['payment']
  >

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    method?: boolean
    comment?: boolean
    banquetId?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'amount' | 'method' | 'comment' | 'banquetId' | 'paidAt' | 'createdAt',
      ExtArgs['result']['payment']
    >
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banquet?: boolean | BanquetDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    banquet?: boolean | BanquetDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    banquet?: boolean | BanquetDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Payment'
      objects: {
        banquet: Prisma.$BanquetPayload<ExtArgs>
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          amount: number
          method: string | null
          comment: string | null
          banquetId: string
          paidAt: Date
          createdAt: Date
        },
        ExtArgs['result']['payment']
      >
      composites: {}
    }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> =
    $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    PaymentFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PaymentCountAggregateInputType | true
  }

  export interface PaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment']; meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     */
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     */
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    banquet<T extends BanquetDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BanquetDefaultArgs<ExtArgs>>,
    ): Prisma__BanquetClient<
      | $Result.GetResult<
          Prisma.$BanquetPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<'Payment', 'String'>
    readonly amount: FieldRef<'Payment', 'Int'>
    readonly method: FieldRef<'Payment', 'String'>
    readonly comment: FieldRef<'Payment', 'String'>
    readonly banquetId: FieldRef<'Payment', 'String'>
    readonly paidAt: FieldRef<'Payment', 'DateTime'>
    readonly createdAt: FieldRef<'Payment', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }

  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    currency: string | null
    period: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    currency: string | null
    period: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    currency: number
    period: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type SubscriptionPlanAvgAggregateInputType = {
    price?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    price?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    currency?: true
    period?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    currency?: true
    period?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    currency?: true
    period?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SubscriptionPlans
     **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }

  export type SubscriptionPlanGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionPlanWhereInput
    orderBy?:
      | SubscriptionPlanOrderByWithAggregationInput
      | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: string
    price: number
    currency: string
    period: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SubscriptionPlanGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >

  export type SubscriptionPlanSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      price?: boolean
      currency?: boolean
      period?: boolean
      isActive?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      payments?: boolean | SubscriptionPlan$paymentsArgs<ExtArgs>
      _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['subscriptionPlan']
  >

  export type SubscriptionPlanSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      price?: boolean
      currency?: boolean
      period?: boolean
      isActive?: boolean
      createdAt?: boolean
      updatedAt?: boolean
    },
    ExtArgs['result']['subscriptionPlan']
  >

  export type SubscriptionPlanSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      price?: boolean
      currency?: boolean
      period?: boolean
      isActive?: boolean
      createdAt?: boolean
      updatedAt?: boolean
    },
    ExtArgs['result']['subscriptionPlan']
  >

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    currency?: boolean
    period?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPlanOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'price' | 'currency' | 'period' | 'isActive' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['subscriptionPlan']
  >
  export type SubscriptionPlanInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payments?: boolean | SubscriptionPlan$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type SubscriptionPlanIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $SubscriptionPlanPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'SubscriptionPlan'
    objects: {
      payments: Prisma.$SubscriptionPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        price: number
        currency: string
        period: string
        isActive: boolean
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['subscriptionPlan']
    >
    composites: {}
  }

  type SubscriptionPlanGetPayload<
    S extends boolean | null | undefined | SubscriptionPlanDefaultArgs,
  > = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionPlanCountAggregateInputType | true
  }

  export interface SubscriptionPlanDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan']
      meta: { name: 'SubscriptionPlan' }
    }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(
      args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(
      args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     *
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     *
     */
    create<T extends SubscriptionPlanCreateArgs>(
      args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     *
     */
    delete<T extends SubscriptionPlanDeleteArgs>(
      args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriptionPlanUpdateArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(
      args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionPlanAggregateArgs>(
      args: Subset<T, SubscriptionPlanAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionPlanGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the SubscriptionPlan model
     */
    readonly fields: SubscriptionPlanFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    payments<T extends SubscriptionPlan$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, SubscriptionPlan$paymentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubscriptionPaymentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<'SubscriptionPlan', 'String'>
    readonly name: FieldRef<'SubscriptionPlan', 'String'>
    readonly price: FieldRef<'SubscriptionPlan', 'Int'>
    readonly currency: FieldRef<'SubscriptionPlan', 'String'>
    readonly period: FieldRef<'SubscriptionPlan', 'String'>
    readonly isActive: FieldRef<'SubscriptionPlan', 'Boolean'>
    readonly createdAt: FieldRef<'SubscriptionPlan', 'DateTime'>
    readonly updatedAt: FieldRef<'SubscriptionPlan', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.payments
   */
  export type SubscriptionPlan$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    where?: SubscriptionPaymentWhereInput
    orderBy?:
      | SubscriptionPaymentOrderByWithRelationInput
      | SubscriptionPaymentOrderByWithRelationInput[]
    cursor?: SubscriptionPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionPaymentScalarFieldEnum | SubscriptionPaymentScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }

  /**
   * Model SubscriptionPayment
   */

  export type AggregateSubscriptionPayment = {
    _count: SubscriptionPaymentCountAggregateOutputType | null
    _avg: SubscriptionPaymentAvgAggregateOutputType | null
    _sum: SubscriptionPaymentSumAggregateOutputType | null
    _min: SubscriptionPaymentMinAggregateOutputType | null
    _max: SubscriptionPaymentMaxAggregateOutputType | null
  }

  export type SubscriptionPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type SubscriptionPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type SubscriptionPaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    status: string | null
    provider: string | null
    externalId: string | null
    paidAt: Date | null
    restaurantId: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    status: string | null
    provider: string | null
    externalId: string | null
    paidAt: Date | null
    restaurantId: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPaymentCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    status: number
    provider: number
    externalId: number
    paidAt: number
    restaurantId: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type SubscriptionPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type SubscriptionPaymentSumAggregateInputType = {
    amount?: true
  }

  export type SubscriptionPaymentMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    externalId?: true
    paidAt?: true
    restaurantId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    externalId?: true
    paidAt?: true
    restaurantId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPaymentCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    externalId?: true
    paidAt?: true
    restaurantId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionPayment to aggregate.
     */
    where?: SubscriptionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?:
      | SubscriptionPaymentOrderByWithRelationInput
      | SubscriptionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriptionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SubscriptionPayments
     **/
    _count?: true | SubscriptionPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubscriptionPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubscriptionPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionPaymentMaxAggregateInputType
  }

  export type GetSubscriptionPaymentAggregateType<T extends SubscriptionPaymentAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriptionPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPayment[P]>
      : GetScalarType<T[P], AggregateSubscriptionPayment[P]>
  }

  export type SubscriptionPaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionPaymentWhereInput
    orderBy?:
      | SubscriptionPaymentOrderByWithAggregationInput
      | SubscriptionPaymentOrderByWithAggregationInput[]
    by: SubscriptionPaymentScalarFieldEnum[] | SubscriptionPaymentScalarFieldEnum
    having?: SubscriptionPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPaymentCountAggregateInputType | true
    _avg?: SubscriptionPaymentAvgAggregateInputType
    _sum?: SubscriptionPaymentSumAggregateInputType
    _min?: SubscriptionPaymentMinAggregateInputType
    _max?: SubscriptionPaymentMaxAggregateInputType
  }

  export type SubscriptionPaymentGroupByOutputType = {
    id: string
    amount: number
    currency: string
    status: string
    provider: string | null
    externalId: string | null
    paidAt: Date | null
    restaurantId: string
    planId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPaymentCountAggregateOutputType | null
    _avg: SubscriptionPaymentAvgAggregateOutputType | null
    _sum: SubscriptionPaymentSumAggregateOutputType | null
    _min: SubscriptionPaymentMinAggregateOutputType | null
    _max: SubscriptionPaymentMaxAggregateOutputType | null
  }

  type GetSubscriptionPaymentGroupByPayload<T extends SubscriptionPaymentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubscriptionPaymentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SubscriptionPaymentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPaymentGroupByOutputType[P]>
        }
      >
    >

  export type SubscriptionPaymentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      amount?: boolean
      currency?: boolean
      status?: boolean
      provider?: boolean
      externalId?: boolean
      paidAt?: boolean
      restaurantId?: boolean
      planId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
      plan?: boolean | SubscriptionPayment$planArgs<ExtArgs>
    },
    ExtArgs['result']['subscriptionPayment']
  >

  export type SubscriptionPaymentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      amount?: boolean
      currency?: boolean
      status?: boolean
      provider?: boolean
      externalId?: boolean
      paidAt?: boolean
      restaurantId?: boolean
      planId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
      plan?: boolean | SubscriptionPayment$planArgs<ExtArgs>
    },
    ExtArgs['result']['subscriptionPayment']
  >

  export type SubscriptionPaymentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      amount?: boolean
      currency?: boolean
      status?: boolean
      provider?: boolean
      externalId?: boolean
      paidAt?: boolean
      restaurantId?: boolean
      planId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
      plan?: boolean | SubscriptionPayment$planArgs<ExtArgs>
    },
    ExtArgs['result']['subscriptionPayment']
  >

  export type SubscriptionPaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    externalId?: boolean
    paidAt?: boolean
    restaurantId?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPaymentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'amount'
    | 'currency'
    | 'status'
    | 'provider'
    | 'externalId'
    | 'paidAt'
    | 'restaurantId'
    | 'planId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['subscriptionPayment']
  >
  export type SubscriptionPaymentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPayment$planArgs<ExtArgs>
  }
  export type SubscriptionPaymentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPayment$planArgs<ExtArgs>
  }
  export type SubscriptionPaymentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPayment$planArgs<ExtArgs>
  }

  export type $SubscriptionPaymentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'SubscriptionPayment'
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        amount: number
        currency: string
        status: string
        provider: string | null
        externalId: string | null
        paidAt: Date | null
        restaurantId: string
        planId: string | null
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['subscriptionPayment']
    >
    composites: {}
  }

  type SubscriptionPaymentGetPayload<
    S extends boolean | null | undefined | SubscriptionPaymentDefaultArgs,
  > = $Result.GetResult<Prisma.$SubscriptionPaymentPayload, S>

  type SubscriptionPaymentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SubscriptionPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionPaymentCountAggregateInputType | true
  }

  export interface SubscriptionPaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPayment']
      meta: { name: 'SubscriptionPayment' }
    }
    /**
     * Find zero or one SubscriptionPayment that matches the filter.
     * @param {SubscriptionPaymentFindUniqueArgs} args - Arguments to find a SubscriptionPayment
     * @example
     * // Get one SubscriptionPayment
     * const subscriptionPayment = await prisma.subscriptionPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPaymentFindUniqueArgs>(
      args: SelectSubset<T, SubscriptionPaymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one SubscriptionPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPaymentFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPayment
     * @example
     * // Get one SubscriptionPayment
     * const subscriptionPayment = await prisma.subscriptionPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPaymentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriptionPaymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first SubscriptionPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentFindFirstArgs} args - Arguments to find a SubscriptionPayment
     * @example
     * // Get one SubscriptionPayment
     * const subscriptionPayment = await prisma.subscriptionPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPaymentFindFirstArgs>(
      args?: SelectSubset<T, SubscriptionPaymentFindFirstArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first SubscriptionPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPayment
     * @example
     * // Get one SubscriptionPayment
     * const subscriptionPayment = await prisma.subscriptionPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionPaymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more SubscriptionPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayment.findMany()
     *
     * // Get first 10 SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionPaymentWithIdOnly = await prisma.subscriptionPayment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriptionPaymentFindManyArgs>(
      args?: SelectSubset<T, SubscriptionPaymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a SubscriptionPayment.
     * @param {SubscriptionPaymentCreateArgs} args - Arguments to create a SubscriptionPayment.
     * @example
     * // Create one SubscriptionPayment
     * const SubscriptionPayment = await prisma.subscriptionPayment.create({
     *   data: {
     *     // ... data to create a SubscriptionPayment
     *   }
     * })
     *
     */
    create<T extends SubscriptionPaymentCreateArgs>(
      args: SelectSubset<T, SubscriptionPaymentCreateArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many SubscriptionPayments.
     * @param {SubscriptionPaymentCreateManyArgs} args - Arguments to create many SubscriptionPayments.
     * @example
     * // Create many SubscriptionPayments
     * const subscriptionPayment = await prisma.subscriptionPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriptionPaymentCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionPaymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPayments and returns the data saved in the database.
     * @param {SubscriptionPaymentCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPayments.
     * @example
     * // Create many SubscriptionPayments
     * const subscriptionPayment = await prisma.subscriptionPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SubscriptionPayments and only return the `id`
     * const subscriptionPaymentWithIdOnly = await prisma.subscriptionPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriptionPaymentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriptionPaymentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a SubscriptionPayment.
     * @param {SubscriptionPaymentDeleteArgs} args - Arguments to delete one SubscriptionPayment.
     * @example
     * // Delete one SubscriptionPayment
     * const SubscriptionPayment = await prisma.subscriptionPayment.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPayment
     *   }
     * })
     *
     */
    delete<T extends SubscriptionPaymentDeleteArgs>(
      args: SelectSubset<T, SubscriptionPaymentDeleteArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one SubscriptionPayment.
     * @param {SubscriptionPaymentUpdateArgs} args - Arguments to update one SubscriptionPayment.
     * @example
     * // Update one SubscriptionPayment
     * const subscriptionPayment = await prisma.subscriptionPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriptionPaymentUpdateArgs>(
      args: SelectSubset<T, SubscriptionPaymentUpdateArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more SubscriptionPayments.
     * @param {SubscriptionPaymentDeleteManyArgs} args - Arguments to filter SubscriptionPayments to delete.
     * @example
     * // Delete a few SubscriptionPayments
     * const { count } = await prisma.subscriptionPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriptionPaymentDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionPaymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPayments
     * const subscriptionPayment = await prisma.subscriptionPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriptionPaymentUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionPaymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPayments and returns the data updated in the database.
     * @param {SubscriptionPaymentUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPayments.
     * @example
     * // Update many SubscriptionPayments
     * const subscriptionPayment = await prisma.subscriptionPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SubscriptionPayments and only return the `id`
     * const subscriptionPaymentWithIdOnly = await prisma.subscriptionPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriptionPaymentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriptionPaymentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one SubscriptionPayment.
     * @param {SubscriptionPaymentUpsertArgs} args - Arguments to update or create a SubscriptionPayment.
     * @example
     * // Update or create a SubscriptionPayment
     * const subscriptionPayment = await prisma.subscriptionPayment.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPayment we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPaymentUpsertArgs>(
      args: SelectSubset<T, SubscriptionPaymentUpsertArgs<ExtArgs>>,
    ): Prisma__SubscriptionPaymentClient<
      $Result.GetResult<
        Prisma.$SubscriptionPaymentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of SubscriptionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentCountArgs} args - Arguments to filter SubscriptionPayments to count.
     * @example
     * // Count the number of SubscriptionPayments
     * const count = await prisma.subscriptionPayment.count({
     *   where: {
     *     // ... the filter for the SubscriptionPayments we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionPaymentCountArgs>(
      args?: Subset<T, SubscriptionPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionPaymentAggregateArgs>(
      args: Subset<T, SubscriptionPaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionPaymentAggregateType<T>>

    /**
     * Group by SubscriptionPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubscriptionPaymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPaymentGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubscriptionPaymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionPaymentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the SubscriptionPayment model
     */
    readonly fields: SubscriptionPaymentFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    plan<T extends SubscriptionPayment$planArgs<ExtArgs> = {}>(
      args?: Subset<T, SubscriptionPayment$planArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the SubscriptionPayment model
   */
  interface SubscriptionPaymentFieldRefs {
    readonly id: FieldRef<'SubscriptionPayment', 'String'>
    readonly amount: FieldRef<'SubscriptionPayment', 'Int'>
    readonly currency: FieldRef<'SubscriptionPayment', 'String'>
    readonly status: FieldRef<'SubscriptionPayment', 'String'>
    readonly provider: FieldRef<'SubscriptionPayment', 'String'>
    readonly externalId: FieldRef<'SubscriptionPayment', 'String'>
    readonly paidAt: FieldRef<'SubscriptionPayment', 'DateTime'>
    readonly restaurantId: FieldRef<'SubscriptionPayment', 'String'>
    readonly planId: FieldRef<'SubscriptionPayment', 'String'>
    readonly createdAt: FieldRef<'SubscriptionPayment', 'DateTime'>
    readonly updatedAt: FieldRef<'SubscriptionPayment', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * SubscriptionPayment findUnique
   */
  export type SubscriptionPaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayment to fetch.
     */
    where: SubscriptionPaymentWhereUniqueInput
  }

  /**
   * SubscriptionPayment findUniqueOrThrow
   */
  export type SubscriptionPaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayment to fetch.
     */
    where: SubscriptionPaymentWhereUniqueInput
  }

  /**
   * SubscriptionPayment findFirst
   */
  export type SubscriptionPaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayment to fetch.
     */
    where?: SubscriptionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?:
      | SubscriptionPaymentOrderByWithRelationInput
      | SubscriptionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionPayments.
     */
    cursor?: SubscriptionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPayments.
     */
    distinct?: SubscriptionPaymentScalarFieldEnum | SubscriptionPaymentScalarFieldEnum[]
  }

  /**
   * SubscriptionPayment findFirstOrThrow
   */
  export type SubscriptionPaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayment to fetch.
     */
    where?: SubscriptionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?:
      | SubscriptionPaymentOrderByWithRelationInput
      | SubscriptionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionPayments.
     */
    cursor?: SubscriptionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPayments.
     */
    distinct?: SubscriptionPaymentScalarFieldEnum | SubscriptionPaymentScalarFieldEnum[]
  }

  /**
   * SubscriptionPayment findMany
   */
  export type SubscriptionPaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayments to fetch.
     */
    where?: SubscriptionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?:
      | SubscriptionPaymentOrderByWithRelationInput
      | SubscriptionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SubscriptionPayments.
     */
    cursor?: SubscriptionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPayments.
     */
    distinct?: SubscriptionPaymentScalarFieldEnum | SubscriptionPaymentScalarFieldEnum[]
  }

  /**
   * SubscriptionPayment create
   */
  export type SubscriptionPaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPayment.
     */
    data: XOR<SubscriptionPaymentCreateInput, SubscriptionPaymentUncheckedCreateInput>
  }

  /**
   * SubscriptionPayment createMany
   */
  export type SubscriptionPaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SubscriptionPayments.
     */
    data: SubscriptionPaymentCreateManyInput | SubscriptionPaymentCreateManyInput[]
  }

  /**
   * SubscriptionPayment createManyAndReturn
   */
  export type SubscriptionPaymentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPayments.
     */
    data: SubscriptionPaymentCreateManyInput | SubscriptionPaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionPayment update
   */
  export type SubscriptionPaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPayment.
     */
    data: XOR<SubscriptionPaymentUpdateInput, SubscriptionPaymentUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPayment to update.
     */
    where: SubscriptionPaymentWhereUniqueInput
  }

  /**
   * SubscriptionPayment updateMany
   */
  export type SubscriptionPaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SubscriptionPayments.
     */
    data: XOR<
      SubscriptionPaymentUpdateManyMutationInput,
      SubscriptionPaymentUncheckedUpdateManyInput
    >
    /**
     * Filter which SubscriptionPayments to update
     */
    where?: SubscriptionPaymentWhereInput
    /**
     * Limit how many SubscriptionPayments to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPayment updateManyAndReturn
   */
  export type SubscriptionPaymentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPayments.
     */
    data: XOR<
      SubscriptionPaymentUpdateManyMutationInput,
      SubscriptionPaymentUncheckedUpdateManyInput
    >
    /**
     * Filter which SubscriptionPayments to update
     */
    where?: SubscriptionPaymentWhereInput
    /**
     * Limit how many SubscriptionPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionPayment upsert
   */
  export type SubscriptionPaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPayment to update in case it exists.
     */
    where: SubscriptionPaymentWhereUniqueInput
    /**
     * In case the SubscriptionPayment found by the `where` argument doesn't exist, create a new SubscriptionPayment with this data.
     */
    create: XOR<SubscriptionPaymentCreateInput, SubscriptionPaymentUncheckedCreateInput>
    /**
     * In case the SubscriptionPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPaymentUpdateInput, SubscriptionPaymentUncheckedUpdateInput>
  }

  /**
   * SubscriptionPayment delete
   */
  export type SubscriptionPaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPayment to delete.
     */
    where: SubscriptionPaymentWhereUniqueInput
  }

  /**
   * SubscriptionPayment deleteMany
   */
  export type SubscriptionPaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionPayments to delete
     */
    where?: SubscriptionPaymentWhereInput
    /**
     * Limit how many SubscriptionPayments to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPayment.plan
   */
  export type SubscriptionPayment$planArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    where?: SubscriptionPlanWhereInput
  }

  /**
   * SubscriptionPayment without action
   */
  export type SubscriptionPaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPayment
     */
    select?: SubscriptionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayment
     */
    omit?: SubscriptionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPaymentInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const RestaurantScalarFieldEnum: {
    id: 'id'
    name: 'name'
    phone: 'phone'
    address: 'address'
    subscriptionStatus: 'subscriptionStatus'
    trialEndsAt: 'trialEndsAt'
    subscriptionEndsAt: 'subscriptionEndsAt'
    isBlocked: 'isBlocked'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type RestaurantScalarFieldEnum =
    (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]

  export const UserScalarFieldEnum: {
    id: 'id'
    name: 'name'
    email: 'email'
    phone: 'phone'
    passwordHash: 'passwordHash'
    role: 'role'
    restaurantId: 'restaurantId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const HallScalarFieldEnum: {
    id: 'id'
    name: 'name'
    capacity: 'capacity'
    description: 'description'
    isActive: 'isActive'
    restaurantId: 'restaurantId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type HallScalarFieldEnum = (typeof HallScalarFieldEnum)[keyof typeof HallScalarFieldEnum]

  export const ClientScalarFieldEnum: {
    id: 'id'
    name: 'name'
    phone: 'phone'
    comment: 'comment'
    restaurantId: 'restaurantId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type ClientScalarFieldEnum =
    (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]

  export const BanquetScalarFieldEnum: {
    id: 'id'
    title: 'title'
    eventType: 'eventType'
    guestCount: 'guestCount'
    date: 'date'
    startTime: 'startTime'
    endTime: 'endTime'
    status: 'status'
    paymentStatus: 'paymentStatus'
    totalAmount: 'totalAmount'
    prepaymentAmount: 'prepaymentAmount'
    remainingAmount: 'remainingAmount'
    comment: 'comment'
    restaurantId: 'restaurantId'
    clientId: 'clientId'
    hallId: 'hallId'
    createdById: 'createdById'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type BanquetScalarFieldEnum =
    (typeof BanquetScalarFieldEnum)[keyof typeof BanquetScalarFieldEnum]

  export const PaymentScalarFieldEnum: {
    id: 'id'
    amount: 'amount'
    method: 'method'
    comment: 'comment'
    banquetId: 'banquetId'
    paidAt: 'paidAt'
    createdAt: 'createdAt'
  }

  export type PaymentScalarFieldEnum =
    (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]

  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id'
    name: 'name'
    price: 'price'
    currency: 'currency'
    period: 'period'
    isActive: 'isActive'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type SubscriptionPlanScalarFieldEnum =
    (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]

  export const SubscriptionPaymentScalarFieldEnum: {
    id: 'id'
    amount: 'amount'
    currency: 'currency'
    status: 'status'
    provider: 'provider'
    externalId: 'externalId'
    paidAt: 'paidAt'
    restaurantId: 'restaurantId'
    planId: 'planId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type SubscriptionPaymentScalarFieldEnum =
    (typeof SubscriptionPaymentScalarFieldEnum)[keyof typeof SubscriptionPaymentScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'SubscriptionStatus'
  >

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>

  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

  /**
   * Reference to a field of type 'BanquetStatus'
   */
  export type EnumBanquetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BanquetStatus'
  >

  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentStatus'
  >

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

  /**
   * Deep Input Types
   */

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<'Restaurant'> | string
    name?: StringFilter<'Restaurant'> | string
    phone?: StringNullableFilter<'Restaurant'> | string | null
    address?: StringNullableFilter<'Restaurant'> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<'Restaurant'> | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeNullableFilter<'Restaurant'> | Date | string | null
    subscriptionEndsAt?: DateTimeNullableFilter<'Restaurant'> | Date | string | null
    isBlocked?: BoolFilter<'Restaurant'> | boolean
    createdAt?: DateTimeFilter<'Restaurant'> | Date | string
    updatedAt?: DateTimeFilter<'Restaurant'> | Date | string
    users?: UserListRelationFilter
    halls?: HallListRelationFilter
    clients?: ClientListRelationFilter
    banquets?: BanquetListRelationFilter
    payments?: SubscriptionPaymentListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    subscriptionEndsAt?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    halls?: HallOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    banquets?: BanquetOrderByRelationAggregateInput
    payments?: SubscriptionPaymentOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: RestaurantWhereInput | RestaurantWhereInput[]
      OR?: RestaurantWhereInput[]
      NOT?: RestaurantWhereInput | RestaurantWhereInput[]
      name?: StringFilter<'Restaurant'> | string
      phone?: StringNullableFilter<'Restaurant'> | string | null
      address?: StringNullableFilter<'Restaurant'> | string | null
      subscriptionStatus?: EnumSubscriptionStatusFilter<'Restaurant'> | $Enums.SubscriptionStatus
      trialEndsAt?: DateTimeNullableFilter<'Restaurant'> | Date | string | null
      subscriptionEndsAt?: DateTimeNullableFilter<'Restaurant'> | Date | string | null
      isBlocked?: BoolFilter<'Restaurant'> | boolean
      createdAt?: DateTimeFilter<'Restaurant'> | Date | string
      updatedAt?: DateTimeFilter<'Restaurant'> | Date | string
      users?: UserListRelationFilter
      halls?: HallListRelationFilter
      clients?: ClientListRelationFilter
      banquets?: BanquetListRelationFilter
      payments?: SubscriptionPaymentListRelationFilter
    },
    'id'
  >

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    subscriptionEndsAt?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Restaurant'> | string
    name?: StringWithAggregatesFilter<'Restaurant'> | string
    phone?: StringNullableWithAggregatesFilter<'Restaurant'> | string | null
    address?: StringNullableWithAggregatesFilter<'Restaurant'> | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusWithAggregatesFilter<'Restaurant'>
      | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<'Restaurant'> | Date | string | null
    subscriptionEndsAt?: DateTimeNullableWithAggregatesFilter<'Restaurant'> | Date | string | null
    isBlocked?: BoolWithAggregatesFilter<'Restaurant'> | boolean
    createdAt?: DateTimeWithAggregatesFilter<'Restaurant'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Restaurant'> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<'User'> | string
    name?: StringFilter<'User'> | string
    email?: StringFilter<'User'> | string
    phone?: StringNullableFilter<'User'> | string | null
    passwordHash?: StringFilter<'User'> | string
    role?: EnumUserRoleFilter<'User'> | $Enums.UserRole
    restaurantId?: StringFilter<'User'> | string
    createdAt?: DateTimeFilter<'User'> | Date | string
    updatedAt?: DateTimeFilter<'User'> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    banquetsCreated?: BanquetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    banquetsCreated?: BanquetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      email?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      name?: StringFilter<'User'> | string
      phone?: StringNullableFilter<'User'> | string | null
      passwordHash?: StringFilter<'User'> | string
      role?: EnumUserRoleFilter<'User'> | $Enums.UserRole
      restaurantId?: StringFilter<'User'> | string
      createdAt?: DateTimeFilter<'User'> | Date | string
      updatedAt?: DateTimeFilter<'User'> | Date | string
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
      banquetsCreated?: BanquetListRelationFilter
    },
    'id' | 'email'
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'User'> | string
    name?: StringWithAggregatesFilter<'User'> | string
    email?: StringWithAggregatesFilter<'User'> | string
    phone?: StringNullableWithAggregatesFilter<'User'> | string | null
    passwordHash?: StringWithAggregatesFilter<'User'> | string
    role?: EnumUserRoleWithAggregatesFilter<'User'> | $Enums.UserRole
    restaurantId?: StringWithAggregatesFilter<'User'> | string
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
  }

  export type HallWhereInput = {
    AND?: HallWhereInput | HallWhereInput[]
    OR?: HallWhereInput[]
    NOT?: HallWhereInput | HallWhereInput[]
    id?: StringFilter<'Hall'> | string
    name?: StringFilter<'Hall'> | string
    capacity?: IntFilter<'Hall'> | number
    description?: StringNullableFilter<'Hall'> | string | null
    isActive?: BoolFilter<'Hall'> | boolean
    restaurantId?: StringFilter<'Hall'> | string
    createdAt?: DateTimeFilter<'Hall'> | Date | string
    updatedAt?: DateTimeFilter<'Hall'> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    banquets?: BanquetListRelationFilter
  }

  export type HallOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    banquets?: BanquetOrderByRelationAggregateInput
  }

  export type HallWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: HallWhereInput | HallWhereInput[]
      OR?: HallWhereInput[]
      NOT?: HallWhereInput | HallWhereInput[]
      name?: StringFilter<'Hall'> | string
      capacity?: IntFilter<'Hall'> | number
      description?: StringNullableFilter<'Hall'> | string | null
      isActive?: BoolFilter<'Hall'> | boolean
      restaurantId?: StringFilter<'Hall'> | string
      createdAt?: DateTimeFilter<'Hall'> | Date | string
      updatedAt?: DateTimeFilter<'Hall'> | Date | string
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
      banquets?: BanquetListRelationFilter
    },
    'id'
  >

  export type HallOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HallCountOrderByAggregateInput
    _avg?: HallAvgOrderByAggregateInput
    _max?: HallMaxOrderByAggregateInput
    _min?: HallMinOrderByAggregateInput
    _sum?: HallSumOrderByAggregateInput
  }

  export type HallScalarWhereWithAggregatesInput = {
    AND?: HallScalarWhereWithAggregatesInput | HallScalarWhereWithAggregatesInput[]
    OR?: HallScalarWhereWithAggregatesInput[]
    NOT?: HallScalarWhereWithAggregatesInput | HallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Hall'> | string
    name?: StringWithAggregatesFilter<'Hall'> | string
    capacity?: IntWithAggregatesFilter<'Hall'> | number
    description?: StringNullableWithAggregatesFilter<'Hall'> | string | null
    isActive?: BoolWithAggregatesFilter<'Hall'> | boolean
    restaurantId?: StringWithAggregatesFilter<'Hall'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Hall'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Hall'> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<'Client'> | string
    name?: StringFilter<'Client'> | string
    phone?: StringFilter<'Client'> | string
    comment?: StringNullableFilter<'Client'> | string | null
    restaurantId?: StringFilter<'Client'> | string
    createdAt?: DateTimeFilter<'Client'> | Date | string
    updatedAt?: DateTimeFilter<'Client'> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    banquets?: BanquetListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    comment?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    banquets?: BanquetOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      restaurantId_phone?: ClientRestaurantIdPhoneCompoundUniqueInput
      AND?: ClientWhereInput | ClientWhereInput[]
      OR?: ClientWhereInput[]
      NOT?: ClientWhereInput | ClientWhereInput[]
      name?: StringFilter<'Client'> | string
      phone?: StringFilter<'Client'> | string
      comment?: StringNullableFilter<'Client'> | string | null
      restaurantId?: StringFilter<'Client'> | string
      createdAt?: DateTimeFilter<'Client'> | Date | string
      updatedAt?: DateTimeFilter<'Client'> | Date | string
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
      banquets?: BanquetListRelationFilter
    },
    'id' | 'restaurantId_phone'
  >

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    comment?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Client'> | string
    name?: StringWithAggregatesFilter<'Client'> | string
    phone?: StringWithAggregatesFilter<'Client'> | string
    comment?: StringNullableWithAggregatesFilter<'Client'> | string | null
    restaurantId?: StringWithAggregatesFilter<'Client'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Client'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Client'> | Date | string
  }

  export type BanquetWhereInput = {
    AND?: BanquetWhereInput | BanquetWhereInput[]
    OR?: BanquetWhereInput[]
    NOT?: BanquetWhereInput | BanquetWhereInput[]
    id?: StringFilter<'Banquet'> | string
    title?: StringNullableFilter<'Banquet'> | string | null
    eventType?: StringNullableFilter<'Banquet'> | string | null
    guestCount?: IntFilter<'Banquet'> | number
    date?: DateTimeFilter<'Banquet'> | Date | string
    startTime?: StringNullableFilter<'Banquet'> | string | null
    endTime?: StringNullableFilter<'Banquet'> | string | null
    status?: EnumBanquetStatusFilter<'Banquet'> | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFilter<'Banquet'> | $Enums.PaymentStatus
    totalAmount?: IntFilter<'Banquet'> | number
    prepaymentAmount?: IntFilter<'Banquet'> | number
    remainingAmount?: IntFilter<'Banquet'> | number
    comment?: StringNullableFilter<'Banquet'> | string | null
    restaurantId?: StringFilter<'Banquet'> | string
    clientId?: StringFilter<'Banquet'> | string
    hallId?: StringNullableFilter<'Banquet'> | string | null
    createdById?: StringFilter<'Banquet'> | string
    createdAt?: DateTimeFilter<'Banquet'> | Date | string
    updatedAt?: DateTimeFilter<'Banquet'> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    hall?: XOR<HallNullableScalarRelationFilter, HallWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type BanquetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    guestCount?: SortOrder
    date?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    prepaymentAmount?: SortOrder
    remainingAmount?: SortOrder
    comment?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    clientId?: SortOrder
    hallId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    hall?: HallOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BanquetWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: BanquetWhereInput | BanquetWhereInput[]
      OR?: BanquetWhereInput[]
      NOT?: BanquetWhereInput | BanquetWhereInput[]
      title?: StringNullableFilter<'Banquet'> | string | null
      eventType?: StringNullableFilter<'Banquet'> | string | null
      guestCount?: IntFilter<'Banquet'> | number
      date?: DateTimeFilter<'Banquet'> | Date | string
      startTime?: StringNullableFilter<'Banquet'> | string | null
      endTime?: StringNullableFilter<'Banquet'> | string | null
      status?: EnumBanquetStatusFilter<'Banquet'> | $Enums.BanquetStatus
      paymentStatus?: EnumPaymentStatusFilter<'Banquet'> | $Enums.PaymentStatus
      totalAmount?: IntFilter<'Banquet'> | number
      prepaymentAmount?: IntFilter<'Banquet'> | number
      remainingAmount?: IntFilter<'Banquet'> | number
      comment?: StringNullableFilter<'Banquet'> | string | null
      restaurantId?: StringFilter<'Banquet'> | string
      clientId?: StringFilter<'Banquet'> | string
      hallId?: StringNullableFilter<'Banquet'> | string | null
      createdById?: StringFilter<'Banquet'> | string
      createdAt?: DateTimeFilter<'Banquet'> | Date | string
      updatedAt?: DateTimeFilter<'Banquet'> | Date | string
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
      client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
      hall?: XOR<HallNullableScalarRelationFilter, HallWhereInput> | null
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
      payments?: PaymentListRelationFilter
    },
    'id'
  >

  export type BanquetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    guestCount?: SortOrder
    date?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    prepaymentAmount?: SortOrder
    remainingAmount?: SortOrder
    comment?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    clientId?: SortOrder
    hallId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BanquetCountOrderByAggregateInput
    _avg?: BanquetAvgOrderByAggregateInput
    _max?: BanquetMaxOrderByAggregateInput
    _min?: BanquetMinOrderByAggregateInput
    _sum?: BanquetSumOrderByAggregateInput
  }

  export type BanquetScalarWhereWithAggregatesInput = {
    AND?: BanquetScalarWhereWithAggregatesInput | BanquetScalarWhereWithAggregatesInput[]
    OR?: BanquetScalarWhereWithAggregatesInput[]
    NOT?: BanquetScalarWhereWithAggregatesInput | BanquetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Banquet'> | string
    title?: StringNullableWithAggregatesFilter<'Banquet'> | string | null
    eventType?: StringNullableWithAggregatesFilter<'Banquet'> | string | null
    guestCount?: IntWithAggregatesFilter<'Banquet'> | number
    date?: DateTimeWithAggregatesFilter<'Banquet'> | Date | string
    startTime?: StringNullableWithAggregatesFilter<'Banquet'> | string | null
    endTime?: StringNullableWithAggregatesFilter<'Banquet'> | string | null
    status?: EnumBanquetStatusWithAggregatesFilter<'Banquet'> | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<'Banquet'> | $Enums.PaymentStatus
    totalAmount?: IntWithAggregatesFilter<'Banquet'> | number
    prepaymentAmount?: IntWithAggregatesFilter<'Banquet'> | number
    remainingAmount?: IntWithAggregatesFilter<'Banquet'> | number
    comment?: StringNullableWithAggregatesFilter<'Banquet'> | string | null
    restaurantId?: StringWithAggregatesFilter<'Banquet'> | string
    clientId?: StringWithAggregatesFilter<'Banquet'> | string
    hallId?: StringNullableWithAggregatesFilter<'Banquet'> | string | null
    createdById?: StringWithAggregatesFilter<'Banquet'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Banquet'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Banquet'> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<'Payment'> | string
    amount?: IntFilter<'Payment'> | number
    method?: StringNullableFilter<'Payment'> | string | null
    comment?: StringNullableFilter<'Payment'> | string | null
    banquetId?: StringFilter<'Payment'> | string
    paidAt?: DateTimeFilter<'Payment'> | Date | string
    createdAt?: DateTimeFilter<'Payment'> | Date | string
    banquet?: XOR<BanquetScalarRelationFilter, BanquetWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    banquetId?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    banquet?: BanquetOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: PaymentWhereInput | PaymentWhereInput[]
      OR?: PaymentWhereInput[]
      NOT?: PaymentWhereInput | PaymentWhereInput[]
      amount?: IntFilter<'Payment'> | number
      method?: StringNullableFilter<'Payment'> | string | null
      comment?: StringNullableFilter<'Payment'> | string | null
      banquetId?: StringFilter<'Payment'> | string
      paidAt?: DateTimeFilter<'Payment'> | Date | string
      createdAt?: DateTimeFilter<'Payment'> | Date | string
      banquet?: XOR<BanquetScalarRelationFilter, BanquetWhereInput>
    },
    'id'
  >

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    banquetId?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Payment'> | string
    amount?: IntWithAggregatesFilter<'Payment'> | number
    method?: StringNullableWithAggregatesFilter<'Payment'> | string | null
    comment?: StringNullableWithAggregatesFilter<'Payment'> | string | null
    banquetId?: StringWithAggregatesFilter<'Payment'> | string
    paidAt?: DateTimeWithAggregatesFilter<'Payment'> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<'Payment'> | Date | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<'SubscriptionPlan'> | string
    name?: StringFilter<'SubscriptionPlan'> | string
    price?: IntFilter<'SubscriptionPlan'> | number
    currency?: StringFilter<'SubscriptionPlan'> | string
    period?: StringFilter<'SubscriptionPlan'> | string
    isActive?: BoolFilter<'SubscriptionPlan'> | boolean
    createdAt?: DateTimeFilter<'SubscriptionPlan'> | Date | string
    updatedAt?: DateTimeFilter<'SubscriptionPlan'> | Date | string
    payments?: SubscriptionPaymentListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    period?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: SubscriptionPaymentOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
      OR?: SubscriptionPlanWhereInput[]
      NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
      name?: StringFilter<'SubscriptionPlan'> | string
      price?: IntFilter<'SubscriptionPlan'> | number
      currency?: StringFilter<'SubscriptionPlan'> | string
      period?: StringFilter<'SubscriptionPlan'> | string
      isActive?: BoolFilter<'SubscriptionPlan'> | boolean
      createdAt?: DateTimeFilter<'SubscriptionPlan'> | Date | string
      updatedAt?: DateTimeFilter<'SubscriptionPlan'> | Date | string
      payments?: SubscriptionPaymentListRelationFilter
    },
    'id'
  >

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    period?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?:
      | SubscriptionPlanScalarWhereWithAggregatesInput
      | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?:
      | SubscriptionPlanScalarWhereWithAggregatesInput
      | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'SubscriptionPlan'> | string
    name?: StringWithAggregatesFilter<'SubscriptionPlan'> | string
    price?: IntWithAggregatesFilter<'SubscriptionPlan'> | number
    currency?: StringWithAggregatesFilter<'SubscriptionPlan'> | string
    period?: StringWithAggregatesFilter<'SubscriptionPlan'> | string
    isActive?: BoolWithAggregatesFilter<'SubscriptionPlan'> | boolean
    createdAt?: DateTimeWithAggregatesFilter<'SubscriptionPlan'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'SubscriptionPlan'> | Date | string
  }

  export type SubscriptionPaymentWhereInput = {
    AND?: SubscriptionPaymentWhereInput | SubscriptionPaymentWhereInput[]
    OR?: SubscriptionPaymentWhereInput[]
    NOT?: SubscriptionPaymentWhereInput | SubscriptionPaymentWhereInput[]
    id?: StringFilter<'SubscriptionPayment'> | string
    amount?: IntFilter<'SubscriptionPayment'> | number
    currency?: StringFilter<'SubscriptionPayment'> | string
    status?: StringFilter<'SubscriptionPayment'> | string
    provider?: StringNullableFilter<'SubscriptionPayment'> | string | null
    externalId?: StringNullableFilter<'SubscriptionPayment'> | string | null
    paidAt?: DateTimeNullableFilter<'SubscriptionPayment'> | Date | string | null
    restaurantId?: StringFilter<'SubscriptionPayment'> | string
    planId?: StringNullableFilter<'SubscriptionPayment'> | string | null
    createdAt?: DateTimeFilter<'SubscriptionPayment'> | Date | string
    updatedAt?: DateTimeFilter<'SubscriptionPayment'> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    plan?: XOR<SubscriptionPlanNullableScalarRelationFilter, SubscriptionPlanWhereInput> | null
  }

  export type SubscriptionPaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    planId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    plan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type SubscriptionPaymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: SubscriptionPaymentWhereInput | SubscriptionPaymentWhereInput[]
      OR?: SubscriptionPaymentWhereInput[]
      NOT?: SubscriptionPaymentWhereInput | SubscriptionPaymentWhereInput[]
      amount?: IntFilter<'SubscriptionPayment'> | number
      currency?: StringFilter<'SubscriptionPayment'> | string
      status?: StringFilter<'SubscriptionPayment'> | string
      provider?: StringNullableFilter<'SubscriptionPayment'> | string | null
      externalId?: StringNullableFilter<'SubscriptionPayment'> | string | null
      paidAt?: DateTimeNullableFilter<'SubscriptionPayment'> | Date | string | null
      restaurantId?: StringFilter<'SubscriptionPayment'> | string
      planId?: StringNullableFilter<'SubscriptionPayment'> | string | null
      createdAt?: DateTimeFilter<'SubscriptionPayment'> | Date | string
      updatedAt?: DateTimeFilter<'SubscriptionPayment'> | Date | string
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
      plan?: XOR<SubscriptionPlanNullableScalarRelationFilter, SubscriptionPlanWhereInput> | null
    },
    'id'
  >

  export type SubscriptionPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    planId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPaymentCountOrderByAggregateInput
    _avg?: SubscriptionPaymentAvgOrderByAggregateInput
    _max?: SubscriptionPaymentMaxOrderByAggregateInput
    _min?: SubscriptionPaymentMinOrderByAggregateInput
    _sum?: SubscriptionPaymentSumOrderByAggregateInput
  }

  export type SubscriptionPaymentScalarWhereWithAggregatesInput = {
    AND?:
      | SubscriptionPaymentScalarWhereWithAggregatesInput
      | SubscriptionPaymentScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPaymentScalarWhereWithAggregatesInput[]
    NOT?:
      | SubscriptionPaymentScalarWhereWithAggregatesInput
      | SubscriptionPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'SubscriptionPayment'> | string
    amount?: IntWithAggregatesFilter<'SubscriptionPayment'> | number
    currency?: StringWithAggregatesFilter<'SubscriptionPayment'> | string
    status?: StringWithAggregatesFilter<'SubscriptionPayment'> | string
    provider?: StringNullableWithAggregatesFilter<'SubscriptionPayment'> | string | null
    externalId?: StringNullableWithAggregatesFilter<'SubscriptionPayment'> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<'SubscriptionPayment'> | Date | string | null
    restaurantId?: StringWithAggregatesFilter<'SubscriptionPayment'> | string
    planId?: StringNullableWithAggregatesFilter<'SubscriptionPayment'> | string | null
    createdAt?: DateTimeWithAggregatesFilter<'SubscriptionPayment'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'SubscriptionPayment'> | Date | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRestaurantInput
    halls?: HallCreateNestedManyWithoutRestaurantInput
    clients?: ClientCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRestaurantInput
    halls?: HallUncheckedCreateNestedManyWithoutRestaurantInput
    clients?: ClientUncheckedCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetUncheckedCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRestaurantNestedInput
    halls?: HallUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRestaurantNestedInput
    halls?: HallUncheckedUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUncheckedUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutUsersInput
    banquetsCreated?: BanquetCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    banquetsCreated?: BanquetUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutUsersNestedInput
    banquetsCreated?: BanquetUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquetsCreated?: BanquetUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallCreateInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutHallsInput
    banquets?: BanquetCreateNestedManyWithoutHallInput
  }

  export type HallUncheckedCreateInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    banquets?: BanquetUncheckedCreateNestedManyWithoutHallInput
  }

  export type HallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutHallsNestedInput
    banquets?: BanquetUpdateManyWithoutHallNestedInput
  }

  export type HallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquets?: BanquetUncheckedUpdateManyWithoutHallNestedInput
  }

  export type HallCreateManyInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutClientsInput
    banquets?: BanquetCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    banquets?: BanquetUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutClientsNestedInput
    banquets?: BanquetUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquets?: BanquetUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BanquetCreateInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBanquetsInput
    client: ClientCreateNestedOneWithoutBanquetsInput
    hall?: HallCreateNestedOneWithoutBanquetsInput
    createdBy: UserCreateNestedOneWithoutBanquetsCreatedInput
    payments?: PaymentCreateNestedManyWithoutBanquetInput
  }

  export type BanquetUncheckedCreateInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    clientId: string
    hallId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBanquetInput
  }

  export type BanquetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBanquetsNestedInput
    client?: ClientUpdateOneRequiredWithoutBanquetsNestedInput
    hall?: HallUpdateOneWithoutBanquetsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutBanquetsCreatedNestedInput
    payments?: PaymentUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetCreateManyInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    clientId: string
    hallId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BanquetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BanquetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    method?: string | null
    comment?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    banquet: BanquetCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: number
    method?: string | null
    comment?: string | null
    banquetId: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquet?: BanquetUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    banquetId?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: number
    method?: string | null
    comment?: string | null
    banquetId: string
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    banquetId?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    name: string
    price: number
    currency?: string
    period: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: SubscriptionPaymentCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    currency?: string
    period: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: SubscriptionPaymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SubscriptionPaymentUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SubscriptionPaymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    name: string
    price: number
    currency?: string
    period: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutPaymentsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutPaymentsInput
  }

  export type SubscriptionPaymentUncheckedCreateInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    restaurantId: string
    planId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutPaymentsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutPaymentsNestedInput
  }

  export type SubscriptionPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentCreateManyInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    restaurantId: string
    planId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type HallListRelationFilter = {
    every?: HallWhereInput
    some?: HallWhereInput
    none?: HallWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type BanquetListRelationFilter = {
    every?: BanquetWhereInput
    some?: BanquetWhereInput
    none?: BanquetWhereInput
  }

  export type SubscriptionPaymentListRelationFilter = {
    every?: SubscriptionPaymentWhereInput
    some?: SubscriptionPaymentWhereInput
    none?: SubscriptionPaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HallOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BanquetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    subscriptionEndsAt?: SortOrder
    isBlocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type HallCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HallAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type HallMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HallMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HallSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ClientRestaurantIdPhoneCompoundUniqueInput = {
    restaurantId: string
    phone: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    comment?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    comment?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    comment?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBanquetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BanquetStatus | EnumBanquetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BanquetStatus[]
    notIn?: $Enums.BanquetStatus[]
    not?: NestedEnumBanquetStatusFilter<$PrismaModel> | $Enums.BanquetStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type HallNullableScalarRelationFilter = {
    is?: HallWhereInput | null
    isNot?: HallWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BanquetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    eventType?: SortOrder
    guestCount?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    prepaymentAmount?: SortOrder
    remainingAmount?: SortOrder
    comment?: SortOrder
    restaurantId?: SortOrder
    clientId?: SortOrder
    hallId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BanquetAvgOrderByAggregateInput = {
    guestCount?: SortOrder
    totalAmount?: SortOrder
    prepaymentAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type BanquetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    eventType?: SortOrder
    guestCount?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    prepaymentAmount?: SortOrder
    remainingAmount?: SortOrder
    comment?: SortOrder
    restaurantId?: SortOrder
    clientId?: SortOrder
    hallId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BanquetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    eventType?: SortOrder
    guestCount?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    prepaymentAmount?: SortOrder
    remainingAmount?: SortOrder
    comment?: SortOrder
    restaurantId?: SortOrder
    clientId?: SortOrder
    hallId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BanquetSumOrderByAggregateInput = {
    guestCount?: SortOrder
    totalAmount?: SortOrder
    prepaymentAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type EnumBanquetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BanquetStatus | EnumBanquetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BanquetStatus[]
    notIn?: $Enums.BanquetStatus[]
    not?: NestedEnumBanquetStatusWithAggregatesFilter<$PrismaModel> | $Enums.BanquetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBanquetStatusFilter<$PrismaModel>
    _max?: NestedEnumBanquetStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BanquetScalarRelationFilter = {
    is?: BanquetWhereInput
    isNot?: BanquetWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    comment?: SortOrder
    banquetId?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    comment?: SortOrder
    banquetId?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    comment?: SortOrder
    banquetId?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    period?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    period?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    period?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SubscriptionPlanNullableScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput | null
    isNot?: SubscriptionPlanWhereInput | null
  }

  export type SubscriptionPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    paidAt?: SortOrder
    restaurantId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SubscriptionPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    paidAt?: SortOrder
    restaurantId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    paidAt?: SortOrder
    restaurantId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<UserCreateWithoutRestaurantInput, UserUncheckedCreateWithoutRestaurantInput>
      | UserCreateWithoutRestaurantInput[]
      | UserUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutRestaurantInput
      | UserCreateOrConnectWithoutRestaurantInput[]
    createMany?: UserCreateManyRestaurantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HallCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<HallCreateWithoutRestaurantInput, HallUncheckedCreateWithoutRestaurantInput>
      | HallCreateWithoutRestaurantInput[]
      | HallUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | HallCreateOrConnectWithoutRestaurantInput
      | HallCreateOrConnectWithoutRestaurantInput[]
    createMany?: HallCreateManyRestaurantInputEnvelope
    connect?: HallWhereUniqueInput | HallWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<ClientCreateWithoutRestaurantInput, ClientUncheckedCreateWithoutRestaurantInput>
      | ClientCreateWithoutRestaurantInput[]
      | ClientUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | ClientCreateOrConnectWithoutRestaurantInput
      | ClientCreateOrConnectWithoutRestaurantInput[]
    createMany?: ClientCreateManyRestaurantInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type BanquetCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<BanquetCreateWithoutRestaurantInput, BanquetUncheckedCreateWithoutRestaurantInput>
      | BanquetCreateWithoutRestaurantInput[]
      | BanquetUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutRestaurantInput
      | BanquetCreateOrConnectWithoutRestaurantInput[]
    createMany?: BanquetCreateManyRestaurantInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type SubscriptionPaymentCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutRestaurantInput,
          SubscriptionPaymentUncheckedCreateWithoutRestaurantInput
        >
      | SubscriptionPaymentCreateWithoutRestaurantInput[]
      | SubscriptionPaymentUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput[]
    createMany?: SubscriptionPaymentCreateManyRestaurantInputEnvelope
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<UserCreateWithoutRestaurantInput, UserUncheckedCreateWithoutRestaurantInput>
      | UserCreateWithoutRestaurantInput[]
      | UserUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutRestaurantInput
      | UserCreateOrConnectWithoutRestaurantInput[]
    createMany?: UserCreateManyRestaurantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HallUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<HallCreateWithoutRestaurantInput, HallUncheckedCreateWithoutRestaurantInput>
      | HallCreateWithoutRestaurantInput[]
      | HallUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | HallCreateOrConnectWithoutRestaurantInput
      | HallCreateOrConnectWithoutRestaurantInput[]
    createMany?: HallCreateManyRestaurantInputEnvelope
    connect?: HallWhereUniqueInput | HallWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<ClientCreateWithoutRestaurantInput, ClientUncheckedCreateWithoutRestaurantInput>
      | ClientCreateWithoutRestaurantInput[]
      | ClientUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | ClientCreateOrConnectWithoutRestaurantInput
      | ClientCreateOrConnectWithoutRestaurantInput[]
    createMany?: ClientCreateManyRestaurantInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type BanquetUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<BanquetCreateWithoutRestaurantInput, BanquetUncheckedCreateWithoutRestaurantInput>
      | BanquetCreateWithoutRestaurantInput[]
      | BanquetUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutRestaurantInput
      | BanquetCreateOrConnectWithoutRestaurantInput[]
    createMany?: BanquetCreateManyRestaurantInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type SubscriptionPaymentUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutRestaurantInput,
          SubscriptionPaymentUncheckedCreateWithoutRestaurantInput
        >
      | SubscriptionPaymentCreateWithoutRestaurantInput[]
      | SubscriptionPaymentUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput[]
    createMany?: SubscriptionPaymentCreateManyRestaurantInputEnvelope
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<UserCreateWithoutRestaurantInput, UserUncheckedCreateWithoutRestaurantInput>
      | UserCreateWithoutRestaurantInput[]
      | UserUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutRestaurantInput
      | UserCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutRestaurantInput
      | UserUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: UserCreateManyRestaurantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutRestaurantInput
      | UserUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutRestaurantInput
      | UserUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HallUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<HallCreateWithoutRestaurantInput, HallUncheckedCreateWithoutRestaurantInput>
      | HallCreateWithoutRestaurantInput[]
      | HallUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | HallCreateOrConnectWithoutRestaurantInput
      | HallCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | HallUpsertWithWhereUniqueWithoutRestaurantInput
      | HallUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: HallCreateManyRestaurantInputEnvelope
    set?: HallWhereUniqueInput | HallWhereUniqueInput[]
    disconnect?: HallWhereUniqueInput | HallWhereUniqueInput[]
    delete?: HallWhereUniqueInput | HallWhereUniqueInput[]
    connect?: HallWhereUniqueInput | HallWhereUniqueInput[]
    update?:
      | HallUpdateWithWhereUniqueWithoutRestaurantInput
      | HallUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | HallUpdateManyWithWhereWithoutRestaurantInput
      | HallUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: HallScalarWhereInput | HallScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<ClientCreateWithoutRestaurantInput, ClientUncheckedCreateWithoutRestaurantInput>
      | ClientCreateWithoutRestaurantInput[]
      | ClientUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | ClientCreateOrConnectWithoutRestaurantInput
      | ClientCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | ClientUpsertWithWhereUniqueWithoutRestaurantInput
      | ClientUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ClientCreateManyRestaurantInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?:
      | ClientUpdateWithWhereUniqueWithoutRestaurantInput
      | ClientUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | ClientUpdateManyWithWhereWithoutRestaurantInput
      | ClientUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type BanquetUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutRestaurantInput, BanquetUncheckedCreateWithoutRestaurantInput>
      | BanquetCreateWithoutRestaurantInput[]
      | BanquetUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutRestaurantInput
      | BanquetCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutRestaurantInput
      | BanquetUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: BanquetCreateManyRestaurantInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutRestaurantInput
      | BanquetUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutRestaurantInput
      | BanquetUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type SubscriptionPaymentUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutRestaurantInput,
          SubscriptionPaymentUncheckedCreateWithoutRestaurantInput
        >
      | SubscriptionPaymentCreateWithoutRestaurantInput[]
      | SubscriptionPaymentUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutRestaurantInput
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: SubscriptionPaymentCreateManyRestaurantInputEnvelope
    set?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    disconnect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    delete?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    update?:
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutRestaurantInput
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | SubscriptionPaymentUpdateManyWithWhereWithoutRestaurantInput
      | SubscriptionPaymentUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: SubscriptionPaymentScalarWhereInput | SubscriptionPaymentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<UserCreateWithoutRestaurantInput, UserUncheckedCreateWithoutRestaurantInput>
      | UserCreateWithoutRestaurantInput[]
      | UserUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutRestaurantInput
      | UserCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutRestaurantInput
      | UserUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: UserCreateManyRestaurantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutRestaurantInput
      | UserUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutRestaurantInput
      | UserUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HallUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<HallCreateWithoutRestaurantInput, HallUncheckedCreateWithoutRestaurantInput>
      | HallCreateWithoutRestaurantInput[]
      | HallUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | HallCreateOrConnectWithoutRestaurantInput
      | HallCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | HallUpsertWithWhereUniqueWithoutRestaurantInput
      | HallUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: HallCreateManyRestaurantInputEnvelope
    set?: HallWhereUniqueInput | HallWhereUniqueInput[]
    disconnect?: HallWhereUniqueInput | HallWhereUniqueInput[]
    delete?: HallWhereUniqueInput | HallWhereUniqueInput[]
    connect?: HallWhereUniqueInput | HallWhereUniqueInput[]
    update?:
      | HallUpdateWithWhereUniqueWithoutRestaurantInput
      | HallUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | HallUpdateManyWithWhereWithoutRestaurantInput
      | HallUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: HallScalarWhereInput | HallScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<ClientCreateWithoutRestaurantInput, ClientUncheckedCreateWithoutRestaurantInput>
      | ClientCreateWithoutRestaurantInput[]
      | ClientUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | ClientCreateOrConnectWithoutRestaurantInput
      | ClientCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | ClientUpsertWithWhereUniqueWithoutRestaurantInput
      | ClientUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ClientCreateManyRestaurantInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?:
      | ClientUpdateWithWhereUniqueWithoutRestaurantInput
      | ClientUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | ClientUpdateManyWithWhereWithoutRestaurantInput
      | ClientUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type BanquetUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutRestaurantInput, BanquetUncheckedCreateWithoutRestaurantInput>
      | BanquetCreateWithoutRestaurantInput[]
      | BanquetUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutRestaurantInput
      | BanquetCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutRestaurantInput
      | BanquetUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: BanquetCreateManyRestaurantInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutRestaurantInput
      | BanquetUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutRestaurantInput
      | BanquetUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutRestaurantInput,
          SubscriptionPaymentUncheckedCreateWithoutRestaurantInput
        >
      | SubscriptionPaymentCreateWithoutRestaurantInput[]
      | SubscriptionPaymentUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput
      | SubscriptionPaymentCreateOrConnectWithoutRestaurantInput[]
    upsert?:
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutRestaurantInput
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: SubscriptionPaymentCreateManyRestaurantInputEnvelope
    set?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    disconnect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    delete?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    update?:
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutRestaurantInput
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?:
      | SubscriptionPaymentUpdateManyWithWhereWithoutRestaurantInput
      | SubscriptionPaymentUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: SubscriptionPaymentScalarWhereInput | SubscriptionPaymentScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutUsersInput = {
    create?: XOR<RestaurantCreateWithoutUsersInput, RestaurantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type BanquetCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<BanquetCreateWithoutCreatedByInput, BanquetUncheckedCreateWithoutCreatedByInput>
      | BanquetCreateWithoutCreatedByInput[]
      | BanquetUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutCreatedByInput
      | BanquetCreateOrConnectWithoutCreatedByInput[]
    createMany?: BanquetCreateManyCreatedByInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type BanquetUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<BanquetCreateWithoutCreatedByInput, BanquetUncheckedCreateWithoutCreatedByInput>
      | BanquetCreateWithoutCreatedByInput[]
      | BanquetUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutCreatedByInput
      | BanquetCreateOrConnectWithoutCreatedByInput[]
    createMany?: BanquetCreateManyCreatedByInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type RestaurantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RestaurantCreateWithoutUsersInput, RestaurantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput
    upsert?: RestaurantUpsertWithoutUsersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<
      XOR<RestaurantUpdateToOneWithWhereWithoutUsersInput, RestaurantUpdateWithoutUsersInput>,
      RestaurantUncheckedUpdateWithoutUsersInput
    >
  }

  export type BanquetUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutCreatedByInput, BanquetUncheckedCreateWithoutCreatedByInput>
      | BanquetCreateWithoutCreatedByInput[]
      | BanquetUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutCreatedByInput
      | BanquetCreateOrConnectWithoutCreatedByInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutCreatedByInput
      | BanquetUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BanquetCreateManyCreatedByInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutCreatedByInput
      | BanquetUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutCreatedByInput
      | BanquetUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type BanquetUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutCreatedByInput, BanquetUncheckedCreateWithoutCreatedByInput>
      | BanquetCreateWithoutCreatedByInput[]
      | BanquetUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutCreatedByInput
      | BanquetCreateOrConnectWithoutCreatedByInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutCreatedByInput
      | BanquetUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BanquetCreateManyCreatedByInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutCreatedByInput
      | BanquetUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutCreatedByInput
      | BanquetUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutHallsInput = {
    create?: XOR<RestaurantCreateWithoutHallsInput, RestaurantUncheckedCreateWithoutHallsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutHallsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type BanquetCreateNestedManyWithoutHallInput = {
    create?:
      | XOR<BanquetCreateWithoutHallInput, BanquetUncheckedCreateWithoutHallInput>
      | BanquetCreateWithoutHallInput[]
      | BanquetUncheckedCreateWithoutHallInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutHallInput
      | BanquetCreateOrConnectWithoutHallInput[]
    createMany?: BanquetCreateManyHallInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type BanquetUncheckedCreateNestedManyWithoutHallInput = {
    create?:
      | XOR<BanquetCreateWithoutHallInput, BanquetUncheckedCreateWithoutHallInput>
      | BanquetCreateWithoutHallInput[]
      | BanquetUncheckedCreateWithoutHallInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutHallInput
      | BanquetCreateOrConnectWithoutHallInput[]
    createMany?: BanquetCreateManyHallInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestaurantUpdateOneRequiredWithoutHallsNestedInput = {
    create?: XOR<RestaurantCreateWithoutHallsInput, RestaurantUncheckedCreateWithoutHallsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutHallsInput
    upsert?: RestaurantUpsertWithoutHallsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<
      XOR<RestaurantUpdateToOneWithWhereWithoutHallsInput, RestaurantUpdateWithoutHallsInput>,
      RestaurantUncheckedUpdateWithoutHallsInput
    >
  }

  export type BanquetUpdateManyWithoutHallNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutHallInput, BanquetUncheckedCreateWithoutHallInput>
      | BanquetCreateWithoutHallInput[]
      | BanquetUncheckedCreateWithoutHallInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutHallInput
      | BanquetCreateOrConnectWithoutHallInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutHallInput
      | BanquetUpsertWithWhereUniqueWithoutHallInput[]
    createMany?: BanquetCreateManyHallInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutHallInput
      | BanquetUpdateWithWhereUniqueWithoutHallInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutHallInput
      | BanquetUpdateManyWithWhereWithoutHallInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type BanquetUncheckedUpdateManyWithoutHallNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutHallInput, BanquetUncheckedCreateWithoutHallInput>
      | BanquetCreateWithoutHallInput[]
      | BanquetUncheckedCreateWithoutHallInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutHallInput
      | BanquetCreateOrConnectWithoutHallInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutHallInput
      | BanquetUpsertWithWhereUniqueWithoutHallInput[]
    createMany?: BanquetCreateManyHallInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutHallInput
      | BanquetUpdateWithWhereUniqueWithoutHallInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutHallInput
      | BanquetUpdateManyWithWhereWithoutHallInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutClientsInput = {
    create?: XOR<RestaurantCreateWithoutClientsInput, RestaurantUncheckedCreateWithoutClientsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutClientsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type BanquetCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<BanquetCreateWithoutClientInput, BanquetUncheckedCreateWithoutClientInput>
      | BanquetCreateWithoutClientInput[]
      | BanquetUncheckedCreateWithoutClientInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutClientInput
      | BanquetCreateOrConnectWithoutClientInput[]
    createMany?: BanquetCreateManyClientInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type BanquetUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<BanquetCreateWithoutClientInput, BanquetUncheckedCreateWithoutClientInput>
      | BanquetCreateWithoutClientInput[]
      | BanquetUncheckedCreateWithoutClientInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutClientInput
      | BanquetCreateOrConnectWithoutClientInput[]
    createMany?: BanquetCreateManyClientInputEnvelope
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<RestaurantCreateWithoutClientsInput, RestaurantUncheckedCreateWithoutClientsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutClientsInput
    upsert?: RestaurantUpsertWithoutClientsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<
      XOR<RestaurantUpdateToOneWithWhereWithoutClientsInput, RestaurantUpdateWithoutClientsInput>,
      RestaurantUncheckedUpdateWithoutClientsInput
    >
  }

  export type BanquetUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutClientInput, BanquetUncheckedCreateWithoutClientInput>
      | BanquetCreateWithoutClientInput[]
      | BanquetUncheckedCreateWithoutClientInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutClientInput
      | BanquetCreateOrConnectWithoutClientInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutClientInput
      | BanquetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BanquetCreateManyClientInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutClientInput
      | BanquetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutClientInput
      | BanquetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type BanquetUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<BanquetCreateWithoutClientInput, BanquetUncheckedCreateWithoutClientInput>
      | BanquetCreateWithoutClientInput[]
      | BanquetUncheckedCreateWithoutClientInput[]
    connectOrCreate?:
      | BanquetCreateOrConnectWithoutClientInput
      | BanquetCreateOrConnectWithoutClientInput[]
    upsert?:
      | BanquetUpsertWithWhereUniqueWithoutClientInput
      | BanquetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BanquetCreateManyClientInputEnvelope
    set?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    disconnect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    delete?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    connect?: BanquetWhereUniqueInput | BanquetWhereUniqueInput[]
    update?:
      | BanquetUpdateWithWhereUniqueWithoutClientInput
      | BanquetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?:
      | BanquetUpdateManyWithWhereWithoutClientInput
      | BanquetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutBanquetsInput = {
    create?: XOR<
      RestaurantCreateWithoutBanquetsInput,
      RestaurantUncheckedCreateWithoutBanquetsInput
    >
    connectOrCreate?: RestaurantCreateOrConnectWithoutBanquetsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutBanquetsInput = {
    create?: XOR<ClientCreateWithoutBanquetsInput, ClientUncheckedCreateWithoutBanquetsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBanquetsInput
    connect?: ClientWhereUniqueInput
  }

  export type HallCreateNestedOneWithoutBanquetsInput = {
    create?: XOR<HallCreateWithoutBanquetsInput, HallUncheckedCreateWithoutBanquetsInput>
    connectOrCreate?: HallCreateOrConnectWithoutBanquetsInput
    connect?: HallWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBanquetsCreatedInput = {
    create?: XOR<
      UserCreateWithoutBanquetsCreatedInput,
      UserUncheckedCreateWithoutBanquetsCreatedInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutBanquetsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBanquetInput = {
    create?:
      | XOR<PaymentCreateWithoutBanquetInput, PaymentUncheckedCreateWithoutBanquetInput>
      | PaymentCreateWithoutBanquetInput[]
      | PaymentUncheckedCreateWithoutBanquetInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBanquetInput
      | PaymentCreateOrConnectWithoutBanquetInput[]
    createMany?: PaymentCreateManyBanquetInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBanquetInput = {
    create?:
      | XOR<PaymentCreateWithoutBanquetInput, PaymentUncheckedCreateWithoutBanquetInput>
      | PaymentCreateWithoutBanquetInput[]
      | PaymentUncheckedCreateWithoutBanquetInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBanquetInput
      | PaymentCreateOrConnectWithoutBanquetInput[]
    createMany?: PaymentCreateManyBanquetInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumBanquetStatusFieldUpdateOperationsInput = {
    set?: $Enums.BanquetStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type RestaurantUpdateOneRequiredWithoutBanquetsNestedInput = {
    create?: XOR<
      RestaurantCreateWithoutBanquetsInput,
      RestaurantUncheckedCreateWithoutBanquetsInput
    >
    connectOrCreate?: RestaurantCreateOrConnectWithoutBanquetsInput
    upsert?: RestaurantUpsertWithoutBanquetsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<
      XOR<RestaurantUpdateToOneWithWhereWithoutBanquetsInput, RestaurantUpdateWithoutBanquetsInput>,
      RestaurantUncheckedUpdateWithoutBanquetsInput
    >
  }

  export type ClientUpdateOneRequiredWithoutBanquetsNestedInput = {
    create?: XOR<ClientCreateWithoutBanquetsInput, ClientUncheckedCreateWithoutBanquetsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBanquetsInput
    upsert?: ClientUpsertWithoutBanquetsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<
      XOR<ClientUpdateToOneWithWhereWithoutBanquetsInput, ClientUpdateWithoutBanquetsInput>,
      ClientUncheckedUpdateWithoutBanquetsInput
    >
  }

  export type HallUpdateOneWithoutBanquetsNestedInput = {
    create?: XOR<HallCreateWithoutBanquetsInput, HallUncheckedCreateWithoutBanquetsInput>
    connectOrCreate?: HallCreateOrConnectWithoutBanquetsInput
    upsert?: HallUpsertWithoutBanquetsInput
    disconnect?: HallWhereInput | boolean
    delete?: HallWhereInput | boolean
    connect?: HallWhereUniqueInput
    update?: XOR<
      XOR<HallUpdateToOneWithWhereWithoutBanquetsInput, HallUpdateWithoutBanquetsInput>,
      HallUncheckedUpdateWithoutBanquetsInput
    >
  }

  export type UserUpdateOneRequiredWithoutBanquetsCreatedNestedInput = {
    create?: XOR<
      UserCreateWithoutBanquetsCreatedInput,
      UserUncheckedCreateWithoutBanquetsCreatedInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutBanquetsCreatedInput
    upsert?: UserUpsertWithoutBanquetsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutBanquetsCreatedInput,
        UserUpdateWithoutBanquetsCreatedInput
      >,
      UserUncheckedUpdateWithoutBanquetsCreatedInput
    >
  }

  export type PaymentUpdateManyWithoutBanquetNestedInput = {
    create?:
      | XOR<PaymentCreateWithoutBanquetInput, PaymentUncheckedCreateWithoutBanquetInput>
      | PaymentCreateWithoutBanquetInput[]
      | PaymentUncheckedCreateWithoutBanquetInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBanquetInput
      | PaymentCreateOrConnectWithoutBanquetInput[]
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutBanquetInput
      | PaymentUpsertWithWhereUniqueWithoutBanquetInput[]
    createMany?: PaymentCreateManyBanquetInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?:
      | PaymentUpdateWithWhereUniqueWithoutBanquetInput
      | PaymentUpdateWithWhereUniqueWithoutBanquetInput[]
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutBanquetInput
      | PaymentUpdateManyWithWhereWithoutBanquetInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBanquetNestedInput = {
    create?:
      | XOR<PaymentCreateWithoutBanquetInput, PaymentUncheckedCreateWithoutBanquetInput>
      | PaymentCreateWithoutBanquetInput[]
      | PaymentUncheckedCreateWithoutBanquetInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBanquetInput
      | PaymentCreateOrConnectWithoutBanquetInput[]
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutBanquetInput
      | PaymentUpsertWithWhereUniqueWithoutBanquetInput[]
    createMany?: PaymentCreateManyBanquetInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?:
      | PaymentUpdateWithWhereUniqueWithoutBanquetInput
      | PaymentUpdateWithWhereUniqueWithoutBanquetInput[]
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutBanquetInput
      | PaymentUpdateManyWithWhereWithoutBanquetInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BanquetCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BanquetCreateWithoutPaymentsInput, BanquetUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BanquetCreateOrConnectWithoutPaymentsInput
    connect?: BanquetWhereUniqueInput
  }

  export type BanquetUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BanquetCreateWithoutPaymentsInput, BanquetUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BanquetCreateOrConnectWithoutPaymentsInput
    upsert?: BanquetUpsertWithoutPaymentsInput
    connect?: BanquetWhereUniqueInput
    update?: XOR<
      XOR<BanquetUpdateToOneWithWhereWithoutPaymentsInput, BanquetUpdateWithoutPaymentsInput>,
      BanquetUncheckedUpdateWithoutPaymentsInput
    >
  }

  export type SubscriptionPaymentCreateNestedManyWithoutPlanInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutPlanInput,
          SubscriptionPaymentUncheckedCreateWithoutPlanInput
        >
      | SubscriptionPaymentCreateWithoutPlanInput[]
      | SubscriptionPaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionPaymentCreateManyPlanInputEnvelope
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
  }

  export type SubscriptionPaymentUncheckedCreateNestedManyWithoutPlanInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutPlanInput,
          SubscriptionPaymentUncheckedCreateWithoutPlanInput
        >
      | SubscriptionPaymentCreateWithoutPlanInput[]
      | SubscriptionPaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionPaymentCreateManyPlanInputEnvelope
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
  }

  export type SubscriptionPaymentUpdateManyWithoutPlanNestedInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutPlanInput,
          SubscriptionPaymentUncheckedCreateWithoutPlanInput
        >
      | SubscriptionPaymentCreateWithoutPlanInput[]
      | SubscriptionPaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput[]
    upsert?:
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutPlanInput
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionPaymentCreateManyPlanInputEnvelope
    set?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    disconnect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    delete?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    update?:
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutPlanInput
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?:
      | SubscriptionPaymentUpdateManyWithWhereWithoutPlanInput
      | SubscriptionPaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionPaymentScalarWhereInput | SubscriptionPaymentScalarWhereInput[]
  }

  export type SubscriptionPaymentUncheckedUpdateManyWithoutPlanNestedInput = {
    create?:
      | XOR<
          SubscriptionPaymentCreateWithoutPlanInput,
          SubscriptionPaymentUncheckedCreateWithoutPlanInput
        >
      | SubscriptionPaymentCreateWithoutPlanInput[]
      | SubscriptionPaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?:
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput
      | SubscriptionPaymentCreateOrConnectWithoutPlanInput[]
    upsert?:
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutPlanInput
      | SubscriptionPaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionPaymentCreateManyPlanInputEnvelope
    set?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    disconnect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    delete?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    connect?: SubscriptionPaymentWhereUniqueInput | SubscriptionPaymentWhereUniqueInput[]
    update?:
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutPlanInput
      | SubscriptionPaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?:
      | SubscriptionPaymentUpdateManyWithWhereWithoutPlanInput
      | SubscriptionPaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionPaymentScalarWhereInput | SubscriptionPaymentScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<
      RestaurantCreateWithoutPaymentsInput,
      RestaurantUncheckedCreateWithoutPaymentsInput
    >
    connectOrCreate?: RestaurantCreateOrConnectWithoutPaymentsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type SubscriptionPlanCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<
      SubscriptionPlanCreateWithoutPaymentsInput,
      SubscriptionPlanUncheckedCreateWithoutPaymentsInput
    >
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<
      RestaurantCreateWithoutPaymentsInput,
      RestaurantUncheckedCreateWithoutPaymentsInput
    >
    connectOrCreate?: RestaurantCreateOrConnectWithoutPaymentsInput
    upsert?: RestaurantUpsertWithoutPaymentsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<
      XOR<RestaurantUpdateToOneWithWhereWithoutPaymentsInput, RestaurantUpdateWithoutPaymentsInput>,
      RestaurantUncheckedUpdateWithoutPaymentsInput
    >
  }

  export type SubscriptionPlanUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<
      SubscriptionPlanCreateWithoutPaymentsInput,
      SubscriptionPlanUncheckedCreateWithoutPaymentsInput
    >
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionPlanUpsertWithoutPaymentsInput
    disconnect?: SubscriptionPlanWhereInput | boolean
    delete?: SubscriptionPlanWhereInput | boolean
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<
      XOR<
        SubscriptionPlanUpdateToOneWithWhereWithoutPaymentsInput,
        SubscriptionPlanUpdateWithoutPaymentsInput
      >,
      SubscriptionPlanUncheckedUpdateWithoutPaymentsInput
    >
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBanquetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BanquetStatus | EnumBanquetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BanquetStatus[]
    notIn?: $Enums.BanquetStatus[]
    not?: NestedEnumBanquetStatusFilter<$PrismaModel> | $Enums.BanquetStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumBanquetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BanquetStatus | EnumBanquetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BanquetStatus[]
    notIn?: $Enums.BanquetStatus[]
    not?: NestedEnumBanquetStatusWithAggregatesFilter<$PrismaModel> | $Enums.BanquetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBanquetStatusFilter<$PrismaModel>
    _max?: NestedEnumBanquetStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutRestaurantInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    banquetsCreated?: BanquetCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    banquetsCreated?: BanquetUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRestaurantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRestaurantInput, UserUncheckedCreateWithoutRestaurantInput>
  }

  export type UserCreateManyRestaurantInputEnvelope = {
    data: UserCreateManyRestaurantInput | UserCreateManyRestaurantInput[]
  }

  export type HallCreateWithoutRestaurantInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    banquets?: BanquetCreateNestedManyWithoutHallInput
  }

  export type HallUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    banquets?: BanquetUncheckedCreateNestedManyWithoutHallInput
  }

  export type HallCreateOrConnectWithoutRestaurantInput = {
    where: HallWhereUniqueInput
    create: XOR<HallCreateWithoutRestaurantInput, HallUncheckedCreateWithoutRestaurantInput>
  }

  export type HallCreateManyRestaurantInputEnvelope = {
    data: HallCreateManyRestaurantInput | HallCreateManyRestaurantInput[]
  }

  export type ClientCreateWithoutRestaurantInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banquets?: BanquetCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    banquets?: BanquetUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutRestaurantInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutRestaurantInput, ClientUncheckedCreateWithoutRestaurantInput>
  }

  export type ClientCreateManyRestaurantInputEnvelope = {
    data: ClientCreateManyRestaurantInput | ClientCreateManyRestaurantInput[]
  }

  export type BanquetCreateWithoutRestaurantInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutBanquetsInput
    hall?: HallCreateNestedOneWithoutBanquetsInput
    createdBy: UserCreateNestedOneWithoutBanquetsCreatedInput
    payments?: PaymentCreateNestedManyWithoutBanquetInput
  }

  export type BanquetUncheckedCreateWithoutRestaurantInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    clientId: string
    hallId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBanquetInput
  }

  export type BanquetCreateOrConnectWithoutRestaurantInput = {
    where: BanquetWhereUniqueInput
    create: XOR<BanquetCreateWithoutRestaurantInput, BanquetUncheckedCreateWithoutRestaurantInput>
  }

  export type BanquetCreateManyRestaurantInputEnvelope = {
    data: BanquetCreateManyRestaurantInput | BanquetCreateManyRestaurantInput[]
  }

  export type SubscriptionPaymentCreateWithoutRestaurantInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: SubscriptionPlanCreateNestedOneWithoutPaymentsInput
  }

  export type SubscriptionPaymentUncheckedCreateWithoutRestaurantInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    planId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPaymentCreateOrConnectWithoutRestaurantInput = {
    where: SubscriptionPaymentWhereUniqueInput
    create: XOR<
      SubscriptionPaymentCreateWithoutRestaurantInput,
      SubscriptionPaymentUncheckedCreateWithoutRestaurantInput
    >
  }

  export type SubscriptionPaymentCreateManyRestaurantInputEnvelope = {
    data:
      | SubscriptionPaymentCreateManyRestaurantInput
      | SubscriptionPaymentCreateManyRestaurantInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRestaurantInput, UserUncheckedUpdateWithoutRestaurantInput>
    create: XOR<UserCreateWithoutRestaurantInput, UserUncheckedCreateWithoutRestaurantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRestaurantInput, UserUncheckedUpdateWithoutRestaurantInput>
  }

  export type UserUpdateManyWithWhereWithoutRestaurantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<'User'> | string
    name?: StringFilter<'User'> | string
    email?: StringFilter<'User'> | string
    phone?: StringNullableFilter<'User'> | string | null
    passwordHash?: StringFilter<'User'> | string
    role?: EnumUserRoleFilter<'User'> | $Enums.UserRole
    restaurantId?: StringFilter<'User'> | string
    createdAt?: DateTimeFilter<'User'> | Date | string
    updatedAt?: DateTimeFilter<'User'> | Date | string
  }

  export type HallUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: HallWhereUniqueInput
    update: XOR<HallUpdateWithoutRestaurantInput, HallUncheckedUpdateWithoutRestaurantInput>
    create: XOR<HallCreateWithoutRestaurantInput, HallUncheckedCreateWithoutRestaurantInput>
  }

  export type HallUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: HallWhereUniqueInput
    data: XOR<HallUpdateWithoutRestaurantInput, HallUncheckedUpdateWithoutRestaurantInput>
  }

  export type HallUpdateManyWithWhereWithoutRestaurantInput = {
    where: HallScalarWhereInput
    data: XOR<HallUpdateManyMutationInput, HallUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type HallScalarWhereInput = {
    AND?: HallScalarWhereInput | HallScalarWhereInput[]
    OR?: HallScalarWhereInput[]
    NOT?: HallScalarWhereInput | HallScalarWhereInput[]
    id?: StringFilter<'Hall'> | string
    name?: StringFilter<'Hall'> | string
    capacity?: IntFilter<'Hall'> | number
    description?: StringNullableFilter<'Hall'> | string | null
    isActive?: BoolFilter<'Hall'> | boolean
    restaurantId?: StringFilter<'Hall'> | string
    createdAt?: DateTimeFilter<'Hall'> | Date | string
    updatedAt?: DateTimeFilter<'Hall'> | Date | string
  }

  export type ClientUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutRestaurantInput, ClientUncheckedUpdateWithoutRestaurantInput>
    create: XOR<ClientCreateWithoutRestaurantInput, ClientUncheckedCreateWithoutRestaurantInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutRestaurantInput, ClientUncheckedUpdateWithoutRestaurantInput>
  }

  export type ClientUpdateManyWithWhereWithoutRestaurantInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<'Client'> | string
    name?: StringFilter<'Client'> | string
    phone?: StringFilter<'Client'> | string
    comment?: StringNullableFilter<'Client'> | string | null
    restaurantId?: StringFilter<'Client'> | string
    createdAt?: DateTimeFilter<'Client'> | Date | string
    updatedAt?: DateTimeFilter<'Client'> | Date | string
  }

  export type BanquetUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: BanquetWhereUniqueInput
    update: XOR<BanquetUpdateWithoutRestaurantInput, BanquetUncheckedUpdateWithoutRestaurantInput>
    create: XOR<BanquetCreateWithoutRestaurantInput, BanquetUncheckedCreateWithoutRestaurantInput>
  }

  export type BanquetUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: BanquetWhereUniqueInput
    data: XOR<BanquetUpdateWithoutRestaurantInput, BanquetUncheckedUpdateWithoutRestaurantInput>
  }

  export type BanquetUpdateManyWithWhereWithoutRestaurantInput = {
    where: BanquetScalarWhereInput
    data: XOR<BanquetUpdateManyMutationInput, BanquetUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type BanquetScalarWhereInput = {
    AND?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
    OR?: BanquetScalarWhereInput[]
    NOT?: BanquetScalarWhereInput | BanquetScalarWhereInput[]
    id?: StringFilter<'Banquet'> | string
    title?: StringNullableFilter<'Banquet'> | string | null
    eventType?: StringNullableFilter<'Banquet'> | string | null
    guestCount?: IntFilter<'Banquet'> | number
    date?: DateTimeFilter<'Banquet'> | Date | string
    startTime?: StringNullableFilter<'Banquet'> | string | null
    endTime?: StringNullableFilter<'Banquet'> | string | null
    status?: EnumBanquetStatusFilter<'Banquet'> | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFilter<'Banquet'> | $Enums.PaymentStatus
    totalAmount?: IntFilter<'Banquet'> | number
    prepaymentAmount?: IntFilter<'Banquet'> | number
    remainingAmount?: IntFilter<'Banquet'> | number
    comment?: StringNullableFilter<'Banquet'> | string | null
    restaurantId?: StringFilter<'Banquet'> | string
    clientId?: StringFilter<'Banquet'> | string
    hallId?: StringNullableFilter<'Banquet'> | string | null
    createdById?: StringFilter<'Banquet'> | string
    createdAt?: DateTimeFilter<'Banquet'> | Date | string
    updatedAt?: DateTimeFilter<'Banquet'> | Date | string
  }

  export type SubscriptionPaymentUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: SubscriptionPaymentWhereUniqueInput
    update: XOR<
      SubscriptionPaymentUpdateWithoutRestaurantInput,
      SubscriptionPaymentUncheckedUpdateWithoutRestaurantInput
    >
    create: XOR<
      SubscriptionPaymentCreateWithoutRestaurantInput,
      SubscriptionPaymentUncheckedCreateWithoutRestaurantInput
    >
  }

  export type SubscriptionPaymentUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: SubscriptionPaymentWhereUniqueInput
    data: XOR<
      SubscriptionPaymentUpdateWithoutRestaurantInput,
      SubscriptionPaymentUncheckedUpdateWithoutRestaurantInput
    >
  }

  export type SubscriptionPaymentUpdateManyWithWhereWithoutRestaurantInput = {
    where: SubscriptionPaymentScalarWhereInput
    data: XOR<
      SubscriptionPaymentUpdateManyMutationInput,
      SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantInput
    >
  }

  export type SubscriptionPaymentScalarWhereInput = {
    AND?: SubscriptionPaymentScalarWhereInput | SubscriptionPaymentScalarWhereInput[]
    OR?: SubscriptionPaymentScalarWhereInput[]
    NOT?: SubscriptionPaymentScalarWhereInput | SubscriptionPaymentScalarWhereInput[]
    id?: StringFilter<'SubscriptionPayment'> | string
    amount?: IntFilter<'SubscriptionPayment'> | number
    currency?: StringFilter<'SubscriptionPayment'> | string
    status?: StringFilter<'SubscriptionPayment'> | string
    provider?: StringNullableFilter<'SubscriptionPayment'> | string | null
    externalId?: StringNullableFilter<'SubscriptionPayment'> | string | null
    paidAt?: DateTimeNullableFilter<'SubscriptionPayment'> | Date | string | null
    restaurantId?: StringFilter<'SubscriptionPayment'> | string
    planId?: StringNullableFilter<'SubscriptionPayment'> | string | null
    createdAt?: DateTimeFilter<'SubscriptionPayment'> | Date | string
    updatedAt?: DateTimeFilter<'SubscriptionPayment'> | Date | string
  }

  export type RestaurantCreateWithoutUsersInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    halls?: HallCreateNestedManyWithoutRestaurantInput
    clients?: ClientCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    halls?: HallUncheckedCreateNestedManyWithoutRestaurantInput
    clients?: ClientUncheckedCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetUncheckedCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutUsersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutUsersInput, RestaurantUncheckedCreateWithoutUsersInput>
  }

  export type BanquetCreateWithoutCreatedByInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBanquetsInput
    client: ClientCreateNestedOneWithoutBanquetsInput
    hall?: HallCreateNestedOneWithoutBanquetsInput
    payments?: PaymentCreateNestedManyWithoutBanquetInput
  }

  export type BanquetUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    clientId: string
    hallId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBanquetInput
  }

  export type BanquetCreateOrConnectWithoutCreatedByInput = {
    where: BanquetWhereUniqueInput
    create: XOR<BanquetCreateWithoutCreatedByInput, BanquetUncheckedCreateWithoutCreatedByInput>
  }

  export type BanquetCreateManyCreatedByInputEnvelope = {
    data: BanquetCreateManyCreatedByInput | BanquetCreateManyCreatedByInput[]
  }

  export type RestaurantUpsertWithoutUsersInput = {
    update: XOR<RestaurantUpdateWithoutUsersInput, RestaurantUncheckedUpdateWithoutUsersInput>
    create: XOR<RestaurantCreateWithoutUsersInput, RestaurantUncheckedCreateWithoutUsersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutUsersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutUsersInput, RestaurantUncheckedUpdateWithoutUsersInput>
  }

  export type RestaurantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    halls?: HallUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    halls?: HallUncheckedUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUncheckedUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type BanquetUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: BanquetWhereUniqueInput
    update: XOR<BanquetUpdateWithoutCreatedByInput, BanquetUncheckedUpdateWithoutCreatedByInput>
    create: XOR<BanquetCreateWithoutCreatedByInput, BanquetUncheckedCreateWithoutCreatedByInput>
  }

  export type BanquetUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: BanquetWhereUniqueInput
    data: XOR<BanquetUpdateWithoutCreatedByInput, BanquetUncheckedUpdateWithoutCreatedByInput>
  }

  export type BanquetUpdateManyWithWhereWithoutCreatedByInput = {
    where: BanquetScalarWhereInput
    data: XOR<BanquetUpdateManyMutationInput, BanquetUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RestaurantCreateWithoutHallsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRestaurantInput
    clients?: ClientCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutHallsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRestaurantInput
    clients?: ClientUncheckedCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetUncheckedCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutHallsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutHallsInput, RestaurantUncheckedCreateWithoutHallsInput>
  }

  export type BanquetCreateWithoutHallInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBanquetsInput
    client: ClientCreateNestedOneWithoutBanquetsInput
    createdBy: UserCreateNestedOneWithoutBanquetsCreatedInput
    payments?: PaymentCreateNestedManyWithoutBanquetInput
  }

  export type BanquetUncheckedCreateWithoutHallInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    clientId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBanquetInput
  }

  export type BanquetCreateOrConnectWithoutHallInput = {
    where: BanquetWhereUniqueInput
    create: XOR<BanquetCreateWithoutHallInput, BanquetUncheckedCreateWithoutHallInput>
  }

  export type BanquetCreateManyHallInputEnvelope = {
    data: BanquetCreateManyHallInput | BanquetCreateManyHallInput[]
  }

  export type RestaurantUpsertWithoutHallsInput = {
    update: XOR<RestaurantUpdateWithoutHallsInput, RestaurantUncheckedUpdateWithoutHallsInput>
    create: XOR<RestaurantCreateWithoutHallsInput, RestaurantUncheckedCreateWithoutHallsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutHallsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutHallsInput, RestaurantUncheckedUpdateWithoutHallsInput>
  }

  export type RestaurantUpdateWithoutHallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutHallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUncheckedUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type BanquetUpsertWithWhereUniqueWithoutHallInput = {
    where: BanquetWhereUniqueInput
    update: XOR<BanquetUpdateWithoutHallInput, BanquetUncheckedUpdateWithoutHallInput>
    create: XOR<BanquetCreateWithoutHallInput, BanquetUncheckedCreateWithoutHallInput>
  }

  export type BanquetUpdateWithWhereUniqueWithoutHallInput = {
    where: BanquetWhereUniqueInput
    data: XOR<BanquetUpdateWithoutHallInput, BanquetUncheckedUpdateWithoutHallInput>
  }

  export type BanquetUpdateManyWithWhereWithoutHallInput = {
    where: BanquetScalarWhereInput
    data: XOR<BanquetUpdateManyMutationInput, BanquetUncheckedUpdateManyWithoutHallInput>
  }

  export type RestaurantCreateWithoutClientsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRestaurantInput
    halls?: HallCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutClientsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRestaurantInput
    halls?: HallUncheckedCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetUncheckedCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutClientsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutClientsInput, RestaurantUncheckedCreateWithoutClientsInput>
  }

  export type BanquetCreateWithoutClientInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBanquetsInput
    hall?: HallCreateNestedOneWithoutBanquetsInput
    createdBy: UserCreateNestedOneWithoutBanquetsCreatedInput
    payments?: PaymentCreateNestedManyWithoutBanquetInput
  }

  export type BanquetUncheckedCreateWithoutClientInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    hallId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBanquetInput
  }

  export type BanquetCreateOrConnectWithoutClientInput = {
    where: BanquetWhereUniqueInput
    create: XOR<BanquetCreateWithoutClientInput, BanquetUncheckedCreateWithoutClientInput>
  }

  export type BanquetCreateManyClientInputEnvelope = {
    data: BanquetCreateManyClientInput | BanquetCreateManyClientInput[]
  }

  export type RestaurantUpsertWithoutClientsInput = {
    update: XOR<RestaurantUpdateWithoutClientsInput, RestaurantUncheckedUpdateWithoutClientsInput>
    create: XOR<RestaurantCreateWithoutClientsInput, RestaurantUncheckedCreateWithoutClientsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutClientsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutClientsInput, RestaurantUncheckedUpdateWithoutClientsInput>
  }

  export type RestaurantUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRestaurantNestedInput
    halls?: HallUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRestaurantNestedInput
    halls?: HallUncheckedUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUncheckedUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type BanquetUpsertWithWhereUniqueWithoutClientInput = {
    where: BanquetWhereUniqueInput
    update: XOR<BanquetUpdateWithoutClientInput, BanquetUncheckedUpdateWithoutClientInput>
    create: XOR<BanquetCreateWithoutClientInput, BanquetUncheckedCreateWithoutClientInput>
  }

  export type BanquetUpdateWithWhereUniqueWithoutClientInput = {
    where: BanquetWhereUniqueInput
    data: XOR<BanquetUpdateWithoutClientInput, BanquetUncheckedUpdateWithoutClientInput>
  }

  export type BanquetUpdateManyWithWhereWithoutClientInput = {
    where: BanquetScalarWhereInput
    data: XOR<BanquetUpdateManyMutationInput, BanquetUncheckedUpdateManyWithoutClientInput>
  }

  export type RestaurantCreateWithoutBanquetsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRestaurantInput
    halls?: HallCreateNestedManyWithoutRestaurantInput
    clients?: ClientCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutBanquetsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRestaurantInput
    halls?: HallUncheckedCreateNestedManyWithoutRestaurantInput
    clients?: ClientUncheckedCreateNestedManyWithoutRestaurantInput
    payments?: SubscriptionPaymentUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutBanquetsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutBanquetsInput, RestaurantUncheckedCreateWithoutBanquetsInput>
  }

  export type ClientCreateWithoutBanquetsInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutBanquetsInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutBanquetsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBanquetsInput, ClientUncheckedCreateWithoutBanquetsInput>
  }

  export type HallCreateWithoutBanquetsInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutHallsInput
  }

  export type HallUncheckedCreateWithoutBanquetsInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HallCreateOrConnectWithoutBanquetsInput = {
    where: HallWhereUniqueInput
    create: XOR<HallCreateWithoutBanquetsInput, HallUncheckedCreateWithoutBanquetsInput>
  }

  export type UserCreateWithoutBanquetsCreatedInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBanquetsCreatedInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBanquetsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutBanquetsCreatedInput,
      UserUncheckedCreateWithoutBanquetsCreatedInput
    >
  }

  export type PaymentCreateWithoutBanquetInput = {
    id?: string
    amount: number
    method?: string | null
    comment?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBanquetInput = {
    id?: string
    amount: number
    method?: string | null
    comment?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBanquetInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBanquetInput, PaymentUncheckedCreateWithoutBanquetInput>
  }

  export type PaymentCreateManyBanquetInputEnvelope = {
    data: PaymentCreateManyBanquetInput | PaymentCreateManyBanquetInput[]
  }

  export type RestaurantUpsertWithoutBanquetsInput = {
    update: XOR<RestaurantUpdateWithoutBanquetsInput, RestaurantUncheckedUpdateWithoutBanquetsInput>
    create: XOR<RestaurantCreateWithoutBanquetsInput, RestaurantUncheckedCreateWithoutBanquetsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutBanquetsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutBanquetsInput, RestaurantUncheckedUpdateWithoutBanquetsInput>
  }

  export type RestaurantUpdateWithoutBanquetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRestaurantNestedInput
    halls?: HallUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutBanquetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRestaurantNestedInput
    halls?: HallUncheckedUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutRestaurantNestedInput
    payments?: SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type ClientUpsertWithoutBanquetsInput = {
    update: XOR<ClientUpdateWithoutBanquetsInput, ClientUncheckedUpdateWithoutBanquetsInput>
    create: XOR<ClientCreateWithoutBanquetsInput, ClientUncheckedCreateWithoutBanquetsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBanquetsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBanquetsInput, ClientUncheckedUpdateWithoutBanquetsInput>
  }

  export type ClientUpdateWithoutBanquetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutBanquetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallUpsertWithoutBanquetsInput = {
    update: XOR<HallUpdateWithoutBanquetsInput, HallUncheckedUpdateWithoutBanquetsInput>
    create: XOR<HallCreateWithoutBanquetsInput, HallUncheckedCreateWithoutBanquetsInput>
    where?: HallWhereInput
  }

  export type HallUpdateToOneWithWhereWithoutBanquetsInput = {
    where?: HallWhereInput
    data: XOR<HallUpdateWithoutBanquetsInput, HallUncheckedUpdateWithoutBanquetsInput>
  }

  export type HallUpdateWithoutBanquetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutHallsNestedInput
  }

  export type HallUncheckedUpdateWithoutBanquetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBanquetsCreatedInput = {
    update: XOR<
      UserUpdateWithoutBanquetsCreatedInput,
      UserUncheckedUpdateWithoutBanquetsCreatedInput
    >
    create: XOR<
      UserCreateWithoutBanquetsCreatedInput,
      UserUncheckedCreateWithoutBanquetsCreatedInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBanquetsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBanquetsCreatedInput, UserUncheckedUpdateWithoutBanquetsCreatedInput>
  }

  export type UserUpdateWithoutBanquetsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutBanquetsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutBanquetInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBanquetInput, PaymentUncheckedUpdateWithoutBanquetInput>
    create: XOR<PaymentCreateWithoutBanquetInput, PaymentUncheckedCreateWithoutBanquetInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBanquetInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBanquetInput, PaymentUncheckedUpdateWithoutBanquetInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBanquetInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBanquetInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<'Payment'> | string
    amount?: IntFilter<'Payment'> | number
    method?: StringNullableFilter<'Payment'> | string | null
    comment?: StringNullableFilter<'Payment'> | string | null
    banquetId?: StringFilter<'Payment'> | string
    paidAt?: DateTimeFilter<'Payment'> | Date | string
    createdAt?: DateTimeFilter<'Payment'> | Date | string
  }

  export type BanquetCreateWithoutPaymentsInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBanquetsInput
    client: ClientCreateNestedOneWithoutBanquetsInput
    hall?: HallCreateNestedOneWithoutBanquetsInput
    createdBy: UserCreateNestedOneWithoutBanquetsCreatedInput
  }

  export type BanquetUncheckedCreateWithoutPaymentsInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    clientId: string
    hallId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BanquetCreateOrConnectWithoutPaymentsInput = {
    where: BanquetWhereUniqueInput
    create: XOR<BanquetCreateWithoutPaymentsInput, BanquetUncheckedCreateWithoutPaymentsInput>
  }

  export type BanquetUpsertWithoutPaymentsInput = {
    update: XOR<BanquetUpdateWithoutPaymentsInput, BanquetUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BanquetCreateWithoutPaymentsInput, BanquetUncheckedCreateWithoutPaymentsInput>
    where?: BanquetWhereInput
  }

  export type BanquetUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BanquetWhereInput
    data: XOR<BanquetUpdateWithoutPaymentsInput, BanquetUncheckedUpdateWithoutPaymentsInput>
  }

  export type BanquetUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBanquetsNestedInput
    client?: ClientUpdateOneRequiredWithoutBanquetsNestedInput
    hall?: HallUpdateOneWithoutBanquetsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutBanquetsCreatedNestedInput
  }

  export type BanquetUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentCreateWithoutPlanInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutPaymentsInput
  }

  export type SubscriptionPaymentUncheckedCreateWithoutPlanInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPaymentCreateOrConnectWithoutPlanInput = {
    where: SubscriptionPaymentWhereUniqueInput
    create: XOR<
      SubscriptionPaymentCreateWithoutPlanInput,
      SubscriptionPaymentUncheckedCreateWithoutPlanInput
    >
  }

  export type SubscriptionPaymentCreateManyPlanInputEnvelope = {
    data: SubscriptionPaymentCreateManyPlanInput | SubscriptionPaymentCreateManyPlanInput[]
  }

  export type SubscriptionPaymentUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionPaymentWhereUniqueInput
    update: XOR<
      SubscriptionPaymentUpdateWithoutPlanInput,
      SubscriptionPaymentUncheckedUpdateWithoutPlanInput
    >
    create: XOR<
      SubscriptionPaymentCreateWithoutPlanInput,
      SubscriptionPaymentUncheckedCreateWithoutPlanInput
    >
  }

  export type SubscriptionPaymentUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionPaymentWhereUniqueInput
    data: XOR<
      SubscriptionPaymentUpdateWithoutPlanInput,
      SubscriptionPaymentUncheckedUpdateWithoutPlanInput
    >
  }

  export type SubscriptionPaymentUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionPaymentScalarWhereInput
    data: XOR<
      SubscriptionPaymentUpdateManyMutationInput,
      SubscriptionPaymentUncheckedUpdateManyWithoutPlanInput
    >
  }

  export type RestaurantCreateWithoutPaymentsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRestaurantInput
    halls?: HallCreateNestedManyWithoutRestaurantInput
    clients?: ClientCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    subscriptionEndsAt?: Date | string | null
    isBlocked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRestaurantInput
    halls?: HallUncheckedCreateNestedManyWithoutRestaurantInput
    clients?: ClientUncheckedCreateNestedManyWithoutRestaurantInput
    banquets?: BanquetUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutPaymentsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutPaymentsInput, RestaurantUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionPlanCreateWithoutPaymentsInput = {
    id?: string
    name: string
    price: number
    currency?: string
    period: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    price: number
    currency?: string
    period: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<
      SubscriptionPlanCreateWithoutPaymentsInput,
      SubscriptionPlanUncheckedCreateWithoutPaymentsInput
    >
  }

  export type RestaurantUpsertWithoutPaymentsInput = {
    update: XOR<RestaurantUpdateWithoutPaymentsInput, RestaurantUncheckedUpdateWithoutPaymentsInput>
    create: XOR<RestaurantCreateWithoutPaymentsInput, RestaurantUncheckedCreateWithoutPaymentsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutPaymentsInput, RestaurantUncheckedUpdateWithoutPaymentsInput>
  }

  export type RestaurantUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRestaurantNestedInput
    halls?: HallUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRestaurantNestedInput
    halls?: HallUncheckedUpdateManyWithoutRestaurantNestedInput
    clients?: ClientUncheckedUpdateManyWithoutRestaurantNestedInput
    banquets?: BanquetUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type SubscriptionPlanUpsertWithoutPaymentsInput = {
    update: XOR<
      SubscriptionPlanUpdateWithoutPaymentsInput,
      SubscriptionPlanUncheckedUpdateWithoutPaymentsInput
    >
    create: XOR<
      SubscriptionPlanCreateWithoutPaymentsInput,
      SubscriptionPlanUncheckedCreateWithoutPaymentsInput
    >
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<
      SubscriptionPlanUpdateWithoutPaymentsInput,
      SubscriptionPlanUncheckedUpdateWithoutPaymentsInput
    >
  }

  export type SubscriptionPlanUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRestaurantInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HallCreateManyRestaurantInput = {
    id?: string
    name: string
    capacity: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateManyRestaurantInput = {
    id?: string
    name: string
    phone: string
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BanquetCreateManyRestaurantInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    clientId: string
    hallId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPaymentCreateManyRestaurantInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    planId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquetsCreated?: BanquetUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquetsCreated?: BanquetUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquets?: BanquetUpdateManyWithoutHallNestedInput
  }

  export type HallUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquets?: BanquetUncheckedUpdateManyWithoutHallNestedInput
  }

  export type HallUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquets?: BanquetUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banquets?: BanquetUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BanquetUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutBanquetsNestedInput
    hall?: HallUpdateOneWithoutBanquetsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutBanquetsCreatedNestedInput
    payments?: PaymentUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneWithoutPaymentsNestedInput
  }

  export type SubscriptionPaymentUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BanquetCreateManyCreatedByInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    clientId: string
    hallId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BanquetUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBanquetsNestedInput
    client?: ClientUpdateOneRequiredWithoutBanquetsNestedInput
    hall?: HallUpdateOneWithoutBanquetsNestedInput
    payments?: PaymentUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BanquetCreateManyHallInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    clientId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BanquetUpdateWithoutHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBanquetsNestedInput
    client?: ClientUpdateOneRequiredWithoutBanquetsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutBanquetsCreatedNestedInput
    payments?: PaymentUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateWithoutHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateManyWithoutHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BanquetCreateManyClientInput = {
    id?: string
    title?: string | null
    eventType?: string | null
    guestCount: number
    date: Date | string
    startTime?: string | null
    endTime?: string | null
    status?: $Enums.BanquetStatus
    paymentStatus?: $Enums.PaymentStatus
    totalAmount?: number
    prepaymentAmount?: number
    remainingAmount?: number
    comment?: string | null
    restaurantId: string
    hallId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BanquetUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBanquetsNestedInput
    hall?: HallUpdateOneWithoutBanquetsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutBanquetsCreatedNestedInput
    payments?: PaymentUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBanquetNestedInput
  }

  export type BanquetUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBanquetStatusFieldUpdateOperationsInput | $Enums.BanquetStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    prepaymentAmount?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    hallId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyBanquetInput = {
    id?: string
    amount: number
    method?: string | null
    comment?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutBanquetInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBanquetInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBanquetInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentCreateManyPlanInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    provider?: string | null
    externalId?: string | null
    paidAt?: Date | string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPaymentUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type SubscriptionPaymentUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPaymentUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
