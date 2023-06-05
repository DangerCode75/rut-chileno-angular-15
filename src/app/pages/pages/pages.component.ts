import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RutService } from 'projects/rut/src/lib/rut.service';

export class Customer {
  firstname!: string;
  rut!: string;
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  formValid!: string;
  form!: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder, private rutService: RutService) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(),
      rut: new FormControl(),
    });

    // FormBuilder example
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      rut: ['', [Validators.required, this.rutService.validaRutForm]], // <- Aqui es donde viene el validador la funcion validaRutForm la cual retorna un null o un objeto { [key: string]: boolean }
    });
  }

  get f() {
    return this.form.controls;
  }

  inputEvent(event: Event) {
    let rut = this.rutService.getRutChileForm(
      1,
      (event.target as HTMLInputElement).value
    );
    if (rut) this.form.controls['rut'].patchValue(rut, { emitEvent: false });
  }

  save() {
    console.log(this.form);
    if (this.form.valid) {
      this.formValid = 'Form valid ';
    }
    console.log(this.form.value);
  }
}
