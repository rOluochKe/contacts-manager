// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

const { $ } = require('@rails/ujs')

require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('channels')

require('jquery')
require('jquery-ui')
require('jquery-ui/ui/core')
require('jquery-ui/ui/widget')
require('jquery-ui/ui/position')
require('jquery-ui/ui/widgets/autocomplete')
require('jquery-ui/ui/widgets/menu')

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

//= require bootstrap-sprockets
//= require jasny-bootstrap.min

$(document).on('turbolinks:load', function () {
  $('#term').autocomplete({
    source: '/contacts/autocomplete',
    minLength: 3,
    select: function (event, ui) {
      $('#term').val(ui.item.value)
      $(this).closest('form').submit()
    },
  })
})
