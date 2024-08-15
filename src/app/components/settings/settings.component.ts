import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  password = 'AyamGoreng@123';
  passwordStrength: string = '';
  strengthBarWidth: string = '0%';

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
    const maxWidth = 320; // This should match your CSS max-width
    let barWidth = (strength / 5) * maxWidth;

    // Ensure it does not exceed maxWidth
    if (barWidth > maxWidth) barWidth = maxWidth;

    this.strengthBarWidth = `${barWidth}px`;

    // Set the passwordStrength label
    if (strength === 0) this.passwordStrength = '';
    else if (strength <= 2) this.passwordStrength = 'Weak';
    else if (strength === 3) this.passwordStrength = 'Medium';
    else this.passwordStrength = 'Strong';
  }
}
