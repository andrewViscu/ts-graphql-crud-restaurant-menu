import { Recipe } from "../entity/Recipe";
import { Arg, Mutation, Resolver, Int, Query, InputType, Field, Float } from "type-graphql";

@InputType()
class RecipeInput {
    @Field()
    name: string

    @Field(()=>Float)
    cost: number

    @Field(()=>Int)
    grams: number
}
@InputType()
class RecipeUpdateInput {
    @Field(() => String, { nullable: true})
    name?: string 

    @Field(()=>Float, {nullable: true})
    cost?: number

    @Field(()=>Int, {nullable: true})
    grams?: number
}

@Resolver()
export class RecipeResolver {
    @Mutation(() => Recipe)
    async createRecipe(
        @Arg('options', () => RecipeInput) options: RecipeInput
    ){
        const recipe = await Recipe.create(options).save()
        return recipe;   
    }

    @Mutation(() => Boolean)
    async updateRecipe(
        @Arg('id', () => Int) id: number,
        @Arg("input", () => RecipeUpdateInput) input: RecipeUpdateInput
    ){
        await Recipe.update({id}, input)
        return true
    }

    @Mutation(() => Boolean)
    async deleteRecipe(@Arg('id', () => Int) id: number){
        await Recipe.delete({id})
        return true
    }

    @Query(() => [Recipe])
    recipes(){
        return Recipe.find()
    }
}