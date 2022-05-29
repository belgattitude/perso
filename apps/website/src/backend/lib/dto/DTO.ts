type Primitives = string | number | boolean | bigint | null;

type DTOValue = Primitives | Date | { [x: string]: DTOValue } | Array<DTOValue>;

export type IDTO = Record<string, DTOValue>;
