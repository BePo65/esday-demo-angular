import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EsDay, esday } from 'esday';
import advancedFormatPlugin from 'esday/plugins/advancedFormat';

esday.extend(advancedFormatPlugin);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected now: EsDay;

  protected currentDate = signal('??');
  protected futureDate = signal('??');

  constructor() {
    this.now = esday();
    this.currentDate.set(this.now.format('YYYY-MM-DD HH:mm:ss'));
  }

  setFutureDate() {
    const in5Days = this.now.add(5, 'day');
    this.futureDate.set(in5Days.format('YYYY-MM-DD HH:mm:ss'));
  }

  resetFutureDate() {
    this.futureDate.set('??');
  }
}
