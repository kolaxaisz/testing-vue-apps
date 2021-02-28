import Item from '@/components/Item.vue';
import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';

describe('Unit Test :: Item.vue', () => {
  test('sanity test', () => {
    console.log(Item);
  });

  test('renders "item"', () => {
    const Ctor = Vue.extend(Item);
    const vm = new Ctor().$mount();

    expect(vm.$el.textContent).toContain('item');
  });

  test('renders "item" with vue-test-utils', () => {
    const wrapper = mount(Item);

    expect(wrapper.vm.$el.textContent).toContain('item');
  });

  test('renders "item" with vue-test-utils, 2', () => {
    const wrapper = mount(Item);

    expect(wrapper.text()).toContain('item');
  });

  test('renders "item" with shallowMount', () => {
    const wrapper = shallowMount(Item);

    expect(wrapper.text()).toContain('item');
  });

  test('renders item', () => {
    const wrapper = shallowMount(Item);
    expect(wrapper.text()).toContain('item');
  });
});
