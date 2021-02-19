import Item from '@/components/Item';
import { shallowMount } from '@vue/test-utils';

describe('Unit Test :: Item.vue', () => {
  test('renders item', () => {
    const wrapper = shallowMount(Item);
    expect(wrapper.text()).toContain('item');
  });
});
