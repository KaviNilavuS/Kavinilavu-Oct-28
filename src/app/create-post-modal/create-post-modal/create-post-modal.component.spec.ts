import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule, By } from '@angular/platform-browser';
import { DropdownComponent } from 'src/app/dropdown/dropdown/dropdown.component';

import { CreatePostModalComponent } from './create-post-modal.component';

xdescribe('CreatePostModalComponent', () => {
  let component: CreatePostModalComponent;
  let fixture: ComponentFixture<CreatePostModalComponent>;
  const matDialogDataStub = {
    title: 'Create a new post',
    primaryButtonLabel: 'Send Post',
    name: 'James Franco'
  };

  const dialogMock = {
    close: () => { }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule
      ],
      declarations: [CreatePostModalComponent, DropdownComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
        { provide: MatDialogRef, useValue: dialogMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog when calling closeModal method', () => {
    // arrange
    spyOn(component.dialogRef, 'close');
    // act
    component.closeModal();
    // assert
    expect(component.dialogRef.close).toHaveBeenCalled();
  });

  it('should remove image when calling removeImage method', () => {
    // act
    component.removeImage();
    // assert
    expect(component.imageUrl).toEqual('');
  });

  it('should remove image when clicking on clear button', () => {
    // arrange
    spyOn(component, 'removeImage');
    // act
    const cancelButton = fixture.debugElement.query(
      By.css('.remove-image-button')
    ).nativeElement;
    cancelButton.click();
    // assert
    expect(component.removeImage).toHaveBeenCalled();
  });
});
