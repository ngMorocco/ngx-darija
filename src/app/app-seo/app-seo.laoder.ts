import { NavigationEnd } from '@angular/router';
import {
    PageSeoData,
    presetsLaoder,
    routesSeoData
} from '@ngaox/seo';

export function AppSeoLaoder(event: NavigationEnd): PageSeoData {
    let definitions:routesSeoData = {
        "/": {
            title: "Angular in Darija",
            type: "website",
            description: "Official Angular in Darija landing page containing all video sessions",
            url: "https://ngx-darija.netlify.app/",
            image: "https://avatars.githubusercontent.com/u/15947112?s=200&v=4"
        },
        "/session/*": {
            type: "article",
            url: `https://ngx-darija.netlify.app${ event.urlAfterRedirects.split("?")[0] }`
        }
    };
    return presetsLaoder(event, definitions);
}