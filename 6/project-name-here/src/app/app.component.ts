// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'; // ייבוא נדרש

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'project-name-here';
technicianForm!: FormGroup;
//סיבות הזמנה
reasonOptions=[
  'התקנת מוצר חדש',
    'תקלה בתקופת אחריות החברה',
    'תקלה לאחר תקופת אחריות'
];
constructor(private fb: FormBuilder) {}
// ... בתוך המחלקה AppComponent



ngOnInit(): void{
  this.technicianForm=this.fb.group({

    data:['',Validators.required],
    customerName:['', Validators.required],
    address: ['', Validators.required],
      city: ['', Validators.required],

      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'), // מוודא שזה מספרים בלבד
        Validators.minLength(9), // מינימום 9 או 10 תלוי בקידומת
        Validators.maxLength(10)
      ]],
      reason: ['', Validators.required],
      invoiceNumber: [''],
      description: ['']
      }, { 
      // הוספת ולידטור מותאם אישית ל-FormGroup
      validators: this.conditionalValidation() 
    });
    this.technicianForm.get('reason')?.valueChanges.subscribe(reason => {
      this.updateConditionalValidators(reason);
    });
  }
  updateConditionalValidators(reason: string): void {
    const invoiceControl = this.technicianForm.get('invoiceNumber');
    const descriptionControl = this.technicianForm.get('description');

    if (!invoiceControl || !descriptionControl) return; 
    if (reason === 'התקנת מוצר חדש') {
      invoiceControl.setValidators(Validators.required);
      descriptionControl.clearValidators(); 
    }
    else if (reason.includes('תקלה')) {
      invoiceControl.clearValidators();
      descriptionControl.setValidators(Validators.required);
    } 
    // אחרת: מנקה את הולידציות המותנות
    else {
      invoiceControl.clearValidators();
      descriptionControl.clearValidators();
    }
    invoiceControl.updateValueAndValidity();
    descriptionControl.updateValueAndValidity();
  }
  conditionalValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const reason = control.get('reason')?.value;
      const invoiceNumber = control.get('invoiceNumber')?.value;
      const description = control.get('description')?.value;


if (reason === 'התקנת מוצר חדש' && !invoiceNumber) {
         // אם לא השתמשת ב-setValidators, היית מחזיר כאן שגיאה כללית לטופס
         // return { 'invoiceRequiredForNewProduct': true };
      }
    
      return null;
  
    }
    };
  

  
  onSubmit(): void {
    // בדיקה אם הטופס תקין
    if (this.technicianForm.valid) {
      console.log('טופס תקין. נשלח לשרת:', this.technicianForm.value);
      // כאן תוסיף את הלוגיקה לשליחת הנתונים לשרת
      alert('הזמנתך נשלחה בהצלחה!');
      // this.technicianForm.reset(); // אופציונלי: איפוס הטופס
    } else {
      // סימון כל השדות שנגעו כדי להציג את הודעות השגיאה
      this.technicianForm.markAllAsTouched();
      alert('יש למלא את כל שדות החובה כנדרש.');
    }
  }
}
