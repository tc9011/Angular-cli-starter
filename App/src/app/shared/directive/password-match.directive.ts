import {Attribute, Directive, forwardRef} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

export function  validateEqual(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
  return (group: FormGroup): {[key: string]: any} => {
    const password = group.controls[passwordKey];
    const confirmPassword = group.controls[confirmPasswordKey];
    if (password.value !== confirmPassword.value) {
      return { validateEqual: true };
    }
    return null;
  }
}

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>RepeatValidatorDirective),
      multi: true
    }
  ]
})

/*-----------------------------------如何使用------------------------------------------------------------------
 *  <input type="password" name="password" placeholder="密码" [(ngModel)]="user.password" #password="ngModel"
 *  validateEqual="repeat" reverse="true">
 *
 *  <input type="password" name="repeat" placeholder="确认密码" [(ngModel)]="user.repeat" #repeat="ngModel"
 *  validateEqual="password" reverse="false">
 *-----------------------------------如何使用------------------------------------------------------------------
*/

export class RepeatValidatorDirective implements Validator{
  constructor(
    @Attribute('validateEqual') public validateEqual: string,
    @Attribute('reverse') public reverse: string) { }

  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true' ? true: false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // 控件自身值
    const self = c.value;

    // 要对比的值，也就是在validateEqual=“ctrlname”的那个控件的值
    const target = c.root.get(this.validateEqual);

    // 不反向查询且值不相等
    if (target && self !== target.value && !this.isReverse) {
      return {
        validateEqual: true
      }
    }

    // 反向查询且值相等
    if (target && self === target.value && this.isReverse) {
      delete target.errors['validateEqual'];
      if (!Object.keys(target.errors).length) {
        target.setErrors(null);
      }
    }

    // 反向查询且值不等
    if (target && self !== target.value && this.isReverse) {
      target.setErrors({
        validateEqual: true
      })
    }

    return null;
  }

}

