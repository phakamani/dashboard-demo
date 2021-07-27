import {Option} from './option.model';


export class DropDownModel {
  constructor(
    public name: string,
    public label: string,
    public options: Option[],
    public formStatus?: any) {
  }
}
