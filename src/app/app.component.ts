import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public datasource: { id: number, parentId: number; expanded: boolean; text: string; hasItems: boolean }[];
  public size = 1000;
  public depth = 3;
  public expanded = false;
  public log = false;

  constructor() { }

  public getData(): void {
    this.datasource = new Array(this.size)
      .fill(0)
      .map((_, i) =>  {
        let parentId = -1;
        const hasItems: boolean = !((i + 1) % this.depth === 0);

        if (i === 0 || i % this.depth === 0) {
          parentId = -1;
        } else {
          parentId = i - 1;
        }

        return ({ id: i, parentId, text: `node-${i}`, expanded: this.expanded, hasItems });
      });

    if (this.log) {
      console.table(this.datasource);
    }
  }
}
