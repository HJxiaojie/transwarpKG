export interface ISecond {
    id?: number;
}

export class Second implements ISecond {
    constructor(public id?: number) {}
}
