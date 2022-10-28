import { Component } from '@angular/core';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal/create-post-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CreatePostModalComponent, {
      width: '650px',
      data: {
        title: 'Create a new post',
        primaryButtonLabel: 'Send Post',
        name: 'James Franco'
      }
    });
  }
}
