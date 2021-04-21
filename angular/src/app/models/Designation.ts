export class Designation{
  Id:number;
  Title:string;
  constructor(args:any){
    args=!!args?args:{};
    this.Id=args.id?args.id:0;
    this.Title=args.Title?args.Title:'';
  }
}