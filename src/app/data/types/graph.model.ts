export class GraphModel {
  constructor (
    public data: GraphData[],

  ) {}
}

export class GraphData {
  constructor(
    public label: string,
    public value: number
  ) {}
}