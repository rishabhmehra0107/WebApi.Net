export class Office{
  Id:number;
  Location:string;
  constructor(args:any){
    args=!!args?args:{};
    this.Id=args.id?args.id:0;
    this.Location=args.Location?args.Location:'';
  }
}