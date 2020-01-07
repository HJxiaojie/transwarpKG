export interface IFirst {
    id?: number;
}

export class First implements IFirst {
    constructor(public id?: number) {}
}
