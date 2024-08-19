export interface RecipeProps{
    id:string
    title:string
    description:string
    image:string
    instructions:string
    ingredients:{
        name:string
        quantity:number
        unit:string
    }[]
}
