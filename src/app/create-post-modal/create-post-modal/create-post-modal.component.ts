import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss'],
})
export class CreatePostModalComponent {
  public modalData: any;
  public maxChars = 250;
  public content = '';
  public chars = 0;
  public fileToUpload: any;
  public imageUrl: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CreatePostModalComponent>
  ) {
    this.modalData = data;
  }

  handleFileInput(file: FileList): void {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  removeImage(): void {
    this.imageUrl = '';
  }
}
