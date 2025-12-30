
import { Component } from '@angular/core';

@Component({
  selector: 'app-annual-summary',
  standalone: true,
  template: `
    <div class="card">
      <h2>📊 סיכום שנתי</h2>
      <ul>
        <li><strong>הכנסות:</strong> ₪500,000</li>
        <li><strong>הוצאות:</strong> ₪200,000</li>
        <li><strong>פרסומות:</strong> ₪50,000</li>
        <li><strong>לקוחות:</strong> 120</li>
        <li><strong>מכירות:</strong> 1,500</li>
      </ul>
    </div>
  `,
  styles: [`.card { padding: 20px; border: 1px solid #ccc; border-radius: 8px; background: #f9f9f9; }`]
})
export class AnnualSummaryComponent {}
