export class MenuData {
  title: string;
  icon?: string;
  routeLink?: string;
  children?: MenuData[];
  open:boolean = false;
}
