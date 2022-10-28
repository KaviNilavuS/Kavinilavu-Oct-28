import { Component, OnInit } from '@angular/core';

export interface Option {
  name: string;
  icon: any;
  description: string;
  value: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public isExpanded = false;
  public selectedOption: any;

  options: Option[] = [
    { icon: 'public', name: 'Public', description: 'Visible to everyone', value: 'public' },
    { icon: 'lock_outline', name: 'Private', description: 'Visible to your followers', value: 'private' }
  ];

  ngOnInit(): void {
    this.selectedOption = this.getSelectedOption('public');
  }

  getSelectedOption(value): object {
    return this.options.filter((option) => option.value === value)[0];
  }

  onOptionSelection(value): void {
    this.selectedOption = this.getSelectedOption(value);
    this.isExpanded = false;
  }

}
