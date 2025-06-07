import { Component } from '@angular/core';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { arrowRightIcon } from '@progress/kendo-svg-icons';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import {KENDO_TREEVIEW } from '@progress/kendo-angular-treeview'
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';


@Component({
  selector: 'app-project-tree',
  standalone: true,
  imports: [KENDO_INPUTS, KENDO_ICONS, KENDO_BUTTONS, KENDO_LABELS, KENDO_TREEVIEW, KENDO_TEXTBOX],
  templateUrl: './project-tree.component.html',
  styleUrl: './project-tree.component.scss'
})

export class ProjectTreeComponent {
  count = 100;
  value = "input value";
public arrowRightIcon = arrowRightIcon;

public expandedKeys: any[] = ["0", "1"];

  public checkedKeys: any[] = ["0_1"];

  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        { text: "Occasional Furniture" },
      ],
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" },
      ],
    },
  ];
}
