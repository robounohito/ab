import { Directive, ElementRef, Host, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { MatChipList } from '@angular/material/chips';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[abTagsTruncate]'
})
export class TagsTruncateDirective implements AfterViewInit, OnDestroy {

  chipsChangesSubscription!: Subscription;

  constructor(
    private elementRef: ElementRef,
    @Host() private chipList: MatChipList,
  ) { }

  ngAfterViewInit() {
    setTimeout(() => this.truncate());
    this.chipsChangesSubscription = this.chipList.chips.changes.subscribe(() => this.truncate());
  }

  ngOnDestroy() {
    this.chipsChangesSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.truncate();
  }

  private truncate() {
    if (!this.chipList.chips.length) { return; }
    const wrapperWidth = this.elementRef.nativeElement.firstChild.getBoundingClientRect().width;
    let accumulatedWidth = 0;
    let truncateIndex = 0;
    const overflow = this.elementRef.nativeElement.firstChild.querySelector('.overflow');
    if (overflow) { overflow.parentNode.removeChild(overflow); }
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
          `<mat-chip class="mat-chip mat-focus-indicator mat-primary mat-standard-chip overflow">
            +${chipArr.length - index}
          </mat-chip>`
        );
        const overflowWidth = this.elementRef.nativeElement.firstChild.lastChild.getBoundingClientRect().width;
        if (accumulatedWidth + overflowWidth + margins > wrapperWidth) {
          chipArr[index - 1]._elementRef.nativeElement.style.display = 'none';
          this.elementRef.nativeElement.firstChild.lastChild.textContent = `+${chipArr.length - index + 1}`;
        }
        return chip._elementRef.nativeElement.style.display = 'none';
      }
      accumulatedWidth += chipWidth + margins;
    });
  }

}
