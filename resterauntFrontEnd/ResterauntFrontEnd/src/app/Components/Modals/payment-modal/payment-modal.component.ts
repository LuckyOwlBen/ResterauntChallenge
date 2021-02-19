import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CardData } from '../../../Objects/CardData';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<PaymentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardData,
  ) { }
  
  private isValid: boolean;

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  validation(): boolean {
    if(
      this.data.cardNumber != null && 
      this.data.securityCode != null && 
      this.data.expDate != null && 
      this.data.nameOnCard != null &&
      this.data.address != null
    ) {
      this.isValid = true;
    }else{
      this.isValid = false;
    }
    return this.isValid;
  }

  submit() {
    this.dialogRef.close(this.data);
  }
}
