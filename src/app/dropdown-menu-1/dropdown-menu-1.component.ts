import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu-1',
  templateUrl: './dropdown-menu-1.component.html',
  styleUrls: ['./dropdown-menu-1.component.css'],
})
export class DropdownMenu1Component implements OnInit {
  public optGroups: Object[] = [
    {
      name: '4-legged pets',
      data: [
        { value: 'dog', text: 'Dog' },
        { value: 'cat', text: 'Cat' },
        { value: 'hamster', text: 'Hamster' },
      ],
    },
    {
      name: 'Flying pets',
      data: [
        { value: 'parrot', text: 'Parrot' },
        { value: 'macaw', text: 'Macaw' },
        { value: 'albatross', text: 'Albatross' },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
