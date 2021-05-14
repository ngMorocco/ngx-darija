import { Injector } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import {
    PageSeoData,
    presetsLoader,
    routesSeoData,
    Loader
} from '@ngaox/seo';

export function AppSeoLoader(event: NavigationEnd, injector: Injector): PageSeoData {
    let definitions:routesSeoData = {
        "/": {
            title: "Angular in Darija",
            type: "website",
            description: "Official Angular in Darija landing page containing all video sessions",
            url: "https://ngx-darija.netlify.app/",
            image: "https://avatars.githubusercontent.com/u/15947112?s=200&v=4"
        },
        "/session/*": sessionLoader
    };
    return presetsLoader(event, injector, definitions);
}

let sessionLoader:Loader = (event:NavigationEnd,injector: Injector): PageSeoData => {
    let route: ActivatedRoute = injector.get(ActivatedRoute);
    route = route.firstChild?.firstChild || route.firstChild || route;
    let session = route.snapshot.data['session'];
    if (session) {
        let description = session.description.replace(/(\r\n|\n|\r)/gm, "");
        description = `${ description.substr(0, 160) }${ (description.length > 160) ? '...' : ''}`;
        // sesion Seo Data
        return {
            title: session.title,
            description: description,
            image: session.thumbnailUrl,
            type: "article",
            twitterCard: "summary_large_image",
            url: `https://ngx-darija.netlify.app${ event.urlAfterRedirects.split("?")[0] }`
        };
    }
    return {
        title: "Session Not Found 😕",
    };
}