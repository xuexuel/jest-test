import { mount } from '@vue/test-utils'
import Message from '../../src/components/Message.vue';
describe('Message.vue', () => {
  test('should show hello', () => {
    const wrapper = mount(Message, {
      propsData: {
        msg: 'hello',
      }
    });
    expect(wrapper.text()).toBe("hello");
  })

  test.only('should emit click event when clicked', async () => {
    const wrapper = mount(Message, {})
    await wrapper.find("[data-testid='btn1']").trigger("click")
    expect(wrapper.find("span").text()).toBe("1")
  })

})
