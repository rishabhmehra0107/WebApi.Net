export class EmployeeFilter{
  departments:Array<Filter>;
  offices:Array<Filter>;
  jobTitles:Array<Filter>;
  constructor(args:any){
    args=args?args:{};
    this.departments=args.departments?args.departments:[];
    this.offices=args.offices?args.offices:[];
    this.jobTitles=args.jobTitles?args.jobTitles:[];
  }
}
export class Filter{
  value:string;
  count:number;
  constructor(args:any){
    args=args?args:{};
    this.value=args.value;
    this.count=args.count;
  }
}
export class SelectedFilters{
  selectedLeftFilter:string;
  selectedDropdownFilter:string;
  searchedInput:string;
  constructor(args:any){
    args=args?args:{};
    this.selectedLeftFilter=args.selectedLeftFilter?args.selectedLeftFilter:'';
    this.selectedDropdownFilter=args.selectedDropdownFilter?args.selectedDropdownFilter:'';
    this.searchedInput=args.searchedInput?args.searchedInput:'';
  }
};