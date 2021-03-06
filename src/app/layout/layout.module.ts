import { NgModule } from '@angular/core';
import {BuyButtonComponent} from './buttons/buy-button/buy-button.component';
import {NavButtonComponent} from './buttons/nav-button/nav-button.component';
import {RedirectButtonComponent} from './buttons/redirect-button/redirect-button.component';
import {WelcomeOverlayComponent} from './welcome-overlay/welcome-overlay.component';
import {FooterComponent} from './footer/footer.component';
import {DirectivesModule} from '../directives/directives.module';
import {HeaderComponent} from './header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NewWelcomeOverlayComponent} from './new-welcome-overlay/new-welcome-overlay.component';
import {DescribeOverlayComponent} from './describe-overlay/describe-overlay.component';
import {AboutUsWidgetComponent} from "./about-us-widget/about-us-widget.component";
import {AdvantageWidgetComponent} from "./advantage-widget/advantage-widget.component";
import {ChoiceUsOverlayComponent} from "./choice-us-overlay/choice-us-overlay.component";
import {OurServicesOverlayComponent} from "./our-services-overlay/our-services-overlay.component";
import {ServiceWidgetComponent} from "./service-widget/service-widget.component";
import {CustomerReviewsOverlayComponent} from "./customer-reviews-overlay/customer-reviews-overlay.component";
import {CustomerReviewWidgetComponent} from "./customer-review-widget/customer-review-widget.component";

@NgModule({
    imports: [
        DirectivesModule,
        TranslateModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        WelcomeOverlayComponent,
        FooterComponent,
        HeaderComponent,
        NewWelcomeOverlayComponent,
        DescribeOverlayComponent,
        ChoiceUsOverlayComponent,
        OurServicesOverlayComponent,
        CustomerReviewsOverlayComponent
    ],
    declarations: [
        BuyButtonComponent,
        NavButtonComponent,
        RedirectButtonComponent,
        WelcomeOverlayComponent,
        FooterComponent,
        HeaderComponent,
        NewWelcomeOverlayComponent,
        DescribeOverlayComponent,
        AboutUsWidgetComponent,
        AdvantageWidgetComponent,
        ChoiceUsOverlayComponent,
        OurServicesOverlayComponent,
        ServiceWidgetComponent,
        CustomerReviewsOverlayComponent,
        CustomerReviewWidgetComponent
    ]
})
export class LayoutModule {}
