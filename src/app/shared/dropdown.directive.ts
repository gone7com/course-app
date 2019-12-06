import {Directive, HostListener, HostBinding} from '@angular/core'

@Directive(
            {
            selector:'[dropdowndirective]',
            exportAs:'dropdowndirective'
            }
)


export class dropdownDirective{

        @HostBinding('class.show') isshow = false;

        @HostListener('click') toggleDropDown(){
            this.isshow = !this.isshow;
            console.log(this.isshow);

        }   

}