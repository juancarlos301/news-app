import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() paramsSelected = new EventEmitter<any>();
  categories = [
    { value: 'general', label: 'General' },
    { value: 'bussiness', label: 'Bussines' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'sports', label: 'Sports' },
  ];

  countries = [
    { value: 'ar', label: 'Argentina' },
    { value: 'mx', label: 'México' },
    { value: 'hu', label: 'Hungria' },
    { value: 'br', label: 'brasil' },
  ];
  categorySelected = 'general';
  countrySelected = 'ar';

  searchNews() {
    const params = {
      category: this.categorySelected,
      country: this.countrySelected,
    };

    this.paramsSelected.emit(params);
  }
}
