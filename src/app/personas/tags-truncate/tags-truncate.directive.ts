import { Directive, ElementRef, Host, AfterViewInit, HostListener } from '@angular/core';
import { MatChipList } from '@angular/material/chips';

@Directive({
  selector: '[autoboundTagsTruncate]'
})
export class TagsTruncateDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    @Host() private chipList: MatChipList,
  ) { }

  ngAfterViewInit() {
    setTimeout(() => this.truncate());
    this.chipList.chips.changes.subscribe(() => this.truncate());
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.truncate();
  }

  truncate() {
    if (!this.chipList.chips.length) { return; }
    const wrapperWidth = this.elementRef.nativeElement.firstChild.getBoundingClientRect().width;
    let accumulatedWidth = 0;
    let truncateIndex = 0;
    const dotdotdot = this.elementRef.nativeElement.firstChild.querySelector('.dotdotdot');
    if (dotdotdot) { dotdotdot.parentNode.removeChild(dotdotdot); }
    this.chipList.chips.forEach(chip => {
      chip._elementRef.nativeElement.style.display = 'inline-flex';
    });
    const chipArr = this.chipList.chips.toArray();
    const margins = parseInt(getComputedStyle(chipArr[0]._elementRef.nativeElement).marginRight, 10) * 2;
    chipArr.forEach((chip, index) => {
      if (truncateIndex) {
        return chip._elementRef.nativeElement.style.display = 'none';
      }
      const chipWidth = chip._elementRef.nativeElement.getBoundingClientRect().width;
      if (accumulatedWidth + chipWidth + margins > wrapperWidth) {
        truncateIndex = index;
        this.elementRef.nativeElement.firstChild.insertAdjacentHTML(
          'beforeend',
          `<mat-chip class="mat-chip mat-focus-indicator mat-primary mat-standard-chip dotdotdot">
            +${chipArr.length - index}
          </mat-chip>`
        );
        const dotdotdotWidth = this.elementRef.nativeElement.firstChild.lastChild.getBoundingClientRect().width;
        if (accumulatedWidth + dotdotdotWidth + margins > wrapperWidth) {
          chipArr[index - 1]._elementRef.nativeElement.style.display = 'none';
          this.elementRef.nativeElement.firstChild.lastChild.textContent = `+${chipArr.length - index + 1}`;
        }
        return chip._elementRef.nativeElement.style.display = 'none';
      }
      accumulatedWidth += chipWidth + margins;
    });
  }

}
