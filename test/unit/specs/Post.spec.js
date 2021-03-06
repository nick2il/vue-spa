import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  const createComponent = () => {
    const PostConstructor = Vue.extend(Post)

    const comp = new PostConstructor({
      propsData: {
        link: 'http://www.pluralsight.com'
      }
    }).$mount()
    return comp
  }

  it('Shoudld render the link', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralsight.com')
  })

  it('shoud update element\'s href when property link changes', (done) => {
    const comp = createComponent()

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralsight.com')

    comp.link = 'http://fullstackdaily.com'

    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal('http://fullstackdaily.com')
      done()
    })
  })
})
