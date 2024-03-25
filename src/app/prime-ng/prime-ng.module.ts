import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// import { SidebarModule } from 'primeng/sidebar';

const primeModules = [

]

@NgModule({
    imports: [ButtonModule],
    exports: [ButtonModule],
})
export class PrimeNgModule {}
