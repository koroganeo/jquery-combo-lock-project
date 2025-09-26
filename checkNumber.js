$(document).ready(function () {
  setupHeaderUI();
  setupNumberUI();
  $('.output').hide();
  $('#start').click(initGame);
  $('#checkNumberBtn').click(checkNumber);
  $('#reset').click(initGame);
  let secretNum = '';

  function initGame() {
    $('#start').hide();
    $('.output').show();
    $('#reset').show();
    $('small').html('Red background is low, blue background is high');
    $('input[type="number"]').css({ backgroundColor: 'black' }).val('7');
    secretNum = Math.floor(Math.random() * 900 + 100).toString();
  }

  function checkNumber() {
    let win = 0;
    for (let i = 0; i < $('input[type="number"]').length; i++) {
      const input = $('input[type="number"]').eq(i);
      if (secretNum[i] < input.val()) {
        input.css({ backgroundColor: 'red' });
      }
      if (secretNum[i] > input.val()) {
        input.css({ backgroundColor: 'blue' });
      }
      if (secretNum[i] === input.val()) {
        input.css({ backgroundColor: 'green' });
        win++;
      }
    }
    if (win === 3) {
      $('small').html("You're correct!");
      $('#start').show();
      $('#reset').hide();
    }
  }
});

function setupHeaderUI() {
  $('#header').css({
    backgroundColor: 'black',
    color: 'white',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBlock: '4px',
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    fontSize: '1.5rem',
    userSelect: 'none',
  });

  $('.navigation').hover(function () {
    $(this).css({ textDecoration: 'underline', cursor: 'pointer' });
  });

  $('.navigation').on('mouseleave', function () {
    $(this).css({ textDecoration: 'none' });
  });

  $('#numberGame').click(function () {
    $('#section-number').show();
    $('#section-color').hide();
  });

  $('#colorGame').click(function () {
    $('#section-color').show();
    $('#section-number').hide();
  });
}

function setupNumberUI() {
  $('h1').css({ textAlign: 'center' });
  $('input[type="number"]').css({
    width: '100%',
    color: 'white',
    fontSize: '3rem',
    border: '1px solid black',
    backgroundColor: 'black',
  });
  $('.btn').css({
    backgroundColor: 'black',
    color: 'white',
    width: '160px',
    fontSize: '1.5rem',
    padding: '15px',
    border: '1px solid black',
    textAlign: 'center',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    userSelect: 'none',
    cursor: 'pointer',
  });
  $('.output').css({
    width: '100%',
    maxWidth: '600px',
    padding: '15px',
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  });
  $('.input-container').css({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
  });
  $('small').css({
    display: 'block',
    fontSize: '1.2rem',
    color: 'white',
    textAlign: 'center',
    margin: '0 auto',
  });
  $('.container').css({
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '25px',
  });
  $('.btn-container').css({
    width: '100%',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  });
}
