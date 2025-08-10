import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { beforeEach, describe, expect, it } from 'vitest';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.header-title')?.textContent).toBe(
      'Demo for using the ESday-Library in a simple Angular app',
    );
  });

  it('should render initial dates', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#date-now')?.textContent).toMatch(
      /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/,
    );
    expect(compiled.querySelector('#date-then')?.textContent).toBe('??');
  });

  it('should set and reset future date', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttonSet = compiled.querySelector<HTMLButtonElement>('.button-set');
    const buttonReset = compiled.querySelector<HTMLButtonElement>('.button-reset');

    buttonSet?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#date-then')?.textContent).toMatch(
      /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/,
    );

    buttonReset?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#date-then')?.textContent).toBe('??');
  });
});
