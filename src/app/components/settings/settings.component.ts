import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  password: string = '';
  newPassword: string = '';
  encryptedPassword: string = '';
  encryptedNewPassword: string = '';
  passwordStrength: string = '';
  strengthBarWidth: string = '0%';
  isShowPassword:boolean = false;

  ngOnInit() {
    this.checkPasswordStrength(this.password);
  }

  checkPasswordStrength(password: string) {
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W_]/.test(password)) strength += 1;

    // Calculate the width in pixels
    let barWidth = (strength / 5)*100;

    this.strengthBarWidth = `${barWidth}%`;

    // Set the passwordStrength label
    if (strength === 0) this.passwordStrength = '';
    else if (strength <= 2) this.passwordStrength = 'Weak';
    else if (strength === 3) this.passwordStrength = 'Medium';
    else this.passwordStrength = 'Strong';
  }

  encryptPassword(password: string){
    if(this.password.length > password.length){
      this.password=this.password.slice(0,-1)
    }
    else if(this.password.length < password.length){
      this.password += password.slice(-1);
    }

    if(!this.isShowPassword){
      this.encryptedPassword = this.createStringBasedOnLength(password, '•')
    }
    else{
      this.encryptedPassword = this.password; 
    }

    this.checkPasswordStrength(this.password);
  }

  encryptNewPassword(password: string){
    if(this.newPassword.length > password.length){
      this.newPassword=this.newPassword.slice(0,-1)
    }
    else if(this.newPassword.length < password.length){
      this.newPassword += password.slice(-1);
    }

    if(!this.isShowPassword){
      this.encryptedNewPassword = this.createStringBasedOnLength(password, '•')
    }
    else{
      this.encryptedNewPassword = this.newPassword; 
    }
  }

  createStringBasedOnLength(originalString: string, char: string): string {
    return char.repeat(originalString.length);
  }

  showPassword(){
    this.encryptPassword(this.password);
    this.encryptNewPassword(this.newPassword);
  }
}
