import { Test, TestingModule } from '@nestjs/testing';
import { CommonService } from './common-service';

describe('CommonProvider', () => {
  let provider: CommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonService],
    }).compile();

    provider = module.get<CommonService>(CommonService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
