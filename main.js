$(document).ready(function () {
  setupUI();
  $(".output").hide();
  $("#start").click(startGame);
  $("#checkLock").click(openLock);
  let secretNum = '';

  function startGame() {
    secretNum = Math.floor(Math.random() * 900 + 100).toString();
    $(".output").show();
    $("#start").hide();
    $('input[type="number"]').val("7");
    $('small').html('Red background is low, blue background is high');
  }

  function openLock() {
    const win = 0;

    for (let i = 0; i < $('input[type="number"]').length; i++) {
      console.log(secretNum[i], $('input[type="number"]').eq(i).val());
    }
  }
});

function setupUI() {
  $('input[type="number"]').css({
    width: "100%",
    color: "white",
    fontSize: "3rem",
    border: "1px solid black",
    backgroundColor: "black",
  });
  $(".btn").css({
    backgroundColor: "black",
    color: "white",
    width: "160px",
    fontSize: "1.5rem",
    padding: "15px",
    margin: "25px auto 0px",
    border: "1px solid black",
    textAlign: "center",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  });
  $(".output").css({
    width: "100%",
    maxWidth: "600px",
    padding: "15px",
    backgroundColor: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
  });
  $(".input-container").css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "25px",
  });
  $("small").css({
    display: "block",
    fontSize: "1.2rem",
    color: "white",
    textAlign: "center",
    margin: "0 auto",
  });
  $(".container").css({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
  });
}
