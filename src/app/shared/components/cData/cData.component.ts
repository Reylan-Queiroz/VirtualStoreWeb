import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CurrentOperation } from '../../enums/currentOperation.enum';
import { BtnCData } from '../../models/btn-cData.model';

@Component({
   selector: 'app-cData',
   templateUrl: './cData.component.html',
   styleUrls: ['./cData.component.scss']
})
export class CDataComponent implements OnInit, OnChanges {
   private currentOperation: CurrentOperation = CurrentOperation.Undefined;
   buttons: BtnCData[] = [];

   @Input() item: any;
   @Output() disableOutEvent = new EventEmitter();
   @Output() newItemEvent = new EventEmitter();

   private btnInclusion = new BtnCData(1, "Novo", false, "fas fa-plus", "");
   private btnFetch = new BtnCData(2, "Localizar", false, "fas fa-search", "");
   private btnAlteration = new BtnCData(3, "Alterar", true, "fas fa-pencil-alt", "");
   private btnExclusion = new BtnCData(4, "Excluir", true, "far fa-trash-alt", "");
   private btnOut = new BtnCData(5, "Sair", false, "fas fa-sign-out-alt", "");

   constructor() {
      this.buttons.push(this.btnInclusion, this.btnFetch, this.btnAlteration, this.btnExclusion, this.btnOut);
   }

   ngOnInit() {
      this.setOperation(this.currentOperation);
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes.item.currentValue != undefined) {
         this.currentOperation = CurrentOperation.ItemFound;
         this.setOperation(this.currentOperation);
      } else {
         this.item = CurrentOperation.Undefined;
         this.setOperation(this.currentOperation);
      }
   }

   private async changeBtnAtributes() {
      let btnFetch = document.getElementById("button_Localizar");
      let btnRecord = document.getElementById("button_Gravar");

      if (btnFetch != null) {
         btnFetch.setAttribute("data-bs-target", "#exampleModal");
         btnFetch.setAttribute("data-bs-toggle", "modal");
      }

      if (btnRecord != null) {
         btnRecord.removeAttribute("data-bs-target");
         btnRecord.removeAttribute("data-bs-toggle");
      }
   }

   private setOperation(currentOperation: CurrentOperation) {
      switch (currentOperation) {
         case CurrentOperation.Undefined:
            this.btnInclusion.hidden = false;
            this.btnInclusion.name = "Novo";
            this.btnInclusion.icon = "fas fa-plus";
            this.btnInclusion.methodName = "methodInclusion";

            this.btnFetch.hidden = false;
            this.btnFetch.name = "Localizar";
            this.btnFetch.icon = "fas fa-search";

            this.btnAlteration.hidden = true;
            this.btnExclusion.hidden = true;

            this.changeBtnAtributes();
            break;

         case CurrentOperation.Inclusion:
            this.btnInclusion.hidden = false;
            this.btnInclusion.name = "Cancelar";
            this.btnInclusion.icon = "fas fa-ban";
            this.btnInclusion.methodName = "methodCancelInclusion";

            this.btnFetch.hidden = false;
            this.btnFetch.name = "Gravar";
            this.btnFetch.icon = "fas fa-check"

            this.btnAlteration.hidden = true;
            this.btnExclusion.hidden = true;

            this.changeBtnAtributes();
            break;

         case CurrentOperation.Alteration:
            this.btnInclusion.hidden = false;
            this.btnInclusion.name = "Cancelar";
            this.btnInclusion.icon = "fas fa-ban";
            this.btnInclusion.methodName = "methodCancelAlteration";

            this.btnFetch.hidden = false;
            this.btnFetch.name = "Gravar";
            this.btnFetch.icon = "fas fa-check"

            this.btnAlteration.hidden = true;

            this.btnExclusion.hidden = true;

            this.changeBtnAtributes();
            break;

         case CurrentOperation.ItemFound:
            this.btnAlteration.hidden = false;
            this.btnAlteration.methodName = "methodAlteration";

            this.btnExclusion.hidden = false;

            this.changeBtnAtributes();
            break;

         case CurrentOperation.CancelAlteration:
            this.btnInclusion.hidden = false;
            this.btnInclusion.name = "Novo";
            this.btnInclusion.icon = "fas fa-plus";
            this.btnInclusion.methodName = "methodInclusion";

            this.btnFetch.hidden = false;
            this.btnFetch.name = "Localizar";
            this.btnFetch.icon = "fas fa-search"

            this.btnAlteration.hidden = false;
            this.btnExclusion.hidden = false;

            this.changeBtnAtributes();
            break;
      }
   }

   public async methodInclusion() {
      this.setOperation(CurrentOperation.Inclusion);
      this.disableForm(false);
      this.newItem(true);

      // await Utils.awaitTime(100);
      // Utils.clickButton("btn_1");

      // await Utils.awaitTime(200);
      // Utils.autoFocus("codBarrasId");
   }

   public methodCancelInclusion() {
      this.setOperation(CurrentOperation.Undefined);
      this.disableForm(true);
      this.newItem(false);
   }

   public methodUndefined() {
      this.setOperation(CurrentOperation.Undefined);
   }

   public methodAlteration() {
      this.setOperation(CurrentOperation.Alteration);
      this.disableForm(false);
   }

   public methodCancelAlteration() {
      this.setOperation(CurrentOperation.CancelAlteration);
      this.disableForm(true);
   }

   private disableForm(value: any) {
      this.newItemEvent.emit(value);
   }

   private newItem(value: any) {
      this.newItemEvent.emit(value);
   }
}
