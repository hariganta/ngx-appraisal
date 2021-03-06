import { Component, OnInit } from '@angular/core';
import { YA_PERSONAL_LIST } from './ya-personal.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';


@Component({
  selector: 'mdcps-ya-personal',
  templateUrl: './ya-personal.component.html',
  styleUrls: ['./ya-personal.component.scss']
})
export class YaPersonalComponent implements OnInit {
  /**
   * @public
   */
  public config: any;
  /**
   * @public
   */
  public questions: any[] = [];
  /**
   * @public
   */
  public personalForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();

    this.questions = YA_PERSONAL_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.personalForm = this.fb.group({
      supportInNext6Months: new FormGroup({
        education: new FormControl('', []),
        employment: new FormControl('', []),
        parenting: new FormControl('', []),
        mentalHealth: new FormControl('', []),
        transportation: new FormControl('', []),
        medical: new FormControl('', []),
        other: new FormControl('', []),
        supportInNext6MonthsOther: new FormControl('', [])
      }),
      goalInNext6Months: new FormControl('', []),
      currentChallenges: new FormControl('', []),
      motivationForGoals: new FormControl('', []),
      supportlookslike: new FormControl('', []),
      haveTransportation: new FormControl('', []),
      transportationType: new FormControl('', []),
      transportationBarriers: new FormControl('', []),
      transportationPlan: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Goals and Actions',
      previousBtnLabel: 'Continuing Support/Services'
    };
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/actions');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onPrevious(event: any): void {
    this.util.navigate('/services');
  }
}
