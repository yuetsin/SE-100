let samples = require('../../../src/samples');

test('App.vue', () => {
    let p = samples.getDemoData();
    expect(p.checkSuccess()).toBe(true);
    expect(p.checkStamp()).toBe(true);
});
