import { livrasioninformation } from './dummydata';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed,getTestBed  } from '@angular/core/testing';
import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.inject(ServiceService);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created data', () => {
   const data=livrasioninformation
    service.sendData(data).subscribe(datas => {
    
      expect(datas).toEqual(data);
    });

    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe("POST");
    req.flush(data);
    expect(service).toBeTruthy();
  });
});
