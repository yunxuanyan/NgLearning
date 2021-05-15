import { PHighlightDirective } from "./p-highlight.directive";

describe("PHighlightDirective", () => {
  let fakeEl;

  beforeEach(() => {
    fakeEl = {};
  });
  it("should create an instance", () => {
    const directive = new PHighlightDirective(fakeEl);
    expect(directive).toBeTruthy();
  });
});
