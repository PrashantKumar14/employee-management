import { TestBed } from '@angular/core/testing';
import { HttpClientService } from './http-client.service';
describe('HttpClientService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HttpClientService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-client.service.spec.js.map