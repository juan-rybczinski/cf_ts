/**
 * 추론한다
 *
 * (Inferring Type in Conditional Type)
 *
 * Infer Keyword는 Conditional Type에서만 사용 가능한 키워드다.
 * 그러니 extends 키워드를 사용했을때 extend 한 대상에서 타입을 한번 더 추론하는 역할을 한다.
 */

type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type StringArray = Flatten<string>;
type NumberArray = Flatten<number>;

type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType[][] : Type;
type TwoDArray = Flatten2<boolean[][]>;

type InferReturnType<Type>  = Type extends (...args: any[]) => infer ReturnType ? ReturnType : Type;
type StringFunc = InferReturnType<() => string>;
type NumberFunc = InferReturnType<() => number>;