import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
      <input class="excel__header-input" type="text" value="Новая таблица" />
      <div class="excel__header-buttons">
        <div class="button">
          <i class="material-icons">delete</i>
        </div>
        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
    `;
  }
}