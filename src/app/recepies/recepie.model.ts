import { Ingredients } from '../shared/Ingredients.model';

export class Recepie{
    public id:number;
    public recepieName:string;
    public recepieDescription:string;
    public imageUrl:string;
    public ingredients:Ingredients[];

    constructor(name:string,description:string,imgPath:string,ingredients:Ingredients[]){
        this.recepieName=name;
        this.recepieDescription=description;
        this.imageUrl=imgPath;
        this.ingredients=ingredients;
    }
}