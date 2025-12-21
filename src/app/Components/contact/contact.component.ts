import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SocialMedia } from '../../Shared/models/model';
import {
  SOCIAL_LINKS,
  EMAIL_ID,
  PHONE_NUMBER,
} from '../../Shared/utilities/data';
import { CommonService } from '../../Services/common.service';
import { PageHeroComponent } from '../../Shared/components/page-hero/page-hero.component';
import { base64ToUnicode } from '../../Shared/utilities/utils';

@Component({
  selector: 'app-contact',
  imports: [PageHeroComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  title = 'Contact Us';
  description = `We'd love to hear from you! Whether you have questions about our services,
                need assistance planning your event, or want to discuss your vision in detail, our team is here to help.
                Reach out to us through the contact form below or give us a call.`;
  a = `Let's make your event unforgettable together!`;

  Referrals: string[] = [
    'Our Website',
    'Former Client',
    'Social Media',
    'From a Friend',
    'Other',
  ];
  Services: string[] = [
    'ByeBerry Weddings',
    'SG Live Media',
    'SG Events',
    'SG Melodies',
    'SG Pro Audios',
  ];
  socialMedia: SocialMedia[] = SOCIAL_LINKS;

  contactForm!: FormGroup;
  messageValueChange!: Subscription | undefined;
  messageLength = signal<number>(0);
  messageMaxLength: number = 250;
  service$!: Observable<string>;
  emailId = EMAIL_ID;
  phone = PHONE_NUMBER;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: CommonService
  ) {}

  ngOnDestroy(): void {
    this.messageValueChange?.unsubscribe();
  }
  ngOnInit(): void {
    this.initilizeForm();
    this.getQueryParams();
  }

  initilizeForm() {
    this.contactForm = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
        ],
      ],
      PhoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
      Referral: ['Our Website', [Validators.required]],
      Service: ['ByeBerry Weddings', [Validators.required]],
      Message: [
        '',
        [Validators.required, Validators.maxLength(this.messageMaxLength)],
      ],
    });
    this.messageValueChange = this.contactForm
      ?.get('Message')
      ?.valueChanges.subscribe((value) => {
        this.messageLength.set(value.length);
      });
  }

  getQueryParams() {
    this.service$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params.get('service') ?? '')
    );
    let queryParam = 'ByeBerry Weddings';
    this.service$.subscribe((param) => (queryParam = param));
    if (queryParam) {
      let serviceDecoded = base64ToUnicode(queryParam);
      this.contactForm?.get('Service')?.setValue(serviceDecoded);
    }
  }

  get contactFormControls() {
    return this.contactForm.controls;
  }

  contactFormSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    let messageTxt: string;
    if (this.contactForm.valid) {
      this.contactForm.disable(); // disable the form if it's valid to disable multiple submissions
      const formData = new FormData();
      formData.append('FirstName', this.contactForm.get('FirstName')?.value);
      formData.append('LastName', this.contactForm.get('LastName')?.value);
      formData.append('Email', this.contactForm.get('Email')?.value);
      formData.append(
        'PhoneNumber',
        this.contactForm.get('PhoneNumber')?.value
      );
      formData.append('Referral', this.contactForm.get('Referral')?.value);
      formData.append('Service', this.contactForm.get('Service')?.value);
      formData.append('Message', this.contactForm.get('Message')?.value);

      this.service.submitForm(formData).subscribe({
        next: (response: any) => {
          if (response.result === 'success') {
            messageTxt = "Thanks for the message! We'll get back to you soon!";
            // this.openSnackBar(messageTxt, this.alertTypes.SUCCESS);
            this.contactForm.reset();
          } else {
            messageTxt = 'Oops! Something went wrong... Try again later.';
            // this.openSnackBar(messageTxt, this.alertTypes.ERROR);
          }
          this.contactForm.enable(); // re-enable the form after a success
          console.log(response);
        },
        error: (error) => {
          messageTxt = 'Oops! An error occurred... Try again later.';
          // this.openSnackBar(messageTxt, this.alertTypes.ERROR);
          this.contactForm.enable(); // re-enable the form after a success
          console.log(error);
        },
      });
    }
  }
}
