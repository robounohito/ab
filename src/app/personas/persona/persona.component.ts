import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { formPatchValue, FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Persona } from '../personas.types';

interface PersonaForm {
  expanded: { [key: string]: boolean };
}

@Component({
  selector: 'ab-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaComponent implements OnInit {

  @Input() persona!: Persona;
  form!: FormGroupT<PersonaForm>;




  toppingsControl = new FormControl(['Extra cheese']);
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = formCreate<PersonaForm>(this.fb, {
      expanded: [{ 1: true }],
    });
  }

  toggleItem(id: string) {
    formPatchValue(this.form, {
      expanded: {
        ...this.form.controls.expanded.value,
        [id]: !this.form.controls.expanded.value[id]
      }
    });
  }





  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.toppingList.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  truncate(arr: string[]) {
    return [...arr, 'whatever'];
  }

  drop() { }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
