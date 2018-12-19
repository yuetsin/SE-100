import App from '../../src/App.vue'
import { shallow } from '@vue/test-utils'


describe('App.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(App);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('md-display-3').textContent)
            .toEqual('Project 3');
        expect(vm.$el.querySelector('md-title').textContent)
            .toEqual('Curricula Querier');
    })
})
