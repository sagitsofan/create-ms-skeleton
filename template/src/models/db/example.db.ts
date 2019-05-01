import { Table, Column, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';

import { BaseModel } from '../../../../shared';

@Table({
    tableName: "myTable",
    schema: "mySchema"
})
export class ExampleTable extends BaseModel {
    @AutoIncrement
    @PrimaryKey
    @Column
    ID: string;

    @AllowNull(false)
    @Column
    displayName: string;

    @AllowNull(false)
    @Column
    value: string;

    @AllowNull(true)
    @Column
    description: string;
}