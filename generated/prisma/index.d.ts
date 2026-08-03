
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EpaEntry
 * 
 */
export type EpaEntry = $Result.DefaultSelection<Prisma.$EpaEntryPayload>
/**
 * Model AvatarEntry
 * 
 */
export type AvatarEntry = $Result.DefaultSelection<Prisma.$AvatarEntryPayload>
/**
 * Model AwardEntry
 * 
 */
export type AwardEntry = $Result.DefaultSelection<Prisma.$AwardEntryPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model District
 * 
 */
export type District = $Result.DefaultSelection<Prisma.$DistrictPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamEpa
 * 
 */
export type TeamEpa = $Result.DefaultSelection<Prisma.$TeamEpaPayload>
/**
 * Model EventTeam
 * 
 */
export type EventTeam = $Result.DefaultSelection<Prisma.$EventTeamPayload>
/**
 * Model DistrictTeam
 * 
 */
export type DistrictTeam = $Result.DefaultSelection<Prisma.$DistrictTeamPayload>
/**
 * Model TeamAvatar
 * 
 */
export type TeamAvatar = $Result.DefaultSelection<Prisma.$TeamAvatarPayload>
/**
 * Model Award
 * 
 */
export type Award = $Result.DefaultSelection<Prisma.$AwardPayload>
/**
 * Model SyncLog
 * 
 */
export type SyncLog = $Result.DefaultSelection<Prisma.$SyncLogPayload>
/**
 * Model Pick
 * 
 */
export type Pick = $Result.DefaultSelection<Prisma.$PickPayload>
/**
 * Model Draft
 * 
 */
export type Draft = $Result.DefaultSelection<Prisma.$DraftPayload>
/**
 * Model SyncCursor
 * 
 */
export type SyncCursor = $Result.DefaultSelection<Prisma.$SyncCursorPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model TeamEventResult
 * 
 */
export type TeamEventResult = $Result.DefaultSelection<Prisma.$TeamEventResultPayload>
/**
 * Model TeamScore
 * 
 */
export type TeamScore = $Result.DefaultSelection<Prisma.$TeamScorePayload>
/**
 * Model ScoreWeights
 * 
 */
export type ScoreWeights = $Result.DefaultSelection<Prisma.$ScoreWeightsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamEpa`: Exposes CRUD operations for the **TeamEpa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamEpas
    * const teamEpas = await prisma.teamEpa.findMany()
    * ```
    */
  get teamEpa(): Prisma.TeamEpaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTeam`: Exposes CRUD operations for the **EventTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTeams
    * const eventTeams = await prisma.eventTeam.findMany()
    * ```
    */
  get eventTeam(): Prisma.EventTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.districtTeam`: Exposes CRUD operations for the **DistrictTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistrictTeams
    * const districtTeams = await prisma.districtTeam.findMany()
    * ```
    */
  get districtTeam(): Prisma.DistrictTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamAvatar`: Exposes CRUD operations for the **TeamAvatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamAvatars
    * const teamAvatars = await prisma.teamAvatar.findMany()
    * ```
    */
  get teamAvatar(): Prisma.TeamAvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award`: Exposes CRUD operations for the **Award** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awards
    * const awards = await prisma.award.findMany()
    * ```
    */
  get award(): Prisma.AwardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncLog`: Exposes CRUD operations for the **SyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncLogs
    * const syncLogs = await prisma.syncLog.findMany()
    * ```
    */
  get syncLog(): Prisma.SyncLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pick`: Exposes CRUD operations for the **Pick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Picks
    * const picks = await prisma.pick.findMany()
    * ```
    */
  get pick(): Prisma.PickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.draft`: Exposes CRUD operations for the **Draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drafts
    * const drafts = await prisma.draft.findMany()
    * ```
    */
  get draft(): Prisma.DraftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncCursor`: Exposes CRUD operations for the **SyncCursor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncCursors
    * const syncCursors = await prisma.syncCursor.findMany()
    * ```
    */
  get syncCursor(): Prisma.SyncCursorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamEventResult`: Exposes CRUD operations for the **TeamEventResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamEventResults
    * const teamEventResults = await prisma.teamEventResult.findMany()
    * ```
    */
  get teamEventResult(): Prisma.TeamEventResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamScore`: Exposes CRUD operations for the **TeamScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamScores
    * const teamScores = await prisma.teamScore.findMany()
    * ```
    */
  get teamScore(): Prisma.TeamScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scoreWeights`: Exposes CRUD operations for the **ScoreWeights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoreWeights
    * const scoreWeights = await prisma.scoreWeights.findMany()
    * ```
    */
  get scoreWeights(): Prisma.ScoreWeightsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
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
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
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

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

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

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    District: 'District',
    Event: 'Event',
    Team: 'Team',
    TeamEpa: 'TeamEpa',
    EventTeam: 'EventTeam',
    DistrictTeam: 'DistrictTeam',
    TeamAvatar: 'TeamAvatar',
    Award: 'Award',
    SyncLog: 'SyncLog',
    Pick: 'Pick',
    Draft: 'Draft',
    SyncCursor: 'SyncCursor',
    Rating: 'Rating',
    TeamEventResult: 'TeamEventResult',
    TeamScore: 'TeamScore',
    ScoreWeights: 'ScoreWeights'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "account" | "session" | "user" | "verificationToken" | "district" | "event" | "team" | "teamEpa" | "eventTeam" | "districtTeam" | "teamAvatar" | "award" | "syncLog" | "pick" | "draft" | "syncCursor" | "rating" | "teamEventResult" | "teamScore" | "scoreWeights"
      txIsolationLevel: never
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      District: {
        payload: Prisma.$DistrictPayload<ExtArgs>
        fields: Prisma.DistrictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findFirst: {
            args: Prisma.DistrictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findMany: {
            args: Prisma.DistrictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          create: {
            args: Prisma.DistrictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          createMany: {
            args: Prisma.DistrictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DistrictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          update: {
            args: Prisma.DistrictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          deleteMany: {
            args: Prisma.DistrictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DistrictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.DistrictGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DistrictFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DistrictAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DistrictCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TeamFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TeamAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamEpa: {
        payload: Prisma.$TeamEpaPayload<ExtArgs>
        fields: Prisma.TeamEpaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamEpaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamEpaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload>
          }
          findFirst: {
            args: Prisma.TeamEpaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamEpaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload>
          }
          findMany: {
            args: Prisma.TeamEpaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload>[]
          }
          create: {
            args: Prisma.TeamEpaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload>
          }
          createMany: {
            args: Prisma.TeamEpaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamEpaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload>
          }
          update: {
            args: Prisma.TeamEpaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload>
          }
          deleteMany: {
            args: Prisma.TeamEpaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamEpaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamEpaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEpaPayload>
          }
          aggregate: {
            args: Prisma.TeamEpaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamEpa>
          }
          groupBy: {
            args: Prisma.TeamEpaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamEpaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TeamEpaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TeamEpaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TeamEpaCountArgs<ExtArgs>
            result: $Utils.Optional<TeamEpaCountAggregateOutputType> | number
          }
        }
      }
      EventTeam: {
        payload: Prisma.$EventTeamPayload<ExtArgs>
        fields: Prisma.EventTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload>
          }
          findFirst: {
            args: Prisma.EventTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload>
          }
          findMany: {
            args: Prisma.EventTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload>[]
          }
          create: {
            args: Prisma.EventTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload>
          }
          createMany: {
            args: Prisma.EventTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload>
          }
          update: {
            args: Prisma.EventTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload>
          }
          deleteMany: {
            args: Prisma.EventTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTeamPayload>
          }
          aggregate: {
            args: Prisma.EventTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTeam>
          }
          groupBy: {
            args: Prisma.EventTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTeamGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventTeamFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventTeamAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventTeamCountArgs<ExtArgs>
            result: $Utils.Optional<EventTeamCountAggregateOutputType> | number
          }
        }
      }
      DistrictTeam: {
        payload: Prisma.$DistrictTeamPayload<ExtArgs>
        fields: Prisma.DistrictTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload>
          }
          findFirst: {
            args: Prisma.DistrictTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload>
          }
          findMany: {
            args: Prisma.DistrictTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload>[]
          }
          create: {
            args: Prisma.DistrictTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload>
          }
          createMany: {
            args: Prisma.DistrictTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DistrictTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload>
          }
          update: {
            args: Prisma.DistrictTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload>
          }
          deleteMany: {
            args: Prisma.DistrictTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DistrictTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictTeamPayload>
          }
          aggregate: {
            args: Prisma.DistrictTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrictTeam>
          }
          groupBy: {
            args: Prisma.DistrictTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictTeamGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DistrictTeamFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DistrictTeamAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DistrictTeamCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictTeamCountAggregateOutputType> | number
          }
        }
      }
      TeamAvatar: {
        payload: Prisma.$TeamAvatarPayload<ExtArgs>
        fields: Prisma.TeamAvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamAvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamAvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload>
          }
          findFirst: {
            args: Prisma.TeamAvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamAvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload>
          }
          findMany: {
            args: Prisma.TeamAvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload>[]
          }
          create: {
            args: Prisma.TeamAvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload>
          }
          createMany: {
            args: Prisma.TeamAvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamAvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload>
          }
          update: {
            args: Prisma.TeamAvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload>
          }
          deleteMany: {
            args: Prisma.TeamAvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamAvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamAvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAvatarPayload>
          }
          aggregate: {
            args: Prisma.TeamAvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamAvatar>
          }
          groupBy: {
            args: Prisma.TeamAvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamAvatarGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TeamAvatarFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TeamAvatarAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TeamAvatarCountArgs<ExtArgs>
            result: $Utils.Optional<TeamAvatarCountAggregateOutputType> | number
          }
        }
      }
      Award: {
        payload: Prisma.$AwardPayload<ExtArgs>
        fields: Prisma.AwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findFirst: {
            args: Prisma.AwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findMany: {
            args: Prisma.AwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          create: {
            args: Prisma.AwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          createMany: {
            args: Prisma.AwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          update: {
            args: Prisma.AwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          deleteMany: {
            args: Prisma.AwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          aggregate: {
            args: Prisma.AwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward>
          }
          groupBy: {
            args: Prisma.AwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AwardFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AwardAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AwardCountArgs<ExtArgs>
            result: $Utils.Optional<AwardCountAggregateOutputType> | number
          }
        }
      }
      SyncLog: {
        payload: Prisma.$SyncLogPayload<ExtArgs>
        fields: Prisma.SyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findFirst: {
            args: Prisma.SyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findMany: {
            args: Prisma.SyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          create: {
            args: Prisma.SyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          createMany: {
            args: Prisma.SyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          update: {
            args: Prisma.SyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          deleteMany: {
            args: Prisma.SyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          aggregate: {
            args: Prisma.SyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncLog>
          }
          groupBy: {
            args: Prisma.SyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SyncLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SyncLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<SyncLogCountAggregateOutputType> | number
          }
        }
      }
      Pick: {
        payload: Prisma.$PickPayload<ExtArgs>
        fields: Prisma.PickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload>
          }
          findFirst: {
            args: Prisma.PickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload>
          }
          findMany: {
            args: Prisma.PickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload>[]
          }
          create: {
            args: Prisma.PickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload>
          }
          createMany: {
            args: Prisma.PickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload>
          }
          update: {
            args: Prisma.PickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload>
          }
          deleteMany: {
            args: Prisma.PickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickPayload>
          }
          aggregate: {
            args: Prisma.PickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePick>
          }
          groupBy: {
            args: Prisma.PickGroupByArgs<ExtArgs>
            result: $Utils.Optional<PickGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PickFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PickAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PickCountArgs<ExtArgs>
            result: $Utils.Optional<PickCountAggregateOutputType> | number
          }
        }
      }
      Draft: {
        payload: Prisma.$DraftPayload<ExtArgs>
        fields: Prisma.DraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          findFirst: {
            args: Prisma.DraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          findMany: {
            args: Prisma.DraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>[]
          }
          create: {
            args: Prisma.DraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          createMany: {
            args: Prisma.DraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          update: {
            args: Prisma.DraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          deleteMany: {
            args: Prisma.DraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          aggregate: {
            args: Prisma.DraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraft>
          }
          groupBy: {
            args: Prisma.DraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<DraftGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DraftFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DraftAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DraftCountArgs<ExtArgs>
            result: $Utils.Optional<DraftCountAggregateOutputType> | number
          }
        }
      }
      SyncCursor: {
        payload: Prisma.$SyncCursorPayload<ExtArgs>
        fields: Prisma.SyncCursorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncCursorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncCursorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload>
          }
          findFirst: {
            args: Prisma.SyncCursorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncCursorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload>
          }
          findMany: {
            args: Prisma.SyncCursorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload>[]
          }
          create: {
            args: Prisma.SyncCursorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload>
          }
          createMany: {
            args: Prisma.SyncCursorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SyncCursorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload>
          }
          update: {
            args: Prisma.SyncCursorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload>
          }
          deleteMany: {
            args: Prisma.SyncCursorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncCursorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncCursorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncCursorPayload>
          }
          aggregate: {
            args: Prisma.SyncCursorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncCursor>
          }
          groupBy: {
            args: Prisma.SyncCursorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncCursorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SyncCursorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SyncCursorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SyncCursorCountArgs<ExtArgs>
            result: $Utils.Optional<SyncCursorCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RatingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RatingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      TeamEventResult: {
        payload: Prisma.$TeamEventResultPayload<ExtArgs>
        fields: Prisma.TeamEventResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamEventResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamEventResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload>
          }
          findFirst: {
            args: Prisma.TeamEventResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamEventResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload>
          }
          findMany: {
            args: Prisma.TeamEventResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload>[]
          }
          create: {
            args: Prisma.TeamEventResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload>
          }
          createMany: {
            args: Prisma.TeamEventResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamEventResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload>
          }
          update: {
            args: Prisma.TeamEventResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload>
          }
          deleteMany: {
            args: Prisma.TeamEventResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamEventResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamEventResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamEventResultPayload>
          }
          aggregate: {
            args: Prisma.TeamEventResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamEventResult>
          }
          groupBy: {
            args: Prisma.TeamEventResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamEventResultGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TeamEventResultFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TeamEventResultAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TeamEventResultCountArgs<ExtArgs>
            result: $Utils.Optional<TeamEventResultCountAggregateOutputType> | number
          }
        }
      }
      TeamScore: {
        payload: Prisma.$TeamScorePayload<ExtArgs>
        fields: Prisma.TeamScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload>
          }
          findFirst: {
            args: Prisma.TeamScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload>
          }
          findMany: {
            args: Prisma.TeamScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload>[]
          }
          create: {
            args: Prisma.TeamScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload>
          }
          createMany: {
            args: Prisma.TeamScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload>
          }
          update: {
            args: Prisma.TeamScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload>
          }
          deleteMany: {
            args: Prisma.TeamScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScorePayload>
          }
          aggregate: {
            args: Prisma.TeamScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamScore>
          }
          groupBy: {
            args: Prisma.TeamScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamScoreGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TeamScoreFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TeamScoreAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TeamScoreCountArgs<ExtArgs>
            result: $Utils.Optional<TeamScoreCountAggregateOutputType> | number
          }
        }
      }
      ScoreWeights: {
        payload: Prisma.$ScoreWeightsPayload<ExtArgs>
        fields: Prisma.ScoreWeightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreWeightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreWeightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload>
          }
          findFirst: {
            args: Prisma.ScoreWeightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreWeightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload>
          }
          findMany: {
            args: Prisma.ScoreWeightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload>[]
          }
          create: {
            args: Prisma.ScoreWeightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload>
          }
          createMany: {
            args: Prisma.ScoreWeightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScoreWeightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload>
          }
          update: {
            args: Prisma.ScoreWeightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload>
          }
          deleteMany: {
            args: Prisma.ScoreWeightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreWeightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScoreWeightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreWeightsPayload>
          }
          aggregate: {
            args: Prisma.ScoreWeightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoreWeights>
          }
          groupBy: {
            args: Prisma.ScoreWeightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreWeightsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ScoreWeightsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ScoreWeightsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ScoreWeightsCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreWeightsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    district?: DistrictOmit
    event?: EventOmit
    team?: TeamOmit
    teamEpa?: TeamEpaOmit
    eventTeam?: EventTeamOmit
    districtTeam?: DistrictTeamOmit
    teamAvatar?: TeamAvatarOmit
    award?: AwardOmit
    syncLog?: SyncLogOmit
    pick?: PickOmit
    draft?: DraftOmit
    syncCursor?: SyncCursorOmit
    rating?: RatingOmit
    teamEventResult?: TeamEventResultOmit
    teamScore?: TeamScoreOmit
    scoreWeights?: ScoreWeightsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EpaEntry
   */





  export type EpaEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    epaUnitless?: boolean
  }, ExtArgs["result"]["epaEntry"]>



  export type EpaEntrySelectScalar = {
    year?: boolean
    epaUnitless?: boolean
  }

  export type EpaEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"year" | "epaUnitless", ExtArgs["result"]["epaEntry"]>

  export type $EpaEntryPayload = {
    name: "EpaEntry"
    objects: {}
    scalars: {
      year: number
      epaUnitless: number
    }
    composites: {}
  }

  type EpaEntryGetPayload<S extends boolean | null | undefined | EpaEntryDefaultArgs> = $Result.GetResult<Prisma.$EpaEntryPayload, S>





  /**
   * Fields of the EpaEntry model
   */
  interface EpaEntryFieldRefs {
    readonly year: FieldRef<"EpaEntry", 'Int'>
    readonly epaUnitless: FieldRef<"EpaEntry", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * EpaEntry without action
   */
  export type EpaEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpaEntry
     */
    select?: EpaEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpaEntry
     */
    omit?: EpaEntryOmit<ExtArgs> | null
  }


  /**
   * Model AvatarEntry
   */





  export type AvatarEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    base64?: boolean
  }, ExtArgs["result"]["avatarEntry"]>



  export type AvatarEntrySelectScalar = {
    year?: boolean
    base64?: boolean
  }

  export type AvatarEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"year" | "base64", ExtArgs["result"]["avatarEntry"]>

  export type $AvatarEntryPayload = {
    name: "AvatarEntry"
    objects: {}
    scalars: {
      year: number
      base64: string
    }
    composites: {}
  }

  type AvatarEntryGetPayload<S extends boolean | null | undefined | AvatarEntryDefaultArgs> = $Result.GetResult<Prisma.$AvatarEntryPayload, S>





  /**
   * Fields of the AvatarEntry model
   */
  interface AvatarEntryFieldRefs {
    readonly year: FieldRef<"AvatarEntry", 'Int'>
    readonly base64: FieldRef<"AvatarEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvatarEntry without action
   */
  export type AvatarEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarEntry
     */
    select?: AvatarEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvatarEntry
     */
    omit?: AvatarEntryOmit<ExtArgs> | null
  }


  /**
   * Model AwardEntry
   */





  export type AwardEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventKey?: boolean
    awardType?: boolean
    name?: boolean
    year?: boolean
  }, ExtArgs["result"]["awardEntry"]>



  export type AwardEntrySelectScalar = {
    eventKey?: boolean
    awardType?: boolean
    name?: boolean
    year?: boolean
  }

  export type AwardEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventKey" | "awardType" | "name" | "year", ExtArgs["result"]["awardEntry"]>

  export type $AwardEntryPayload = {
    name: "AwardEntry"
    objects: {}
    scalars: {
      eventKey: string
      awardType: number
      name: string
      year: number
    }
    composites: {}
  }

  type AwardEntryGetPayload<S extends boolean | null | undefined | AwardEntryDefaultArgs> = $Result.GetResult<Prisma.$AwardEntryPayload, S>





  /**
   * Fields of the AwardEntry model
   */
  interface AwardEntryFieldRefs {
    readonly eventKey: FieldRef<"AwardEntry", 'String'>
    readonly awardType: FieldRef<"AwardEntry", 'Int'>
    readonly name: FieldRef<"AwardEntry", 'String'>
    readonly year: FieldRef<"AwardEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AwardEntry without action
   */
  export type AwardEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwardEntry
     */
    select?: AwardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwardEntry
     */
    omit?: AwardEntryOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const post = await prisma.post.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Post.
     * @param {PostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const post = await prisma.post.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post findRaw
   */
  export type PostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Post aggregateRaw
   */
  export type PostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * @param {VerificationTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VerificationToken.
     * @param {VerificationTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken findRaw
   */
  export type VerificationTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken aggregateRaw
   */
  export type VerificationTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model District
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    year: number | null
  }

  export type DistrictSumAggregateOutputType = {
    year: number | null
  }

  export type DistrictMinAggregateOutputType = {
    id: string | null
    key: string | null
    abbreviation: string | null
    displayName: string | null
    year: number | null
    updatedAt: Date | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: string | null
    key: string | null
    abbreviation: string | null
    displayName: string | null
    year: number | null
    updatedAt: Date | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    key: number
    abbreviation: number
    displayName: number
    year: number
    updatedAt: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    year?: true
  }

  export type DistrictSumAggregateInputType = {
    year?: true
  }

  export type DistrictMinAggregateInputType = {
    id?: true
    key?: true
    abbreviation?: true
    displayName?: true
    year?: true
    updatedAt?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    key?: true
    abbreviation?: true
    displayName?: true
    year?: true
    updatedAt?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    key?: true
    abbreviation?: true
    displayName?: true
    year?: true
    updatedAt?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithAggregationInput | DistrictOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: string
    key: string
    abbreviation: string
    displayName: string
    year: number
    updatedAt: Date
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    abbreviation?: boolean
    displayName?: boolean
    year?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["district"]>



  export type DistrictSelectScalar = {
    id?: boolean
    key?: boolean
    abbreviation?: boolean
    displayName?: boolean
    year?: boolean
    updatedAt?: boolean
  }

  export type DistrictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "abbreviation" | "displayName" | "year" | "updatedAt", ExtArgs["result"]["district"]>

  export type $DistrictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "District"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      abbreviation: string
      displayName: string
      year: number
      updatedAt: Date
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = $Result.GetResult<Prisma.$DistrictPayload, S>

  type DistrictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['District'], meta: { name: 'District' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictFindUniqueArgs>(args: SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictFindFirstArgs>(args?: SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictFindManyArgs>(args?: SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends DistrictCreateArgs>(args: SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Districts.
     * @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictCreateManyArgs>(args?: SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends DistrictDeleteArgs>(args: SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictUpdateArgs>(args: SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictDeleteManyArgs>(args?: SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictUpdateManyArgs>(args: SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends DistrictUpsertArgs>(args: SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Districts that matches the filter.
     * @param {DistrictFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const district = await prisma.district.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DistrictFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a District.
     * @param {DistrictAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const district = await prisma.district.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DistrictAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
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
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the District model
   */
  readonly fields: DistrictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the District model
   */
  interface DistrictFieldRefs {
    readonly id: FieldRef<"District", 'String'>
    readonly key: FieldRef<"District", 'String'>
    readonly abbreviation: FieldRef<"District", 'String'>
    readonly displayName: FieldRef<"District", 'String'>
    readonly year: FieldRef<"District", 'Int'>
    readonly updatedAt: FieldRef<"District", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * District findUnique
   */
  export type DistrictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findFirst
   */
  export type DistrictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findMany
   */
  export type DistrictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District create
   */
  export type DistrictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }

  /**
   * District createMany
   */
  export type DistrictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
  }

  /**
   * District update
   */
  export type DistrictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District upsert
   */
  export type DistrictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }

  /**
   * District delete
   */
  export type DistrictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to delete.
     */
    limit?: number
  }

  /**
   * District findRaw
   */
  export type DistrictFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * District aggregateRaw
   */
  export type DistrictAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * District without action
   */
  export type DistrictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    eventType: number | null
    year: number | null
    week: number | null
  }

  export type EventSumAggregateOutputType = {
    eventType: number | null
    year: number | null
    week: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    eventType: number | null
    eventTypeString: string | null
    year: number | null
    week: number | null
    startDate: string | null
    endDate: string | null
    districtKey: string | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    eventType: number | null
    eventTypeString: string | null
    year: number | null
    week: number | null
    startDate: string | null
    endDate: string | null
    districtKey: string | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    key: number
    name: number
    eventType: number
    eventTypeString: number
    year: number
    week: number
    startDate: number
    endDate: number
    districtKey: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    eventType?: true
    year?: true
    week?: true
  }

  export type EventSumAggregateInputType = {
    eventType?: true
    year?: true
    week?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    eventType?: true
    eventTypeString?: true
    year?: true
    week?: true
    startDate?: true
    endDate?: true
    districtKey?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    eventType?: true
    eventTypeString?: true
    year?: true
    week?: true
    startDate?: true
    endDate?: true
    districtKey?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    eventType?: true
    eventTypeString?: true
    year?: true
    week?: true
    startDate?: true
    endDate?: true
    districtKey?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    key: string
    name: string
    eventType: number
    eventTypeString: string
    year: number
    week: number | null
    startDate: string | null
    endDate: string | null
    districtKey: string | null
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    eventType?: boolean
    eventTypeString?: boolean
    year?: boolean
    week?: boolean
    startDate?: boolean
    endDate?: boolean
    districtKey?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    eventType?: boolean
    eventTypeString?: boolean
    year?: boolean
    week?: boolean
    startDate?: boolean
    endDate?: boolean
    districtKey?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "eventType" | "eventTypeString" | "year" | "week" | "startDate" | "endDate" | "districtKey" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      eventType: number
      eventTypeString: string
      year: number
      week: number | null
      startDate: string | null
      endDate: string | null
      districtKey: string | null
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly key: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly eventType: FieldRef<"Event", 'Int'>
    readonly eventTypeString: FieldRef<"Event", 'String'>
    readonly year: FieldRef<"Event", 'Int'>
    readonly week: FieldRef<"Event", 'Int'>
    readonly startDate: FieldRef<"Event", 'String'>
    readonly endDate: FieldRef<"Event", 'String'>
    readonly districtKey: FieldRef<"Event", 'String'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    number: number | null
  }

  export type TeamSumAggregateOutputType = {
    number: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    number: number | null
    key: string | null
    name: string | null
    nickname: string | null
    city: string | null
    stateProv: string | null
    country: string | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    number: number | null
    key: string | null
    name: string | null
    nickname: string | null
    city: string | null
    stateProv: string | null
    country: string | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    number: number
    key: number
    name: number
    nickname: number
    city: number
    stateProv: number
    country: number
    updatedAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    number?: true
  }

  export type TeamSumAggregateInputType = {
    number?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    number?: true
    key?: true
    name?: true
    nickname?: true
    city?: true
    stateProv?: true
    country?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    number?: true
    key?: true
    name?: true
    nickname?: true
    city?: true
    stateProv?: true
    country?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    number?: true
    key?: true
    name?: true
    nickname?: true
    city?: true
    stateProv?: true
    country?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    number: number
    key: string
    name: string | null
    nickname: string | null
    city: string | null
    stateProv: string | null
    country: string | null
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    key?: boolean
    name?: boolean
    nickname?: boolean
    city?: boolean
    stateProv?: boolean
    country?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    id?: boolean
    number?: boolean
    key?: boolean
    name?: boolean
    nickname?: boolean
    city?: boolean
    stateProv?: boolean
    country?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "key" | "name" | "nickname" | "city" | "stateProv" | "country" | "updatedAt", ExtArgs["result"]["team"]>

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      key: string
      name: string | null
      nickname: string | null
      city: string | null
      stateProv: string | null
      country: string | null
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * @param {TeamFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const team = await prisma.team.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TeamFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Team.
     * @param {TeamAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const team = await prisma.team.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TeamAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly number: FieldRef<"Team", 'Int'>
    readonly key: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly nickname: FieldRef<"Team", 'String'>
    readonly city: FieldRef<"Team", 'String'>
    readonly stateProv: FieldRef<"Team", 'String'>
    readonly country: FieldRef<"Team", 'String'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team findRaw
   */
  export type TeamFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Team aggregateRaw
   */
  export type TeamAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
  }


  /**
   * Model TeamEpa
   */

  export type AggregateTeamEpa = {
    _count: TeamEpaCountAggregateOutputType | null
    _avg: TeamEpaAvgAggregateOutputType | null
    _sum: TeamEpaSumAggregateOutputType | null
    _min: TeamEpaMinAggregateOutputType | null
    _max: TeamEpaMaxAggregateOutputType | null
  }

  export type TeamEpaAvgAggregateOutputType = {
    teamNumber: number | null
  }

  export type TeamEpaSumAggregateOutputType = {
    teamNumber: number | null
  }

  export type TeamEpaMinAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    updatedAt: Date | null
  }

  export type TeamEpaMaxAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    updatedAt: Date | null
  }

  export type TeamEpaCountAggregateOutputType = {
    id: number
    teamNumber: number
    updatedAt: number
    _all: number
  }


  export type TeamEpaAvgAggregateInputType = {
    teamNumber?: true
  }

  export type TeamEpaSumAggregateInputType = {
    teamNumber?: true
  }

  export type TeamEpaMinAggregateInputType = {
    id?: true
    teamNumber?: true
    updatedAt?: true
  }

  export type TeamEpaMaxAggregateInputType = {
    id?: true
    teamNumber?: true
    updatedAt?: true
  }

  export type TeamEpaCountAggregateInputType = {
    id?: true
    teamNumber?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamEpaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamEpa to aggregate.
     */
    where?: TeamEpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEpas to fetch.
     */
    orderBy?: TeamEpaOrderByWithRelationInput | TeamEpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamEpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEpas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamEpas
    **/
    _count?: true | TeamEpaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamEpaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamEpaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamEpaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamEpaMaxAggregateInputType
  }

  export type GetTeamEpaAggregateType<T extends TeamEpaAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamEpa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamEpa[P]>
      : GetScalarType<T[P], AggregateTeamEpa[P]>
  }




  export type TeamEpaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamEpaWhereInput
    orderBy?: TeamEpaOrderByWithAggregationInput | TeamEpaOrderByWithAggregationInput[]
    by: TeamEpaScalarFieldEnum[] | TeamEpaScalarFieldEnum
    having?: TeamEpaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamEpaCountAggregateInputType | true
    _avg?: TeamEpaAvgAggregateInputType
    _sum?: TeamEpaSumAggregateInputType
    _min?: TeamEpaMinAggregateInputType
    _max?: TeamEpaMaxAggregateInputType
  }

  export type TeamEpaGroupByOutputType = {
    id: string
    teamNumber: number
    updatedAt: Date
    _count: TeamEpaCountAggregateOutputType | null
    _avg: TeamEpaAvgAggregateOutputType | null
    _sum: TeamEpaSumAggregateOutputType | null
    _min: TeamEpaMinAggregateOutputType | null
    _max: TeamEpaMaxAggregateOutputType | null
  }

  type GetTeamEpaGroupByPayload<T extends TeamEpaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamEpaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamEpaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamEpaGroupByOutputType[P]>
            : GetScalarType<T[P], TeamEpaGroupByOutputType[P]>
        }
      >
    >


  export type TeamEpaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamNumber?: boolean
    epas?: boolean | EpaEntryDefaultArgs<ExtArgs>
    updatedAt?: boolean
  }, ExtArgs["result"]["teamEpa"]>



  export type TeamEpaSelectScalar = {
    id?: boolean
    teamNumber?: boolean
    updatedAt?: boolean
  }

  export type TeamEpaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamNumber" | "epas" | "updatedAt", ExtArgs["result"]["teamEpa"]>
  export type TeamEpaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamEpaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamEpa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamNumber: number
      updatedAt: Date
    }, ExtArgs["result"]["teamEpa"]>
    composites: {
      epas: Prisma.$EpaEntryPayload[]
    }
  }

  type TeamEpaGetPayload<S extends boolean | null | undefined | TeamEpaDefaultArgs> = $Result.GetResult<Prisma.$TeamEpaPayload, S>

  type TeamEpaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamEpaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamEpaCountAggregateInputType | true
    }

  export interface TeamEpaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamEpa'], meta: { name: 'TeamEpa' } }
    /**
     * Find zero or one TeamEpa that matches the filter.
     * @param {TeamEpaFindUniqueArgs} args - Arguments to find a TeamEpa
     * @example
     * // Get one TeamEpa
     * const teamEpa = await prisma.teamEpa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamEpaFindUniqueArgs>(args: SelectSubset<T, TeamEpaFindUniqueArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamEpa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamEpaFindUniqueOrThrowArgs} args - Arguments to find a TeamEpa
     * @example
     * // Get one TeamEpa
     * const teamEpa = await prisma.teamEpa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamEpaFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamEpaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamEpa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEpaFindFirstArgs} args - Arguments to find a TeamEpa
     * @example
     * // Get one TeamEpa
     * const teamEpa = await prisma.teamEpa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamEpaFindFirstArgs>(args?: SelectSubset<T, TeamEpaFindFirstArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamEpa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEpaFindFirstOrThrowArgs} args - Arguments to find a TeamEpa
     * @example
     * // Get one TeamEpa
     * const teamEpa = await prisma.teamEpa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamEpaFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamEpaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamEpas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEpaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamEpas
     * const teamEpas = await prisma.teamEpa.findMany()
     * 
     * // Get first 10 TeamEpas
     * const teamEpas = await prisma.teamEpa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamEpaWithIdOnly = await prisma.teamEpa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamEpaFindManyArgs>(args?: SelectSubset<T, TeamEpaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamEpa.
     * @param {TeamEpaCreateArgs} args - Arguments to create a TeamEpa.
     * @example
     * // Create one TeamEpa
     * const TeamEpa = await prisma.teamEpa.create({
     *   data: {
     *     // ... data to create a TeamEpa
     *   }
     * })
     * 
     */
    create<T extends TeamEpaCreateArgs>(args: SelectSubset<T, TeamEpaCreateArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamEpas.
     * @param {TeamEpaCreateManyArgs} args - Arguments to create many TeamEpas.
     * @example
     * // Create many TeamEpas
     * const teamEpa = await prisma.teamEpa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamEpaCreateManyArgs>(args?: SelectSubset<T, TeamEpaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamEpa.
     * @param {TeamEpaDeleteArgs} args - Arguments to delete one TeamEpa.
     * @example
     * // Delete one TeamEpa
     * const TeamEpa = await prisma.teamEpa.delete({
     *   where: {
     *     // ... filter to delete one TeamEpa
     *   }
     * })
     * 
     */
    delete<T extends TeamEpaDeleteArgs>(args: SelectSubset<T, TeamEpaDeleteArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamEpa.
     * @param {TeamEpaUpdateArgs} args - Arguments to update one TeamEpa.
     * @example
     * // Update one TeamEpa
     * const teamEpa = await prisma.teamEpa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamEpaUpdateArgs>(args: SelectSubset<T, TeamEpaUpdateArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamEpas.
     * @param {TeamEpaDeleteManyArgs} args - Arguments to filter TeamEpas to delete.
     * @example
     * // Delete a few TeamEpas
     * const { count } = await prisma.teamEpa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamEpaDeleteManyArgs>(args?: SelectSubset<T, TeamEpaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamEpas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEpaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamEpas
     * const teamEpa = await prisma.teamEpa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamEpaUpdateManyArgs>(args: SelectSubset<T, TeamEpaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamEpa.
     * @param {TeamEpaUpsertArgs} args - Arguments to update or create a TeamEpa.
     * @example
     * // Update or create a TeamEpa
     * const teamEpa = await prisma.teamEpa.upsert({
     *   create: {
     *     // ... data to create a TeamEpa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamEpa we want to update
     *   }
     * })
     */
    upsert<T extends TeamEpaUpsertArgs>(args: SelectSubset<T, TeamEpaUpsertArgs<ExtArgs>>): Prisma__TeamEpaClient<$Result.GetResult<Prisma.$TeamEpaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamEpas that matches the filter.
     * @param {TeamEpaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const teamEpa = await prisma.teamEpa.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TeamEpaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TeamEpa.
     * @param {TeamEpaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const teamEpa = await prisma.teamEpa.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TeamEpaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TeamEpas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEpaCountArgs} args - Arguments to filter TeamEpas to count.
     * @example
     * // Count the number of TeamEpas
     * const count = await prisma.teamEpa.count({
     *   where: {
     *     // ... the filter for the TeamEpas we want to count
     *   }
     * })
    **/
    count<T extends TeamEpaCountArgs>(
      args?: Subset<T, TeamEpaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamEpaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamEpa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEpaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamEpaAggregateArgs>(args: Subset<T, TeamEpaAggregateArgs>): Prisma.PrismaPromise<GetTeamEpaAggregateType<T>>

    /**
     * Group by TeamEpa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEpaGroupByArgs} args - Group by arguments.
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
      T extends TeamEpaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamEpaGroupByArgs['orderBy'] }
        : { orderBy?: TeamEpaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamEpaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamEpaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamEpa model
   */
  readonly fields: TeamEpaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamEpa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamEpaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamEpa model
   */
  interface TeamEpaFieldRefs {
    readonly id: FieldRef<"TeamEpa", 'String'>
    readonly teamNumber: FieldRef<"TeamEpa", 'Int'>
    readonly updatedAt: FieldRef<"TeamEpa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamEpa findUnique
   */
  export type TeamEpaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * Filter, which TeamEpa to fetch.
     */
    where: TeamEpaWhereUniqueInput
  }

  /**
   * TeamEpa findUniqueOrThrow
   */
  export type TeamEpaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * Filter, which TeamEpa to fetch.
     */
    where: TeamEpaWhereUniqueInput
  }

  /**
   * TeamEpa findFirst
   */
  export type TeamEpaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * Filter, which TeamEpa to fetch.
     */
    where?: TeamEpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEpas to fetch.
     */
    orderBy?: TeamEpaOrderByWithRelationInput | TeamEpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamEpas.
     */
    cursor?: TeamEpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEpas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamEpas.
     */
    distinct?: TeamEpaScalarFieldEnum | TeamEpaScalarFieldEnum[]
  }

  /**
   * TeamEpa findFirstOrThrow
   */
  export type TeamEpaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * Filter, which TeamEpa to fetch.
     */
    where?: TeamEpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEpas to fetch.
     */
    orderBy?: TeamEpaOrderByWithRelationInput | TeamEpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamEpas.
     */
    cursor?: TeamEpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEpas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamEpas.
     */
    distinct?: TeamEpaScalarFieldEnum | TeamEpaScalarFieldEnum[]
  }

  /**
   * TeamEpa findMany
   */
  export type TeamEpaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * Filter, which TeamEpas to fetch.
     */
    where?: TeamEpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEpas to fetch.
     */
    orderBy?: TeamEpaOrderByWithRelationInput | TeamEpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamEpas.
     */
    cursor?: TeamEpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEpas.
     */
    skip?: number
    distinct?: TeamEpaScalarFieldEnum | TeamEpaScalarFieldEnum[]
  }

  /**
   * TeamEpa create
   */
  export type TeamEpaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamEpa.
     */
    data: XOR<TeamEpaCreateInput, TeamEpaUncheckedCreateInput>
  }

  /**
   * TeamEpa createMany
   */
  export type TeamEpaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamEpas.
     */
    data: TeamEpaCreateManyInput | TeamEpaCreateManyInput[]
  }

  /**
   * TeamEpa update
   */
  export type TeamEpaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamEpa.
     */
    data: XOR<TeamEpaUpdateInput, TeamEpaUncheckedUpdateInput>
    /**
     * Choose, which TeamEpa to update.
     */
    where: TeamEpaWhereUniqueInput
  }

  /**
   * TeamEpa updateMany
   */
  export type TeamEpaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamEpas.
     */
    data: XOR<TeamEpaUpdateManyMutationInput, TeamEpaUncheckedUpdateManyInput>
    /**
     * Filter which TeamEpas to update
     */
    where?: TeamEpaWhereInput
    /**
     * Limit how many TeamEpas to update.
     */
    limit?: number
  }

  /**
   * TeamEpa upsert
   */
  export type TeamEpaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamEpa to update in case it exists.
     */
    where: TeamEpaWhereUniqueInput
    /**
     * In case the TeamEpa found by the `where` argument doesn't exist, create a new TeamEpa with this data.
     */
    create: XOR<TeamEpaCreateInput, TeamEpaUncheckedCreateInput>
    /**
     * In case the TeamEpa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamEpaUpdateInput, TeamEpaUncheckedUpdateInput>
  }

  /**
   * TeamEpa delete
   */
  export type TeamEpaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
    /**
     * Filter which TeamEpa to delete.
     */
    where: TeamEpaWhereUniqueInput
  }

  /**
   * TeamEpa deleteMany
   */
  export type TeamEpaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamEpas to delete
     */
    where?: TeamEpaWhereInput
    /**
     * Limit how many TeamEpas to delete.
     */
    limit?: number
  }

  /**
   * TeamEpa findRaw
   */
  export type TeamEpaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamEpa aggregateRaw
   */
  export type TeamEpaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamEpa without action
   */
  export type TeamEpaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEpa
     */
    select?: TeamEpaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEpa
     */
    omit?: TeamEpaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamEpaInclude<ExtArgs> | null
  }


  /**
   * Model EventTeam
   */

  export type AggregateEventTeam = {
    _count: EventTeamCountAggregateOutputType | null
    _avg: EventTeamAvgAggregateOutputType | null
    _sum: EventTeamSumAggregateOutputType | null
    _min: EventTeamMinAggregateOutputType | null
    _max: EventTeamMaxAggregateOutputType | null
  }

  export type EventTeamAvgAggregateOutputType = {
    teamNumbers: number | null
  }

  export type EventTeamSumAggregateOutputType = {
    teamNumbers: number[]
  }

  export type EventTeamMinAggregateOutputType = {
    id: string | null
    eventKey: string | null
  }

  export type EventTeamMaxAggregateOutputType = {
    id: string | null
    eventKey: string | null
  }

  export type EventTeamCountAggregateOutputType = {
    id: number
    eventKey: number
    teamNumbers: number
    _all: number
  }


  export type EventTeamAvgAggregateInputType = {
    teamNumbers?: true
  }

  export type EventTeamSumAggregateInputType = {
    teamNumbers?: true
  }

  export type EventTeamMinAggregateInputType = {
    id?: true
    eventKey?: true
  }

  export type EventTeamMaxAggregateInputType = {
    id?: true
    eventKey?: true
  }

  export type EventTeamCountAggregateInputType = {
    id?: true
    eventKey?: true
    teamNumbers?: true
    _all?: true
  }

  export type EventTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTeam to aggregate.
     */
    where?: EventTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTeams to fetch.
     */
    orderBy?: EventTeamOrderByWithRelationInput | EventTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTeams
    **/
    _count?: true | EventTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTeamMaxAggregateInputType
  }

  export type GetEventTeamAggregateType<T extends EventTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTeam[P]>
      : GetScalarType<T[P], AggregateEventTeam[P]>
  }




  export type EventTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTeamWhereInput
    orderBy?: EventTeamOrderByWithAggregationInput | EventTeamOrderByWithAggregationInput[]
    by: EventTeamScalarFieldEnum[] | EventTeamScalarFieldEnum
    having?: EventTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTeamCountAggregateInputType | true
    _avg?: EventTeamAvgAggregateInputType
    _sum?: EventTeamSumAggregateInputType
    _min?: EventTeamMinAggregateInputType
    _max?: EventTeamMaxAggregateInputType
  }

  export type EventTeamGroupByOutputType = {
    id: string
    eventKey: string
    teamNumbers: number[]
    _count: EventTeamCountAggregateOutputType | null
    _avg: EventTeamAvgAggregateOutputType | null
    _sum: EventTeamSumAggregateOutputType | null
    _min: EventTeamMinAggregateOutputType | null
    _max: EventTeamMaxAggregateOutputType | null
  }

  type GetEventTeamGroupByPayload<T extends EventTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTeamGroupByOutputType[P]>
            : GetScalarType<T[P], EventTeamGroupByOutputType[P]>
        }
      >
    >


  export type EventTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventKey?: boolean
    teamNumbers?: boolean
  }, ExtArgs["result"]["eventTeam"]>



  export type EventTeamSelectScalar = {
    id?: boolean
    eventKey?: boolean
    teamNumbers?: boolean
  }

  export type EventTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventKey" | "teamNumbers", ExtArgs["result"]["eventTeam"]>

  export type $EventTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTeam"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventKey: string
      teamNumbers: number[]
    }, ExtArgs["result"]["eventTeam"]>
    composites: {}
  }

  type EventTeamGetPayload<S extends boolean | null | undefined | EventTeamDefaultArgs> = $Result.GetResult<Prisma.$EventTeamPayload, S>

  type EventTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTeamCountAggregateInputType | true
    }

  export interface EventTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTeam'], meta: { name: 'EventTeam' } }
    /**
     * Find zero or one EventTeam that matches the filter.
     * @param {EventTeamFindUniqueArgs} args - Arguments to find a EventTeam
     * @example
     * // Get one EventTeam
     * const eventTeam = await prisma.eventTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTeamFindUniqueArgs>(args: SelectSubset<T, EventTeamFindUniqueArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTeamFindUniqueOrThrowArgs} args - Arguments to find a EventTeam
     * @example
     * // Get one EventTeam
     * const eventTeam = await prisma.eventTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTeamFindFirstArgs} args - Arguments to find a EventTeam
     * @example
     * // Get one EventTeam
     * const eventTeam = await prisma.eventTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTeamFindFirstArgs>(args?: SelectSubset<T, EventTeamFindFirstArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTeamFindFirstOrThrowArgs} args - Arguments to find a EventTeam
     * @example
     * // Get one EventTeam
     * const eventTeam = await prisma.eventTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTeams
     * const eventTeams = await prisma.eventTeam.findMany()
     * 
     * // Get first 10 EventTeams
     * const eventTeams = await prisma.eventTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTeamWithIdOnly = await prisma.eventTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTeamFindManyArgs>(args?: SelectSubset<T, EventTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventTeam.
     * @param {EventTeamCreateArgs} args - Arguments to create a EventTeam.
     * @example
     * // Create one EventTeam
     * const EventTeam = await prisma.eventTeam.create({
     *   data: {
     *     // ... data to create a EventTeam
     *   }
     * })
     * 
     */
    create<T extends EventTeamCreateArgs>(args: SelectSubset<T, EventTeamCreateArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTeams.
     * @param {EventTeamCreateManyArgs} args - Arguments to create many EventTeams.
     * @example
     * // Create many EventTeams
     * const eventTeam = await prisma.eventTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTeamCreateManyArgs>(args?: SelectSubset<T, EventTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventTeam.
     * @param {EventTeamDeleteArgs} args - Arguments to delete one EventTeam.
     * @example
     * // Delete one EventTeam
     * const EventTeam = await prisma.eventTeam.delete({
     *   where: {
     *     // ... filter to delete one EventTeam
     *   }
     * })
     * 
     */
    delete<T extends EventTeamDeleteArgs>(args: SelectSubset<T, EventTeamDeleteArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventTeam.
     * @param {EventTeamUpdateArgs} args - Arguments to update one EventTeam.
     * @example
     * // Update one EventTeam
     * const eventTeam = await prisma.eventTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTeamUpdateArgs>(args: SelectSubset<T, EventTeamUpdateArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTeams.
     * @param {EventTeamDeleteManyArgs} args - Arguments to filter EventTeams to delete.
     * @example
     * // Delete a few EventTeams
     * const { count } = await prisma.eventTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTeamDeleteManyArgs>(args?: SelectSubset<T, EventTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTeams
     * const eventTeam = await prisma.eventTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTeamUpdateManyArgs>(args: SelectSubset<T, EventTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventTeam.
     * @param {EventTeamUpsertArgs} args - Arguments to update or create a EventTeam.
     * @example
     * // Update or create a EventTeam
     * const eventTeam = await prisma.eventTeam.upsert({
     *   create: {
     *     // ... data to create a EventTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTeam we want to update
     *   }
     * })
     */
    upsert<T extends EventTeamUpsertArgs>(args: SelectSubset<T, EventTeamUpsertArgs<ExtArgs>>): Prisma__EventTeamClient<$Result.GetResult<Prisma.$EventTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTeams that matches the filter.
     * @param {EventTeamFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const eventTeam = await prisma.eventTeam.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EventTeamFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EventTeam.
     * @param {EventTeamAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const eventTeam = await prisma.eventTeam.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventTeamAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EventTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTeamCountArgs} args - Arguments to filter EventTeams to count.
     * @example
     * // Count the number of EventTeams
     * const count = await prisma.eventTeam.count({
     *   where: {
     *     // ... the filter for the EventTeams we want to count
     *   }
     * })
    **/
    count<T extends EventTeamCountArgs>(
      args?: Subset<T, EventTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTeamAggregateArgs>(args: Subset<T, EventTeamAggregateArgs>): Prisma.PrismaPromise<GetEventTeamAggregateType<T>>

    /**
     * Group by EventTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTeamGroupByArgs} args - Group by arguments.
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
      T extends EventTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTeamGroupByArgs['orderBy'] }
        : { orderBy?: EventTeamGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, EventTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTeam model
   */
  readonly fields: EventTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventTeam model
   */
  interface EventTeamFieldRefs {
    readonly id: FieldRef<"EventTeam", 'String'>
    readonly eventKey: FieldRef<"EventTeam", 'String'>
    readonly teamNumbers: FieldRef<"EventTeam", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * EventTeam findUnique
   */
  export type EventTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * Filter, which EventTeam to fetch.
     */
    where: EventTeamWhereUniqueInput
  }

  /**
   * EventTeam findUniqueOrThrow
   */
  export type EventTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * Filter, which EventTeam to fetch.
     */
    where: EventTeamWhereUniqueInput
  }

  /**
   * EventTeam findFirst
   */
  export type EventTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * Filter, which EventTeam to fetch.
     */
    where?: EventTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTeams to fetch.
     */
    orderBy?: EventTeamOrderByWithRelationInput | EventTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTeams.
     */
    cursor?: EventTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTeams.
     */
    distinct?: EventTeamScalarFieldEnum | EventTeamScalarFieldEnum[]
  }

  /**
   * EventTeam findFirstOrThrow
   */
  export type EventTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * Filter, which EventTeam to fetch.
     */
    where?: EventTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTeams to fetch.
     */
    orderBy?: EventTeamOrderByWithRelationInput | EventTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTeams.
     */
    cursor?: EventTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTeams.
     */
    distinct?: EventTeamScalarFieldEnum | EventTeamScalarFieldEnum[]
  }

  /**
   * EventTeam findMany
   */
  export type EventTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * Filter, which EventTeams to fetch.
     */
    where?: EventTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTeams to fetch.
     */
    orderBy?: EventTeamOrderByWithRelationInput | EventTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTeams.
     */
    cursor?: EventTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTeams.
     */
    skip?: number
    distinct?: EventTeamScalarFieldEnum | EventTeamScalarFieldEnum[]
  }

  /**
   * EventTeam create
   */
  export type EventTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * The data needed to create a EventTeam.
     */
    data: XOR<EventTeamCreateInput, EventTeamUncheckedCreateInput>
  }

  /**
   * EventTeam createMany
   */
  export type EventTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTeams.
     */
    data: EventTeamCreateManyInput | EventTeamCreateManyInput[]
  }

  /**
   * EventTeam update
   */
  export type EventTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * The data needed to update a EventTeam.
     */
    data: XOR<EventTeamUpdateInput, EventTeamUncheckedUpdateInput>
    /**
     * Choose, which EventTeam to update.
     */
    where: EventTeamWhereUniqueInput
  }

  /**
   * EventTeam updateMany
   */
  export type EventTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTeams.
     */
    data: XOR<EventTeamUpdateManyMutationInput, EventTeamUncheckedUpdateManyInput>
    /**
     * Filter which EventTeams to update
     */
    where?: EventTeamWhereInput
    /**
     * Limit how many EventTeams to update.
     */
    limit?: number
  }

  /**
   * EventTeam upsert
   */
  export type EventTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * The filter to search for the EventTeam to update in case it exists.
     */
    where: EventTeamWhereUniqueInput
    /**
     * In case the EventTeam found by the `where` argument doesn't exist, create a new EventTeam with this data.
     */
    create: XOR<EventTeamCreateInput, EventTeamUncheckedCreateInput>
    /**
     * In case the EventTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTeamUpdateInput, EventTeamUncheckedUpdateInput>
  }

  /**
   * EventTeam delete
   */
  export type EventTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
    /**
     * Filter which EventTeam to delete.
     */
    where: EventTeamWhereUniqueInput
  }

  /**
   * EventTeam deleteMany
   */
  export type EventTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTeams to delete
     */
    where?: EventTeamWhereInput
    /**
     * Limit how many EventTeams to delete.
     */
    limit?: number
  }

  /**
   * EventTeam findRaw
   */
  export type EventTeamFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EventTeam aggregateRaw
   */
  export type EventTeamAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EventTeam without action
   */
  export type EventTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTeam
     */
    select?: EventTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTeam
     */
    omit?: EventTeamOmit<ExtArgs> | null
  }


  /**
   * Model DistrictTeam
   */

  export type AggregateDistrictTeam = {
    _count: DistrictTeamCountAggregateOutputType | null
    _avg: DistrictTeamAvgAggregateOutputType | null
    _sum: DistrictTeamSumAggregateOutputType | null
    _min: DistrictTeamMinAggregateOutputType | null
    _max: DistrictTeamMaxAggregateOutputType | null
  }

  export type DistrictTeamAvgAggregateOutputType = {
    teamNumbers: number | null
  }

  export type DistrictTeamSumAggregateOutputType = {
    teamNumbers: number[]
  }

  export type DistrictTeamMinAggregateOutputType = {
    id: string | null
    districtKey: string | null
  }

  export type DistrictTeamMaxAggregateOutputType = {
    id: string | null
    districtKey: string | null
  }

  export type DistrictTeamCountAggregateOutputType = {
    id: number
    districtKey: number
    teamNumbers: number
    _all: number
  }


  export type DistrictTeamAvgAggregateInputType = {
    teamNumbers?: true
  }

  export type DistrictTeamSumAggregateInputType = {
    teamNumbers?: true
  }

  export type DistrictTeamMinAggregateInputType = {
    id?: true
    districtKey?: true
  }

  export type DistrictTeamMaxAggregateInputType = {
    id?: true
    districtKey?: true
  }

  export type DistrictTeamCountAggregateInputType = {
    id?: true
    districtKey?: true
    teamNumbers?: true
    _all?: true
  }

  export type DistrictTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistrictTeam to aggregate.
     */
    where?: DistrictTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistrictTeams to fetch.
     */
    orderBy?: DistrictTeamOrderByWithRelationInput | DistrictTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistrictTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistrictTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistrictTeams
    **/
    _count?: true | DistrictTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictTeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictTeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictTeamMaxAggregateInputType
  }

  export type GetDistrictTeamAggregateType<T extends DistrictTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrictTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrictTeam[P]>
      : GetScalarType<T[P], AggregateDistrictTeam[P]>
  }




  export type DistrictTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictTeamWhereInput
    orderBy?: DistrictTeamOrderByWithAggregationInput | DistrictTeamOrderByWithAggregationInput[]
    by: DistrictTeamScalarFieldEnum[] | DistrictTeamScalarFieldEnum
    having?: DistrictTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictTeamCountAggregateInputType | true
    _avg?: DistrictTeamAvgAggregateInputType
    _sum?: DistrictTeamSumAggregateInputType
    _min?: DistrictTeamMinAggregateInputType
    _max?: DistrictTeamMaxAggregateInputType
  }

  export type DistrictTeamGroupByOutputType = {
    id: string
    districtKey: string
    teamNumbers: number[]
    _count: DistrictTeamCountAggregateOutputType | null
    _avg: DistrictTeamAvgAggregateOutputType | null
    _sum: DistrictTeamSumAggregateOutputType | null
    _min: DistrictTeamMinAggregateOutputType | null
    _max: DistrictTeamMaxAggregateOutputType | null
  }

  type GetDistrictTeamGroupByPayload<T extends DistrictTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictTeamGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictTeamGroupByOutputType[P]>
        }
      >
    >


  export type DistrictTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    districtKey?: boolean
    teamNumbers?: boolean
  }, ExtArgs["result"]["districtTeam"]>



  export type DistrictTeamSelectScalar = {
    id?: boolean
    districtKey?: boolean
    teamNumbers?: boolean
  }

  export type DistrictTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "districtKey" | "teamNumbers", ExtArgs["result"]["districtTeam"]>

  export type $DistrictTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistrictTeam"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      districtKey: string
      teamNumbers: number[]
    }, ExtArgs["result"]["districtTeam"]>
    composites: {}
  }

  type DistrictTeamGetPayload<S extends boolean | null | undefined | DistrictTeamDefaultArgs> = $Result.GetResult<Prisma.$DistrictTeamPayload, S>

  type DistrictTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistrictTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrictTeamCountAggregateInputType | true
    }

  export interface DistrictTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistrictTeam'], meta: { name: 'DistrictTeam' } }
    /**
     * Find zero or one DistrictTeam that matches the filter.
     * @param {DistrictTeamFindUniqueArgs} args - Arguments to find a DistrictTeam
     * @example
     * // Get one DistrictTeam
     * const districtTeam = await prisma.districtTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictTeamFindUniqueArgs>(args: SelectSubset<T, DistrictTeamFindUniqueArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DistrictTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistrictTeamFindUniqueOrThrowArgs} args - Arguments to find a DistrictTeam
     * @example
     * // Get one DistrictTeam
     * const districtTeam = await prisma.districtTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistrictTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictTeamFindFirstArgs} args - Arguments to find a DistrictTeam
     * @example
     * // Get one DistrictTeam
     * const districtTeam = await prisma.districtTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictTeamFindFirstArgs>(args?: SelectSubset<T, DistrictTeamFindFirstArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistrictTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictTeamFindFirstOrThrowArgs} args - Arguments to find a DistrictTeam
     * @example
     * // Get one DistrictTeam
     * const districtTeam = await prisma.districtTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistrictTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistrictTeams
     * const districtTeams = await prisma.districtTeam.findMany()
     * 
     * // Get first 10 DistrictTeams
     * const districtTeams = await prisma.districtTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtTeamWithIdOnly = await prisma.districtTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictTeamFindManyArgs>(args?: SelectSubset<T, DistrictTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DistrictTeam.
     * @param {DistrictTeamCreateArgs} args - Arguments to create a DistrictTeam.
     * @example
     * // Create one DistrictTeam
     * const DistrictTeam = await prisma.districtTeam.create({
     *   data: {
     *     // ... data to create a DistrictTeam
     *   }
     * })
     * 
     */
    create<T extends DistrictTeamCreateArgs>(args: SelectSubset<T, DistrictTeamCreateArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DistrictTeams.
     * @param {DistrictTeamCreateManyArgs} args - Arguments to create many DistrictTeams.
     * @example
     * // Create many DistrictTeams
     * const districtTeam = await prisma.districtTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictTeamCreateManyArgs>(args?: SelectSubset<T, DistrictTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DistrictTeam.
     * @param {DistrictTeamDeleteArgs} args - Arguments to delete one DistrictTeam.
     * @example
     * // Delete one DistrictTeam
     * const DistrictTeam = await prisma.districtTeam.delete({
     *   where: {
     *     // ... filter to delete one DistrictTeam
     *   }
     * })
     * 
     */
    delete<T extends DistrictTeamDeleteArgs>(args: SelectSubset<T, DistrictTeamDeleteArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DistrictTeam.
     * @param {DistrictTeamUpdateArgs} args - Arguments to update one DistrictTeam.
     * @example
     * // Update one DistrictTeam
     * const districtTeam = await prisma.districtTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictTeamUpdateArgs>(args: SelectSubset<T, DistrictTeamUpdateArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DistrictTeams.
     * @param {DistrictTeamDeleteManyArgs} args - Arguments to filter DistrictTeams to delete.
     * @example
     * // Delete a few DistrictTeams
     * const { count } = await prisma.districtTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictTeamDeleteManyArgs>(args?: SelectSubset<T, DistrictTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistrictTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistrictTeams
     * const districtTeam = await prisma.districtTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictTeamUpdateManyArgs>(args: SelectSubset<T, DistrictTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DistrictTeam.
     * @param {DistrictTeamUpsertArgs} args - Arguments to update or create a DistrictTeam.
     * @example
     * // Update or create a DistrictTeam
     * const districtTeam = await prisma.districtTeam.upsert({
     *   create: {
     *     // ... data to create a DistrictTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistrictTeam we want to update
     *   }
     * })
     */
    upsert<T extends DistrictTeamUpsertArgs>(args: SelectSubset<T, DistrictTeamUpsertArgs<ExtArgs>>): Prisma__DistrictTeamClient<$Result.GetResult<Prisma.$DistrictTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistrictTeams that matches the filter.
     * @param {DistrictTeamFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const districtTeam = await prisma.districtTeam.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DistrictTeamFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DistrictTeam.
     * @param {DistrictTeamAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const districtTeam = await prisma.districtTeam.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DistrictTeamAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DistrictTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictTeamCountArgs} args - Arguments to filter DistrictTeams to count.
     * @example
     * // Count the number of DistrictTeams
     * const count = await prisma.districtTeam.count({
     *   where: {
     *     // ... the filter for the DistrictTeams we want to count
     *   }
     * })
    **/
    count<T extends DistrictTeamCountArgs>(
      args?: Subset<T, DistrictTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistrictTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictTeamAggregateArgs>(args: Subset<T, DistrictTeamAggregateArgs>): Prisma.PrismaPromise<GetDistrictTeamAggregateType<T>>

    /**
     * Group by DistrictTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictTeamGroupByArgs} args - Group by arguments.
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
      T extends DistrictTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictTeamGroupByArgs['orderBy'] }
        : { orderBy?: DistrictTeamGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, DistrictTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistrictTeam model
   */
  readonly fields: DistrictTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistrictTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DistrictTeam model
   */
  interface DistrictTeamFieldRefs {
    readonly id: FieldRef<"DistrictTeam", 'String'>
    readonly districtKey: FieldRef<"DistrictTeam", 'String'>
    readonly teamNumbers: FieldRef<"DistrictTeam", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * DistrictTeam findUnique
   */
  export type DistrictTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * Filter, which DistrictTeam to fetch.
     */
    where: DistrictTeamWhereUniqueInput
  }

  /**
   * DistrictTeam findUniqueOrThrow
   */
  export type DistrictTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * Filter, which DistrictTeam to fetch.
     */
    where: DistrictTeamWhereUniqueInput
  }

  /**
   * DistrictTeam findFirst
   */
  export type DistrictTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * Filter, which DistrictTeam to fetch.
     */
    where?: DistrictTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistrictTeams to fetch.
     */
    orderBy?: DistrictTeamOrderByWithRelationInput | DistrictTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistrictTeams.
     */
    cursor?: DistrictTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistrictTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistrictTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistrictTeams.
     */
    distinct?: DistrictTeamScalarFieldEnum | DistrictTeamScalarFieldEnum[]
  }

  /**
   * DistrictTeam findFirstOrThrow
   */
  export type DistrictTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * Filter, which DistrictTeam to fetch.
     */
    where?: DistrictTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistrictTeams to fetch.
     */
    orderBy?: DistrictTeamOrderByWithRelationInput | DistrictTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistrictTeams.
     */
    cursor?: DistrictTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistrictTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistrictTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistrictTeams.
     */
    distinct?: DistrictTeamScalarFieldEnum | DistrictTeamScalarFieldEnum[]
  }

  /**
   * DistrictTeam findMany
   */
  export type DistrictTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * Filter, which DistrictTeams to fetch.
     */
    where?: DistrictTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistrictTeams to fetch.
     */
    orderBy?: DistrictTeamOrderByWithRelationInput | DistrictTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistrictTeams.
     */
    cursor?: DistrictTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistrictTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistrictTeams.
     */
    skip?: number
    distinct?: DistrictTeamScalarFieldEnum | DistrictTeamScalarFieldEnum[]
  }

  /**
   * DistrictTeam create
   */
  export type DistrictTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * The data needed to create a DistrictTeam.
     */
    data: XOR<DistrictTeamCreateInput, DistrictTeamUncheckedCreateInput>
  }

  /**
   * DistrictTeam createMany
   */
  export type DistrictTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistrictTeams.
     */
    data: DistrictTeamCreateManyInput | DistrictTeamCreateManyInput[]
  }

  /**
   * DistrictTeam update
   */
  export type DistrictTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * The data needed to update a DistrictTeam.
     */
    data: XOR<DistrictTeamUpdateInput, DistrictTeamUncheckedUpdateInput>
    /**
     * Choose, which DistrictTeam to update.
     */
    where: DistrictTeamWhereUniqueInput
  }

  /**
   * DistrictTeam updateMany
   */
  export type DistrictTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistrictTeams.
     */
    data: XOR<DistrictTeamUpdateManyMutationInput, DistrictTeamUncheckedUpdateManyInput>
    /**
     * Filter which DistrictTeams to update
     */
    where?: DistrictTeamWhereInput
    /**
     * Limit how many DistrictTeams to update.
     */
    limit?: number
  }

  /**
   * DistrictTeam upsert
   */
  export type DistrictTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * The filter to search for the DistrictTeam to update in case it exists.
     */
    where: DistrictTeamWhereUniqueInput
    /**
     * In case the DistrictTeam found by the `where` argument doesn't exist, create a new DistrictTeam with this data.
     */
    create: XOR<DistrictTeamCreateInput, DistrictTeamUncheckedCreateInput>
    /**
     * In case the DistrictTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictTeamUpdateInput, DistrictTeamUncheckedUpdateInput>
  }

  /**
   * DistrictTeam delete
   */
  export type DistrictTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
    /**
     * Filter which DistrictTeam to delete.
     */
    where: DistrictTeamWhereUniqueInput
  }

  /**
   * DistrictTeam deleteMany
   */
  export type DistrictTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistrictTeams to delete
     */
    where?: DistrictTeamWhereInput
    /**
     * Limit how many DistrictTeams to delete.
     */
    limit?: number
  }

  /**
   * DistrictTeam findRaw
   */
  export type DistrictTeamFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DistrictTeam aggregateRaw
   */
  export type DistrictTeamAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DistrictTeam without action
   */
  export type DistrictTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictTeam
     */
    select?: DistrictTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistrictTeam
     */
    omit?: DistrictTeamOmit<ExtArgs> | null
  }


  /**
   * Model TeamAvatar
   */

  export type AggregateTeamAvatar = {
    _count: TeamAvatarCountAggregateOutputType | null
    _avg: TeamAvatarAvgAggregateOutputType | null
    _sum: TeamAvatarSumAggregateOutputType | null
    _min: TeamAvatarMinAggregateOutputType | null
    _max: TeamAvatarMaxAggregateOutputType | null
  }

  export type TeamAvatarAvgAggregateOutputType = {
    teamNumber: number | null
  }

  export type TeamAvatarSumAggregateOutputType = {
    teamNumber: number | null
  }

  export type TeamAvatarMinAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    updatedAt: Date | null
  }

  export type TeamAvatarMaxAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    updatedAt: Date | null
  }

  export type TeamAvatarCountAggregateOutputType = {
    id: number
    teamNumber: number
    updatedAt: number
    _all: number
  }


  export type TeamAvatarAvgAggregateInputType = {
    teamNumber?: true
  }

  export type TeamAvatarSumAggregateInputType = {
    teamNumber?: true
  }

  export type TeamAvatarMinAggregateInputType = {
    id?: true
    teamNumber?: true
    updatedAt?: true
  }

  export type TeamAvatarMaxAggregateInputType = {
    id?: true
    teamNumber?: true
    updatedAt?: true
  }

  export type TeamAvatarCountAggregateInputType = {
    id?: true
    teamNumber?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamAvatar to aggregate.
     */
    where?: TeamAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAvatars to fetch.
     */
    orderBy?: TeamAvatarOrderByWithRelationInput | TeamAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamAvatars
    **/
    _count?: true | TeamAvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamAvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamAvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamAvatarMaxAggregateInputType
  }

  export type GetTeamAvatarAggregateType<T extends TeamAvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamAvatar[P]>
      : GetScalarType<T[P], AggregateTeamAvatar[P]>
  }




  export type TeamAvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamAvatarWhereInput
    orderBy?: TeamAvatarOrderByWithAggregationInput | TeamAvatarOrderByWithAggregationInput[]
    by: TeamAvatarScalarFieldEnum[] | TeamAvatarScalarFieldEnum
    having?: TeamAvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamAvatarCountAggregateInputType | true
    _avg?: TeamAvatarAvgAggregateInputType
    _sum?: TeamAvatarSumAggregateInputType
    _min?: TeamAvatarMinAggregateInputType
    _max?: TeamAvatarMaxAggregateInputType
  }

  export type TeamAvatarGroupByOutputType = {
    id: string
    teamNumber: number
    updatedAt: Date
    _count: TeamAvatarCountAggregateOutputType | null
    _avg: TeamAvatarAvgAggregateOutputType | null
    _sum: TeamAvatarSumAggregateOutputType | null
    _min: TeamAvatarMinAggregateOutputType | null
    _max: TeamAvatarMaxAggregateOutputType | null
  }

  type GetTeamAvatarGroupByPayload<T extends TeamAvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamAvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamAvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamAvatarGroupByOutputType[P]>
            : GetScalarType<T[P], TeamAvatarGroupByOutputType[P]>
        }
      >
    >


  export type TeamAvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamNumber?: boolean
    avatars?: boolean | AvatarEntryDefaultArgs<ExtArgs>
    updatedAt?: boolean
  }, ExtArgs["result"]["teamAvatar"]>



  export type TeamAvatarSelectScalar = {
    id?: boolean
    teamNumber?: boolean
    updatedAt?: boolean
  }

  export type TeamAvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamNumber" | "avatars" | "updatedAt", ExtArgs["result"]["teamAvatar"]>
  export type TeamAvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamAvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamAvatar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamNumber: number
      updatedAt: Date
    }, ExtArgs["result"]["teamAvatar"]>
    composites: {
      avatars: Prisma.$AvatarEntryPayload[]
    }
  }

  type TeamAvatarGetPayload<S extends boolean | null | undefined | TeamAvatarDefaultArgs> = $Result.GetResult<Prisma.$TeamAvatarPayload, S>

  type TeamAvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamAvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamAvatarCountAggregateInputType | true
    }

  export interface TeamAvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamAvatar'], meta: { name: 'TeamAvatar' } }
    /**
     * Find zero or one TeamAvatar that matches the filter.
     * @param {TeamAvatarFindUniqueArgs} args - Arguments to find a TeamAvatar
     * @example
     * // Get one TeamAvatar
     * const teamAvatar = await prisma.teamAvatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamAvatarFindUniqueArgs>(args: SelectSubset<T, TeamAvatarFindUniqueArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamAvatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamAvatarFindUniqueOrThrowArgs} args - Arguments to find a TeamAvatar
     * @example
     * // Get one TeamAvatar
     * const teamAvatar = await prisma.teamAvatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamAvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamAvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamAvatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAvatarFindFirstArgs} args - Arguments to find a TeamAvatar
     * @example
     * // Get one TeamAvatar
     * const teamAvatar = await prisma.teamAvatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamAvatarFindFirstArgs>(args?: SelectSubset<T, TeamAvatarFindFirstArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamAvatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAvatarFindFirstOrThrowArgs} args - Arguments to find a TeamAvatar
     * @example
     * // Get one TeamAvatar
     * const teamAvatar = await prisma.teamAvatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamAvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamAvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamAvatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamAvatars
     * const teamAvatars = await prisma.teamAvatar.findMany()
     * 
     * // Get first 10 TeamAvatars
     * const teamAvatars = await prisma.teamAvatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamAvatarWithIdOnly = await prisma.teamAvatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamAvatarFindManyArgs>(args?: SelectSubset<T, TeamAvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamAvatar.
     * @param {TeamAvatarCreateArgs} args - Arguments to create a TeamAvatar.
     * @example
     * // Create one TeamAvatar
     * const TeamAvatar = await prisma.teamAvatar.create({
     *   data: {
     *     // ... data to create a TeamAvatar
     *   }
     * })
     * 
     */
    create<T extends TeamAvatarCreateArgs>(args: SelectSubset<T, TeamAvatarCreateArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamAvatars.
     * @param {TeamAvatarCreateManyArgs} args - Arguments to create many TeamAvatars.
     * @example
     * // Create many TeamAvatars
     * const teamAvatar = await prisma.teamAvatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamAvatarCreateManyArgs>(args?: SelectSubset<T, TeamAvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamAvatar.
     * @param {TeamAvatarDeleteArgs} args - Arguments to delete one TeamAvatar.
     * @example
     * // Delete one TeamAvatar
     * const TeamAvatar = await prisma.teamAvatar.delete({
     *   where: {
     *     // ... filter to delete one TeamAvatar
     *   }
     * })
     * 
     */
    delete<T extends TeamAvatarDeleteArgs>(args: SelectSubset<T, TeamAvatarDeleteArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamAvatar.
     * @param {TeamAvatarUpdateArgs} args - Arguments to update one TeamAvatar.
     * @example
     * // Update one TeamAvatar
     * const teamAvatar = await prisma.teamAvatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamAvatarUpdateArgs>(args: SelectSubset<T, TeamAvatarUpdateArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamAvatars.
     * @param {TeamAvatarDeleteManyArgs} args - Arguments to filter TeamAvatars to delete.
     * @example
     * // Delete a few TeamAvatars
     * const { count } = await prisma.teamAvatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamAvatarDeleteManyArgs>(args?: SelectSubset<T, TeamAvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamAvatars
     * const teamAvatar = await prisma.teamAvatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamAvatarUpdateManyArgs>(args: SelectSubset<T, TeamAvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamAvatar.
     * @param {TeamAvatarUpsertArgs} args - Arguments to update or create a TeamAvatar.
     * @example
     * // Update or create a TeamAvatar
     * const teamAvatar = await prisma.teamAvatar.upsert({
     *   create: {
     *     // ... data to create a TeamAvatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamAvatar we want to update
     *   }
     * })
     */
    upsert<T extends TeamAvatarUpsertArgs>(args: SelectSubset<T, TeamAvatarUpsertArgs<ExtArgs>>): Prisma__TeamAvatarClient<$Result.GetResult<Prisma.$TeamAvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamAvatars that matches the filter.
     * @param {TeamAvatarFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const teamAvatar = await prisma.teamAvatar.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TeamAvatarFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TeamAvatar.
     * @param {TeamAvatarAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const teamAvatar = await prisma.teamAvatar.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TeamAvatarAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TeamAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAvatarCountArgs} args - Arguments to filter TeamAvatars to count.
     * @example
     * // Count the number of TeamAvatars
     * const count = await prisma.teamAvatar.count({
     *   where: {
     *     // ... the filter for the TeamAvatars we want to count
     *   }
     * })
    **/
    count<T extends TeamAvatarCountArgs>(
      args?: Subset<T, TeamAvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamAvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAvatarAggregateArgs>(args: Subset<T, TeamAvatarAggregateArgs>): Prisma.PrismaPromise<GetTeamAvatarAggregateType<T>>

    /**
     * Group by TeamAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAvatarGroupByArgs} args - Group by arguments.
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
      T extends TeamAvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamAvatarGroupByArgs['orderBy'] }
        : { orderBy?: TeamAvatarGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamAvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamAvatar model
   */
  readonly fields: TeamAvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamAvatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamAvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamAvatar model
   */
  interface TeamAvatarFieldRefs {
    readonly id: FieldRef<"TeamAvatar", 'String'>
    readonly teamNumber: FieldRef<"TeamAvatar", 'Int'>
    readonly updatedAt: FieldRef<"TeamAvatar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamAvatar findUnique
   */
  export type TeamAvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * Filter, which TeamAvatar to fetch.
     */
    where: TeamAvatarWhereUniqueInput
  }

  /**
   * TeamAvatar findUniqueOrThrow
   */
  export type TeamAvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * Filter, which TeamAvatar to fetch.
     */
    where: TeamAvatarWhereUniqueInput
  }

  /**
   * TeamAvatar findFirst
   */
  export type TeamAvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * Filter, which TeamAvatar to fetch.
     */
    where?: TeamAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAvatars to fetch.
     */
    orderBy?: TeamAvatarOrderByWithRelationInput | TeamAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamAvatars.
     */
    cursor?: TeamAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamAvatars.
     */
    distinct?: TeamAvatarScalarFieldEnum | TeamAvatarScalarFieldEnum[]
  }

  /**
   * TeamAvatar findFirstOrThrow
   */
  export type TeamAvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * Filter, which TeamAvatar to fetch.
     */
    where?: TeamAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAvatars to fetch.
     */
    orderBy?: TeamAvatarOrderByWithRelationInput | TeamAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamAvatars.
     */
    cursor?: TeamAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamAvatars.
     */
    distinct?: TeamAvatarScalarFieldEnum | TeamAvatarScalarFieldEnum[]
  }

  /**
   * TeamAvatar findMany
   */
  export type TeamAvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * Filter, which TeamAvatars to fetch.
     */
    where?: TeamAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAvatars to fetch.
     */
    orderBy?: TeamAvatarOrderByWithRelationInput | TeamAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamAvatars.
     */
    cursor?: TeamAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAvatars.
     */
    skip?: number
    distinct?: TeamAvatarScalarFieldEnum | TeamAvatarScalarFieldEnum[]
  }

  /**
   * TeamAvatar create
   */
  export type TeamAvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamAvatar.
     */
    data: XOR<TeamAvatarCreateInput, TeamAvatarUncheckedCreateInput>
  }

  /**
   * TeamAvatar createMany
   */
  export type TeamAvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamAvatars.
     */
    data: TeamAvatarCreateManyInput | TeamAvatarCreateManyInput[]
  }

  /**
   * TeamAvatar update
   */
  export type TeamAvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamAvatar.
     */
    data: XOR<TeamAvatarUpdateInput, TeamAvatarUncheckedUpdateInput>
    /**
     * Choose, which TeamAvatar to update.
     */
    where: TeamAvatarWhereUniqueInput
  }

  /**
   * TeamAvatar updateMany
   */
  export type TeamAvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamAvatars.
     */
    data: XOR<TeamAvatarUpdateManyMutationInput, TeamAvatarUncheckedUpdateManyInput>
    /**
     * Filter which TeamAvatars to update
     */
    where?: TeamAvatarWhereInput
    /**
     * Limit how many TeamAvatars to update.
     */
    limit?: number
  }

  /**
   * TeamAvatar upsert
   */
  export type TeamAvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamAvatar to update in case it exists.
     */
    where: TeamAvatarWhereUniqueInput
    /**
     * In case the TeamAvatar found by the `where` argument doesn't exist, create a new TeamAvatar with this data.
     */
    create: XOR<TeamAvatarCreateInput, TeamAvatarUncheckedCreateInput>
    /**
     * In case the TeamAvatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamAvatarUpdateInput, TeamAvatarUncheckedUpdateInput>
  }

  /**
   * TeamAvatar delete
   */
  export type TeamAvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
    /**
     * Filter which TeamAvatar to delete.
     */
    where: TeamAvatarWhereUniqueInput
  }

  /**
   * TeamAvatar deleteMany
   */
  export type TeamAvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamAvatars to delete
     */
    where?: TeamAvatarWhereInput
    /**
     * Limit how many TeamAvatars to delete.
     */
    limit?: number
  }

  /**
   * TeamAvatar findRaw
   */
  export type TeamAvatarFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamAvatar aggregateRaw
   */
  export type TeamAvatarAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamAvatar without action
   */
  export type TeamAvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAvatar
     */
    select?: TeamAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAvatar
     */
    omit?: TeamAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamAvatarInclude<ExtArgs> | null
  }


  /**
   * Model Award
   */

  export type AggregateAward = {
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  export type AwardAvgAggregateOutputType = {
    teamNumber: number | null
  }

  export type AwardSumAggregateOutputType = {
    teamNumber: number | null
  }

  export type AwardMinAggregateOutputType = {
    id: string | null
    teamNumber: number | null
  }

  export type AwardMaxAggregateOutputType = {
    id: string | null
    teamNumber: number | null
  }

  export type AwardCountAggregateOutputType = {
    id: number
    teamNumber: number
    _all: number
  }


  export type AwardAvgAggregateInputType = {
    teamNumber?: true
  }

  export type AwardSumAggregateInputType = {
    teamNumber?: true
  }

  export type AwardMinAggregateInputType = {
    id?: true
    teamNumber?: true
  }

  export type AwardMaxAggregateInputType = {
    id?: true
    teamNumber?: true
  }

  export type AwardCountAggregateInputType = {
    id?: true
    teamNumber?: true
    _all?: true
  }

  export type AwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Award to aggregate.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Awards
    **/
    _count?: true | AwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardMaxAggregateInputType
  }

  export type GetAwardAggregateType<T extends AwardAggregateArgs> = {
        [P in keyof T & keyof AggregateAward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward[P]>
      : GetScalarType<T[P], AggregateAward[P]>
  }




  export type AwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithAggregationInput | AwardOrderByWithAggregationInput[]
    by: AwardScalarFieldEnum[] | AwardScalarFieldEnum
    having?: AwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardCountAggregateInputType | true
    _avg?: AwardAvgAggregateInputType
    _sum?: AwardSumAggregateInputType
    _min?: AwardMinAggregateInputType
    _max?: AwardMaxAggregateInputType
  }

  export type AwardGroupByOutputType = {
    id: string
    teamNumber: number
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  type GetAwardGroupByPayload<T extends AwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardGroupByOutputType[P]>
            : GetScalarType<T[P], AwardGroupByOutputType[P]>
        }
      >
    >


  export type AwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamNumber?: boolean
    awards?: boolean | AwardEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>



  export type AwardSelectScalar = {
    id?: boolean
    teamNumber?: boolean
  }

  export type AwardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamNumber" | "awards", ExtArgs["result"]["award"]>
  export type AwardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Award"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamNumber: number
    }, ExtArgs["result"]["award"]>
    composites: {
      awards: Prisma.$AwardEntryPayload[]
    }
  }

  type AwardGetPayload<S extends boolean | null | undefined | AwardDefaultArgs> = $Result.GetResult<Prisma.$AwardPayload, S>

  type AwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardCountAggregateInputType | true
    }

  export interface AwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Award'], meta: { name: 'Award' } }
    /**
     * Find zero or one Award that matches the filter.
     * @param {AwardFindUniqueArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardFindUniqueArgs>(args: SelectSubset<T, AwardFindUniqueArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardFindUniqueOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardFindFirstArgs>(args?: SelectSubset<T, AwardFindFirstArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awards
     * const awards = await prisma.award.findMany()
     * 
     * // Get first 10 Awards
     * const awards = await prisma.award.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardWithIdOnly = await prisma.award.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardFindManyArgs>(args?: SelectSubset<T, AwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award.
     * @param {AwardCreateArgs} args - Arguments to create a Award.
     * @example
     * // Create one Award
     * const Award = await prisma.award.create({
     *   data: {
     *     // ... data to create a Award
     *   }
     * })
     * 
     */
    create<T extends AwardCreateArgs>(args: SelectSubset<T, AwardCreateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awards.
     * @param {AwardCreateManyArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardCreateManyArgs>(args?: SelectSubset<T, AwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Award.
     * @param {AwardDeleteArgs} args - Arguments to delete one Award.
     * @example
     * // Delete one Award
     * const Award = await prisma.award.delete({
     *   where: {
     *     // ... filter to delete one Award
     *   }
     * })
     * 
     */
    delete<T extends AwardDeleteArgs>(args: SelectSubset<T, AwardDeleteArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award.
     * @param {AwardUpdateArgs} args - Arguments to update one Award.
     * @example
     * // Update one Award
     * const award = await prisma.award.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardUpdateArgs>(args: SelectSubset<T, AwardUpdateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awards.
     * @param {AwardDeleteManyArgs} args - Arguments to filter Awards to delete.
     * @example
     * // Delete a few Awards
     * const { count } = await prisma.award.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardDeleteManyArgs>(args?: SelectSubset<T, AwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardUpdateManyArgs>(args: SelectSubset<T, AwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Award.
     * @param {AwardUpsertArgs} args - Arguments to update or create a Award.
     * @example
     * // Update or create a Award
     * const award = await prisma.award.upsert({
     *   create: {
     *     // ... data to create a Award
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award we want to update
     *   }
     * })
     */
    upsert<T extends AwardUpsertArgs>(args: SelectSubset<T, AwardUpsertArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * @param {AwardFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const award = await prisma.award.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AwardFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Award.
     * @param {AwardAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const award = await prisma.award.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AwardAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardCountArgs} args - Arguments to filter Awards to count.
     * @example
     * // Count the number of Awards
     * const count = await prisma.award.count({
     *   where: {
     *     // ... the filter for the Awards we want to count
     *   }
     * })
    **/
    count<T extends AwardCountArgs>(
      args?: Subset<T, AwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AwardAggregateArgs>(args: Subset<T, AwardAggregateArgs>): Prisma.PrismaPromise<GetAwardAggregateType<T>>

    /**
     * Group by Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardGroupByArgs} args - Group by arguments.
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
      T extends AwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardGroupByArgs['orderBy'] }
        : { orderBy?: AwardGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, AwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Award model
   */
  readonly fields: AwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Award.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Award model
   */
  interface AwardFieldRefs {
    readonly id: FieldRef<"Award", 'String'>
    readonly teamNumber: FieldRef<"Award", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Award findUnique
   */
  export type AwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findUniqueOrThrow
   */
  export type AwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findFirst
   */
  export type AwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findFirstOrThrow
   */
  export type AwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findMany
   */
  export type AwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Awards to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award create
   */
  export type AwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to create a Award.
     */
    data: XOR<AwardCreateInput, AwardUncheckedCreateInput>
  }

  /**
   * Award createMany
   */
  export type AwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
  }

  /**
   * Award update
   */
  export type AwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to update a Award.
     */
    data: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
    /**
     * Choose, which Award to update.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award updateMany
   */
  export type AwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award upsert
   */
  export type AwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The filter to search for the Award to update in case it exists.
     */
    where: AwardWhereUniqueInput
    /**
     * In case the Award found by the `where` argument doesn't exist, create a new Award with this data.
     */
    create: XOR<AwardCreateInput, AwardUncheckedCreateInput>
    /**
     * In case the Award was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
  }

  /**
   * Award delete
   */
  export type AwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter which Award to delete.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award deleteMany
   */
  export type AwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Awards to delete
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to delete.
     */
    limit?: number
  }

  /**
   * Award findRaw
   */
  export type AwardFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Award aggregateRaw
   */
  export type AwardAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Award without action
   */
  export type AwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
  }


  /**
   * Model SyncLog
   */

  export type AggregateSyncLog = {
    _count: SyncLogCountAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  export type SyncLogMinAggregateOutputType = {
    id: string | null
    task: string | null
    status: string | null
    message: string | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type SyncLogMaxAggregateOutputType = {
    id: string | null
    task: string | null
    status: string | null
    message: string | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type SyncLogCountAggregateOutputType = {
    id: number
    task: number
    status: number
    message: number
    startedAt: number
    finishedAt: number
    _all: number
  }


  export type SyncLogMinAggregateInputType = {
    id?: true
    task?: true
    status?: true
    message?: true
    startedAt?: true
    finishedAt?: true
  }

  export type SyncLogMaxAggregateInputType = {
    id?: true
    task?: true
    status?: true
    message?: true
    startedAt?: true
    finishedAt?: true
  }

  export type SyncLogCountAggregateInputType = {
    id?: true
    task?: true
    status?: true
    message?: true
    startedAt?: true
    finishedAt?: true
    _all?: true
  }

  export type SyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLog to aggregate.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncLogs
    **/
    _count?: true | SyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncLogMaxAggregateInputType
  }

  export type GetSyncLogAggregateType<T extends SyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncLog[P]>
      : GetScalarType<T[P], AggregateSyncLog[P]>
  }




  export type SyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithAggregationInput | SyncLogOrderByWithAggregationInput[]
    by: SyncLogScalarFieldEnum[] | SyncLogScalarFieldEnum
    having?: SyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncLogCountAggregateInputType | true
    _min?: SyncLogMinAggregateInputType
    _max?: SyncLogMaxAggregateInputType
  }

  export type SyncLogGroupByOutputType = {
    id: string
    task: string
    status: string
    message: string | null
    startedAt: Date
    finishedAt: Date
    _count: SyncLogCountAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  type GetSyncLogGroupByPayload<T extends SyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
        }
      >
    >


  export type SyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    status?: boolean
    message?: boolean
    startedAt?: boolean
    finishedAt?: boolean
  }, ExtArgs["result"]["syncLog"]>



  export type SyncLogSelectScalar = {
    id?: boolean
    task?: boolean
    status?: boolean
    message?: boolean
    startedAt?: boolean
    finishedAt?: boolean
  }

  export type SyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task" | "status" | "message" | "startedAt" | "finishedAt", ExtArgs["result"]["syncLog"]>

  export type $SyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      task: string
      status: string
      message: string | null
      startedAt: Date
      finishedAt: Date
    }, ExtArgs["result"]["syncLog"]>
    composites: {}
  }

  type SyncLogGetPayload<S extends boolean | null | undefined | SyncLogDefaultArgs> = $Result.GetResult<Prisma.$SyncLogPayload, S>

  type SyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncLogCountAggregateInputType | true
    }

  export interface SyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncLog'], meta: { name: 'SyncLog' } }
    /**
     * Find zero or one SyncLog that matches the filter.
     * @param {SyncLogFindUniqueArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncLogFindUniqueArgs>(args: SelectSubset<T, SyncLogFindUniqueArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncLogFindUniqueOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncLogFindFirstArgs>(args?: SelectSubset<T, SyncLogFindFirstArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncLogs
     * const syncLogs = await prisma.syncLog.findMany()
     * 
     * // Get first 10 SyncLogs
     * const syncLogs = await prisma.syncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncLogFindManyArgs>(args?: SelectSubset<T, SyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncLog.
     * @param {SyncLogCreateArgs} args - Arguments to create a SyncLog.
     * @example
     * // Create one SyncLog
     * const SyncLog = await prisma.syncLog.create({
     *   data: {
     *     // ... data to create a SyncLog
     *   }
     * })
     * 
     */
    create<T extends SyncLogCreateArgs>(args: SelectSubset<T, SyncLogCreateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncLogs.
     * @param {SyncLogCreateManyArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncLogCreateManyArgs>(args?: SelectSubset<T, SyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SyncLog.
     * @param {SyncLogDeleteArgs} args - Arguments to delete one SyncLog.
     * @example
     * // Delete one SyncLog
     * const SyncLog = await prisma.syncLog.delete({
     *   where: {
     *     // ... filter to delete one SyncLog
     *   }
     * })
     * 
     */
    delete<T extends SyncLogDeleteArgs>(args: SelectSubset<T, SyncLogDeleteArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncLog.
     * @param {SyncLogUpdateArgs} args - Arguments to update one SyncLog.
     * @example
     * // Update one SyncLog
     * const syncLog = await prisma.syncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncLogUpdateArgs>(args: SelectSubset<T, SyncLogUpdateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncLogs.
     * @param {SyncLogDeleteManyArgs} args - Arguments to filter SyncLogs to delete.
     * @example
     * // Delete a few SyncLogs
     * const { count } = await prisma.syncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncLogDeleteManyArgs>(args?: SelectSubset<T, SyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncLogUpdateManyArgs>(args: SelectSubset<T, SyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncLog.
     * @param {SyncLogUpsertArgs} args - Arguments to update or create a SyncLog.
     * @example
     * // Update or create a SyncLog
     * const syncLog = await prisma.syncLog.upsert({
     *   create: {
     *     // ... data to create a SyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncLog we want to update
     *   }
     * })
     */
    upsert<T extends SyncLogUpsertArgs>(args: SelectSubset<T, SyncLogUpsertArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * @param {SyncLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const syncLog = await prisma.syncLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SyncLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SyncLog.
     * @param {SyncLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const syncLog = await prisma.syncLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SyncLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogCountArgs} args - Arguments to filter SyncLogs to count.
     * @example
     * // Count the number of SyncLogs
     * const count = await prisma.syncLog.count({
     *   where: {
     *     // ... the filter for the SyncLogs we want to count
     *   }
     * })
    **/
    count<T extends SyncLogCountArgs>(
      args?: Subset<T, SyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncLogAggregateArgs>(args: Subset<T, SyncLogAggregateArgs>): Prisma.PrismaPromise<GetSyncLogAggregateType<T>>

    /**
     * Group by SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogGroupByArgs} args - Group by arguments.
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
      T extends SyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncLogGroupByArgs['orderBy'] }
        : { orderBy?: SyncLogGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncLog model
   */
  readonly fields: SyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncLog model
   */
  interface SyncLogFieldRefs {
    readonly id: FieldRef<"SyncLog", 'String'>
    readonly task: FieldRef<"SyncLog", 'String'>
    readonly status: FieldRef<"SyncLog", 'String'>
    readonly message: FieldRef<"SyncLog", 'String'>
    readonly startedAt: FieldRef<"SyncLog", 'DateTime'>
    readonly finishedAt: FieldRef<"SyncLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncLog findUnique
   */
  export type SyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findUniqueOrThrow
   */
  export type SyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findFirst
   */
  export type SyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findFirstOrThrow
   */
  export type SyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findMany
   */
  export type SyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLogs to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog create
   */
  export type SyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncLog.
     */
    data: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
  }

  /**
   * SyncLog createMany
   */
  export type SyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
  }

  /**
   * SyncLog update
   */
  export type SyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncLog.
     */
    data: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
    /**
     * Choose, which SyncLog to update.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog updateMany
   */
  export type SyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog upsert
   */
  export type SyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncLog to update in case it exists.
     */
    where: SyncLogWhereUniqueInput
    /**
     * In case the SyncLog found by the `where` argument doesn't exist, create a new SyncLog with this data.
     */
    create: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
    /**
     * In case the SyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
  }

  /**
   * SyncLog delete
   */
  export type SyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter which SyncLog to delete.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog deleteMany
   */
  export type SyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLogs to delete
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to delete.
     */
    limit?: number
  }

  /**
   * SyncLog findRaw
   */
  export type SyncLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SyncLog aggregateRaw
   */
  export type SyncLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SyncLog without action
   */
  export type SyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
  }


  /**
   * Model Pick
   */

  export type AggregatePick = {
    _count: PickCountAggregateOutputType | null
    _avg: PickAvgAggregateOutputType | null
    _sum: PickSumAggregateOutputType | null
    _min: PickMinAggregateOutputType | null
    _max: PickMaxAggregateOutputType | null
  }

  export type PickAvgAggregateOutputType = {
    year: number | null
    teamNumber: number | null
  }

  export type PickSumAggregateOutputType = {
    year: number | null
    teamNumber: number | null
  }

  export type PickMinAggregateOutputType = {
    id: string | null
    scopeKey: string | null
    year: number | null
    teamNumber: number | null
    status: string | null
    by: string | null
    updatedBy: string | null
    updatedAt: Date | null
  }

  export type PickMaxAggregateOutputType = {
    id: string | null
    scopeKey: string | null
    year: number | null
    teamNumber: number | null
    status: string | null
    by: string | null
    updatedBy: string | null
    updatedAt: Date | null
  }

  export type PickCountAggregateOutputType = {
    id: number
    scopeKey: number
    year: number
    teamNumber: number
    status: number
    by: number
    updatedBy: number
    updatedAt: number
    _all: number
  }


  export type PickAvgAggregateInputType = {
    year?: true
    teamNumber?: true
  }

  export type PickSumAggregateInputType = {
    year?: true
    teamNumber?: true
  }

  export type PickMinAggregateInputType = {
    id?: true
    scopeKey?: true
    year?: true
    teamNumber?: true
    status?: true
    by?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type PickMaxAggregateInputType = {
    id?: true
    scopeKey?: true
    year?: true
    teamNumber?: true
    status?: true
    by?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type PickCountAggregateInputType = {
    id?: true
    scopeKey?: true
    year?: true
    teamNumber?: true
    status?: true
    by?: true
    updatedBy?: true
    updatedAt?: true
    _all?: true
  }

  export type PickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pick to aggregate.
     */
    where?: PickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: PickOrderByWithRelationInput | PickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Picks
    **/
    _count?: true | PickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PickMaxAggregateInputType
  }

  export type GetPickAggregateType<T extends PickAggregateArgs> = {
        [P in keyof T & keyof AggregatePick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePick[P]>
      : GetScalarType<T[P], AggregatePick[P]>
  }




  export type PickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickWhereInput
    orderBy?: PickOrderByWithAggregationInput | PickOrderByWithAggregationInput[]
    by: PickScalarFieldEnum[] | PickScalarFieldEnum
    having?: PickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PickCountAggregateInputType | true
    _avg?: PickAvgAggregateInputType
    _sum?: PickSumAggregateInputType
    _min?: PickMinAggregateInputType
    _max?: PickMaxAggregateInputType
  }

  export type PickGroupByOutputType = {
    id: string
    scopeKey: string
    year: number
    teamNumber: number
    status: string
    by: string | null
    updatedBy: string | null
    updatedAt: Date
    _count: PickCountAggregateOutputType | null
    _avg: PickAvgAggregateOutputType | null
    _sum: PickSumAggregateOutputType | null
    _min: PickMinAggregateOutputType | null
    _max: PickMaxAggregateOutputType | null
  }

  type GetPickGroupByPayload<T extends PickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PickGroupByOutputType[P]>
            : GetScalarType<T[P], PickGroupByOutputType[P]>
        }
      >
    >


  export type PickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scopeKey?: boolean
    year?: boolean
    teamNumber?: boolean
    status?: boolean
    by?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pick"]>



  export type PickSelectScalar = {
    id?: boolean
    scopeKey?: boolean
    year?: boolean
    teamNumber?: boolean
    status?: boolean
    by?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
  }

  export type PickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scopeKey" | "year" | "teamNumber" | "status" | "by" | "updatedBy" | "updatedAt", ExtArgs["result"]["pick"]>

  export type $PickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pick"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scopeKey: string
      year: number
      teamNumber: number
      status: string
      by: string | null
      updatedBy: string | null
      updatedAt: Date
    }, ExtArgs["result"]["pick"]>
    composites: {}
  }

  type PickGetPayload<S extends boolean | null | undefined | PickDefaultArgs> = $Result.GetResult<Prisma.$PickPayload, S>

  type PickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PickCountAggregateInputType | true
    }

  export interface PickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pick'], meta: { name: 'Pick' } }
    /**
     * Find zero or one Pick that matches the filter.
     * @param {PickFindUniqueArgs} args - Arguments to find a Pick
     * @example
     * // Get one Pick
     * const pick = await prisma.pick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PickFindUniqueArgs>(args: SelectSubset<T, PickFindUniqueArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PickFindUniqueOrThrowArgs} args - Arguments to find a Pick
     * @example
     * // Get one Pick
     * const pick = await prisma.pick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PickFindUniqueOrThrowArgs>(args: SelectSubset<T, PickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickFindFirstArgs} args - Arguments to find a Pick
     * @example
     * // Get one Pick
     * const pick = await prisma.pick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PickFindFirstArgs>(args?: SelectSubset<T, PickFindFirstArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickFindFirstOrThrowArgs} args - Arguments to find a Pick
     * @example
     * // Get one Pick
     * const pick = await prisma.pick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PickFindFirstOrThrowArgs>(args?: SelectSubset<T, PickFindFirstOrThrowArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Picks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Picks
     * const picks = await prisma.pick.findMany()
     * 
     * // Get first 10 Picks
     * const picks = await prisma.pick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pickWithIdOnly = await prisma.pick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PickFindManyArgs>(args?: SelectSubset<T, PickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pick.
     * @param {PickCreateArgs} args - Arguments to create a Pick.
     * @example
     * // Create one Pick
     * const Pick = await prisma.pick.create({
     *   data: {
     *     // ... data to create a Pick
     *   }
     * })
     * 
     */
    create<T extends PickCreateArgs>(args: SelectSubset<T, PickCreateArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Picks.
     * @param {PickCreateManyArgs} args - Arguments to create many Picks.
     * @example
     * // Create many Picks
     * const pick = await prisma.pick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PickCreateManyArgs>(args?: SelectSubset<T, PickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pick.
     * @param {PickDeleteArgs} args - Arguments to delete one Pick.
     * @example
     * // Delete one Pick
     * const Pick = await prisma.pick.delete({
     *   where: {
     *     // ... filter to delete one Pick
     *   }
     * })
     * 
     */
    delete<T extends PickDeleteArgs>(args: SelectSubset<T, PickDeleteArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pick.
     * @param {PickUpdateArgs} args - Arguments to update one Pick.
     * @example
     * // Update one Pick
     * const pick = await prisma.pick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PickUpdateArgs>(args: SelectSubset<T, PickUpdateArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Picks.
     * @param {PickDeleteManyArgs} args - Arguments to filter Picks to delete.
     * @example
     * // Delete a few Picks
     * const { count } = await prisma.pick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PickDeleteManyArgs>(args?: SelectSubset<T, PickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Picks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Picks
     * const pick = await prisma.pick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PickUpdateManyArgs>(args: SelectSubset<T, PickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pick.
     * @param {PickUpsertArgs} args - Arguments to update or create a Pick.
     * @example
     * // Update or create a Pick
     * const pick = await prisma.pick.upsert({
     *   create: {
     *     // ... data to create a Pick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pick we want to update
     *   }
     * })
     */
    upsert<T extends PickUpsertArgs>(args: SelectSubset<T, PickUpsertArgs<ExtArgs>>): Prisma__PickClient<$Result.GetResult<Prisma.$PickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Picks that matches the filter.
     * @param {PickFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pick = await prisma.pick.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PickFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pick.
     * @param {PickAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pick = await prisma.pick.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PickAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Picks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickCountArgs} args - Arguments to filter Picks to count.
     * @example
     * // Count the number of Picks
     * const count = await prisma.pick.count({
     *   where: {
     *     // ... the filter for the Picks we want to count
     *   }
     * })
    **/
    count<T extends PickCountArgs>(
      args?: Subset<T, PickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PickAggregateArgs>(args: Subset<T, PickAggregateArgs>): Prisma.PrismaPromise<GetPickAggregateType<T>>

    /**
     * Group by Pick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickGroupByArgs} args - Group by arguments.
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
      T extends PickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PickGroupByArgs['orderBy'] }
        : { orderBy?: PickGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, PickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pick model
   */
  readonly fields: PickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pick model
   */
  interface PickFieldRefs {
    readonly id: FieldRef<"Pick", 'String'>
    readonly scopeKey: FieldRef<"Pick", 'String'>
    readonly year: FieldRef<"Pick", 'Int'>
    readonly teamNumber: FieldRef<"Pick", 'Int'>
    readonly status: FieldRef<"Pick", 'String'>
    readonly by: FieldRef<"Pick", 'String'>
    readonly updatedBy: FieldRef<"Pick", 'String'>
    readonly updatedAt: FieldRef<"Pick", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pick findUnique
   */
  export type PickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * Filter, which Pick to fetch.
     */
    where: PickWhereUniqueInput
  }

  /**
   * Pick findUniqueOrThrow
   */
  export type PickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * Filter, which Pick to fetch.
     */
    where: PickWhereUniqueInput
  }

  /**
   * Pick findFirst
   */
  export type PickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * Filter, which Pick to fetch.
     */
    where?: PickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: PickOrderByWithRelationInput | PickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Picks.
     */
    cursor?: PickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Picks.
     */
    distinct?: PickScalarFieldEnum | PickScalarFieldEnum[]
  }

  /**
   * Pick findFirstOrThrow
   */
  export type PickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * Filter, which Pick to fetch.
     */
    where?: PickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: PickOrderByWithRelationInput | PickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Picks.
     */
    cursor?: PickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Picks.
     */
    distinct?: PickScalarFieldEnum | PickScalarFieldEnum[]
  }

  /**
   * Pick findMany
   */
  export type PickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * Filter, which Picks to fetch.
     */
    where?: PickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: PickOrderByWithRelationInput | PickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Picks.
     */
    cursor?: PickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    distinct?: PickScalarFieldEnum | PickScalarFieldEnum[]
  }

  /**
   * Pick create
   */
  export type PickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * The data needed to create a Pick.
     */
    data: XOR<PickCreateInput, PickUncheckedCreateInput>
  }

  /**
   * Pick createMany
   */
  export type PickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Picks.
     */
    data: PickCreateManyInput | PickCreateManyInput[]
  }

  /**
   * Pick update
   */
  export type PickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * The data needed to update a Pick.
     */
    data: XOR<PickUpdateInput, PickUncheckedUpdateInput>
    /**
     * Choose, which Pick to update.
     */
    where: PickWhereUniqueInput
  }

  /**
   * Pick updateMany
   */
  export type PickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Picks.
     */
    data: XOR<PickUpdateManyMutationInput, PickUncheckedUpdateManyInput>
    /**
     * Filter which Picks to update
     */
    where?: PickWhereInput
    /**
     * Limit how many Picks to update.
     */
    limit?: number
  }

  /**
   * Pick upsert
   */
  export type PickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * The filter to search for the Pick to update in case it exists.
     */
    where: PickWhereUniqueInput
    /**
     * In case the Pick found by the `where` argument doesn't exist, create a new Pick with this data.
     */
    create: XOR<PickCreateInput, PickUncheckedCreateInput>
    /**
     * In case the Pick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PickUpdateInput, PickUncheckedUpdateInput>
  }

  /**
   * Pick delete
   */
  export type PickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
    /**
     * Filter which Pick to delete.
     */
    where: PickWhereUniqueInput
  }

  /**
   * Pick deleteMany
   */
  export type PickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picks to delete
     */
    where?: PickWhereInput
    /**
     * Limit how many Picks to delete.
     */
    limit?: number
  }

  /**
   * Pick findRaw
   */
  export type PickFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pick aggregateRaw
   */
  export type PickAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pick without action
   */
  export type PickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pick
     */
    select?: PickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pick
     */
    omit?: PickOmit<ExtArgs> | null
  }


  /**
   * Model Draft
   */

  export type AggregateDraft = {
    _count: DraftCountAggregateOutputType | null
    _avg: DraftAvgAggregateOutputType | null
    _sum: DraftSumAggregateOutputType | null
    _min: DraftMinAggregateOutputType | null
    _max: DraftMaxAggregateOutputType | null
  }

  export type DraftAvgAggregateOutputType = {
    year: number | null
  }

  export type DraftSumAggregateOutputType = {
    year: number | null
  }

  export type DraftMinAggregateOutputType = {
    id: string | null
    year: number | null
    updatedAt: Date | null
  }

  export type DraftMaxAggregateOutputType = {
    id: string | null
    year: number | null
    updatedAt: Date | null
  }

  export type DraftCountAggregateOutputType = {
    id: number
    year: number
    drafters: number
    updatedAt: number
    _all: number
  }


  export type DraftAvgAggregateInputType = {
    year?: true
  }

  export type DraftSumAggregateInputType = {
    year?: true
  }

  export type DraftMinAggregateInputType = {
    id?: true
    year?: true
    updatedAt?: true
  }

  export type DraftMaxAggregateInputType = {
    id?: true
    year?: true
    updatedAt?: true
  }

  export type DraftCountAggregateInputType = {
    id?: true
    year?: true
    drafters?: true
    updatedAt?: true
    _all?: true
  }

  export type DraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draft to aggregate.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drafts
    **/
    _count?: true | DraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DraftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DraftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DraftMaxAggregateInputType
  }

  export type GetDraftAggregateType<T extends DraftAggregateArgs> = {
        [P in keyof T & keyof AggregateDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraft[P]>
      : GetScalarType<T[P], AggregateDraft[P]>
  }




  export type DraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftWhereInput
    orderBy?: DraftOrderByWithAggregationInput | DraftOrderByWithAggregationInput[]
    by: DraftScalarFieldEnum[] | DraftScalarFieldEnum
    having?: DraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DraftCountAggregateInputType | true
    _avg?: DraftAvgAggregateInputType
    _sum?: DraftSumAggregateInputType
    _min?: DraftMinAggregateInputType
    _max?: DraftMaxAggregateInputType
  }

  export type DraftGroupByOutputType = {
    id: string
    year: number
    drafters: string[]
    updatedAt: Date
    _count: DraftCountAggregateOutputType | null
    _avg: DraftAvgAggregateOutputType | null
    _sum: DraftSumAggregateOutputType | null
    _min: DraftMinAggregateOutputType | null
    _max: DraftMaxAggregateOutputType | null
  }

  type GetDraftGroupByPayload<T extends DraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DraftGroupByOutputType[P]>
            : GetScalarType<T[P], DraftGroupByOutputType[P]>
        }
      >
    >


  export type DraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    drafters?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["draft"]>



  export type DraftSelectScalar = {
    id?: boolean
    year?: boolean
    drafters?: boolean
    updatedAt?: boolean
  }

  export type DraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "drafters" | "updatedAt", ExtArgs["result"]["draft"]>

  export type $DraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Draft"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      drafters: string[]
      updatedAt: Date
    }, ExtArgs["result"]["draft"]>
    composites: {}
  }

  type DraftGetPayload<S extends boolean | null | undefined | DraftDefaultArgs> = $Result.GetResult<Prisma.$DraftPayload, S>

  type DraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DraftCountAggregateInputType | true
    }

  export interface DraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Draft'], meta: { name: 'Draft' } }
    /**
     * Find zero or one Draft that matches the filter.
     * @param {DraftFindUniqueArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DraftFindUniqueArgs>(args: SelectSubset<T, DraftFindUniqueArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Draft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DraftFindUniqueOrThrowArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DraftFindUniqueOrThrowArgs>(args: SelectSubset<T, DraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindFirstArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DraftFindFirstArgs>(args?: SelectSubset<T, DraftFindFirstArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindFirstOrThrowArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DraftFindFirstOrThrowArgs>(args?: SelectSubset<T, DraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drafts
     * const drafts = await prisma.draft.findMany()
     * 
     * // Get first 10 Drafts
     * const drafts = await prisma.draft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const draftWithIdOnly = await prisma.draft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DraftFindManyArgs>(args?: SelectSubset<T, DraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Draft.
     * @param {DraftCreateArgs} args - Arguments to create a Draft.
     * @example
     * // Create one Draft
     * const Draft = await prisma.draft.create({
     *   data: {
     *     // ... data to create a Draft
     *   }
     * })
     * 
     */
    create<T extends DraftCreateArgs>(args: SelectSubset<T, DraftCreateArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drafts.
     * @param {DraftCreateManyArgs} args - Arguments to create many Drafts.
     * @example
     * // Create many Drafts
     * const draft = await prisma.draft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DraftCreateManyArgs>(args?: SelectSubset<T, DraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Draft.
     * @param {DraftDeleteArgs} args - Arguments to delete one Draft.
     * @example
     * // Delete one Draft
     * const Draft = await prisma.draft.delete({
     *   where: {
     *     // ... filter to delete one Draft
     *   }
     * })
     * 
     */
    delete<T extends DraftDeleteArgs>(args: SelectSubset<T, DraftDeleteArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Draft.
     * @param {DraftUpdateArgs} args - Arguments to update one Draft.
     * @example
     * // Update one Draft
     * const draft = await prisma.draft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DraftUpdateArgs>(args: SelectSubset<T, DraftUpdateArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drafts.
     * @param {DraftDeleteManyArgs} args - Arguments to filter Drafts to delete.
     * @example
     * // Delete a few Drafts
     * const { count } = await prisma.draft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DraftDeleteManyArgs>(args?: SelectSubset<T, DraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drafts
     * const draft = await prisma.draft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DraftUpdateManyArgs>(args: SelectSubset<T, DraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Draft.
     * @param {DraftUpsertArgs} args - Arguments to update or create a Draft.
     * @example
     * // Update or create a Draft
     * const draft = await prisma.draft.upsert({
     *   create: {
     *     // ... data to create a Draft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Draft we want to update
     *   }
     * })
     */
    upsert<T extends DraftUpsertArgs>(args: SelectSubset<T, DraftUpsertArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drafts that matches the filter.
     * @param {DraftFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const draft = await prisma.draft.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DraftFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Draft.
     * @param {DraftAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const draft = await prisma.draft.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DraftAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftCountArgs} args - Arguments to filter Drafts to count.
     * @example
     * // Count the number of Drafts
     * const count = await prisma.draft.count({
     *   where: {
     *     // ... the filter for the Drafts we want to count
     *   }
     * })
    **/
    count<T extends DraftCountArgs>(
      args?: Subset<T, DraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DraftAggregateArgs>(args: Subset<T, DraftAggregateArgs>): Prisma.PrismaPromise<GetDraftAggregateType<T>>

    /**
     * Group by Draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftGroupByArgs} args - Group by arguments.
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
      T extends DraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DraftGroupByArgs['orderBy'] }
        : { orderBy?: DraftGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, DraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Draft model
   */
  readonly fields: DraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Draft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Draft model
   */
  interface DraftFieldRefs {
    readonly id: FieldRef<"Draft", 'String'>
    readonly year: FieldRef<"Draft", 'Int'>
    readonly drafters: FieldRef<"Draft", 'String[]'>
    readonly updatedAt: FieldRef<"Draft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Draft findUnique
   */
  export type DraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft findUniqueOrThrow
   */
  export type DraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft findFirst
   */
  export type DraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drafts.
     */
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft findFirstOrThrow
   */
  export type DraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drafts.
     */
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft findMany
   */
  export type DraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Drafts to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft create
   */
  export type DraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data needed to create a Draft.
     */
    data: XOR<DraftCreateInput, DraftUncheckedCreateInput>
  }

  /**
   * Draft createMany
   */
  export type DraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drafts.
     */
    data: DraftCreateManyInput | DraftCreateManyInput[]
  }

  /**
   * Draft update
   */
  export type DraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data needed to update a Draft.
     */
    data: XOR<DraftUpdateInput, DraftUncheckedUpdateInput>
    /**
     * Choose, which Draft to update.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft updateMany
   */
  export type DraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drafts.
     */
    data: XOR<DraftUpdateManyMutationInput, DraftUncheckedUpdateManyInput>
    /**
     * Filter which Drafts to update
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to update.
     */
    limit?: number
  }

  /**
   * Draft upsert
   */
  export type DraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The filter to search for the Draft to update in case it exists.
     */
    where: DraftWhereUniqueInput
    /**
     * In case the Draft found by the `where` argument doesn't exist, create a new Draft with this data.
     */
    create: XOR<DraftCreateInput, DraftUncheckedCreateInput>
    /**
     * In case the Draft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DraftUpdateInput, DraftUncheckedUpdateInput>
  }

  /**
   * Draft delete
   */
  export type DraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter which Draft to delete.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft deleteMany
   */
  export type DraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drafts to delete
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to delete.
     */
    limit?: number
  }

  /**
   * Draft findRaw
   */
  export type DraftFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Draft aggregateRaw
   */
  export type DraftAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Draft without action
   */
  export type DraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
  }


  /**
   * Model SyncCursor
   */

  export type AggregateSyncCursor = {
    _count: SyncCursorCountAggregateOutputType | null
    _min: SyncCursorMinAggregateOutputType | null
    _max: SyncCursorMaxAggregateOutputType | null
  }

  export type SyncCursorMinAggregateOutputType = {
    id: string | null
    path: string | null
    etag: string | null
    updatedAt: Date | null
  }

  export type SyncCursorMaxAggregateOutputType = {
    id: string | null
    path: string | null
    etag: string | null
    updatedAt: Date | null
  }

  export type SyncCursorCountAggregateOutputType = {
    id: number
    path: number
    etag: number
    updatedAt: number
    _all: number
  }


  export type SyncCursorMinAggregateInputType = {
    id?: true
    path?: true
    etag?: true
    updatedAt?: true
  }

  export type SyncCursorMaxAggregateInputType = {
    id?: true
    path?: true
    etag?: true
    updatedAt?: true
  }

  export type SyncCursorCountAggregateInputType = {
    id?: true
    path?: true
    etag?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncCursorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncCursor to aggregate.
     */
    where?: SyncCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncCursors to fetch.
     */
    orderBy?: SyncCursorOrderByWithRelationInput | SyncCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncCursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncCursors
    **/
    _count?: true | SyncCursorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncCursorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncCursorMaxAggregateInputType
  }

  export type GetSyncCursorAggregateType<T extends SyncCursorAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncCursor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncCursor[P]>
      : GetScalarType<T[P], AggregateSyncCursor[P]>
  }




  export type SyncCursorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncCursorWhereInput
    orderBy?: SyncCursorOrderByWithAggregationInput | SyncCursorOrderByWithAggregationInput[]
    by: SyncCursorScalarFieldEnum[] | SyncCursorScalarFieldEnum
    having?: SyncCursorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncCursorCountAggregateInputType | true
    _min?: SyncCursorMinAggregateInputType
    _max?: SyncCursorMaxAggregateInputType
  }

  export type SyncCursorGroupByOutputType = {
    id: string
    path: string
    etag: string
    updatedAt: Date
    _count: SyncCursorCountAggregateOutputType | null
    _min: SyncCursorMinAggregateOutputType | null
    _max: SyncCursorMaxAggregateOutputType | null
  }

  type GetSyncCursorGroupByPayload<T extends SyncCursorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncCursorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncCursorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncCursorGroupByOutputType[P]>
            : GetScalarType<T[P], SyncCursorGroupByOutputType[P]>
        }
      >
    >


  export type SyncCursorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    etag?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncCursor"]>



  export type SyncCursorSelectScalar = {
    id?: boolean
    path?: boolean
    etag?: boolean
    updatedAt?: boolean
  }

  export type SyncCursorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "etag" | "updatedAt", ExtArgs["result"]["syncCursor"]>

  export type $SyncCursorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncCursor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      etag: string
      updatedAt: Date
    }, ExtArgs["result"]["syncCursor"]>
    composites: {}
  }

  type SyncCursorGetPayload<S extends boolean | null | undefined | SyncCursorDefaultArgs> = $Result.GetResult<Prisma.$SyncCursorPayload, S>

  type SyncCursorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncCursorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncCursorCountAggregateInputType | true
    }

  export interface SyncCursorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncCursor'], meta: { name: 'SyncCursor' } }
    /**
     * Find zero or one SyncCursor that matches the filter.
     * @param {SyncCursorFindUniqueArgs} args - Arguments to find a SyncCursor
     * @example
     * // Get one SyncCursor
     * const syncCursor = await prisma.syncCursor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncCursorFindUniqueArgs>(args: SelectSubset<T, SyncCursorFindUniqueArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncCursor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncCursorFindUniqueOrThrowArgs} args - Arguments to find a SyncCursor
     * @example
     * // Get one SyncCursor
     * const syncCursor = await prisma.syncCursor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncCursorFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncCursorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncCursor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncCursorFindFirstArgs} args - Arguments to find a SyncCursor
     * @example
     * // Get one SyncCursor
     * const syncCursor = await prisma.syncCursor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncCursorFindFirstArgs>(args?: SelectSubset<T, SyncCursorFindFirstArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncCursor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncCursorFindFirstOrThrowArgs} args - Arguments to find a SyncCursor
     * @example
     * // Get one SyncCursor
     * const syncCursor = await prisma.syncCursor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncCursorFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncCursorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncCursors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncCursorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncCursors
     * const syncCursors = await prisma.syncCursor.findMany()
     * 
     * // Get first 10 SyncCursors
     * const syncCursors = await prisma.syncCursor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncCursorWithIdOnly = await prisma.syncCursor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncCursorFindManyArgs>(args?: SelectSubset<T, SyncCursorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncCursor.
     * @param {SyncCursorCreateArgs} args - Arguments to create a SyncCursor.
     * @example
     * // Create one SyncCursor
     * const SyncCursor = await prisma.syncCursor.create({
     *   data: {
     *     // ... data to create a SyncCursor
     *   }
     * })
     * 
     */
    create<T extends SyncCursorCreateArgs>(args: SelectSubset<T, SyncCursorCreateArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncCursors.
     * @param {SyncCursorCreateManyArgs} args - Arguments to create many SyncCursors.
     * @example
     * // Create many SyncCursors
     * const syncCursor = await prisma.syncCursor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncCursorCreateManyArgs>(args?: SelectSubset<T, SyncCursorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SyncCursor.
     * @param {SyncCursorDeleteArgs} args - Arguments to delete one SyncCursor.
     * @example
     * // Delete one SyncCursor
     * const SyncCursor = await prisma.syncCursor.delete({
     *   where: {
     *     // ... filter to delete one SyncCursor
     *   }
     * })
     * 
     */
    delete<T extends SyncCursorDeleteArgs>(args: SelectSubset<T, SyncCursorDeleteArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncCursor.
     * @param {SyncCursorUpdateArgs} args - Arguments to update one SyncCursor.
     * @example
     * // Update one SyncCursor
     * const syncCursor = await prisma.syncCursor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncCursorUpdateArgs>(args: SelectSubset<T, SyncCursorUpdateArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncCursors.
     * @param {SyncCursorDeleteManyArgs} args - Arguments to filter SyncCursors to delete.
     * @example
     * // Delete a few SyncCursors
     * const { count } = await prisma.syncCursor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncCursorDeleteManyArgs>(args?: SelectSubset<T, SyncCursorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncCursors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncCursorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncCursors
     * const syncCursor = await prisma.syncCursor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncCursorUpdateManyArgs>(args: SelectSubset<T, SyncCursorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncCursor.
     * @param {SyncCursorUpsertArgs} args - Arguments to update or create a SyncCursor.
     * @example
     * // Update or create a SyncCursor
     * const syncCursor = await prisma.syncCursor.upsert({
     *   create: {
     *     // ... data to create a SyncCursor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncCursor we want to update
     *   }
     * })
     */
    upsert<T extends SyncCursorUpsertArgs>(args: SelectSubset<T, SyncCursorUpsertArgs<ExtArgs>>): Prisma__SyncCursorClient<$Result.GetResult<Prisma.$SyncCursorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncCursors that matches the filter.
     * @param {SyncCursorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const syncCursor = await prisma.syncCursor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SyncCursorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SyncCursor.
     * @param {SyncCursorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const syncCursor = await prisma.syncCursor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SyncCursorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SyncCursors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncCursorCountArgs} args - Arguments to filter SyncCursors to count.
     * @example
     * // Count the number of SyncCursors
     * const count = await prisma.syncCursor.count({
     *   where: {
     *     // ... the filter for the SyncCursors we want to count
     *   }
     * })
    **/
    count<T extends SyncCursorCountArgs>(
      args?: Subset<T, SyncCursorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncCursorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncCursor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncCursorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncCursorAggregateArgs>(args: Subset<T, SyncCursorAggregateArgs>): Prisma.PrismaPromise<GetSyncCursorAggregateType<T>>

    /**
     * Group by SyncCursor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncCursorGroupByArgs} args - Group by arguments.
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
      T extends SyncCursorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncCursorGroupByArgs['orderBy'] }
        : { orderBy?: SyncCursorGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncCursorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncCursorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncCursor model
   */
  readonly fields: SyncCursorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncCursor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncCursorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncCursor model
   */
  interface SyncCursorFieldRefs {
    readonly id: FieldRef<"SyncCursor", 'String'>
    readonly path: FieldRef<"SyncCursor", 'String'>
    readonly etag: FieldRef<"SyncCursor", 'String'>
    readonly updatedAt: FieldRef<"SyncCursor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncCursor findUnique
   */
  export type SyncCursorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * Filter, which SyncCursor to fetch.
     */
    where: SyncCursorWhereUniqueInput
  }

  /**
   * SyncCursor findUniqueOrThrow
   */
  export type SyncCursorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * Filter, which SyncCursor to fetch.
     */
    where: SyncCursorWhereUniqueInput
  }

  /**
   * SyncCursor findFirst
   */
  export type SyncCursorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * Filter, which SyncCursor to fetch.
     */
    where?: SyncCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncCursors to fetch.
     */
    orderBy?: SyncCursorOrderByWithRelationInput | SyncCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncCursors.
     */
    cursor?: SyncCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncCursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncCursors.
     */
    distinct?: SyncCursorScalarFieldEnum | SyncCursorScalarFieldEnum[]
  }

  /**
   * SyncCursor findFirstOrThrow
   */
  export type SyncCursorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * Filter, which SyncCursor to fetch.
     */
    where?: SyncCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncCursors to fetch.
     */
    orderBy?: SyncCursorOrderByWithRelationInput | SyncCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncCursors.
     */
    cursor?: SyncCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncCursors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncCursors.
     */
    distinct?: SyncCursorScalarFieldEnum | SyncCursorScalarFieldEnum[]
  }

  /**
   * SyncCursor findMany
   */
  export type SyncCursorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * Filter, which SyncCursors to fetch.
     */
    where?: SyncCursorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncCursors to fetch.
     */
    orderBy?: SyncCursorOrderByWithRelationInput | SyncCursorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncCursors.
     */
    cursor?: SyncCursorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncCursors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncCursors.
     */
    skip?: number
    distinct?: SyncCursorScalarFieldEnum | SyncCursorScalarFieldEnum[]
  }

  /**
   * SyncCursor create
   */
  export type SyncCursorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncCursor.
     */
    data: XOR<SyncCursorCreateInput, SyncCursorUncheckedCreateInput>
  }

  /**
   * SyncCursor createMany
   */
  export type SyncCursorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncCursors.
     */
    data: SyncCursorCreateManyInput | SyncCursorCreateManyInput[]
  }

  /**
   * SyncCursor update
   */
  export type SyncCursorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncCursor.
     */
    data: XOR<SyncCursorUpdateInput, SyncCursorUncheckedUpdateInput>
    /**
     * Choose, which SyncCursor to update.
     */
    where: SyncCursorWhereUniqueInput
  }

  /**
   * SyncCursor updateMany
   */
  export type SyncCursorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncCursors.
     */
    data: XOR<SyncCursorUpdateManyMutationInput, SyncCursorUncheckedUpdateManyInput>
    /**
     * Filter which SyncCursors to update
     */
    where?: SyncCursorWhereInput
    /**
     * Limit how many SyncCursors to update.
     */
    limit?: number
  }

  /**
   * SyncCursor upsert
   */
  export type SyncCursorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncCursor to update in case it exists.
     */
    where: SyncCursorWhereUniqueInput
    /**
     * In case the SyncCursor found by the `where` argument doesn't exist, create a new SyncCursor with this data.
     */
    create: XOR<SyncCursorCreateInput, SyncCursorUncheckedCreateInput>
    /**
     * In case the SyncCursor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncCursorUpdateInput, SyncCursorUncheckedUpdateInput>
  }

  /**
   * SyncCursor delete
   */
  export type SyncCursorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
    /**
     * Filter which SyncCursor to delete.
     */
    where: SyncCursorWhereUniqueInput
  }

  /**
   * SyncCursor deleteMany
   */
  export type SyncCursorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncCursors to delete
     */
    where?: SyncCursorWhereInput
    /**
     * Limit how many SyncCursors to delete.
     */
    limit?: number
  }

  /**
   * SyncCursor findRaw
   */
  export type SyncCursorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SyncCursor aggregateRaw
   */
  export type SyncCursorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SyncCursor without action
   */
  export type SyncCursorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncCursor
     */
    select?: SyncCursorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncCursor
     */
    omit?: SyncCursorOmit<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    year: number | null
    teamNumber: number | null
    stars: number | null
  }

  export type RatingSumAggregateOutputType = {
    year: number | null
    teamNumber: number | null
    stars: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    year: number | null
    teamNumber: number | null
    stars: number | null
    updatedBy: string | null
    updatedAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    year: number | null
    teamNumber: number | null
    stars: number | null
    updatedBy: string | null
    updatedAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    year: number
    teamNumber: number
    stars: number
    updatedBy: number
    updatedAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    year?: true
    teamNumber?: true
    stars?: true
  }

  export type RatingSumAggregateInputType = {
    year?: true
    teamNumber?: true
    stars?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    year?: true
    teamNumber?: true
    stars?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    year?: true
    teamNumber?: true
    stars?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    year?: true
    teamNumber?: true
    stars?: true
    updatedBy?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    year: number
    teamNumber: number
    stars: number
    updatedBy: string | null
    updatedAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    teamNumber?: boolean
    stars?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rating"]>



  export type RatingSelectScalar = {
    id?: boolean
    year?: boolean
    teamNumber?: boolean
    stars?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "teamNumber" | "stars" | "updatedBy" | "updatedAt", ExtArgs["result"]["rating"]>

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      teamNumber: number
      stars: number
      updatedBy: string | null
      updatedAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * @param {RatingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rating = await prisma.rating.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RatingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Rating.
     * @param {RatingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rating = await prisma.rating.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RatingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly year: FieldRef<"Rating", 'Int'>
    readonly teamNumber: FieldRef<"Rating", 'Int'>
    readonly stars: FieldRef<"Rating", 'Int'>
    readonly updatedBy: FieldRef<"Rating", 'String'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating findRaw
   */
  export type RatingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Rating aggregateRaw
   */
  export type RatingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
  }


  /**
   * Model TeamEventResult
   */

  export type AggregateTeamEventResult = {
    _count: TeamEventResultCountAggregateOutputType | null
    _avg: TeamEventResultAvgAggregateOutputType | null
    _sum: TeamEventResultSumAggregateOutputType | null
    _min: TeamEventResultMinAggregateOutputType | null
    _max: TeamEventResultMaxAggregateOutputType | null
  }

  export type TeamEventResultAvgAggregateOutputType = {
    teamNumber: number | null
    year: number | null
    eventType: number | null
    qualRank: number | null
    numTeams: number | null
    allianceSeed: number | null
    elimMatchesPlayed: number | null
    elimWins: number | null
    einsteinWins: number | null
    opponents: number | null
  }

  export type TeamEventResultSumAggregateOutputType = {
    teamNumber: number | null
    year: number | null
    eventType: number | null
    qualRank: number | null
    numTeams: number | null
    allianceSeed: number | null
    elimMatchesPlayed: number | null
    elimWins: number | null
    einsteinWins: number | null
    opponents: number[]
  }

  export type TeamEventResultMinAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    eventKey: string | null
    year: number | null
    eventType: number | null
    startDate: string | null
    qualRank: number | null
    numTeams: number | null
    allianceSeed: number | null
    pickRole: string | null
    elimMatchesPlayed: number | null
    elimWins: number | null
    einsteinWins: number | null
    updatedAt: Date | null
  }

  export type TeamEventResultMaxAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    eventKey: string | null
    year: number | null
    eventType: number | null
    startDate: string | null
    qualRank: number | null
    numTeams: number | null
    allianceSeed: number | null
    pickRole: string | null
    elimMatchesPlayed: number | null
    elimWins: number | null
    einsteinWins: number | null
    updatedAt: Date | null
  }

  export type TeamEventResultCountAggregateOutputType = {
    id: number
    teamNumber: number
    eventKey: number
    year: number
    eventType: number
    startDate: number
    qualRank: number
    numTeams: number
    allianceSeed: number
    pickRole: number
    elimMatchesPlayed: number
    elimWins: number
    einsteinWins: number
    opponents: number
    updatedAt: number
    _all: number
  }


  export type TeamEventResultAvgAggregateInputType = {
    teamNumber?: true
    year?: true
    eventType?: true
    qualRank?: true
    numTeams?: true
    allianceSeed?: true
    elimMatchesPlayed?: true
    elimWins?: true
    einsteinWins?: true
    opponents?: true
  }

  export type TeamEventResultSumAggregateInputType = {
    teamNumber?: true
    year?: true
    eventType?: true
    qualRank?: true
    numTeams?: true
    allianceSeed?: true
    elimMatchesPlayed?: true
    elimWins?: true
    einsteinWins?: true
    opponents?: true
  }

  export type TeamEventResultMinAggregateInputType = {
    id?: true
    teamNumber?: true
    eventKey?: true
    year?: true
    eventType?: true
    startDate?: true
    qualRank?: true
    numTeams?: true
    allianceSeed?: true
    pickRole?: true
    elimMatchesPlayed?: true
    elimWins?: true
    einsteinWins?: true
    updatedAt?: true
  }

  export type TeamEventResultMaxAggregateInputType = {
    id?: true
    teamNumber?: true
    eventKey?: true
    year?: true
    eventType?: true
    startDate?: true
    qualRank?: true
    numTeams?: true
    allianceSeed?: true
    pickRole?: true
    elimMatchesPlayed?: true
    elimWins?: true
    einsteinWins?: true
    updatedAt?: true
  }

  export type TeamEventResultCountAggregateInputType = {
    id?: true
    teamNumber?: true
    eventKey?: true
    year?: true
    eventType?: true
    startDate?: true
    qualRank?: true
    numTeams?: true
    allianceSeed?: true
    pickRole?: true
    elimMatchesPlayed?: true
    elimWins?: true
    einsteinWins?: true
    opponents?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamEventResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamEventResult to aggregate.
     */
    where?: TeamEventResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEventResults to fetch.
     */
    orderBy?: TeamEventResultOrderByWithRelationInput | TeamEventResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamEventResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEventResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEventResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamEventResults
    **/
    _count?: true | TeamEventResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamEventResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamEventResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamEventResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamEventResultMaxAggregateInputType
  }

  export type GetTeamEventResultAggregateType<T extends TeamEventResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamEventResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamEventResult[P]>
      : GetScalarType<T[P], AggregateTeamEventResult[P]>
  }




  export type TeamEventResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamEventResultWhereInput
    orderBy?: TeamEventResultOrderByWithAggregationInput | TeamEventResultOrderByWithAggregationInput[]
    by: TeamEventResultScalarFieldEnum[] | TeamEventResultScalarFieldEnum
    having?: TeamEventResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamEventResultCountAggregateInputType | true
    _avg?: TeamEventResultAvgAggregateInputType
    _sum?: TeamEventResultSumAggregateInputType
    _min?: TeamEventResultMinAggregateInputType
    _max?: TeamEventResultMaxAggregateInputType
  }

  export type TeamEventResultGroupByOutputType = {
    id: string
    teamNumber: number
    eventKey: string
    year: number
    eventType: number
    startDate: string | null
    qualRank: number | null
    numTeams: number | null
    allianceSeed: number | null
    pickRole: string | null
    elimMatchesPlayed: number
    elimWins: number
    einsteinWins: number
    opponents: number[]
    updatedAt: Date
    _count: TeamEventResultCountAggregateOutputType | null
    _avg: TeamEventResultAvgAggregateOutputType | null
    _sum: TeamEventResultSumAggregateOutputType | null
    _min: TeamEventResultMinAggregateOutputType | null
    _max: TeamEventResultMaxAggregateOutputType | null
  }

  type GetTeamEventResultGroupByPayload<T extends TeamEventResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamEventResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamEventResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamEventResultGroupByOutputType[P]>
            : GetScalarType<T[P], TeamEventResultGroupByOutputType[P]>
        }
      >
    >


  export type TeamEventResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamNumber?: boolean
    eventKey?: boolean
    year?: boolean
    eventType?: boolean
    startDate?: boolean
    qualRank?: boolean
    numTeams?: boolean
    allianceSeed?: boolean
    pickRole?: boolean
    elimMatchesPlayed?: boolean
    elimWins?: boolean
    einsteinWins?: boolean
    opponents?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamEventResult"]>



  export type TeamEventResultSelectScalar = {
    id?: boolean
    teamNumber?: boolean
    eventKey?: boolean
    year?: boolean
    eventType?: boolean
    startDate?: boolean
    qualRank?: boolean
    numTeams?: boolean
    allianceSeed?: boolean
    pickRole?: boolean
    elimMatchesPlayed?: boolean
    elimWins?: boolean
    einsteinWins?: boolean
    opponents?: boolean
    updatedAt?: boolean
  }

  export type TeamEventResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamNumber" | "eventKey" | "year" | "eventType" | "startDate" | "qualRank" | "numTeams" | "allianceSeed" | "pickRole" | "elimMatchesPlayed" | "elimWins" | "einsteinWins" | "opponents" | "updatedAt", ExtArgs["result"]["teamEventResult"]>

  export type $TeamEventResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamEventResult"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamNumber: number
      eventKey: string
      year: number
      eventType: number
      startDate: string | null
      qualRank: number | null
      numTeams: number | null
      allianceSeed: number | null
      pickRole: string | null
      elimMatchesPlayed: number
      elimWins: number
      einsteinWins: number
      opponents: number[]
      updatedAt: Date
    }, ExtArgs["result"]["teamEventResult"]>
    composites: {}
  }

  type TeamEventResultGetPayload<S extends boolean | null | undefined | TeamEventResultDefaultArgs> = $Result.GetResult<Prisma.$TeamEventResultPayload, S>

  type TeamEventResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamEventResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamEventResultCountAggregateInputType | true
    }

  export interface TeamEventResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamEventResult'], meta: { name: 'TeamEventResult' } }
    /**
     * Find zero or one TeamEventResult that matches the filter.
     * @param {TeamEventResultFindUniqueArgs} args - Arguments to find a TeamEventResult
     * @example
     * // Get one TeamEventResult
     * const teamEventResult = await prisma.teamEventResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamEventResultFindUniqueArgs>(args: SelectSubset<T, TeamEventResultFindUniqueArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamEventResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamEventResultFindUniqueOrThrowArgs} args - Arguments to find a TeamEventResult
     * @example
     * // Get one TeamEventResult
     * const teamEventResult = await prisma.teamEventResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamEventResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamEventResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamEventResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEventResultFindFirstArgs} args - Arguments to find a TeamEventResult
     * @example
     * // Get one TeamEventResult
     * const teamEventResult = await prisma.teamEventResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamEventResultFindFirstArgs>(args?: SelectSubset<T, TeamEventResultFindFirstArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamEventResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEventResultFindFirstOrThrowArgs} args - Arguments to find a TeamEventResult
     * @example
     * // Get one TeamEventResult
     * const teamEventResult = await prisma.teamEventResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamEventResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamEventResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamEventResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEventResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamEventResults
     * const teamEventResults = await prisma.teamEventResult.findMany()
     * 
     * // Get first 10 TeamEventResults
     * const teamEventResults = await prisma.teamEventResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamEventResultWithIdOnly = await prisma.teamEventResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamEventResultFindManyArgs>(args?: SelectSubset<T, TeamEventResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamEventResult.
     * @param {TeamEventResultCreateArgs} args - Arguments to create a TeamEventResult.
     * @example
     * // Create one TeamEventResult
     * const TeamEventResult = await prisma.teamEventResult.create({
     *   data: {
     *     // ... data to create a TeamEventResult
     *   }
     * })
     * 
     */
    create<T extends TeamEventResultCreateArgs>(args: SelectSubset<T, TeamEventResultCreateArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamEventResults.
     * @param {TeamEventResultCreateManyArgs} args - Arguments to create many TeamEventResults.
     * @example
     * // Create many TeamEventResults
     * const teamEventResult = await prisma.teamEventResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamEventResultCreateManyArgs>(args?: SelectSubset<T, TeamEventResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamEventResult.
     * @param {TeamEventResultDeleteArgs} args - Arguments to delete one TeamEventResult.
     * @example
     * // Delete one TeamEventResult
     * const TeamEventResult = await prisma.teamEventResult.delete({
     *   where: {
     *     // ... filter to delete one TeamEventResult
     *   }
     * })
     * 
     */
    delete<T extends TeamEventResultDeleteArgs>(args: SelectSubset<T, TeamEventResultDeleteArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamEventResult.
     * @param {TeamEventResultUpdateArgs} args - Arguments to update one TeamEventResult.
     * @example
     * // Update one TeamEventResult
     * const teamEventResult = await prisma.teamEventResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamEventResultUpdateArgs>(args: SelectSubset<T, TeamEventResultUpdateArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamEventResults.
     * @param {TeamEventResultDeleteManyArgs} args - Arguments to filter TeamEventResults to delete.
     * @example
     * // Delete a few TeamEventResults
     * const { count } = await prisma.teamEventResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamEventResultDeleteManyArgs>(args?: SelectSubset<T, TeamEventResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamEventResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEventResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamEventResults
     * const teamEventResult = await prisma.teamEventResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamEventResultUpdateManyArgs>(args: SelectSubset<T, TeamEventResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamEventResult.
     * @param {TeamEventResultUpsertArgs} args - Arguments to update or create a TeamEventResult.
     * @example
     * // Update or create a TeamEventResult
     * const teamEventResult = await prisma.teamEventResult.upsert({
     *   create: {
     *     // ... data to create a TeamEventResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamEventResult we want to update
     *   }
     * })
     */
    upsert<T extends TeamEventResultUpsertArgs>(args: SelectSubset<T, TeamEventResultUpsertArgs<ExtArgs>>): Prisma__TeamEventResultClient<$Result.GetResult<Prisma.$TeamEventResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamEventResults that matches the filter.
     * @param {TeamEventResultFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const teamEventResult = await prisma.teamEventResult.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TeamEventResultFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TeamEventResult.
     * @param {TeamEventResultAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const teamEventResult = await prisma.teamEventResult.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TeamEventResultAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TeamEventResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEventResultCountArgs} args - Arguments to filter TeamEventResults to count.
     * @example
     * // Count the number of TeamEventResults
     * const count = await prisma.teamEventResult.count({
     *   where: {
     *     // ... the filter for the TeamEventResults we want to count
     *   }
     * })
    **/
    count<T extends TeamEventResultCountArgs>(
      args?: Subset<T, TeamEventResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamEventResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamEventResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEventResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamEventResultAggregateArgs>(args: Subset<T, TeamEventResultAggregateArgs>): Prisma.PrismaPromise<GetTeamEventResultAggregateType<T>>

    /**
     * Group by TeamEventResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamEventResultGroupByArgs} args - Group by arguments.
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
      T extends TeamEventResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamEventResultGroupByArgs['orderBy'] }
        : { orderBy?: TeamEventResultGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamEventResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamEventResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamEventResult model
   */
  readonly fields: TeamEventResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamEventResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamEventResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamEventResult model
   */
  interface TeamEventResultFieldRefs {
    readonly id: FieldRef<"TeamEventResult", 'String'>
    readonly teamNumber: FieldRef<"TeamEventResult", 'Int'>
    readonly eventKey: FieldRef<"TeamEventResult", 'String'>
    readonly year: FieldRef<"TeamEventResult", 'Int'>
    readonly eventType: FieldRef<"TeamEventResult", 'Int'>
    readonly startDate: FieldRef<"TeamEventResult", 'String'>
    readonly qualRank: FieldRef<"TeamEventResult", 'Int'>
    readonly numTeams: FieldRef<"TeamEventResult", 'Int'>
    readonly allianceSeed: FieldRef<"TeamEventResult", 'Int'>
    readonly pickRole: FieldRef<"TeamEventResult", 'String'>
    readonly elimMatchesPlayed: FieldRef<"TeamEventResult", 'Int'>
    readonly elimWins: FieldRef<"TeamEventResult", 'Int'>
    readonly einsteinWins: FieldRef<"TeamEventResult", 'Int'>
    readonly opponents: FieldRef<"TeamEventResult", 'Int[]'>
    readonly updatedAt: FieldRef<"TeamEventResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamEventResult findUnique
   */
  export type TeamEventResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * Filter, which TeamEventResult to fetch.
     */
    where: TeamEventResultWhereUniqueInput
  }

  /**
   * TeamEventResult findUniqueOrThrow
   */
  export type TeamEventResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * Filter, which TeamEventResult to fetch.
     */
    where: TeamEventResultWhereUniqueInput
  }

  /**
   * TeamEventResult findFirst
   */
  export type TeamEventResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * Filter, which TeamEventResult to fetch.
     */
    where?: TeamEventResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEventResults to fetch.
     */
    orderBy?: TeamEventResultOrderByWithRelationInput | TeamEventResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamEventResults.
     */
    cursor?: TeamEventResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEventResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEventResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamEventResults.
     */
    distinct?: TeamEventResultScalarFieldEnum | TeamEventResultScalarFieldEnum[]
  }

  /**
   * TeamEventResult findFirstOrThrow
   */
  export type TeamEventResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * Filter, which TeamEventResult to fetch.
     */
    where?: TeamEventResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEventResults to fetch.
     */
    orderBy?: TeamEventResultOrderByWithRelationInput | TeamEventResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamEventResults.
     */
    cursor?: TeamEventResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEventResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEventResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamEventResults.
     */
    distinct?: TeamEventResultScalarFieldEnum | TeamEventResultScalarFieldEnum[]
  }

  /**
   * TeamEventResult findMany
   */
  export type TeamEventResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * Filter, which TeamEventResults to fetch.
     */
    where?: TeamEventResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamEventResults to fetch.
     */
    orderBy?: TeamEventResultOrderByWithRelationInput | TeamEventResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamEventResults.
     */
    cursor?: TeamEventResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamEventResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamEventResults.
     */
    skip?: number
    distinct?: TeamEventResultScalarFieldEnum | TeamEventResultScalarFieldEnum[]
  }

  /**
   * TeamEventResult create
   */
  export type TeamEventResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * The data needed to create a TeamEventResult.
     */
    data: XOR<TeamEventResultCreateInput, TeamEventResultUncheckedCreateInput>
  }

  /**
   * TeamEventResult createMany
   */
  export type TeamEventResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamEventResults.
     */
    data: TeamEventResultCreateManyInput | TeamEventResultCreateManyInput[]
  }

  /**
   * TeamEventResult update
   */
  export type TeamEventResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * The data needed to update a TeamEventResult.
     */
    data: XOR<TeamEventResultUpdateInput, TeamEventResultUncheckedUpdateInput>
    /**
     * Choose, which TeamEventResult to update.
     */
    where: TeamEventResultWhereUniqueInput
  }

  /**
   * TeamEventResult updateMany
   */
  export type TeamEventResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamEventResults.
     */
    data: XOR<TeamEventResultUpdateManyMutationInput, TeamEventResultUncheckedUpdateManyInput>
    /**
     * Filter which TeamEventResults to update
     */
    where?: TeamEventResultWhereInput
    /**
     * Limit how many TeamEventResults to update.
     */
    limit?: number
  }

  /**
   * TeamEventResult upsert
   */
  export type TeamEventResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * The filter to search for the TeamEventResult to update in case it exists.
     */
    where: TeamEventResultWhereUniqueInput
    /**
     * In case the TeamEventResult found by the `where` argument doesn't exist, create a new TeamEventResult with this data.
     */
    create: XOR<TeamEventResultCreateInput, TeamEventResultUncheckedCreateInput>
    /**
     * In case the TeamEventResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamEventResultUpdateInput, TeamEventResultUncheckedUpdateInput>
  }

  /**
   * TeamEventResult delete
   */
  export type TeamEventResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
    /**
     * Filter which TeamEventResult to delete.
     */
    where: TeamEventResultWhereUniqueInput
  }

  /**
   * TeamEventResult deleteMany
   */
  export type TeamEventResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamEventResults to delete
     */
    where?: TeamEventResultWhereInput
    /**
     * Limit how many TeamEventResults to delete.
     */
    limit?: number
  }

  /**
   * TeamEventResult findRaw
   */
  export type TeamEventResultFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamEventResult aggregateRaw
   */
  export type TeamEventResultAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamEventResult without action
   */
  export type TeamEventResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamEventResult
     */
    select?: TeamEventResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamEventResult
     */
    omit?: TeamEventResultOmit<ExtArgs> | null
  }


  /**
   * Model TeamScore
   */

  export type AggregateTeamScore = {
    _count: TeamScoreCountAggregateOutputType | null
    _avg: TeamScoreAvgAggregateOutputType | null
    _sum: TeamScoreSumAggregateOutputType | null
    _min: TeamScoreMinAggregateOutputType | null
    _max: TeamScoreMaxAggregateOutputType | null
  }

  export type TeamScoreAvgAggregateOutputType = {
    teamNumber: number | null
    year: number | null
    stdXrobot: number | null
    stdXawards: number | null
    stdXval: number | null
    regXrobot: number | null
    regXawards: number | null
    regXval: number | null
    dctXrobot: number | null
    dctXawards: number | null
    dctXval: number | null
    fullXrobot: number | null
    fullXawards: number | null
    fullXval: number | null
    diffStd: number | null
    diffReg: number | null
    diffDct: number | null
  }

  export type TeamScoreSumAggregateOutputType = {
    teamNumber: number | null
    year: number | null
    stdXrobot: number | null
    stdXawards: number | null
    stdXval: number | null
    regXrobot: number | null
    regXawards: number | null
    regXval: number | null
    dctXrobot: number | null
    dctXawards: number | null
    dctXval: number | null
    fullXrobot: number | null
    fullXawards: number | null
    fullXval: number | null
    diffStd: number | null
    diffReg: number | null
    diffDct: number | null
  }

  export type TeamScoreMinAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    year: number | null
    stdXrobot: number | null
    stdXawards: number | null
    stdXval: number | null
    regXrobot: number | null
    regXawards: number | null
    regXval: number | null
    dctXrobot: number | null
    dctXawards: number | null
    dctXval: number | null
    fullXrobot: number | null
    fullXawards: number | null
    fullXval: number | null
    diffStd: number | null
    diffReg: number | null
    diffDct: number | null
    updatedAt: Date | null
  }

  export type TeamScoreMaxAggregateOutputType = {
    id: string | null
    teamNumber: number | null
    year: number | null
    stdXrobot: number | null
    stdXawards: number | null
    stdXval: number | null
    regXrobot: number | null
    regXawards: number | null
    regXval: number | null
    dctXrobot: number | null
    dctXawards: number | null
    dctXval: number | null
    fullXrobot: number | null
    fullXawards: number | null
    fullXval: number | null
    diffStd: number | null
    diffReg: number | null
    diffDct: number | null
    updatedAt: Date | null
  }

  export type TeamScoreCountAggregateOutputType = {
    id: number
    teamNumber: number
    year: number
    stdXrobot: number
    stdXawards: number
    stdXval: number
    regXrobot: number
    regXawards: number
    regXval: number
    dctXrobot: number
    dctXawards: number
    dctXval: number
    fullXrobot: number
    fullXawards: number
    fullXval: number
    diffStd: number
    diffReg: number
    diffDct: number
    updatedAt: number
    _all: number
  }


  export type TeamScoreAvgAggregateInputType = {
    teamNumber?: true
    year?: true
    stdXrobot?: true
    stdXawards?: true
    stdXval?: true
    regXrobot?: true
    regXawards?: true
    regXval?: true
    dctXrobot?: true
    dctXawards?: true
    dctXval?: true
    fullXrobot?: true
    fullXawards?: true
    fullXval?: true
    diffStd?: true
    diffReg?: true
    diffDct?: true
  }

  export type TeamScoreSumAggregateInputType = {
    teamNumber?: true
    year?: true
    stdXrobot?: true
    stdXawards?: true
    stdXval?: true
    regXrobot?: true
    regXawards?: true
    regXval?: true
    dctXrobot?: true
    dctXawards?: true
    dctXval?: true
    fullXrobot?: true
    fullXawards?: true
    fullXval?: true
    diffStd?: true
    diffReg?: true
    diffDct?: true
  }

  export type TeamScoreMinAggregateInputType = {
    id?: true
    teamNumber?: true
    year?: true
    stdXrobot?: true
    stdXawards?: true
    stdXval?: true
    regXrobot?: true
    regXawards?: true
    regXval?: true
    dctXrobot?: true
    dctXawards?: true
    dctXval?: true
    fullXrobot?: true
    fullXawards?: true
    fullXval?: true
    diffStd?: true
    diffReg?: true
    diffDct?: true
    updatedAt?: true
  }

  export type TeamScoreMaxAggregateInputType = {
    id?: true
    teamNumber?: true
    year?: true
    stdXrobot?: true
    stdXawards?: true
    stdXval?: true
    regXrobot?: true
    regXawards?: true
    regXval?: true
    dctXrobot?: true
    dctXawards?: true
    dctXval?: true
    fullXrobot?: true
    fullXawards?: true
    fullXval?: true
    diffStd?: true
    diffReg?: true
    diffDct?: true
    updatedAt?: true
  }

  export type TeamScoreCountAggregateInputType = {
    id?: true
    teamNumber?: true
    year?: true
    stdXrobot?: true
    stdXawards?: true
    stdXval?: true
    regXrobot?: true
    regXawards?: true
    regXval?: true
    dctXrobot?: true
    dctXawards?: true
    dctXval?: true
    fullXrobot?: true
    fullXawards?: true
    fullXval?: true
    diffStd?: true
    diffReg?: true
    diffDct?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamScore to aggregate.
     */
    where?: TeamScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScores to fetch.
     */
    orderBy?: TeamScoreOrderByWithRelationInput | TeamScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamScores
    **/
    _count?: true | TeamScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamScoreMaxAggregateInputType
  }

  export type GetTeamScoreAggregateType<T extends TeamScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamScore[P]>
      : GetScalarType<T[P], AggregateTeamScore[P]>
  }




  export type TeamScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamScoreWhereInput
    orderBy?: TeamScoreOrderByWithAggregationInput | TeamScoreOrderByWithAggregationInput[]
    by: TeamScoreScalarFieldEnum[] | TeamScoreScalarFieldEnum
    having?: TeamScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamScoreCountAggregateInputType | true
    _avg?: TeamScoreAvgAggregateInputType
    _sum?: TeamScoreSumAggregateInputType
    _min?: TeamScoreMinAggregateInputType
    _max?: TeamScoreMaxAggregateInputType
  }

  export type TeamScoreGroupByOutputType = {
    id: string
    teamNumber: number
    year: number
    stdXrobot: number
    stdXawards: number
    stdXval: number
    regXrobot: number
    regXawards: number
    regXval: number
    dctXrobot: number
    dctXawards: number
    dctXval: number
    fullXrobot: number
    fullXawards: number
    fullXval: number
    diffStd: number | null
    diffReg: number | null
    diffDct: number | null
    updatedAt: Date
    _count: TeamScoreCountAggregateOutputType | null
    _avg: TeamScoreAvgAggregateOutputType | null
    _sum: TeamScoreSumAggregateOutputType | null
    _min: TeamScoreMinAggregateOutputType | null
    _max: TeamScoreMaxAggregateOutputType | null
  }

  type GetTeamScoreGroupByPayload<T extends TeamScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamScoreGroupByOutputType[P]>
            : GetScalarType<T[P], TeamScoreGroupByOutputType[P]>
        }
      >
    >


  export type TeamScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamNumber?: boolean
    year?: boolean
    stdXrobot?: boolean
    stdXawards?: boolean
    stdXval?: boolean
    regXrobot?: boolean
    regXawards?: boolean
    regXval?: boolean
    dctXrobot?: boolean
    dctXawards?: boolean
    dctXval?: boolean
    fullXrobot?: boolean
    fullXawards?: boolean
    fullXval?: boolean
    diffStd?: boolean
    diffReg?: boolean
    diffDct?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamScore"]>



  export type TeamScoreSelectScalar = {
    id?: boolean
    teamNumber?: boolean
    year?: boolean
    stdXrobot?: boolean
    stdXawards?: boolean
    stdXval?: boolean
    regXrobot?: boolean
    regXawards?: boolean
    regXval?: boolean
    dctXrobot?: boolean
    dctXawards?: boolean
    dctXval?: boolean
    fullXrobot?: boolean
    fullXawards?: boolean
    fullXval?: boolean
    diffStd?: boolean
    diffReg?: boolean
    diffDct?: boolean
    updatedAt?: boolean
  }

  export type TeamScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamNumber" | "year" | "stdXrobot" | "stdXawards" | "stdXval" | "regXrobot" | "regXawards" | "regXval" | "dctXrobot" | "dctXawards" | "dctXval" | "fullXrobot" | "fullXawards" | "fullXval" | "diffStd" | "diffReg" | "diffDct" | "updatedAt", ExtArgs["result"]["teamScore"]>

  export type $TeamScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamNumber: number
      year: number
      stdXrobot: number
      stdXawards: number
      stdXval: number
      regXrobot: number
      regXawards: number
      regXval: number
      dctXrobot: number
      dctXawards: number
      dctXval: number
      fullXrobot: number
      fullXawards: number
      fullXval: number
      diffStd: number | null
      diffReg: number | null
      diffDct: number | null
      updatedAt: Date
    }, ExtArgs["result"]["teamScore"]>
    composites: {}
  }

  type TeamScoreGetPayload<S extends boolean | null | undefined | TeamScoreDefaultArgs> = $Result.GetResult<Prisma.$TeamScorePayload, S>

  type TeamScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamScoreCountAggregateInputType | true
    }

  export interface TeamScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamScore'], meta: { name: 'TeamScore' } }
    /**
     * Find zero or one TeamScore that matches the filter.
     * @param {TeamScoreFindUniqueArgs} args - Arguments to find a TeamScore
     * @example
     * // Get one TeamScore
     * const teamScore = await prisma.teamScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamScoreFindUniqueArgs>(args: SelectSubset<T, TeamScoreFindUniqueArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamScoreFindUniqueOrThrowArgs} args - Arguments to find a TeamScore
     * @example
     * // Get one TeamScore
     * const teamScore = await prisma.teamScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreFindFirstArgs} args - Arguments to find a TeamScore
     * @example
     * // Get one TeamScore
     * const teamScore = await prisma.teamScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamScoreFindFirstArgs>(args?: SelectSubset<T, TeamScoreFindFirstArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreFindFirstOrThrowArgs} args - Arguments to find a TeamScore
     * @example
     * // Get one TeamScore
     * const teamScore = await prisma.teamScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamScores
     * const teamScores = await prisma.teamScore.findMany()
     * 
     * // Get first 10 TeamScores
     * const teamScores = await prisma.teamScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamScoreWithIdOnly = await prisma.teamScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamScoreFindManyArgs>(args?: SelectSubset<T, TeamScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamScore.
     * @param {TeamScoreCreateArgs} args - Arguments to create a TeamScore.
     * @example
     * // Create one TeamScore
     * const TeamScore = await prisma.teamScore.create({
     *   data: {
     *     // ... data to create a TeamScore
     *   }
     * })
     * 
     */
    create<T extends TeamScoreCreateArgs>(args: SelectSubset<T, TeamScoreCreateArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamScores.
     * @param {TeamScoreCreateManyArgs} args - Arguments to create many TeamScores.
     * @example
     * // Create many TeamScores
     * const teamScore = await prisma.teamScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamScoreCreateManyArgs>(args?: SelectSubset<T, TeamScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamScore.
     * @param {TeamScoreDeleteArgs} args - Arguments to delete one TeamScore.
     * @example
     * // Delete one TeamScore
     * const TeamScore = await prisma.teamScore.delete({
     *   where: {
     *     // ... filter to delete one TeamScore
     *   }
     * })
     * 
     */
    delete<T extends TeamScoreDeleteArgs>(args: SelectSubset<T, TeamScoreDeleteArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamScore.
     * @param {TeamScoreUpdateArgs} args - Arguments to update one TeamScore.
     * @example
     * // Update one TeamScore
     * const teamScore = await prisma.teamScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamScoreUpdateArgs>(args: SelectSubset<T, TeamScoreUpdateArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamScores.
     * @param {TeamScoreDeleteManyArgs} args - Arguments to filter TeamScores to delete.
     * @example
     * // Delete a few TeamScores
     * const { count } = await prisma.teamScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamScoreDeleteManyArgs>(args?: SelectSubset<T, TeamScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamScores
     * const teamScore = await prisma.teamScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamScoreUpdateManyArgs>(args: SelectSubset<T, TeamScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamScore.
     * @param {TeamScoreUpsertArgs} args - Arguments to update or create a TeamScore.
     * @example
     * // Update or create a TeamScore
     * const teamScore = await prisma.teamScore.upsert({
     *   create: {
     *     // ... data to create a TeamScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamScore we want to update
     *   }
     * })
     */
    upsert<T extends TeamScoreUpsertArgs>(args: SelectSubset<T, TeamScoreUpsertArgs<ExtArgs>>): Prisma__TeamScoreClient<$Result.GetResult<Prisma.$TeamScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamScores that matches the filter.
     * @param {TeamScoreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const teamScore = await prisma.teamScore.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TeamScoreFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TeamScore.
     * @param {TeamScoreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const teamScore = await prisma.teamScore.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TeamScoreAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TeamScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreCountArgs} args - Arguments to filter TeamScores to count.
     * @example
     * // Count the number of TeamScores
     * const count = await prisma.teamScore.count({
     *   where: {
     *     // ... the filter for the TeamScores we want to count
     *   }
     * })
    **/
    count<T extends TeamScoreCountArgs>(
      args?: Subset<T, TeamScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamScoreAggregateArgs>(args: Subset<T, TeamScoreAggregateArgs>): Prisma.PrismaPromise<GetTeamScoreAggregateType<T>>

    /**
     * Group by TeamScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreGroupByArgs} args - Group by arguments.
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
      T extends TeamScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamScoreGroupByArgs['orderBy'] }
        : { orderBy?: TeamScoreGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamScore model
   */
  readonly fields: TeamScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamScore model
   */
  interface TeamScoreFieldRefs {
    readonly id: FieldRef<"TeamScore", 'String'>
    readonly teamNumber: FieldRef<"TeamScore", 'Int'>
    readonly year: FieldRef<"TeamScore", 'Int'>
    readonly stdXrobot: FieldRef<"TeamScore", 'Float'>
    readonly stdXawards: FieldRef<"TeamScore", 'Float'>
    readonly stdXval: FieldRef<"TeamScore", 'Float'>
    readonly regXrobot: FieldRef<"TeamScore", 'Float'>
    readonly regXawards: FieldRef<"TeamScore", 'Float'>
    readonly regXval: FieldRef<"TeamScore", 'Float'>
    readonly dctXrobot: FieldRef<"TeamScore", 'Float'>
    readonly dctXawards: FieldRef<"TeamScore", 'Float'>
    readonly dctXval: FieldRef<"TeamScore", 'Float'>
    readonly fullXrobot: FieldRef<"TeamScore", 'Float'>
    readonly fullXawards: FieldRef<"TeamScore", 'Float'>
    readonly fullXval: FieldRef<"TeamScore", 'Float'>
    readonly diffStd: FieldRef<"TeamScore", 'Float'>
    readonly diffReg: FieldRef<"TeamScore", 'Float'>
    readonly diffDct: FieldRef<"TeamScore", 'Float'>
    readonly updatedAt: FieldRef<"TeamScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamScore findUnique
   */
  export type TeamScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * Filter, which TeamScore to fetch.
     */
    where: TeamScoreWhereUniqueInput
  }

  /**
   * TeamScore findUniqueOrThrow
   */
  export type TeamScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * Filter, which TeamScore to fetch.
     */
    where: TeamScoreWhereUniqueInput
  }

  /**
   * TeamScore findFirst
   */
  export type TeamScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * Filter, which TeamScore to fetch.
     */
    where?: TeamScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScores to fetch.
     */
    orderBy?: TeamScoreOrderByWithRelationInput | TeamScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamScores.
     */
    cursor?: TeamScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamScores.
     */
    distinct?: TeamScoreScalarFieldEnum | TeamScoreScalarFieldEnum[]
  }

  /**
   * TeamScore findFirstOrThrow
   */
  export type TeamScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * Filter, which TeamScore to fetch.
     */
    where?: TeamScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScores to fetch.
     */
    orderBy?: TeamScoreOrderByWithRelationInput | TeamScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamScores.
     */
    cursor?: TeamScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamScores.
     */
    distinct?: TeamScoreScalarFieldEnum | TeamScoreScalarFieldEnum[]
  }

  /**
   * TeamScore findMany
   */
  export type TeamScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * Filter, which TeamScores to fetch.
     */
    where?: TeamScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScores to fetch.
     */
    orderBy?: TeamScoreOrderByWithRelationInput | TeamScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamScores.
     */
    cursor?: TeamScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScores.
     */
    skip?: number
    distinct?: TeamScoreScalarFieldEnum | TeamScoreScalarFieldEnum[]
  }

  /**
   * TeamScore create
   */
  export type TeamScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * The data needed to create a TeamScore.
     */
    data: XOR<TeamScoreCreateInput, TeamScoreUncheckedCreateInput>
  }

  /**
   * TeamScore createMany
   */
  export type TeamScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamScores.
     */
    data: TeamScoreCreateManyInput | TeamScoreCreateManyInput[]
  }

  /**
   * TeamScore update
   */
  export type TeamScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * The data needed to update a TeamScore.
     */
    data: XOR<TeamScoreUpdateInput, TeamScoreUncheckedUpdateInput>
    /**
     * Choose, which TeamScore to update.
     */
    where: TeamScoreWhereUniqueInput
  }

  /**
   * TeamScore updateMany
   */
  export type TeamScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamScores.
     */
    data: XOR<TeamScoreUpdateManyMutationInput, TeamScoreUncheckedUpdateManyInput>
    /**
     * Filter which TeamScores to update
     */
    where?: TeamScoreWhereInput
    /**
     * Limit how many TeamScores to update.
     */
    limit?: number
  }

  /**
   * TeamScore upsert
   */
  export type TeamScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * The filter to search for the TeamScore to update in case it exists.
     */
    where: TeamScoreWhereUniqueInput
    /**
     * In case the TeamScore found by the `where` argument doesn't exist, create a new TeamScore with this data.
     */
    create: XOR<TeamScoreCreateInput, TeamScoreUncheckedCreateInput>
    /**
     * In case the TeamScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamScoreUpdateInput, TeamScoreUncheckedUpdateInput>
  }

  /**
   * TeamScore delete
   */
  export type TeamScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
    /**
     * Filter which TeamScore to delete.
     */
    where: TeamScoreWhereUniqueInput
  }

  /**
   * TeamScore deleteMany
   */
  export type TeamScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamScores to delete
     */
    where?: TeamScoreWhereInput
    /**
     * Limit how many TeamScores to delete.
     */
    limit?: number
  }

  /**
   * TeamScore findRaw
   */
  export type TeamScoreFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamScore aggregateRaw
   */
  export type TeamScoreAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamScore without action
   */
  export type TeamScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScore
     */
    select?: TeamScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScore
     */
    omit?: TeamScoreOmit<ExtArgs> | null
  }


  /**
   * Model ScoreWeights
   */

  export type AggregateScoreWeights = {
    _count: ScoreWeightsCountAggregateOutputType | null
    _avg: ScoreWeightsAvgAggregateOutputType | null
    _sum: ScoreWeightsSumAggregateOutputType | null
    _min: ScoreWeightsMinAggregateOutputType | null
    _max: ScoreWeightsMaxAggregateOutputType | null
  }

  export type ScoreWeightsAvgAggregateOutputType = {
    optRobot: number | null
    optAwards: number | null
    actRobot: number | null
    actAwards: number | null
  }

  export type ScoreWeightsSumAggregateOutputType = {
    optRobot: number[]
    optAwards: number[]
    actRobot: number[]
    actAwards: number[]
  }

  export type ScoreWeightsMinAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
  }

  export type ScoreWeightsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
  }

  export type ScoreWeightsCountAggregateOutputType = {
    id: number
    key: number
    optRobot: number
    optAwards: number
    actRobot: number
    actAwards: number
    updatedAt: number
    _all: number
  }


  export type ScoreWeightsAvgAggregateInputType = {
    optRobot?: true
    optAwards?: true
    actRobot?: true
    actAwards?: true
  }

  export type ScoreWeightsSumAggregateInputType = {
    optRobot?: true
    optAwards?: true
    actRobot?: true
    actAwards?: true
  }

  export type ScoreWeightsMinAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
  }

  export type ScoreWeightsMaxAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
  }

  export type ScoreWeightsCountAggregateInputType = {
    id?: true
    key?: true
    optRobot?: true
    optAwards?: true
    actRobot?: true
    actAwards?: true
    updatedAt?: true
    _all?: true
  }

  export type ScoreWeightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreWeights to aggregate.
     */
    where?: ScoreWeightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreWeights to fetch.
     */
    orderBy?: ScoreWeightsOrderByWithRelationInput | ScoreWeightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWeightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreWeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreWeights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoreWeights
    **/
    _count?: true | ScoreWeightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreWeightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreWeightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreWeightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreWeightsMaxAggregateInputType
  }

  export type GetScoreWeightsAggregateType<T extends ScoreWeightsAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreWeights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreWeights[P]>
      : GetScalarType<T[P], AggregateScoreWeights[P]>
  }




  export type ScoreWeightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWeightsWhereInput
    orderBy?: ScoreWeightsOrderByWithAggregationInput | ScoreWeightsOrderByWithAggregationInput[]
    by: ScoreWeightsScalarFieldEnum[] | ScoreWeightsScalarFieldEnum
    having?: ScoreWeightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreWeightsCountAggregateInputType | true
    _avg?: ScoreWeightsAvgAggregateInputType
    _sum?: ScoreWeightsSumAggregateInputType
    _min?: ScoreWeightsMinAggregateInputType
    _max?: ScoreWeightsMaxAggregateInputType
  }

  export type ScoreWeightsGroupByOutputType = {
    id: string
    key: string
    optRobot: number[]
    optAwards: number[]
    actRobot: number[]
    actAwards: number[]
    updatedAt: Date
    _count: ScoreWeightsCountAggregateOutputType | null
    _avg: ScoreWeightsAvgAggregateOutputType | null
    _sum: ScoreWeightsSumAggregateOutputType | null
    _min: ScoreWeightsMinAggregateOutputType | null
    _max: ScoreWeightsMaxAggregateOutputType | null
  }

  type GetScoreWeightsGroupByPayload<T extends ScoreWeightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreWeightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreWeightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreWeightsGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreWeightsGroupByOutputType[P]>
        }
      >
    >


  export type ScoreWeightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    optRobot?: boolean
    optAwards?: boolean
    actRobot?: boolean
    actAwards?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scoreWeights"]>



  export type ScoreWeightsSelectScalar = {
    id?: boolean
    key?: boolean
    optRobot?: boolean
    optAwards?: boolean
    actRobot?: boolean
    actAwards?: boolean
    updatedAt?: boolean
  }

  export type ScoreWeightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "optRobot" | "optAwards" | "actRobot" | "actAwards" | "updatedAt", ExtArgs["result"]["scoreWeights"]>

  export type $ScoreWeightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoreWeights"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      optRobot: number[]
      optAwards: number[]
      actRobot: number[]
      actAwards: number[]
      updatedAt: Date
    }, ExtArgs["result"]["scoreWeights"]>
    composites: {}
  }

  type ScoreWeightsGetPayload<S extends boolean | null | undefined | ScoreWeightsDefaultArgs> = $Result.GetResult<Prisma.$ScoreWeightsPayload, S>

  type ScoreWeightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreWeightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreWeightsCountAggregateInputType | true
    }

  export interface ScoreWeightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoreWeights'], meta: { name: 'ScoreWeights' } }
    /**
     * Find zero or one ScoreWeights that matches the filter.
     * @param {ScoreWeightsFindUniqueArgs} args - Arguments to find a ScoreWeights
     * @example
     * // Get one ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreWeightsFindUniqueArgs>(args: SelectSubset<T, ScoreWeightsFindUniqueArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScoreWeights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreWeightsFindUniqueOrThrowArgs} args - Arguments to find a ScoreWeights
     * @example
     * // Get one ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreWeightsFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreWeightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreWeights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreWeightsFindFirstArgs} args - Arguments to find a ScoreWeights
     * @example
     * // Get one ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreWeightsFindFirstArgs>(args?: SelectSubset<T, ScoreWeightsFindFirstArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreWeights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreWeightsFindFirstOrThrowArgs} args - Arguments to find a ScoreWeights
     * @example
     * // Get one ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreWeightsFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreWeightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScoreWeights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreWeightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.findMany()
     * 
     * // Get first 10 ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWeightsWithIdOnly = await prisma.scoreWeights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreWeightsFindManyArgs>(args?: SelectSubset<T, ScoreWeightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScoreWeights.
     * @param {ScoreWeightsCreateArgs} args - Arguments to create a ScoreWeights.
     * @example
     * // Create one ScoreWeights
     * const ScoreWeights = await prisma.scoreWeights.create({
     *   data: {
     *     // ... data to create a ScoreWeights
     *   }
     * })
     * 
     */
    create<T extends ScoreWeightsCreateArgs>(args: SelectSubset<T, ScoreWeightsCreateArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScoreWeights.
     * @param {ScoreWeightsCreateManyArgs} args - Arguments to create many ScoreWeights.
     * @example
     * // Create many ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreWeightsCreateManyArgs>(args?: SelectSubset<T, ScoreWeightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScoreWeights.
     * @param {ScoreWeightsDeleteArgs} args - Arguments to delete one ScoreWeights.
     * @example
     * // Delete one ScoreWeights
     * const ScoreWeights = await prisma.scoreWeights.delete({
     *   where: {
     *     // ... filter to delete one ScoreWeights
     *   }
     * })
     * 
     */
    delete<T extends ScoreWeightsDeleteArgs>(args: SelectSubset<T, ScoreWeightsDeleteArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScoreWeights.
     * @param {ScoreWeightsUpdateArgs} args - Arguments to update one ScoreWeights.
     * @example
     * // Update one ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreWeightsUpdateArgs>(args: SelectSubset<T, ScoreWeightsUpdateArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScoreWeights.
     * @param {ScoreWeightsDeleteManyArgs} args - Arguments to filter ScoreWeights to delete.
     * @example
     * // Delete a few ScoreWeights
     * const { count } = await prisma.scoreWeights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreWeightsDeleteManyArgs>(args?: SelectSubset<T, ScoreWeightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreWeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreWeightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreWeightsUpdateManyArgs>(args: SelectSubset<T, ScoreWeightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScoreWeights.
     * @param {ScoreWeightsUpsertArgs} args - Arguments to update or create a ScoreWeights.
     * @example
     * // Update or create a ScoreWeights
     * const scoreWeights = await prisma.scoreWeights.upsert({
     *   create: {
     *     // ... data to create a ScoreWeights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoreWeights we want to update
     *   }
     * })
     */
    upsert<T extends ScoreWeightsUpsertArgs>(args: SelectSubset<T, ScoreWeightsUpsertArgs<ExtArgs>>): Prisma__ScoreWeightsClient<$Result.GetResult<Prisma.$ScoreWeightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScoreWeights that matches the filter.
     * @param {ScoreWeightsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const scoreWeights = await prisma.scoreWeights.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ScoreWeightsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ScoreWeights.
     * @param {ScoreWeightsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const scoreWeights = await prisma.scoreWeights.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ScoreWeightsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ScoreWeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreWeightsCountArgs} args - Arguments to filter ScoreWeights to count.
     * @example
     * // Count the number of ScoreWeights
     * const count = await prisma.scoreWeights.count({
     *   where: {
     *     // ... the filter for the ScoreWeights we want to count
     *   }
     * })
    **/
    count<T extends ScoreWeightsCountArgs>(
      args?: Subset<T, ScoreWeightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreWeightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoreWeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreWeightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreWeightsAggregateArgs>(args: Subset<T, ScoreWeightsAggregateArgs>): Prisma.PrismaPromise<GetScoreWeightsAggregateType<T>>

    /**
     * Group by ScoreWeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreWeightsGroupByArgs} args - Group by arguments.
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
      T extends ScoreWeightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreWeightsGroupByArgs['orderBy'] }
        : { orderBy?: ScoreWeightsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
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
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreWeightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreWeightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoreWeights model
   */
  readonly fields: ScoreWeightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoreWeights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreWeightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScoreWeights model
   */
  interface ScoreWeightsFieldRefs {
    readonly id: FieldRef<"ScoreWeights", 'String'>
    readonly key: FieldRef<"ScoreWeights", 'String'>
    readonly optRobot: FieldRef<"ScoreWeights", 'Float[]'>
    readonly optAwards: FieldRef<"ScoreWeights", 'Float[]'>
    readonly actRobot: FieldRef<"ScoreWeights", 'Float[]'>
    readonly actAwards: FieldRef<"ScoreWeights", 'Float[]'>
    readonly updatedAt: FieldRef<"ScoreWeights", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScoreWeights findUnique
   */
  export type ScoreWeightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * Filter, which ScoreWeights to fetch.
     */
    where: ScoreWeightsWhereUniqueInput
  }

  /**
   * ScoreWeights findUniqueOrThrow
   */
  export type ScoreWeightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * Filter, which ScoreWeights to fetch.
     */
    where: ScoreWeightsWhereUniqueInput
  }

  /**
   * ScoreWeights findFirst
   */
  export type ScoreWeightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * Filter, which ScoreWeights to fetch.
     */
    where?: ScoreWeightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreWeights to fetch.
     */
    orderBy?: ScoreWeightsOrderByWithRelationInput | ScoreWeightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreWeights.
     */
    cursor?: ScoreWeightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreWeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreWeights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreWeights.
     */
    distinct?: ScoreWeightsScalarFieldEnum | ScoreWeightsScalarFieldEnum[]
  }

  /**
   * ScoreWeights findFirstOrThrow
   */
  export type ScoreWeightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * Filter, which ScoreWeights to fetch.
     */
    where?: ScoreWeightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreWeights to fetch.
     */
    orderBy?: ScoreWeightsOrderByWithRelationInput | ScoreWeightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreWeights.
     */
    cursor?: ScoreWeightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreWeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreWeights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreWeights.
     */
    distinct?: ScoreWeightsScalarFieldEnum | ScoreWeightsScalarFieldEnum[]
  }

  /**
   * ScoreWeights findMany
   */
  export type ScoreWeightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * Filter, which ScoreWeights to fetch.
     */
    where?: ScoreWeightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreWeights to fetch.
     */
    orderBy?: ScoreWeightsOrderByWithRelationInput | ScoreWeightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoreWeights.
     */
    cursor?: ScoreWeightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreWeights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreWeights.
     */
    skip?: number
    distinct?: ScoreWeightsScalarFieldEnum | ScoreWeightsScalarFieldEnum[]
  }

  /**
   * ScoreWeights create
   */
  export type ScoreWeightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * The data needed to create a ScoreWeights.
     */
    data: XOR<ScoreWeightsCreateInput, ScoreWeightsUncheckedCreateInput>
  }

  /**
   * ScoreWeights createMany
   */
  export type ScoreWeightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoreWeights.
     */
    data: ScoreWeightsCreateManyInput | ScoreWeightsCreateManyInput[]
  }

  /**
   * ScoreWeights update
   */
  export type ScoreWeightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * The data needed to update a ScoreWeights.
     */
    data: XOR<ScoreWeightsUpdateInput, ScoreWeightsUncheckedUpdateInput>
    /**
     * Choose, which ScoreWeights to update.
     */
    where: ScoreWeightsWhereUniqueInput
  }

  /**
   * ScoreWeights updateMany
   */
  export type ScoreWeightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoreWeights.
     */
    data: XOR<ScoreWeightsUpdateManyMutationInput, ScoreWeightsUncheckedUpdateManyInput>
    /**
     * Filter which ScoreWeights to update
     */
    where?: ScoreWeightsWhereInput
    /**
     * Limit how many ScoreWeights to update.
     */
    limit?: number
  }

  /**
   * ScoreWeights upsert
   */
  export type ScoreWeightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * The filter to search for the ScoreWeights to update in case it exists.
     */
    where: ScoreWeightsWhereUniqueInput
    /**
     * In case the ScoreWeights found by the `where` argument doesn't exist, create a new ScoreWeights with this data.
     */
    create: XOR<ScoreWeightsCreateInput, ScoreWeightsUncheckedCreateInput>
    /**
     * In case the ScoreWeights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreWeightsUpdateInput, ScoreWeightsUncheckedUpdateInput>
  }

  /**
   * ScoreWeights delete
   */
  export type ScoreWeightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
    /**
     * Filter which ScoreWeights to delete.
     */
    where: ScoreWeightsWhereUniqueInput
  }

  /**
   * ScoreWeights deleteMany
   */
  export type ScoreWeightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreWeights to delete
     */
    where?: ScoreWeightsWhereInput
    /**
     * Limit how many ScoreWeights to delete.
     */
    limit?: number
  }

  /**
   * ScoreWeights findRaw
   */
  export type ScoreWeightsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ScoreWeights aggregateRaw
   */
  export type ScoreWeightsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ScoreWeights without action
   */
  export type ScoreWeightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreWeights
     */
    select?: ScoreWeightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreWeights
     */
    omit?: ScoreWeightsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    key: 'key',
    abbreviation: 'abbreviation',
    displayName: 'displayName',
    year: 'year',
    updatedAt: 'updatedAt'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    eventType: 'eventType',
    eventTypeString: 'eventTypeString',
    year: 'year',
    week: 'week',
    startDate: 'startDate',
    endDate: 'endDate',
    districtKey: 'districtKey',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    number: 'number',
    key: 'key',
    name: 'name',
    nickname: 'nickname',
    city: 'city',
    stateProv: 'stateProv',
    country: 'country',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamEpaScalarFieldEnum: {
    id: 'id',
    teamNumber: 'teamNumber',
    updatedAt: 'updatedAt'
  };

  export type TeamEpaScalarFieldEnum = (typeof TeamEpaScalarFieldEnum)[keyof typeof TeamEpaScalarFieldEnum]


  export const EventTeamScalarFieldEnum: {
    id: 'id',
    eventKey: 'eventKey',
    teamNumbers: 'teamNumbers'
  };

  export type EventTeamScalarFieldEnum = (typeof EventTeamScalarFieldEnum)[keyof typeof EventTeamScalarFieldEnum]


  export const DistrictTeamScalarFieldEnum: {
    id: 'id',
    districtKey: 'districtKey',
    teamNumbers: 'teamNumbers'
  };

  export type DistrictTeamScalarFieldEnum = (typeof DistrictTeamScalarFieldEnum)[keyof typeof DistrictTeamScalarFieldEnum]


  export const TeamAvatarScalarFieldEnum: {
    id: 'id',
    teamNumber: 'teamNumber',
    updatedAt: 'updatedAt'
  };

  export type TeamAvatarScalarFieldEnum = (typeof TeamAvatarScalarFieldEnum)[keyof typeof TeamAvatarScalarFieldEnum]


  export const AwardScalarFieldEnum: {
    id: 'id',
    teamNumber: 'teamNumber'
  };

  export type AwardScalarFieldEnum = (typeof AwardScalarFieldEnum)[keyof typeof AwardScalarFieldEnum]


  export const SyncLogScalarFieldEnum: {
    id: 'id',
    task: 'task',
    status: 'status',
    message: 'message',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt'
  };

  export type SyncLogScalarFieldEnum = (typeof SyncLogScalarFieldEnum)[keyof typeof SyncLogScalarFieldEnum]


  export const PickScalarFieldEnum: {
    id: 'id',
    scopeKey: 'scopeKey',
    year: 'year',
    teamNumber: 'teamNumber',
    status: 'status',
    by: 'by',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt'
  };

  export type PickScalarFieldEnum = (typeof PickScalarFieldEnum)[keyof typeof PickScalarFieldEnum]


  export const DraftScalarFieldEnum: {
    id: 'id',
    year: 'year',
    drafters: 'drafters',
    updatedAt: 'updatedAt'
  };

  export type DraftScalarFieldEnum = (typeof DraftScalarFieldEnum)[keyof typeof DraftScalarFieldEnum]


  export const SyncCursorScalarFieldEnum: {
    id: 'id',
    path: 'path',
    etag: 'etag',
    updatedAt: 'updatedAt'
  };

  export type SyncCursorScalarFieldEnum = (typeof SyncCursorScalarFieldEnum)[keyof typeof SyncCursorScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    year: 'year',
    teamNumber: 'teamNumber',
    stars: 'stars',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const TeamEventResultScalarFieldEnum: {
    id: 'id',
    teamNumber: 'teamNumber',
    eventKey: 'eventKey',
    year: 'year',
    eventType: 'eventType',
    startDate: 'startDate',
    qualRank: 'qualRank',
    numTeams: 'numTeams',
    allianceSeed: 'allianceSeed',
    pickRole: 'pickRole',
    elimMatchesPlayed: 'elimMatchesPlayed',
    elimWins: 'elimWins',
    einsteinWins: 'einsteinWins',
    opponents: 'opponents',
    updatedAt: 'updatedAt'
  };

  export type TeamEventResultScalarFieldEnum = (typeof TeamEventResultScalarFieldEnum)[keyof typeof TeamEventResultScalarFieldEnum]


  export const TeamScoreScalarFieldEnum: {
    id: 'id',
    teamNumber: 'teamNumber',
    year: 'year',
    stdXrobot: 'stdXrobot',
    stdXawards: 'stdXawards',
    stdXval: 'stdXval',
    regXrobot: 'regXrobot',
    regXawards: 'regXawards',
    regXval: 'regXval',
    dctXrobot: 'dctXrobot',
    dctXawards: 'dctXawards',
    dctXval: 'dctXval',
    fullXrobot: 'fullXrobot',
    fullXawards: 'fullXawards',
    fullXval: 'fullXval',
    diffStd: 'diffStd',
    diffReg: 'diffReg',
    diffDct: 'diffDct',
    updatedAt: 'updatedAt'
  };

  export type TeamScoreScalarFieldEnum = (typeof TeamScoreScalarFieldEnum)[keyof typeof TeamScoreScalarFieldEnum]


  export const ScoreWeightsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    optRobot: 'optRobot',
    optAwards: 'optAwards',
    actRobot: 'actRobot',
    actAwards: 'actAwards',
    updatedAt: 'updatedAt'
  };

  export type ScoreWeightsScalarFieldEnum = (typeof ScoreWeightsScalarFieldEnum)[keyof typeof ScoreWeightsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type DistrictWhereInput = {
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    id?: StringFilter<"District"> | string
    key?: StringFilter<"District"> | string
    abbreviation?: StringFilter<"District"> | string
    displayName?: StringFilter<"District"> | string
    year?: IntFilter<"District"> | number
    updatedAt?: DateTimeFilter<"District"> | Date | string
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    abbreviation?: SortOrder
    displayName?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    abbreviation?: StringFilter<"District"> | string
    displayName?: StringFilter<"District"> | string
    year?: IntFilter<"District"> | number
    updatedAt?: DateTimeFilter<"District"> | Date | string
  }, "id" | "key">

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    abbreviation?: SortOrder
    displayName?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _avg?: DistrictAvgOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
    _sum?: DistrictSumOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    OR?: DistrictScalarWhereWithAggregatesInput[]
    NOT?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"District"> | string
    key?: StringWithAggregatesFilter<"District"> | string
    abbreviation?: StringWithAggregatesFilter<"District"> | string
    displayName?: StringWithAggregatesFilter<"District"> | string
    year?: IntWithAggregatesFilter<"District"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"District"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    key?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    eventType?: IntFilter<"Event"> | number
    eventTypeString?: StringFilter<"Event"> | string
    year?: IntFilter<"Event"> | number
    week?: IntNullableFilter<"Event"> | number | null
    startDate?: StringNullableFilter<"Event"> | string | null
    endDate?: StringNullableFilter<"Event"> | string | null
    districtKey?: StringNullableFilter<"Event"> | string | null
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    eventType?: SortOrder
    eventTypeString?: SortOrder
    year?: SortOrder
    week?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    districtKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    eventType?: IntFilter<"Event"> | number
    eventTypeString?: StringFilter<"Event"> | string
    year?: IntFilter<"Event"> | number
    week?: IntNullableFilter<"Event"> | number | null
    startDate?: StringNullableFilter<"Event"> | string | null
    endDate?: StringNullableFilter<"Event"> | string | null
    districtKey?: StringNullableFilter<"Event"> | string | null
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id" | "key">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    eventType?: SortOrder
    eventTypeString?: SortOrder
    year?: SortOrder
    week?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    districtKey?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    key?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    eventType?: IntWithAggregatesFilter<"Event"> | number
    eventTypeString?: StringWithAggregatesFilter<"Event"> | string
    year?: IntWithAggregatesFilter<"Event"> | number
    week?: IntNullableWithAggregatesFilter<"Event"> | number | null
    startDate?: StringNullableWithAggregatesFilter<"Event"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"Event"> | string | null
    districtKey?: StringNullableWithAggregatesFilter<"Event"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    number?: IntFilter<"Team"> | number
    key?: StringFilter<"Team"> | string
    name?: StringNullableFilter<"Team"> | string | null
    nickname?: StringNullableFilter<"Team"> | string | null
    city?: StringNullableFilter<"Team"> | string | null
    stateProv?: StringNullableFilter<"Team"> | string | null
    country?: StringNullableFilter<"Team"> | string | null
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    key?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    city?: SortOrder
    stateProv?: SortOrder
    country?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: number
    key?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringNullableFilter<"Team"> | string | null
    nickname?: StringNullableFilter<"Team"> | string | null
    city?: StringNullableFilter<"Team"> | string | null
    stateProv?: StringNullableFilter<"Team"> | string | null
    country?: StringNullableFilter<"Team"> | string | null
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }, "id" | "number" | "key">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    key?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    city?: SortOrder
    stateProv?: SortOrder
    country?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    number?: IntWithAggregatesFilter<"Team"> | number
    key?: StringWithAggregatesFilter<"Team"> | string
    name?: StringNullableWithAggregatesFilter<"Team"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"Team"> | string | null
    city?: StringNullableWithAggregatesFilter<"Team"> | string | null
    stateProv?: StringNullableWithAggregatesFilter<"Team"> | string | null
    country?: StringNullableWithAggregatesFilter<"Team"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamEpaWhereInput = {
    AND?: TeamEpaWhereInput | TeamEpaWhereInput[]
    OR?: TeamEpaWhereInput[]
    NOT?: TeamEpaWhereInput | TeamEpaWhereInput[]
    id?: StringFilter<"TeamEpa"> | string
    teamNumber?: IntFilter<"TeamEpa"> | number
    epas?: EpaEntryCompositeListFilter | EpaEntryObjectEqualityInput[]
    updatedAt?: DateTimeFilter<"TeamEpa"> | Date | string
  }

  export type TeamEpaOrderByWithRelationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    epas?: EpaEntryOrderByCompositeAggregateInput
    updatedAt?: SortOrder
  }

  export type TeamEpaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamNumber?: number
    AND?: TeamEpaWhereInput | TeamEpaWhereInput[]
    OR?: TeamEpaWhereInput[]
    NOT?: TeamEpaWhereInput | TeamEpaWhereInput[]
    epas?: EpaEntryCompositeListFilter | EpaEntryObjectEqualityInput[]
    updatedAt?: DateTimeFilter<"TeamEpa"> | Date | string
  }, "id" | "teamNumber">

  export type TeamEpaOrderByWithAggregationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamEpaCountOrderByAggregateInput
    _avg?: TeamEpaAvgOrderByAggregateInput
    _max?: TeamEpaMaxOrderByAggregateInput
    _min?: TeamEpaMinOrderByAggregateInput
    _sum?: TeamEpaSumOrderByAggregateInput
  }

  export type TeamEpaScalarWhereWithAggregatesInput = {
    AND?: TeamEpaScalarWhereWithAggregatesInput | TeamEpaScalarWhereWithAggregatesInput[]
    OR?: TeamEpaScalarWhereWithAggregatesInput[]
    NOT?: TeamEpaScalarWhereWithAggregatesInput | TeamEpaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamEpa"> | string
    teamNumber?: IntWithAggregatesFilter<"TeamEpa"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"TeamEpa"> | Date | string
  }

  export type EventTeamWhereInput = {
    AND?: EventTeamWhereInput | EventTeamWhereInput[]
    OR?: EventTeamWhereInput[]
    NOT?: EventTeamWhereInput | EventTeamWhereInput[]
    id?: StringFilter<"EventTeam"> | string
    eventKey?: StringFilter<"EventTeam"> | string
    teamNumbers?: IntNullableListFilter<"EventTeam">
  }

  export type EventTeamOrderByWithRelationInput = {
    id?: SortOrder
    eventKey?: SortOrder
    teamNumbers?: SortOrder
  }

  export type EventTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventKey?: string
    AND?: EventTeamWhereInput | EventTeamWhereInput[]
    OR?: EventTeamWhereInput[]
    NOT?: EventTeamWhereInput | EventTeamWhereInput[]
    teamNumbers?: IntNullableListFilter<"EventTeam">
  }, "id" | "eventKey">

  export type EventTeamOrderByWithAggregationInput = {
    id?: SortOrder
    eventKey?: SortOrder
    teamNumbers?: SortOrder
    _count?: EventTeamCountOrderByAggregateInput
    _avg?: EventTeamAvgOrderByAggregateInput
    _max?: EventTeamMaxOrderByAggregateInput
    _min?: EventTeamMinOrderByAggregateInput
    _sum?: EventTeamSumOrderByAggregateInput
  }

  export type EventTeamScalarWhereWithAggregatesInput = {
    AND?: EventTeamScalarWhereWithAggregatesInput | EventTeamScalarWhereWithAggregatesInput[]
    OR?: EventTeamScalarWhereWithAggregatesInput[]
    NOT?: EventTeamScalarWhereWithAggregatesInput | EventTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventTeam"> | string
    eventKey?: StringWithAggregatesFilter<"EventTeam"> | string
    teamNumbers?: IntNullableListFilter<"EventTeam">
  }

  export type DistrictTeamWhereInput = {
    AND?: DistrictTeamWhereInput | DistrictTeamWhereInput[]
    OR?: DistrictTeamWhereInput[]
    NOT?: DistrictTeamWhereInput | DistrictTeamWhereInput[]
    id?: StringFilter<"DistrictTeam"> | string
    districtKey?: StringFilter<"DistrictTeam"> | string
    teamNumbers?: IntNullableListFilter<"DistrictTeam">
  }

  export type DistrictTeamOrderByWithRelationInput = {
    id?: SortOrder
    districtKey?: SortOrder
    teamNumbers?: SortOrder
  }

  export type DistrictTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    districtKey?: string
    AND?: DistrictTeamWhereInput | DistrictTeamWhereInput[]
    OR?: DistrictTeamWhereInput[]
    NOT?: DistrictTeamWhereInput | DistrictTeamWhereInput[]
    teamNumbers?: IntNullableListFilter<"DistrictTeam">
  }, "id" | "districtKey">

  export type DistrictTeamOrderByWithAggregationInput = {
    id?: SortOrder
    districtKey?: SortOrder
    teamNumbers?: SortOrder
    _count?: DistrictTeamCountOrderByAggregateInput
    _avg?: DistrictTeamAvgOrderByAggregateInput
    _max?: DistrictTeamMaxOrderByAggregateInput
    _min?: DistrictTeamMinOrderByAggregateInput
    _sum?: DistrictTeamSumOrderByAggregateInput
  }

  export type DistrictTeamScalarWhereWithAggregatesInput = {
    AND?: DistrictTeamScalarWhereWithAggregatesInput | DistrictTeamScalarWhereWithAggregatesInput[]
    OR?: DistrictTeamScalarWhereWithAggregatesInput[]
    NOT?: DistrictTeamScalarWhereWithAggregatesInput | DistrictTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DistrictTeam"> | string
    districtKey?: StringWithAggregatesFilter<"DistrictTeam"> | string
    teamNumbers?: IntNullableListFilter<"DistrictTeam">
  }

  export type TeamAvatarWhereInput = {
    AND?: TeamAvatarWhereInput | TeamAvatarWhereInput[]
    OR?: TeamAvatarWhereInput[]
    NOT?: TeamAvatarWhereInput | TeamAvatarWhereInput[]
    id?: StringFilter<"TeamAvatar"> | string
    teamNumber?: IntFilter<"TeamAvatar"> | number
    avatars?: AvatarEntryCompositeListFilter | AvatarEntryObjectEqualityInput[]
    updatedAt?: DateTimeFilter<"TeamAvatar"> | Date | string
  }

  export type TeamAvatarOrderByWithRelationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    avatars?: AvatarEntryOrderByCompositeAggregateInput
    updatedAt?: SortOrder
  }

  export type TeamAvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamNumber?: number
    AND?: TeamAvatarWhereInput | TeamAvatarWhereInput[]
    OR?: TeamAvatarWhereInput[]
    NOT?: TeamAvatarWhereInput | TeamAvatarWhereInput[]
    avatars?: AvatarEntryCompositeListFilter | AvatarEntryObjectEqualityInput[]
    updatedAt?: DateTimeFilter<"TeamAvatar"> | Date | string
  }, "id" | "teamNumber">

  export type TeamAvatarOrderByWithAggregationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamAvatarCountOrderByAggregateInput
    _avg?: TeamAvatarAvgOrderByAggregateInput
    _max?: TeamAvatarMaxOrderByAggregateInput
    _min?: TeamAvatarMinOrderByAggregateInput
    _sum?: TeamAvatarSumOrderByAggregateInput
  }

  export type TeamAvatarScalarWhereWithAggregatesInput = {
    AND?: TeamAvatarScalarWhereWithAggregatesInput | TeamAvatarScalarWhereWithAggregatesInput[]
    OR?: TeamAvatarScalarWhereWithAggregatesInput[]
    NOT?: TeamAvatarScalarWhereWithAggregatesInput | TeamAvatarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamAvatar"> | string
    teamNumber?: IntWithAggregatesFilter<"TeamAvatar"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"TeamAvatar"> | Date | string
  }

  export type AwardWhereInput = {
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    id?: StringFilter<"Award"> | string
    teamNumber?: IntFilter<"Award"> | number
    awards?: AwardEntryCompositeListFilter | AwardEntryObjectEqualityInput[]
  }

  export type AwardOrderByWithRelationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    awards?: AwardEntryOrderByCompositeAggregateInput
  }

  export type AwardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamNumber?: number
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    awards?: AwardEntryCompositeListFilter | AwardEntryObjectEqualityInput[]
  }, "id" | "teamNumber">

  export type AwardOrderByWithAggregationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    _count?: AwardCountOrderByAggregateInput
    _avg?: AwardAvgOrderByAggregateInput
    _max?: AwardMaxOrderByAggregateInput
    _min?: AwardMinOrderByAggregateInput
    _sum?: AwardSumOrderByAggregateInput
  }

  export type AwardScalarWhereWithAggregatesInput = {
    AND?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    OR?: AwardScalarWhereWithAggregatesInput[]
    NOT?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Award"> | string
    teamNumber?: IntWithAggregatesFilter<"Award"> | number
  }

  export type SyncLogWhereInput = {
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    id?: StringFilter<"SyncLog"> | string
    task?: StringFilter<"SyncLog"> | string
    status?: StringFilter<"SyncLog"> | string
    message?: StringNullableFilter<"SyncLog"> | string | null
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    finishedAt?: DateTimeFilter<"SyncLog"> | Date | string
  }

  export type SyncLogOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    message?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type SyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    task?: StringFilter<"SyncLog"> | string
    status?: StringFilter<"SyncLog"> | string
    message?: StringNullableFilter<"SyncLog"> | string | null
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    finishedAt?: DateTimeFilter<"SyncLog"> | Date | string
  }, "id">

  export type SyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    message?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    _count?: SyncLogCountOrderByAggregateInput
    _max?: SyncLogMaxOrderByAggregateInput
    _min?: SyncLogMinOrderByAggregateInput
  }

  export type SyncLogScalarWhereWithAggregatesInput = {
    AND?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    OR?: SyncLogScalarWhereWithAggregatesInput[]
    NOT?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncLog"> | string
    task?: StringWithAggregatesFilter<"SyncLog"> | string
    status?: StringWithAggregatesFilter<"SyncLog"> | string
    message?: StringNullableWithAggregatesFilter<"SyncLog"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
    finishedAt?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
  }

  export type PickWhereInput = {
    AND?: PickWhereInput | PickWhereInput[]
    OR?: PickWhereInput[]
    NOT?: PickWhereInput | PickWhereInput[]
    id?: StringFilter<"Pick"> | string
    scopeKey?: StringFilter<"Pick"> | string
    year?: IntFilter<"Pick"> | number
    teamNumber?: IntFilter<"Pick"> | number
    status?: StringFilter<"Pick"> | string
    by?: StringNullableFilter<"Pick"> | string | null
    updatedBy?: StringNullableFilter<"Pick"> | string | null
    updatedAt?: DateTimeFilter<"Pick"> | Date | string
  }

  export type PickOrderByWithRelationInput = {
    id?: SortOrder
    scopeKey?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    status?: SortOrder
    by?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type PickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scopeKey_teamNumber?: PickScopeKeyTeamNumberCompoundUniqueInput
    AND?: PickWhereInput | PickWhereInput[]
    OR?: PickWhereInput[]
    NOT?: PickWhereInput | PickWhereInput[]
    scopeKey?: StringFilter<"Pick"> | string
    year?: IntFilter<"Pick"> | number
    teamNumber?: IntFilter<"Pick"> | number
    status?: StringFilter<"Pick"> | string
    by?: StringNullableFilter<"Pick"> | string | null
    updatedBy?: StringNullableFilter<"Pick"> | string | null
    updatedAt?: DateTimeFilter<"Pick"> | Date | string
  }, "id" | "scopeKey_teamNumber">

  export type PickOrderByWithAggregationInput = {
    id?: SortOrder
    scopeKey?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    status?: SortOrder
    by?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    _count?: PickCountOrderByAggregateInput
    _avg?: PickAvgOrderByAggregateInput
    _max?: PickMaxOrderByAggregateInput
    _min?: PickMinOrderByAggregateInput
    _sum?: PickSumOrderByAggregateInput
  }

  export type PickScalarWhereWithAggregatesInput = {
    AND?: PickScalarWhereWithAggregatesInput | PickScalarWhereWithAggregatesInput[]
    OR?: PickScalarWhereWithAggregatesInput[]
    NOT?: PickScalarWhereWithAggregatesInput | PickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pick"> | string
    scopeKey?: StringWithAggregatesFilter<"Pick"> | string
    year?: IntWithAggregatesFilter<"Pick"> | number
    teamNumber?: IntWithAggregatesFilter<"Pick"> | number
    status?: StringWithAggregatesFilter<"Pick"> | string
    by?: StringNullableWithAggregatesFilter<"Pick"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Pick"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Pick"> | Date | string
  }

  export type DraftWhereInput = {
    AND?: DraftWhereInput | DraftWhereInput[]
    OR?: DraftWhereInput[]
    NOT?: DraftWhereInput | DraftWhereInput[]
    id?: StringFilter<"Draft"> | string
    year?: IntFilter<"Draft"> | number
    drafters?: StringNullableListFilter<"Draft">
    updatedAt?: DateTimeFilter<"Draft"> | Date | string
  }

  export type DraftOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    drafters?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    year?: number
    AND?: DraftWhereInput | DraftWhereInput[]
    OR?: DraftWhereInput[]
    NOT?: DraftWhereInput | DraftWhereInput[]
    drafters?: StringNullableListFilter<"Draft">
    updatedAt?: DateTimeFilter<"Draft"> | Date | string
  }, "id" | "year">

  export type DraftOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    drafters?: SortOrder
    updatedAt?: SortOrder
    _count?: DraftCountOrderByAggregateInput
    _avg?: DraftAvgOrderByAggregateInput
    _max?: DraftMaxOrderByAggregateInput
    _min?: DraftMinOrderByAggregateInput
    _sum?: DraftSumOrderByAggregateInput
  }

  export type DraftScalarWhereWithAggregatesInput = {
    AND?: DraftScalarWhereWithAggregatesInput | DraftScalarWhereWithAggregatesInput[]
    OR?: DraftScalarWhereWithAggregatesInput[]
    NOT?: DraftScalarWhereWithAggregatesInput | DraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Draft"> | string
    year?: IntWithAggregatesFilter<"Draft"> | number
    drafters?: StringNullableListFilter<"Draft">
    updatedAt?: DateTimeWithAggregatesFilter<"Draft"> | Date | string
  }

  export type SyncCursorWhereInput = {
    AND?: SyncCursorWhereInput | SyncCursorWhereInput[]
    OR?: SyncCursorWhereInput[]
    NOT?: SyncCursorWhereInput | SyncCursorWhereInput[]
    id?: StringFilter<"SyncCursor"> | string
    path?: StringFilter<"SyncCursor"> | string
    etag?: StringFilter<"SyncCursor"> | string
    updatedAt?: DateTimeFilter<"SyncCursor"> | Date | string
  }

  export type SyncCursorOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    etag?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncCursorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    path?: string
    AND?: SyncCursorWhereInput | SyncCursorWhereInput[]
    OR?: SyncCursorWhereInput[]
    NOT?: SyncCursorWhereInput | SyncCursorWhereInput[]
    etag?: StringFilter<"SyncCursor"> | string
    updatedAt?: DateTimeFilter<"SyncCursor"> | Date | string
  }, "id" | "path">

  export type SyncCursorOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    etag?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncCursorCountOrderByAggregateInput
    _max?: SyncCursorMaxOrderByAggregateInput
    _min?: SyncCursorMinOrderByAggregateInput
  }

  export type SyncCursorScalarWhereWithAggregatesInput = {
    AND?: SyncCursorScalarWhereWithAggregatesInput | SyncCursorScalarWhereWithAggregatesInput[]
    OR?: SyncCursorScalarWhereWithAggregatesInput[]
    NOT?: SyncCursorScalarWhereWithAggregatesInput | SyncCursorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncCursor"> | string
    path?: StringWithAggregatesFilter<"SyncCursor"> | string
    etag?: StringWithAggregatesFilter<"SyncCursor"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SyncCursor"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    year?: IntFilter<"Rating"> | number
    teamNumber?: IntFilter<"Rating"> | number
    stars?: IntFilter<"Rating"> | number
    updatedBy?: StringNullableFilter<"Rating"> | string | null
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    stars?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    year_teamNumber?: RatingYearTeamNumberCompoundUniqueInput
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    year?: IntFilter<"Rating"> | number
    teamNumber?: IntFilter<"Rating"> | number
    stars?: IntFilter<"Rating"> | number
    updatedBy?: StringNullableFilter<"Rating"> | string | null
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
  }, "id" | "year_teamNumber">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    stars?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    year?: IntWithAggregatesFilter<"Rating"> | number
    teamNumber?: IntWithAggregatesFilter<"Rating"> | number
    stars?: IntWithAggregatesFilter<"Rating"> | number
    updatedBy?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type TeamEventResultWhereInput = {
    AND?: TeamEventResultWhereInput | TeamEventResultWhereInput[]
    OR?: TeamEventResultWhereInput[]
    NOT?: TeamEventResultWhereInput | TeamEventResultWhereInput[]
    id?: StringFilter<"TeamEventResult"> | string
    teamNumber?: IntFilter<"TeamEventResult"> | number
    eventKey?: StringFilter<"TeamEventResult"> | string
    year?: IntFilter<"TeamEventResult"> | number
    eventType?: IntFilter<"TeamEventResult"> | number
    startDate?: StringNullableFilter<"TeamEventResult"> | string | null
    qualRank?: IntNullableFilter<"TeamEventResult"> | number | null
    numTeams?: IntNullableFilter<"TeamEventResult"> | number | null
    allianceSeed?: IntNullableFilter<"TeamEventResult"> | number | null
    pickRole?: StringNullableFilter<"TeamEventResult"> | string | null
    elimMatchesPlayed?: IntFilter<"TeamEventResult"> | number
    elimWins?: IntFilter<"TeamEventResult"> | number
    einsteinWins?: IntFilter<"TeamEventResult"> | number
    opponents?: IntNullableListFilter<"TeamEventResult">
    updatedAt?: DateTimeFilter<"TeamEventResult"> | Date | string
  }

  export type TeamEventResultOrderByWithRelationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    eventKey?: SortOrder
    year?: SortOrder
    eventType?: SortOrder
    startDate?: SortOrder
    qualRank?: SortOrder
    numTeams?: SortOrder
    allianceSeed?: SortOrder
    pickRole?: SortOrder
    elimMatchesPlayed?: SortOrder
    elimWins?: SortOrder
    einsteinWins?: SortOrder
    opponents?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamEventResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamNumber_eventKey?: TeamEventResultTeamNumberEventKeyCompoundUniqueInput
    AND?: TeamEventResultWhereInput | TeamEventResultWhereInput[]
    OR?: TeamEventResultWhereInput[]
    NOT?: TeamEventResultWhereInput | TeamEventResultWhereInput[]
    teamNumber?: IntFilter<"TeamEventResult"> | number
    eventKey?: StringFilter<"TeamEventResult"> | string
    year?: IntFilter<"TeamEventResult"> | number
    eventType?: IntFilter<"TeamEventResult"> | number
    startDate?: StringNullableFilter<"TeamEventResult"> | string | null
    qualRank?: IntNullableFilter<"TeamEventResult"> | number | null
    numTeams?: IntNullableFilter<"TeamEventResult"> | number | null
    allianceSeed?: IntNullableFilter<"TeamEventResult"> | number | null
    pickRole?: StringNullableFilter<"TeamEventResult"> | string | null
    elimMatchesPlayed?: IntFilter<"TeamEventResult"> | number
    elimWins?: IntFilter<"TeamEventResult"> | number
    einsteinWins?: IntFilter<"TeamEventResult"> | number
    opponents?: IntNullableListFilter<"TeamEventResult">
    updatedAt?: DateTimeFilter<"TeamEventResult"> | Date | string
  }, "id" | "teamNumber_eventKey">

  export type TeamEventResultOrderByWithAggregationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    eventKey?: SortOrder
    year?: SortOrder
    eventType?: SortOrder
    startDate?: SortOrder
    qualRank?: SortOrder
    numTeams?: SortOrder
    allianceSeed?: SortOrder
    pickRole?: SortOrder
    elimMatchesPlayed?: SortOrder
    elimWins?: SortOrder
    einsteinWins?: SortOrder
    opponents?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamEventResultCountOrderByAggregateInput
    _avg?: TeamEventResultAvgOrderByAggregateInput
    _max?: TeamEventResultMaxOrderByAggregateInput
    _min?: TeamEventResultMinOrderByAggregateInput
    _sum?: TeamEventResultSumOrderByAggregateInput
  }

  export type TeamEventResultScalarWhereWithAggregatesInput = {
    AND?: TeamEventResultScalarWhereWithAggregatesInput | TeamEventResultScalarWhereWithAggregatesInput[]
    OR?: TeamEventResultScalarWhereWithAggregatesInput[]
    NOT?: TeamEventResultScalarWhereWithAggregatesInput | TeamEventResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamEventResult"> | string
    teamNumber?: IntWithAggregatesFilter<"TeamEventResult"> | number
    eventKey?: StringWithAggregatesFilter<"TeamEventResult"> | string
    year?: IntWithAggregatesFilter<"TeamEventResult"> | number
    eventType?: IntWithAggregatesFilter<"TeamEventResult"> | number
    startDate?: StringNullableWithAggregatesFilter<"TeamEventResult"> | string | null
    qualRank?: IntNullableWithAggregatesFilter<"TeamEventResult"> | number | null
    numTeams?: IntNullableWithAggregatesFilter<"TeamEventResult"> | number | null
    allianceSeed?: IntNullableWithAggregatesFilter<"TeamEventResult"> | number | null
    pickRole?: StringNullableWithAggregatesFilter<"TeamEventResult"> | string | null
    elimMatchesPlayed?: IntWithAggregatesFilter<"TeamEventResult"> | number
    elimWins?: IntWithAggregatesFilter<"TeamEventResult"> | number
    einsteinWins?: IntWithAggregatesFilter<"TeamEventResult"> | number
    opponents?: IntNullableListFilter<"TeamEventResult">
    updatedAt?: DateTimeWithAggregatesFilter<"TeamEventResult"> | Date | string
  }

  export type TeamScoreWhereInput = {
    AND?: TeamScoreWhereInput | TeamScoreWhereInput[]
    OR?: TeamScoreWhereInput[]
    NOT?: TeamScoreWhereInput | TeamScoreWhereInput[]
    id?: StringFilter<"TeamScore"> | string
    teamNumber?: IntFilter<"TeamScore"> | number
    year?: IntFilter<"TeamScore"> | number
    stdXrobot?: FloatFilter<"TeamScore"> | number
    stdXawards?: FloatFilter<"TeamScore"> | number
    stdXval?: FloatFilter<"TeamScore"> | number
    regXrobot?: FloatFilter<"TeamScore"> | number
    regXawards?: FloatFilter<"TeamScore"> | number
    regXval?: FloatFilter<"TeamScore"> | number
    dctXrobot?: FloatFilter<"TeamScore"> | number
    dctXawards?: FloatFilter<"TeamScore"> | number
    dctXval?: FloatFilter<"TeamScore"> | number
    fullXrobot?: FloatFilter<"TeamScore"> | number
    fullXawards?: FloatFilter<"TeamScore"> | number
    fullXval?: FloatFilter<"TeamScore"> | number
    diffStd?: FloatNullableFilter<"TeamScore"> | number | null
    diffReg?: FloatNullableFilter<"TeamScore"> | number | null
    diffDct?: FloatNullableFilter<"TeamScore"> | number | null
    updatedAt?: DateTimeFilter<"TeamScore"> | Date | string
  }

  export type TeamScoreOrderByWithRelationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    year?: SortOrder
    stdXrobot?: SortOrder
    stdXawards?: SortOrder
    stdXval?: SortOrder
    regXrobot?: SortOrder
    regXawards?: SortOrder
    regXval?: SortOrder
    dctXrobot?: SortOrder
    dctXawards?: SortOrder
    dctXval?: SortOrder
    fullXrobot?: SortOrder
    fullXawards?: SortOrder
    fullXval?: SortOrder
    diffStd?: SortOrder
    diffReg?: SortOrder
    diffDct?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamNumber_year?: TeamScoreTeamNumberYearCompoundUniqueInput
    AND?: TeamScoreWhereInput | TeamScoreWhereInput[]
    OR?: TeamScoreWhereInput[]
    NOT?: TeamScoreWhereInput | TeamScoreWhereInput[]
    teamNumber?: IntFilter<"TeamScore"> | number
    year?: IntFilter<"TeamScore"> | number
    stdXrobot?: FloatFilter<"TeamScore"> | number
    stdXawards?: FloatFilter<"TeamScore"> | number
    stdXval?: FloatFilter<"TeamScore"> | number
    regXrobot?: FloatFilter<"TeamScore"> | number
    regXawards?: FloatFilter<"TeamScore"> | number
    regXval?: FloatFilter<"TeamScore"> | number
    dctXrobot?: FloatFilter<"TeamScore"> | number
    dctXawards?: FloatFilter<"TeamScore"> | number
    dctXval?: FloatFilter<"TeamScore"> | number
    fullXrobot?: FloatFilter<"TeamScore"> | number
    fullXawards?: FloatFilter<"TeamScore"> | number
    fullXval?: FloatFilter<"TeamScore"> | number
    diffStd?: FloatNullableFilter<"TeamScore"> | number | null
    diffReg?: FloatNullableFilter<"TeamScore"> | number | null
    diffDct?: FloatNullableFilter<"TeamScore"> | number | null
    updatedAt?: DateTimeFilter<"TeamScore"> | Date | string
  }, "id" | "teamNumber_year">

  export type TeamScoreOrderByWithAggregationInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    year?: SortOrder
    stdXrobot?: SortOrder
    stdXawards?: SortOrder
    stdXval?: SortOrder
    regXrobot?: SortOrder
    regXawards?: SortOrder
    regXval?: SortOrder
    dctXrobot?: SortOrder
    dctXawards?: SortOrder
    dctXval?: SortOrder
    fullXrobot?: SortOrder
    fullXawards?: SortOrder
    fullXval?: SortOrder
    diffStd?: SortOrder
    diffReg?: SortOrder
    diffDct?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamScoreCountOrderByAggregateInput
    _avg?: TeamScoreAvgOrderByAggregateInput
    _max?: TeamScoreMaxOrderByAggregateInput
    _min?: TeamScoreMinOrderByAggregateInput
    _sum?: TeamScoreSumOrderByAggregateInput
  }

  export type TeamScoreScalarWhereWithAggregatesInput = {
    AND?: TeamScoreScalarWhereWithAggregatesInput | TeamScoreScalarWhereWithAggregatesInput[]
    OR?: TeamScoreScalarWhereWithAggregatesInput[]
    NOT?: TeamScoreScalarWhereWithAggregatesInput | TeamScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamScore"> | string
    teamNumber?: IntWithAggregatesFilter<"TeamScore"> | number
    year?: IntWithAggregatesFilter<"TeamScore"> | number
    stdXrobot?: FloatWithAggregatesFilter<"TeamScore"> | number
    stdXawards?: FloatWithAggregatesFilter<"TeamScore"> | number
    stdXval?: FloatWithAggregatesFilter<"TeamScore"> | number
    regXrobot?: FloatWithAggregatesFilter<"TeamScore"> | number
    regXawards?: FloatWithAggregatesFilter<"TeamScore"> | number
    regXval?: FloatWithAggregatesFilter<"TeamScore"> | number
    dctXrobot?: FloatWithAggregatesFilter<"TeamScore"> | number
    dctXawards?: FloatWithAggregatesFilter<"TeamScore"> | number
    dctXval?: FloatWithAggregatesFilter<"TeamScore"> | number
    fullXrobot?: FloatWithAggregatesFilter<"TeamScore"> | number
    fullXawards?: FloatWithAggregatesFilter<"TeamScore"> | number
    fullXval?: FloatWithAggregatesFilter<"TeamScore"> | number
    diffStd?: FloatNullableWithAggregatesFilter<"TeamScore"> | number | null
    diffReg?: FloatNullableWithAggregatesFilter<"TeamScore"> | number | null
    diffDct?: FloatNullableWithAggregatesFilter<"TeamScore"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"TeamScore"> | Date | string
  }

  export type ScoreWeightsWhereInput = {
    AND?: ScoreWeightsWhereInput | ScoreWeightsWhereInput[]
    OR?: ScoreWeightsWhereInput[]
    NOT?: ScoreWeightsWhereInput | ScoreWeightsWhereInput[]
    id?: StringFilter<"ScoreWeights"> | string
    key?: StringFilter<"ScoreWeights"> | string
    optRobot?: FloatNullableListFilter<"ScoreWeights">
    optAwards?: FloatNullableListFilter<"ScoreWeights">
    actRobot?: FloatNullableListFilter<"ScoreWeights">
    actAwards?: FloatNullableListFilter<"ScoreWeights">
    updatedAt?: DateTimeFilter<"ScoreWeights"> | Date | string
  }

  export type ScoreWeightsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    optRobot?: SortOrder
    optAwards?: SortOrder
    actRobot?: SortOrder
    actAwards?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreWeightsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ScoreWeightsWhereInput | ScoreWeightsWhereInput[]
    OR?: ScoreWeightsWhereInput[]
    NOT?: ScoreWeightsWhereInput | ScoreWeightsWhereInput[]
    optRobot?: FloatNullableListFilter<"ScoreWeights">
    optAwards?: FloatNullableListFilter<"ScoreWeights">
    actRobot?: FloatNullableListFilter<"ScoreWeights">
    actAwards?: FloatNullableListFilter<"ScoreWeights">
    updatedAt?: DateTimeFilter<"ScoreWeights"> | Date | string
  }, "id" | "key">

  export type ScoreWeightsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    optRobot?: SortOrder
    optAwards?: SortOrder
    actRobot?: SortOrder
    actAwards?: SortOrder
    updatedAt?: SortOrder
    _count?: ScoreWeightsCountOrderByAggregateInput
    _avg?: ScoreWeightsAvgOrderByAggregateInput
    _max?: ScoreWeightsMaxOrderByAggregateInput
    _min?: ScoreWeightsMinOrderByAggregateInput
    _sum?: ScoreWeightsSumOrderByAggregateInput
  }

  export type ScoreWeightsScalarWhereWithAggregatesInput = {
    AND?: ScoreWeightsScalarWhereWithAggregatesInput | ScoreWeightsScalarWhereWithAggregatesInput[]
    OR?: ScoreWeightsScalarWhereWithAggregatesInput[]
    NOT?: ScoreWeightsScalarWhereWithAggregatesInput | ScoreWeightsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoreWeights"> | string
    key?: StringWithAggregatesFilter<"ScoreWeights"> | string
    optRobot?: FloatNullableListFilter<"ScoreWeights">
    optAwards?: FloatNullableListFilter<"ScoreWeights">
    actRobot?: FloatNullableListFilter<"ScoreWeights">
    actAwards?: FloatNullableListFilter<"ScoreWeights">
    updatedAt?: DateTimeWithAggregatesFilter<"ScoreWeights"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictCreateInput = {
    id?: string
    key: string
    abbreviation: string
    displayName: string
    year: number
    updatedAt?: Date | string
  }

  export type DistrictUncheckedCreateInput = {
    id?: string
    key: string
    abbreviation: string
    displayName: string
    year: number
    updatedAt?: Date | string
  }

  export type DistrictUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictCreateManyInput = {
    id?: string
    key: string
    abbreviation: string
    displayName: string
    year: number
    updatedAt?: Date | string
  }

  export type DistrictUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    key: string
    name: string
    eventType: number
    eventTypeString: string
    year: number
    week?: number | null
    startDate?: string | null
    endDate?: string | null
    districtKey?: string | null
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    key: string
    name: string
    eventType: number
    eventTypeString: string
    year: number
    week?: number | null
    startDate?: string | null
    endDate?: string | null
    districtKey?: string | null
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventType?: IntFieldUpdateOperationsInput | number
    eventTypeString?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    districtKey?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventType?: IntFieldUpdateOperationsInput | number
    eventTypeString?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    districtKey?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    key: string
    name: string
    eventType: number
    eventTypeString: string
    year: number
    week?: number | null
    startDate?: string | null
    endDate?: string | null
    districtKey?: string | null
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventType?: IntFieldUpdateOperationsInput | number
    eventTypeString?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    districtKey?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventType?: IntFieldUpdateOperationsInput | number
    eventTypeString?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    districtKey?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    number: number
    key: string
    name?: string | null
    nickname?: string | null
    city?: string | null
    stateProv?: string | null
    country?: string | null
    updatedAt?: Date | string
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    number: number
    key: string
    name?: string | null
    nickname?: string | null
    city?: string | null
    stateProv?: string | null
    country?: string | null
    updatedAt?: Date | string
  }

  export type TeamUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    stateProv?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    stateProv?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateManyInput = {
    id?: string
    number: number
    key: string
    name?: string | null
    nickname?: string | null
    city?: string | null
    stateProv?: string | null
    country?: string | null
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    stateProv?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    stateProv?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEpaCreateInput = {
    id?: string
    teamNumber: number
    epas?: XOR<EpaEntryListCreateEnvelopeInput, EpaEntryCreateInput> | EpaEntryCreateInput[]
    updatedAt?: Date | string
  }

  export type TeamEpaUncheckedCreateInput = {
    id?: string
    teamNumber: number
    epas?: XOR<EpaEntryListCreateEnvelopeInput, EpaEntryCreateInput> | EpaEntryCreateInput[]
    updatedAt?: Date | string
  }

  export type TeamEpaUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    epas?: XOR<EpaEntryListUpdateEnvelopeInput, EpaEntryCreateInput> | EpaEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEpaUncheckedUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    epas?: XOR<EpaEntryListUpdateEnvelopeInput, EpaEntryCreateInput> | EpaEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEpaCreateManyInput = {
    id?: string
    teamNumber: number
    epas?: XOR<EpaEntryListCreateEnvelopeInput, EpaEntryCreateInput> | EpaEntryCreateInput[]
    updatedAt?: Date | string
  }

  export type TeamEpaUpdateManyMutationInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    epas?: XOR<EpaEntryListUpdateEnvelopeInput, EpaEntryCreateInput> | EpaEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEpaUncheckedUpdateManyInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    epas?: XOR<EpaEntryListUpdateEnvelopeInput, EpaEntryCreateInput> | EpaEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTeamCreateInput = {
    id?: string
    eventKey: string
    teamNumbers?: EventTeamCreateteamNumbersInput | number[]
  }

  export type EventTeamUncheckedCreateInput = {
    id?: string
    eventKey: string
    teamNumbers?: EventTeamCreateteamNumbersInput | number[]
  }

  export type EventTeamUpdateInput = {
    eventKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: EventTeamUpdateteamNumbersInput | number[]
  }

  export type EventTeamUncheckedUpdateInput = {
    eventKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: EventTeamUpdateteamNumbersInput | number[]
  }

  export type EventTeamCreateManyInput = {
    id?: string
    eventKey: string
    teamNumbers?: EventTeamCreateteamNumbersInput | number[]
  }

  export type EventTeamUpdateManyMutationInput = {
    eventKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: EventTeamUpdateteamNumbersInput | number[]
  }

  export type EventTeamUncheckedUpdateManyInput = {
    eventKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: EventTeamUpdateteamNumbersInput | number[]
  }

  export type DistrictTeamCreateInput = {
    id?: string
    districtKey: string
    teamNumbers?: DistrictTeamCreateteamNumbersInput | number[]
  }

  export type DistrictTeamUncheckedCreateInput = {
    id?: string
    districtKey: string
    teamNumbers?: DistrictTeamCreateteamNumbersInput | number[]
  }

  export type DistrictTeamUpdateInput = {
    districtKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: DistrictTeamUpdateteamNumbersInput | number[]
  }

  export type DistrictTeamUncheckedUpdateInput = {
    districtKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: DistrictTeamUpdateteamNumbersInput | number[]
  }

  export type DistrictTeamCreateManyInput = {
    id?: string
    districtKey: string
    teamNumbers?: DistrictTeamCreateteamNumbersInput | number[]
  }

  export type DistrictTeamUpdateManyMutationInput = {
    districtKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: DistrictTeamUpdateteamNumbersInput | number[]
  }

  export type DistrictTeamUncheckedUpdateManyInput = {
    districtKey?: StringFieldUpdateOperationsInput | string
    teamNumbers?: DistrictTeamUpdateteamNumbersInput | number[]
  }

  export type TeamAvatarCreateInput = {
    id?: string
    teamNumber: number
    avatars?: XOR<AvatarEntryListCreateEnvelopeInput, AvatarEntryCreateInput> | AvatarEntryCreateInput[]
    updatedAt?: Date | string
  }

  export type TeamAvatarUncheckedCreateInput = {
    id?: string
    teamNumber: number
    avatars?: XOR<AvatarEntryListCreateEnvelopeInput, AvatarEntryCreateInput> | AvatarEntryCreateInput[]
    updatedAt?: Date | string
  }

  export type TeamAvatarUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    avatars?: XOR<AvatarEntryListUpdateEnvelopeInput, AvatarEntryCreateInput> | AvatarEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamAvatarUncheckedUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    avatars?: XOR<AvatarEntryListUpdateEnvelopeInput, AvatarEntryCreateInput> | AvatarEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamAvatarCreateManyInput = {
    id?: string
    teamNumber: number
    avatars?: XOR<AvatarEntryListCreateEnvelopeInput, AvatarEntryCreateInput> | AvatarEntryCreateInput[]
    updatedAt?: Date | string
  }

  export type TeamAvatarUpdateManyMutationInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    avatars?: XOR<AvatarEntryListUpdateEnvelopeInput, AvatarEntryCreateInput> | AvatarEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamAvatarUncheckedUpdateManyInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    avatars?: XOR<AvatarEntryListUpdateEnvelopeInput, AvatarEntryCreateInput> | AvatarEntryCreateInput[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateInput = {
    id?: string
    teamNumber: number
    awards?: XOR<AwardEntryListCreateEnvelopeInput, AwardEntryCreateInput> | AwardEntryCreateInput[]
  }

  export type AwardUncheckedCreateInput = {
    id?: string
    teamNumber: number
    awards?: XOR<AwardEntryListCreateEnvelopeInput, AwardEntryCreateInput> | AwardEntryCreateInput[]
  }

  export type AwardUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    awards?: XOR<AwardEntryListUpdateEnvelopeInput, AwardEntryCreateInput> | AwardEntryCreateInput[]
  }

  export type AwardUncheckedUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    awards?: XOR<AwardEntryListUpdateEnvelopeInput, AwardEntryCreateInput> | AwardEntryCreateInput[]
  }

  export type AwardCreateManyInput = {
    id?: string
    teamNumber: number
    awards?: XOR<AwardEntryListCreateEnvelopeInput, AwardEntryCreateInput> | AwardEntryCreateInput[]
  }

  export type AwardUpdateManyMutationInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    awards?: XOR<AwardEntryListUpdateEnvelopeInput, AwardEntryCreateInput> | AwardEntryCreateInput[]
  }

  export type AwardUncheckedUpdateManyInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    awards?: XOR<AwardEntryListUpdateEnvelopeInput, AwardEntryCreateInput> | AwardEntryCreateInput[]
  }

  export type SyncLogCreateInput = {
    id?: string
    task: string
    status: string
    message?: string | null
    startedAt: Date | string
    finishedAt: Date | string
  }

  export type SyncLogUncheckedCreateInput = {
    id?: string
    task: string
    status: string
    message?: string | null
    startedAt: Date | string
    finishedAt: Date | string
  }

  export type SyncLogUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUncheckedUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogCreateManyInput = {
    id?: string
    task: string
    status: string
    message?: string | null
    startedAt: Date | string
    finishedAt: Date | string
  }

  export type SyncLogUpdateManyMutationInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUncheckedUpdateManyInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickCreateInput = {
    id?: string
    scopeKey: string
    year: number
    teamNumber: number
    status: string
    by?: string | null
    updatedBy?: string | null
    updatedAt?: Date | string
  }

  export type PickUncheckedCreateInput = {
    id?: string
    scopeKey: string
    year: number
    teamNumber: number
    status: string
    by?: string | null
    updatedBy?: string | null
    updatedAt?: Date | string
  }

  export type PickUpdateInput = {
    scopeKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    by?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickUncheckedUpdateInput = {
    scopeKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    by?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickCreateManyInput = {
    id?: string
    scopeKey: string
    year: number
    teamNumber: number
    status: string
    by?: string | null
    updatedBy?: string | null
    updatedAt?: Date | string
  }

  export type PickUpdateManyMutationInput = {
    scopeKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    by?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickUncheckedUpdateManyInput = {
    scopeKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    by?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftCreateInput = {
    id?: string
    year: number
    drafters?: DraftCreatedraftersInput | string[]
    updatedAt?: Date | string
  }

  export type DraftUncheckedCreateInput = {
    id?: string
    year: number
    drafters?: DraftCreatedraftersInput | string[]
    updatedAt?: Date | string
  }

  export type DraftUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    drafters?: DraftUpdatedraftersInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftUncheckedUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    drafters?: DraftUpdatedraftersInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftCreateManyInput = {
    id?: string
    year: number
    drafters?: DraftCreatedraftersInput | string[]
    updatedAt?: Date | string
  }

  export type DraftUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    drafters?: DraftUpdatedraftersInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftUncheckedUpdateManyInput = {
    year?: IntFieldUpdateOperationsInput | number
    drafters?: DraftUpdatedraftersInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncCursorCreateInput = {
    id?: string
    path: string
    etag: string
    updatedAt?: Date | string
  }

  export type SyncCursorUncheckedCreateInput = {
    id?: string
    path: string
    etag: string
    updatedAt?: Date | string
  }

  export type SyncCursorUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    etag?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncCursorUncheckedUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    etag?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncCursorCreateManyInput = {
    id?: string
    path: string
    etag: string
    updatedAt?: Date | string
  }

  export type SyncCursorUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    etag?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncCursorUncheckedUpdateManyInput = {
    path?: StringFieldUpdateOperationsInput | string
    etag?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    id?: string
    year: number
    teamNumber: number
    stars: number
    updatedBy?: string | null
    updatedAt?: Date | string
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    year: number
    teamNumber: number
    stars: number
    updatedBy?: string | null
    updatedAt?: Date | string
  }

  export type RatingUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    year: number
    teamNumber: number
    stars: number
    updatedBy?: string | null
    updatedAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    year?: IntFieldUpdateOperationsInput | number
    teamNumber?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEventResultCreateInput = {
    id?: string
    teamNumber: number
    eventKey: string
    year: number
    eventType: number
    startDate?: string | null
    qualRank?: number | null
    numTeams?: number | null
    allianceSeed?: number | null
    pickRole?: string | null
    elimMatchesPlayed?: number
    elimWins?: number
    einsteinWins?: number
    opponents?: TeamEventResultCreateopponentsInput | number[]
    updatedAt?: Date | string
  }

  export type TeamEventResultUncheckedCreateInput = {
    id?: string
    teamNumber: number
    eventKey: string
    year: number
    eventType: number
    startDate?: string | null
    qualRank?: number | null
    numTeams?: number | null
    allianceSeed?: number | null
    pickRole?: string | null
    elimMatchesPlayed?: number
    elimWins?: number
    einsteinWins?: number
    opponents?: TeamEventResultCreateopponentsInput | number[]
    updatedAt?: Date | string
  }

  export type TeamEventResultUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    eventKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    eventType?: IntFieldUpdateOperationsInput | number
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    qualRank?: NullableIntFieldUpdateOperationsInput | number | null
    numTeams?: NullableIntFieldUpdateOperationsInput | number | null
    allianceSeed?: NullableIntFieldUpdateOperationsInput | number | null
    pickRole?: NullableStringFieldUpdateOperationsInput | string | null
    elimMatchesPlayed?: IntFieldUpdateOperationsInput | number
    elimWins?: IntFieldUpdateOperationsInput | number
    einsteinWins?: IntFieldUpdateOperationsInput | number
    opponents?: TeamEventResultUpdateopponentsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEventResultUncheckedUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    eventKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    eventType?: IntFieldUpdateOperationsInput | number
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    qualRank?: NullableIntFieldUpdateOperationsInput | number | null
    numTeams?: NullableIntFieldUpdateOperationsInput | number | null
    allianceSeed?: NullableIntFieldUpdateOperationsInput | number | null
    pickRole?: NullableStringFieldUpdateOperationsInput | string | null
    elimMatchesPlayed?: IntFieldUpdateOperationsInput | number
    elimWins?: IntFieldUpdateOperationsInput | number
    einsteinWins?: IntFieldUpdateOperationsInput | number
    opponents?: TeamEventResultUpdateopponentsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEventResultCreateManyInput = {
    id?: string
    teamNumber: number
    eventKey: string
    year: number
    eventType: number
    startDate?: string | null
    qualRank?: number | null
    numTeams?: number | null
    allianceSeed?: number | null
    pickRole?: string | null
    elimMatchesPlayed?: number
    elimWins?: number
    einsteinWins?: number
    opponents?: TeamEventResultCreateopponentsInput | number[]
    updatedAt?: Date | string
  }

  export type TeamEventResultUpdateManyMutationInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    eventKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    eventType?: IntFieldUpdateOperationsInput | number
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    qualRank?: NullableIntFieldUpdateOperationsInput | number | null
    numTeams?: NullableIntFieldUpdateOperationsInput | number | null
    allianceSeed?: NullableIntFieldUpdateOperationsInput | number | null
    pickRole?: NullableStringFieldUpdateOperationsInput | string | null
    elimMatchesPlayed?: IntFieldUpdateOperationsInput | number
    elimWins?: IntFieldUpdateOperationsInput | number
    einsteinWins?: IntFieldUpdateOperationsInput | number
    opponents?: TeamEventResultUpdateopponentsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamEventResultUncheckedUpdateManyInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    eventKey?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    eventType?: IntFieldUpdateOperationsInput | number
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    qualRank?: NullableIntFieldUpdateOperationsInput | number | null
    numTeams?: NullableIntFieldUpdateOperationsInput | number | null
    allianceSeed?: NullableIntFieldUpdateOperationsInput | number | null
    pickRole?: NullableStringFieldUpdateOperationsInput | string | null
    elimMatchesPlayed?: IntFieldUpdateOperationsInput | number
    elimWins?: IntFieldUpdateOperationsInput | number
    einsteinWins?: IntFieldUpdateOperationsInput | number
    opponents?: TeamEventResultUpdateopponentsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreCreateInput = {
    id?: string
    teamNumber: number
    year: number
    stdXrobot?: number
    stdXawards?: number
    stdXval?: number
    regXrobot?: number
    regXawards?: number
    regXval?: number
    dctXrobot?: number
    dctXawards?: number
    dctXval?: number
    fullXrobot?: number
    fullXawards?: number
    fullXval?: number
    diffStd?: number | null
    diffReg?: number | null
    diffDct?: number | null
    updatedAt?: Date | string
  }

  export type TeamScoreUncheckedCreateInput = {
    id?: string
    teamNumber: number
    year: number
    stdXrobot?: number
    stdXawards?: number
    stdXval?: number
    regXrobot?: number
    regXawards?: number
    regXval?: number
    dctXrobot?: number
    dctXawards?: number
    dctXval?: number
    fullXrobot?: number
    fullXawards?: number
    fullXval?: number
    diffStd?: number | null
    diffReg?: number | null
    diffDct?: number | null
    updatedAt?: Date | string
  }

  export type TeamScoreUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    stdXrobot?: FloatFieldUpdateOperationsInput | number
    stdXawards?: FloatFieldUpdateOperationsInput | number
    stdXval?: FloatFieldUpdateOperationsInput | number
    regXrobot?: FloatFieldUpdateOperationsInput | number
    regXawards?: FloatFieldUpdateOperationsInput | number
    regXval?: FloatFieldUpdateOperationsInput | number
    dctXrobot?: FloatFieldUpdateOperationsInput | number
    dctXawards?: FloatFieldUpdateOperationsInput | number
    dctXval?: FloatFieldUpdateOperationsInput | number
    fullXrobot?: FloatFieldUpdateOperationsInput | number
    fullXawards?: FloatFieldUpdateOperationsInput | number
    fullXval?: FloatFieldUpdateOperationsInput | number
    diffStd?: NullableFloatFieldUpdateOperationsInput | number | null
    diffReg?: NullableFloatFieldUpdateOperationsInput | number | null
    diffDct?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreUncheckedUpdateInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    stdXrobot?: FloatFieldUpdateOperationsInput | number
    stdXawards?: FloatFieldUpdateOperationsInput | number
    stdXval?: FloatFieldUpdateOperationsInput | number
    regXrobot?: FloatFieldUpdateOperationsInput | number
    regXawards?: FloatFieldUpdateOperationsInput | number
    regXval?: FloatFieldUpdateOperationsInput | number
    dctXrobot?: FloatFieldUpdateOperationsInput | number
    dctXawards?: FloatFieldUpdateOperationsInput | number
    dctXval?: FloatFieldUpdateOperationsInput | number
    fullXrobot?: FloatFieldUpdateOperationsInput | number
    fullXawards?: FloatFieldUpdateOperationsInput | number
    fullXval?: FloatFieldUpdateOperationsInput | number
    diffStd?: NullableFloatFieldUpdateOperationsInput | number | null
    diffReg?: NullableFloatFieldUpdateOperationsInput | number | null
    diffDct?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreCreateManyInput = {
    id?: string
    teamNumber: number
    year: number
    stdXrobot?: number
    stdXawards?: number
    stdXval?: number
    regXrobot?: number
    regXawards?: number
    regXval?: number
    dctXrobot?: number
    dctXawards?: number
    dctXval?: number
    fullXrobot?: number
    fullXawards?: number
    fullXval?: number
    diffStd?: number | null
    diffReg?: number | null
    diffDct?: number | null
    updatedAt?: Date | string
  }

  export type TeamScoreUpdateManyMutationInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    stdXrobot?: FloatFieldUpdateOperationsInput | number
    stdXawards?: FloatFieldUpdateOperationsInput | number
    stdXval?: FloatFieldUpdateOperationsInput | number
    regXrobot?: FloatFieldUpdateOperationsInput | number
    regXawards?: FloatFieldUpdateOperationsInput | number
    regXval?: FloatFieldUpdateOperationsInput | number
    dctXrobot?: FloatFieldUpdateOperationsInput | number
    dctXawards?: FloatFieldUpdateOperationsInput | number
    dctXval?: FloatFieldUpdateOperationsInput | number
    fullXrobot?: FloatFieldUpdateOperationsInput | number
    fullXawards?: FloatFieldUpdateOperationsInput | number
    fullXval?: FloatFieldUpdateOperationsInput | number
    diffStd?: NullableFloatFieldUpdateOperationsInput | number | null
    diffReg?: NullableFloatFieldUpdateOperationsInput | number | null
    diffDct?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreUncheckedUpdateManyInput = {
    teamNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    stdXrobot?: FloatFieldUpdateOperationsInput | number
    stdXawards?: FloatFieldUpdateOperationsInput | number
    stdXval?: FloatFieldUpdateOperationsInput | number
    regXrobot?: FloatFieldUpdateOperationsInput | number
    regXawards?: FloatFieldUpdateOperationsInput | number
    regXval?: FloatFieldUpdateOperationsInput | number
    dctXrobot?: FloatFieldUpdateOperationsInput | number
    dctXawards?: FloatFieldUpdateOperationsInput | number
    dctXval?: FloatFieldUpdateOperationsInput | number
    fullXrobot?: FloatFieldUpdateOperationsInput | number
    fullXawards?: FloatFieldUpdateOperationsInput | number
    fullXval?: FloatFieldUpdateOperationsInput | number
    diffStd?: NullableFloatFieldUpdateOperationsInput | number | null
    diffReg?: NullableFloatFieldUpdateOperationsInput | number | null
    diffDct?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreWeightsCreateInput = {
    id?: string
    key?: string
    optRobot?: ScoreWeightsCreateoptRobotInput | number[]
    optAwards?: ScoreWeightsCreateoptAwardsInput | number[]
    actRobot?: ScoreWeightsCreateactRobotInput | number[]
    actAwards?: ScoreWeightsCreateactAwardsInput | number[]
    updatedAt?: Date | string
  }

  export type ScoreWeightsUncheckedCreateInput = {
    id?: string
    key?: string
    optRobot?: ScoreWeightsCreateoptRobotInput | number[]
    optAwards?: ScoreWeightsCreateoptAwardsInput | number[]
    actRobot?: ScoreWeightsCreateactRobotInput | number[]
    actAwards?: ScoreWeightsCreateactAwardsInput | number[]
    updatedAt?: Date | string
  }

  export type ScoreWeightsUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    optRobot?: ScoreWeightsUpdateoptRobotInput | number[]
    optAwards?: ScoreWeightsUpdateoptAwardsInput | number[]
    actRobot?: ScoreWeightsUpdateactRobotInput | number[]
    actAwards?: ScoreWeightsUpdateactAwardsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreWeightsUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    optRobot?: ScoreWeightsUpdateoptRobotInput | number[]
    optAwards?: ScoreWeightsUpdateoptAwardsInput | number[]
    actRobot?: ScoreWeightsUpdateactRobotInput | number[]
    actAwards?: ScoreWeightsUpdateactAwardsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreWeightsCreateManyInput = {
    id?: string
    key?: string
    optRobot?: ScoreWeightsCreateoptRobotInput | number[]
    optAwards?: ScoreWeightsCreateoptAwardsInput | number[]
    actRobot?: ScoreWeightsCreateactRobotInput | number[]
    actAwards?: ScoreWeightsCreateactAwardsInput | number[]
    updatedAt?: Date | string
  }

  export type ScoreWeightsUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    optRobot?: ScoreWeightsUpdateoptRobotInput | number[]
    optAwards?: ScoreWeightsUpdateoptAwardsInput | number[]
    actRobot?: ScoreWeightsUpdateactRobotInput | number[]
    actAwards?: ScoreWeightsUpdateactAwardsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreWeightsUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    optRobot?: ScoreWeightsUpdateoptRobotInput | number[]
    optAwards?: ScoreWeightsUpdateoptAwardsInput | number[]
    actRobot?: ScoreWeightsUpdateactRobotInput | number[]
    actAwards?: ScoreWeightsUpdateactAwardsInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    abbreviation?: SortOrder
    displayName?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistrictAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    abbreviation?: SortOrder
    displayName?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    abbreviation?: SortOrder
    displayName?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistrictSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    eventType?: SortOrder
    eventTypeString?: SortOrder
    year?: SortOrder
    week?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    districtKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    eventType?: SortOrder
    year?: SortOrder
    week?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    eventType?: SortOrder
    eventTypeString?: SortOrder
    year?: SortOrder
    week?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    districtKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    eventType?: SortOrder
    eventTypeString?: SortOrder
    year?: SortOrder
    week?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    districtKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    eventType?: SortOrder
    year?: SortOrder
    week?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    key?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    city?: SortOrder
    stateProv?: SortOrder
    country?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    key?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    city?: SortOrder
    stateProv?: SortOrder
    country?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    key?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    city?: SortOrder
    stateProv?: SortOrder
    country?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type EpaEntryCompositeListFilter = {
    equals?: EpaEntryObjectEqualityInput[]
    every?: EpaEntryWhereInput
    some?: EpaEntryWhereInput
    none?: EpaEntryWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type EpaEntryObjectEqualityInput = {
    year: number
    epaUnitless: number
  }

  export type EpaEntryOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type TeamEpaCountOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamEpaAvgOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type TeamEpaMaxOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamEpaMinOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamEpaSumOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EventTeamCountOrderByAggregateInput = {
    id?: SortOrder
    eventKey?: SortOrder
    teamNumbers?: SortOrder
  }

  export type EventTeamAvgOrderByAggregateInput = {
    teamNumbers?: SortOrder
  }

  export type EventTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    eventKey?: SortOrder
  }

  export type EventTeamMinOrderByAggregateInput = {
    id?: SortOrder
    eventKey?: SortOrder
  }

  export type EventTeamSumOrderByAggregateInput = {
    teamNumbers?: SortOrder
  }

  export type DistrictTeamCountOrderByAggregateInput = {
    id?: SortOrder
    districtKey?: SortOrder
    teamNumbers?: SortOrder
  }

  export type DistrictTeamAvgOrderByAggregateInput = {
    teamNumbers?: SortOrder
  }

  export type DistrictTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    districtKey?: SortOrder
  }

  export type DistrictTeamMinOrderByAggregateInput = {
    id?: SortOrder
    districtKey?: SortOrder
  }

  export type DistrictTeamSumOrderByAggregateInput = {
    teamNumbers?: SortOrder
  }

  export type AvatarEntryCompositeListFilter = {
    equals?: AvatarEntryObjectEqualityInput[]
    every?: AvatarEntryWhereInput
    some?: AvatarEntryWhereInput
    none?: AvatarEntryWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type AvatarEntryObjectEqualityInput = {
    year: number
    base64: string
  }

  export type AvatarEntryOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type TeamAvatarCountOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvatarAvgOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type TeamAvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvatarMinOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvatarSumOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type AwardEntryCompositeListFilter = {
    equals?: AwardEntryObjectEqualityInput[]
    every?: AwardEntryWhereInput
    some?: AwardEntryWhereInput
    none?: AwardEntryWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type AwardEntryObjectEqualityInput = {
    eventKey: string
    awardType: number
    name: string
    year: number
  }

  export type AwardEntryOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type AwardCountOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
  }

  export type AwardAvgOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type AwardMaxOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
  }

  export type AwardMinOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
  }

  export type AwardSumOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type SyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    message?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type SyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    message?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type SyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    message?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type PickScopeKeyTeamNumberCompoundUniqueInput = {
    scopeKey: string
    teamNumber: number
  }

  export type PickCountOrderByAggregateInput = {
    id?: SortOrder
    scopeKey?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    status?: SortOrder
    by?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type PickAvgOrderByAggregateInput = {
    year?: SortOrder
    teamNumber?: SortOrder
  }

  export type PickMaxOrderByAggregateInput = {
    id?: SortOrder
    scopeKey?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    status?: SortOrder
    by?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type PickMinOrderByAggregateInput = {
    id?: SortOrder
    scopeKey?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    status?: SortOrder
    by?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type PickSumOrderByAggregateInput = {
    year?: SortOrder
    teamNumber?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DraftCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    drafters?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type DraftMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type SyncCursorCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    etag?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncCursorMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    etag?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncCursorMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    etag?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingYearTeamNumberCompoundUniqueInput = {
    year: number
    teamNumber: number
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    stars?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    year?: SortOrder
    teamNumber?: SortOrder
    stars?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    stars?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    teamNumber?: SortOrder
    stars?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    year?: SortOrder
    teamNumber?: SortOrder
    stars?: SortOrder
  }

  export type TeamEventResultTeamNumberEventKeyCompoundUniqueInput = {
    teamNumber: number
    eventKey: string
  }

  export type TeamEventResultCountOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    eventKey?: SortOrder
    year?: SortOrder
    eventType?: SortOrder
    startDate?: SortOrder
    qualRank?: SortOrder
    numTeams?: SortOrder
    allianceSeed?: SortOrder
    pickRole?: SortOrder
    elimMatchesPlayed?: SortOrder
    elimWins?: SortOrder
    einsteinWins?: SortOrder
    opponents?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamEventResultAvgOrderByAggregateInput = {
    teamNumber?: SortOrder
    year?: SortOrder
    eventType?: SortOrder
    qualRank?: SortOrder
    numTeams?: SortOrder
    allianceSeed?: SortOrder
    elimMatchesPlayed?: SortOrder
    elimWins?: SortOrder
    einsteinWins?: SortOrder
    opponents?: SortOrder
  }

  export type TeamEventResultMaxOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    eventKey?: SortOrder
    year?: SortOrder
    eventType?: SortOrder
    startDate?: SortOrder
    qualRank?: SortOrder
    numTeams?: SortOrder
    allianceSeed?: SortOrder
    pickRole?: SortOrder
    elimMatchesPlayed?: SortOrder
    elimWins?: SortOrder
    einsteinWins?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamEventResultMinOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    eventKey?: SortOrder
    year?: SortOrder
    eventType?: SortOrder
    startDate?: SortOrder
    qualRank?: SortOrder
    numTeams?: SortOrder
    allianceSeed?: SortOrder
    pickRole?: SortOrder
    elimMatchesPlayed?: SortOrder
    elimWins?: SortOrder
    einsteinWins?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamEventResultSumOrderByAggregateInput = {
    teamNumber?: SortOrder
    year?: SortOrder
    eventType?: SortOrder
    qualRank?: SortOrder
    numTeams?: SortOrder
    allianceSeed?: SortOrder
    elimMatchesPlayed?: SortOrder
    elimWins?: SortOrder
    einsteinWins?: SortOrder
    opponents?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type TeamScoreTeamNumberYearCompoundUniqueInput = {
    teamNumber: number
    year: number
  }

  export type TeamScoreCountOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    year?: SortOrder
    stdXrobot?: SortOrder
    stdXawards?: SortOrder
    stdXval?: SortOrder
    regXrobot?: SortOrder
    regXawards?: SortOrder
    regXval?: SortOrder
    dctXrobot?: SortOrder
    dctXawards?: SortOrder
    dctXval?: SortOrder
    fullXrobot?: SortOrder
    fullXawards?: SortOrder
    fullXval?: SortOrder
    diffStd?: SortOrder
    diffReg?: SortOrder
    diffDct?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamScoreAvgOrderByAggregateInput = {
    teamNumber?: SortOrder
    year?: SortOrder
    stdXrobot?: SortOrder
    stdXawards?: SortOrder
    stdXval?: SortOrder
    regXrobot?: SortOrder
    regXawards?: SortOrder
    regXval?: SortOrder
    dctXrobot?: SortOrder
    dctXawards?: SortOrder
    dctXval?: SortOrder
    fullXrobot?: SortOrder
    fullXawards?: SortOrder
    fullXval?: SortOrder
    diffStd?: SortOrder
    diffReg?: SortOrder
    diffDct?: SortOrder
  }

  export type TeamScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    year?: SortOrder
    stdXrobot?: SortOrder
    stdXawards?: SortOrder
    stdXval?: SortOrder
    regXrobot?: SortOrder
    regXawards?: SortOrder
    regXval?: SortOrder
    dctXrobot?: SortOrder
    dctXawards?: SortOrder
    dctXval?: SortOrder
    fullXrobot?: SortOrder
    fullXawards?: SortOrder
    fullXval?: SortOrder
    diffStd?: SortOrder
    diffReg?: SortOrder
    diffDct?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamScoreMinOrderByAggregateInput = {
    id?: SortOrder
    teamNumber?: SortOrder
    year?: SortOrder
    stdXrobot?: SortOrder
    stdXawards?: SortOrder
    stdXval?: SortOrder
    regXrobot?: SortOrder
    regXawards?: SortOrder
    regXval?: SortOrder
    dctXrobot?: SortOrder
    dctXawards?: SortOrder
    dctXval?: SortOrder
    fullXrobot?: SortOrder
    fullXawards?: SortOrder
    fullXval?: SortOrder
    diffStd?: SortOrder
    diffReg?: SortOrder
    diffDct?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamScoreSumOrderByAggregateInput = {
    teamNumber?: SortOrder
    year?: SortOrder
    stdXrobot?: SortOrder
    stdXawards?: SortOrder
    stdXval?: SortOrder
    regXrobot?: SortOrder
    regXawards?: SortOrder
    regXval?: SortOrder
    dctXrobot?: SortOrder
    dctXawards?: SortOrder
    dctXval?: SortOrder
    fullXrobot?: SortOrder
    fullXawards?: SortOrder
    fullXval?: SortOrder
    diffStd?: SortOrder
    diffReg?: SortOrder
    diffDct?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ScoreWeightsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    optRobot?: SortOrder
    optAwards?: SortOrder
    actRobot?: SortOrder
    actAwards?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreWeightsAvgOrderByAggregateInput = {
    optRobot?: SortOrder
    optAwards?: SortOrder
    actRobot?: SortOrder
    actAwards?: SortOrder
  }

  export type ScoreWeightsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreWeightsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreWeightsSumOrderByAggregateInput = {
    optRobot?: SortOrder
    optAwards?: SortOrder
    actRobot?: SortOrder
    actAwards?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpaEntryListCreateEnvelopeInput = {
    set?: EpaEntryCreateInput | EpaEntryCreateInput[]
  }

  export type EpaEntryCreateInput = {
    year: number
    epaUnitless: number
  }

  export type EpaEntryListUpdateEnvelopeInput = {
    set?: EpaEntryCreateInput | EpaEntryCreateInput[]
    push?: EpaEntryCreateInput | EpaEntryCreateInput[]
    updateMany?: EpaEntryUpdateManyInput
    deleteMany?: EpaEntryDeleteManyInput
  }

  export type EventTeamCreateteamNumbersInput = {
    set: number[]
  }

  export type EventTeamUpdateteamNumbersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type DistrictTeamCreateteamNumbersInput = {
    set: number[]
  }

  export type DistrictTeamUpdateteamNumbersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type AvatarEntryListCreateEnvelopeInput = {
    set?: AvatarEntryCreateInput | AvatarEntryCreateInput[]
  }

  export type AvatarEntryCreateInput = {
    year: number
    base64: string
  }

  export type AvatarEntryListUpdateEnvelopeInput = {
    set?: AvatarEntryCreateInput | AvatarEntryCreateInput[]
    push?: AvatarEntryCreateInput | AvatarEntryCreateInput[]
    updateMany?: AvatarEntryUpdateManyInput
    deleteMany?: AvatarEntryDeleteManyInput
  }

  export type AwardEntryListCreateEnvelopeInput = {
    set?: AwardEntryCreateInput | AwardEntryCreateInput[]
  }

  export type AwardEntryCreateInput = {
    eventKey: string
    awardType: number
    name: string
    year: number
  }

  export type AwardEntryListUpdateEnvelopeInput = {
    set?: AwardEntryCreateInput | AwardEntryCreateInput[]
    push?: AwardEntryCreateInput | AwardEntryCreateInput[]
    updateMany?: AwardEntryUpdateManyInput
    deleteMany?: AwardEntryDeleteManyInput
  }

  export type DraftCreatedraftersInput = {
    set: string[]
  }

  export type DraftUpdatedraftersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TeamEventResultCreateopponentsInput = {
    set: number[]
  }

  export type TeamEventResultUpdateopponentsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ScoreWeightsCreateoptRobotInput = {
    set: number[]
  }

  export type ScoreWeightsCreateoptAwardsInput = {
    set: number[]
  }

  export type ScoreWeightsCreateactRobotInput = {
    set: number[]
  }

  export type ScoreWeightsCreateactAwardsInput = {
    set: number[]
  }

  export type ScoreWeightsUpdateoptRobotInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ScoreWeightsUpdateoptAwardsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ScoreWeightsUpdateactRobotInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ScoreWeightsUpdateactAwardsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EpaEntryWhereInput = {
    AND?: EpaEntryWhereInput | EpaEntryWhereInput[]
    OR?: EpaEntryWhereInput[]
    NOT?: EpaEntryWhereInput | EpaEntryWhereInput[]
    year?: IntFilter<"EpaEntry"> | number
    epaUnitless?: FloatFilter<"EpaEntry"> | number
  }

  export type AvatarEntryWhereInput = {
    AND?: AvatarEntryWhereInput | AvatarEntryWhereInput[]
    OR?: AvatarEntryWhereInput[]
    NOT?: AvatarEntryWhereInput | AvatarEntryWhereInput[]
    year?: IntFilter<"AvatarEntry"> | number
    base64?: StringFilter<"AvatarEntry"> | string
  }

  export type AwardEntryWhereInput = {
    AND?: AwardEntryWhereInput | AwardEntryWhereInput[]
    OR?: AwardEntryWhereInput[]
    NOT?: AwardEntryWhereInput | AwardEntryWhereInput[]
    eventKey?: StringFilter<"AwardEntry"> | string
    awardType?: IntFilter<"AwardEntry"> | number
    name?: StringFilter<"AwardEntry"> | string
    year?: IntFilter<"AwardEntry"> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type PostCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type EpaEntryUpdateManyInput = {
    where: EpaEntryWhereInput
    data: EpaEntryUpdateInput
  }

  export type EpaEntryDeleteManyInput = {
    where: EpaEntryWhereInput
  }

  export type AvatarEntryUpdateManyInput = {
    where: AvatarEntryWhereInput
    data: AvatarEntryUpdateInput
  }

  export type AvatarEntryDeleteManyInput = {
    where: AvatarEntryWhereInput
  }

  export type AwardEntryUpdateManyInput = {
    where: AwardEntryWhereInput
    data: AwardEntryUpdateInput
  }

  export type AwardEntryDeleteManyInput = {
    where: AwardEntryWhereInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpaEntryUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    epaUnitless?: FloatFieldUpdateOperationsInput | number
  }

  export type AvatarEntryUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    base64?: StringFieldUpdateOperationsInput | string
  }

  export type AwardEntryUpdateInput = {
    eventKey?: StringFieldUpdateOperationsInput | string
    awardType?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
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