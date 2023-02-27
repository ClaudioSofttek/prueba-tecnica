import { Pipe, PipeTransform } from '@angular/core'
import { DatePipe } from '@angular/common'; 
@Pipe({ 
    name: 'formatoFecha' 
}) 
export class FormatoFecha extends DatePipe implements PipeTransform { 
    override transform(value: any, args?: any): any { 
        return super.transform(value, " MMMM, y "); 
    } 
}