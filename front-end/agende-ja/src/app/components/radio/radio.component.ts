import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [RadioButtonModule, CommonModule, FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent {
  categories = [
    { key: 1, name: 'Mão' },
    { key: 2, name: 'Pé' },
    { key: 3, name: 'Mão e Pé' },
    { key: 4, name: 'Outro' }

  ];
  selectedCategory: any;
  selectedRadioButton: string = '';

  constructor() { }


  selectCategory(category: string) {
    this.selectedCategory = category; // Define a categoria selecionada
  }

  isSelected(category: string): boolean {
    return this.selectedCategory === category; // Verifica se a categoria está selecionada
  }
}

