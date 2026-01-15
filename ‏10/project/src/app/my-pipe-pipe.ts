
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',      
  standalone: true     
})
export class MyPipePipe implements PipeTransform {

  transform(items: string[], searchText: string): string[] {
    
    if (!items) return [];
    if (!searchText) return items;

    const lowerSearch = searchText.toLowerCase();

    // סינון המערך לפי הטקסט שהוזן
    return items.filter(item => 
      item.toLowerCase().includes(lowerSearch)
    );
  }
}

