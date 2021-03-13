import { TestBed } from '@angular/core/testing';

import { YoutubeDataService } from './youtube-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('YoutubeDataService', () => {
  let service: YoutubeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(YoutubeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
