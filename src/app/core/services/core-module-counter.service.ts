import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreModuleCounterService {
  private importCount = 0;

  incrementImportCount(): void {
    this.importCount++;
  }

  getImportCount(): boolean {
    return this.importCount > 2;
  }
}
