export class Department{
  Id:number;
  Name:string;
  constructor(args:any){
    args=!!args?args:{};
    this.Id=args.id?args.id:0;
    this.Name=args.Name?args.Name:'';
  }
}