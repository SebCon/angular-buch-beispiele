import { TestBed } from '@angular/core/testing';
import { ServiceTestService } from './service-test.service';

describe('ServiceTestService', () => {
  let service: ServiceTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new ServiceTestService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculate with positve numbers', () => {
    expect(service.calculate(1, 1)).toBe(2);
    expect(service.calculate(10, 1)).toBe(11);
  });

  it('calculate with negative numbers', () => {
    expect(service.calculate(-1, 1)).toBe(0);
    expect(service.calculate(99, -199)).toBe(-100);
  });

  it('calculate with undefined and numbers', () => {
    expect(service.calculate(undefined, 1)).toBe(0);
    expect(service.calculate(18, undefined)).toBe(0);
  });

  it ('should concat empty string with test', () => {
    expect(service.transformText('')).toContain('test');
  });

  it ('should transform number to string and concat with test', () => {
    expect(service.transformText(123)).toContain('test');
  });

  it ('should transform undefined to string and concat with test', () => {
    expect(service.transformText(undefined)).toContain('test');
  });
});
