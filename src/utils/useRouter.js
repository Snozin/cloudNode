import Navigo from 'navigo'

const router = new Navigo('/')

const $ = kendo.jQuery

router.hooks({
  before: async (done, match) => {
    // Reset app container before load any URL
    $('#app').empty()

    done()
  },
})

export { router }
