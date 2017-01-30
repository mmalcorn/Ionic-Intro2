import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Profile } from '../../app/profile.model';

@Component({
  selector: 'page-profile',
  template: `
            <h1>Create Profile</h1>

          <form [formGroup]="userFormInput" (ngSubmit)="onSubmit(userFormInput.value)">
              <ion-item>
                  <ion-label floating>Name</ion-label>
                  <ion-input type="text" formControlName="name" name="name"></ion-input>
              </ion-item>

              <ion-item>
                  <ion-label floating>E-mail</ion-label>
                  <ion-input type="text" formControlName="email" name="email"></ion-input>
              </ion-item>

                <ion-item>
                    <ion-label floating>Birthday</ion-label>
                    <ion-input type="text" formControlName="birthday" name="birthday"></ion-input>
                </ion-item>

              <button block>
                  <ion-icon name="add"></ion-icon>Create</button>
          </form>

            `
})

export class ProfilePage {
  userFormInput: FormGroup;

  private userData: any;
  constructor(private navCtrl: NavController, public formBuilder: FormBuilder) {
    this.userFormInput = formBuilder.group({
      'name': [ '',
        Validators.compose([Validators.required, Validators.minLength(2)])
        ],
      'email': '',
      'birthday': '',
    })
  }
   onSubmit(returnUserInput) {
    console.log('User data', returnUserInput);

    this.userData = returnUserInput;
  }
}
