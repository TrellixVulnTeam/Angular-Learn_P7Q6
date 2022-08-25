import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.sass'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.service.getTransferencias();
  }
}
