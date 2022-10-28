import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal/create-post-modal.component';

describe('AppComponent', () => {
  let app;
  let fixture;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatDialogModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: MatDialogRef, useValue: dialogMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should open the CreatePostModalComponent modal on click of Create Post button', () => {
    // arrange and act
    spyOn(app.dialog, 'open').and.callThrough();
    app.openDialog();
    // assert
    expect(app.dialog.open).toHaveBeenCalledWith(CreatePostModalComponent, {
      width: '650px',
      data: {
        title: 'Create a new post',
        primaryButtonLabel: 'Send Post',
        name: 'James Franco'
      }
    });
  });
});
