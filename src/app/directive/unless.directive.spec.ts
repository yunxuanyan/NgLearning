import { UnlessDirective } from "./unless.directive";

describe("UnlessDirective", () => {
  let fakeEl;
  let fakeContainer;

  beforeEach(() => {
    fakeEl = {};
    fakeContainer = {};
  });
  it("should create an instance", () => {
    const directive = new UnlessDirective(fakeEl, fakeContainer);
    expect(directive).toBeTruthy();
  });
});
