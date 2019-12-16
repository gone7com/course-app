import { Ingredients } from '../shared/Ingredients.model';

export class Recepie{
    public name:string;
    public description:string;
    public imgPath:string;
    public ingredients:Ingredients[];

    constructor(name:string,description:string,imgPath:string,ingredients:Ingredients[]){
        this.name=name;
        this.description=description;
        this.imgPath=imgPath;
        this.ingredients=ingredients;
    }
}