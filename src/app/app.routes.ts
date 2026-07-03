import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './pages/return-policy/return-policy.component';
import { OurStoresComponent } from './pages/our-stores/our-stores.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terms', component: TermsComponent, title: 'Terms & Conditions | Panchajanya Textiles' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy | Panchajanya Textiles' },
  { path: 'return-policy', component: ReturnPolicyComponent, title: 'Return Policy | Panchajanya Textiles' },
  { path: 'our-stores', component: OurStoresComponent, title: 'Our Stores | Panchajanya Textiles' },
  { path: '**', redirectTo: '' },
];
