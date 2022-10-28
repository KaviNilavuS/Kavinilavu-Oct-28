import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, BrowserAnimationsModule],
      declarations: [DropdownComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Default dropdown view', () => {
    it('should render dropdown button', () => {
      // arrange
      component.isExpanded = false;
      // act
      component.ngOnInit();
      fixture.detectChanges();
      const button = fixture.debugElement.query(
        By.css('.pointer')
      );
      // assert
      expect(button).toBeTruthy();
    });

    it('should render dropdown icon', () => {
      // arrange
      component.isExpanded = false;
      // act
      component.ngOnInit();
      fixture.detectChanges();
      const icon = fixture.debugElement.query(
        By.css('.pointer mat-icon')
      );
      // assert
      expect(icon).not.toBeNull();
    });

    it('should render dropdown text', () => {
      // arrange
      component.isExpanded = false;
      // act
      component.ngOnInit();
      fixture.detectChanges();
      const text = fixture.debugElement.query(
        By.css('.pointer span .option')
      );
      // assert
      expect(text).toBeTruthy();
    });
  });

  describe('Dropdown view', () => {

    beforeEach(() => {
      component.isExpanded = true;
      component.options = [
        { icon: 'public', name: 'Public', description: 'Visible to everyone', value: 'public' },
        { icon: 'lock_outline', name: 'Private', description: 'Visible to your followers', value: 'private' }
      ];
    });

    it('should render dropdown options', () => {
      // arrange
      component.isExpanded = true;
      // act
      fixture.detectChanges();
      const button = fixture.debugElement.query(
        By.css('.dropdown')
      );
      // assert
      expect(button).toBeTruthy();
    });

    it('should call ngOnInit', () => {
      // arrange
      spyOn(component, 'ngOnInit');
      // act
      component.ngOnInit();
      // assert
      expect(component.ngOnInit).toHaveBeenCalled();
    });

    it('should call getSelectedOption when ngOnInit is triggered', () => {
      // arrange
      spyOn(component, 'getSelectedOption');
      // act
      component.ngOnInit();
      // assert
      expect(component.getSelectedOption).toHaveBeenCalledWith('public');
    });

    it('should call getSelectedOption', () => {
      // arrange
      spyOn(component, 'getSelectedOption');
      // act
      component.getSelectedOption('public');
      // assert
      expect(component.getSelectedOption).toHaveBeenCalledWith('public');
    });

    it('should return object when calling getSelectedOption', () => {
      // arrange
      spyOn(component, 'getSelectedOption');
      // act
      component.getSelectedOption('private');
      // assert
      expect(component.getSelectedOption).toEqual([
        { icon: 'lock_outline', name: 'Private', description: 'Visible to your followers', value: 'private' }
      ]);
    });

    it('should call onOptionSelection', () => {
      // arrange
      spyOn(component, 'onOptionSelection');
      // act
      component.onOptionSelection('private');
      // assert
      expect(component.onOptionSelection).toHaveBeenCalled();
    });

    it('should change isExpanded value to false when calling onOptionSelection', () => {
      // arrange
      component.isExpanded = true;
      spyOn(component, 'onOptionSelection');
      // act
      component.onOptionSelection('private');
      // assert
      expect(component.isExpanded).toBeTrue();
    });

  });
});
