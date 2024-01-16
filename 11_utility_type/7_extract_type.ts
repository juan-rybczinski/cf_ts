type StringOnly = Extract<string | boolean | number, string>;
type FunctionOnly = Extract<string | (() => boolean), Function>;