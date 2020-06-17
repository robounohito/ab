import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })
export class FileSizePipe implements PipeTransform {
    transform(image: string): string {
        return ((size / 1024) / 1024).toFixed(2);
    }
}
