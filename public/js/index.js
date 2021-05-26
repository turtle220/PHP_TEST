$(document).ready(function () {
  // Activate tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // Select/Deselect checkboxes
  var checkbox = $('table tbody input[type="checkbox"]')
  $('#selectAll').click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true
      })
    } else {
      checkbox.each(function () {
        this.checked = false
      })
    }
  })
  checkbox.click(function () {
    if (!this.checked) {
      $('#selectAll').prop('checked', false)
    }
  })
})
//Dropdown Menu for all countries
const $drowdownArrow = document.querySelector('.fa-angle-down')
const $checkbox = document.getElementById('openDropdown')
const $dropdownMenu = document.querySelector('.dropdown-menu')

$checkbox.addEventListener('change', () => {
  $drowdownArrow.classList.toggle('rotate-dropdown-arrow')
})

$dropdownMenu.addEventListener('click', (e) => {
  $checkbox.checked = false
  // setting checked to false won't trigger 'change'
  // event, manually dispatch an event to rotate
  // dropdown arrow icon
  $checkbox.dispatchEvent(new Event('change'))
})

//Reset Filter
function checkAll(o) {
  var boxes = document.getElementsByTagName('input')
  for (var x = 0; x < boxes.length; x++) {
    var obj = boxes[x]
    if (obj.className == 'check_brand') {
      if (obj.name != 'check') obj.checked = o.checked
    }
  }
}

function collision($div1, $div2) {
  var x1 = $div1.offset().left
  var w1 = 40
  var r1 = x1 + w1
  var x2 = $div2.offset().left
  var w2 = 40
  var r2 = x2 + w2

  if (r1 < x2 || x1 > r2) return false
  return true
}

$('#slider').slider({
  range: true,
  min: 0,
  max: 500,
  values: [75, 300],
  slide: function (event, ui) {
    $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0])
    $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1])
    $('.price-range-both').html(
      '<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]
    )

    if (ui.values[0] == ui.values[1]) {
      $('.price-range-both i').css('display', 'none')
    } else {
      $('.price-range-both i').css('display', 'inline')
    }

    //

    if (collision($('.price-range-min'), $('.price-range-max')) == true) {
      $('.price-range-min, .price-range-max').css('opacity', '0')
      $('.price-range-both').css('display', 'block')
    } else {
      $('.price-range-min, .price-range-max').css('opacity', '1')
      $('.price-range-both').css('display', 'none')
    }
  }
})

$('.ui-slider-range').append(
  '<span class="price-range-both value"><i>$' +
    $('#slider').slider('values', 0) +
    ' - </i>' +
    $('#slider').slider('values', 1) +
    '</span>'
)

$('.ui-slider-handle:eq(0)').append(
  '<span class="price-range-min value">$' +
    $('#slider').slider('values', 0) +
    '</span>'
)

$('.ui-slider-handle:eq(1)').append(
  '<span class="price-range-max value">$' +
    $('#slider').slider('values', 1) +
    '</span>'
)
