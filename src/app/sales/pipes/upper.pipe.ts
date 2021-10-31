import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform( value:string, isUpper:boolean = true ): string {
    return isUpper ? value.toUpperCase() : value.toLowerCase();
  }



}
