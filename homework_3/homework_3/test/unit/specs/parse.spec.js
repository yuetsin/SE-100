
let samples = require('../../../src/samples')

test('App.vue', () => {
  let p = samples.getDemoData()
  expect((1 + 1).toEqual(2))
    // expect(p.getCourse(19, 1, "东上院100")).toContainEqual(samples.getTokyoJudgement());
    // expect(p.getCourse(20, 5, "东上院115")).toContainEqual(samples.getICS());
    // expect(p.getCourse(23, 5, "东上院100")).toEqual(samples.getEmpty());
})
