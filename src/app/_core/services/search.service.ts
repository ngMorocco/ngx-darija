import { createBrowserLocalStorageCache } from '@algolia/cache-browser-local-storage';
import { createFallbackableCache } from '@algolia/cache-common';
import { createInMemoryCache } from '@algolia/cache-in-memory';
import { SearchOptions, SearchResponse } from '@algolia/client-search';
import { Injectable } from '@angular/core';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';

const staticSearchOptions: SearchOptions = Object.freeze({
    attributesToSnippet: ['description:200'],
    snippetEllipsisText: '…',
    removeWordsIfNoResults: 'allOptional',
});

const version = 1

@Injectable({ providedIn: 'root' })
export class SearchService {

    /**
     * @description Connection to Algolia which caches requests and responses
     * in localStorage when available, and in memory otherwise.
     * @see https://tinyurl.com/2hfxbq3a
     */
    private readonly client: SearchClient = algoliasearch(
        environment.algolia.appId,
        environment.algolia.apiKey,
        {
            responsesCache: createInMemoryCache(),
            requestsCache: createInMemoryCache({ serializable: false }),
            hostsCache: createFallbackableCache({
                caches: [
                    createBrowserLocalStorageCache({
                        key: `${version}-${environment.algolia.appId}`,
                    }),
                    createInMemoryCache(),
                ],
            }),
        }
    );

    private readonly index: SearchIndex = this.client.initIndex(environment.algolia.indexName);

    search<A>(
        text: string,
        options: SearchOptions = {}
    ): Promise<SearchResponse<A>> {
        const finalOptions = { ...staticSearchOptions, ...options };
        return this.index.search<A>(text, finalOptions);
    }
}