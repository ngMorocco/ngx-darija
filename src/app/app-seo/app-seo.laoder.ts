import { Injector } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import {
    PageSeoData,
    presetsLaoder,
    routesSeoData
} from '@ngaox/seo';

export function AppSeoLaoder(event: NavigationEnd, injector: Injector): PageSeoData {
    let definitions:routesSeoData = {
        "/": {
            title: "Angular in Darija",
            type: "website",
            description: "Official Angular in Darija landing page containing all video sessions",
            url: "https://ngx-darija.netlify.app/",
            image: "https://avatars.githubusercontent.com/u/15947112?s=200&v=4"
        },
        "/session/*": sessionLaoder(event,injector)
    };
    return presetsLaoder(event, definitions);
}

function sessionLaoder(event:NavigationEnd,injector: Injector): PageSeoData {
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
            url: `https://ngx-darija.netlify.app${ event.urlAfterRedirects.split("?")[0] }`
        };
    }
    return {
        title: "Session Not Found 😕",
    };
}