import { Field, Float, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Recipe extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    name: string

    @Field(() => Float)
    @Column('float', {default: 0.00})
    cost: number

    @Field(() => Int)
    @Column('int', {default: 0})
    grams: number
}