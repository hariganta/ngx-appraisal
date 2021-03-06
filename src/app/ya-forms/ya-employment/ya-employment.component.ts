import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

 
@Component({
  selector: 'mdcps-ya-employment',
  templateUrl: './ya-employment.component.html',
  styleUrls: ['./ya-employment.component.scss']
})
export class YaEmploymentComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public employmentForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.employmentForm = this.fb.group({
      workDisabled: new FormControl('', []),
      dIsDisabledType: new FormControl('', []),
      dExplainSSA: new FormControl('', []),
      whHasHadJob: new FormControl('', []),
      whHasChildCare: new FormControl('', []),
      whHasFoodServices: new FormControl('', []),
      whHasHealthCare: new FormControl('', []),
      whHasClerical: new FormControl('', []),
      whHasMechanical: new FormControl('', []),
      whHasElectrical: new FormControl('', []),
      whHasSales: new FormControl('', []),
      whHasCustService: new FormControl('', []),
      whHasOther: new FormControl('', []),
      whOtherText: new FormControl('', []),
      ceIsCurrentlyEmployed: new FormControl('', []),
      ceEmployLength: new FormControl('', []),
      ceEmployHealthBenefit: new FormControl('', []),
      ceHourlyPayRate: new FormControl('', []),
      ceOtherHourlyRate: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Social Interests',
      previousBtnLabel: 'Education'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/interests');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/education');
  }
}
