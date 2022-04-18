export interface SearchQuery<TExecuteParams, TExecuteReturn> {
  readonly queryName: string;
  execute(params: TExecuteParams): Promise<TExecuteReturn>;
}
