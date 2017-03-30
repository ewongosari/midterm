
// Launch Pop-Up Video (still not working)
$('#videoLink').click(function () {
    var src = 'https://www.youtube.com/watch?v=M0Jc4sP0BEE;autoplay=1';
    $('#modal-video iframe').attr('src', src);
});
// End Pop-Up Video when modal is closed
$('#modal-video button.close').on('hidden.bs.modal', function () {
    $('#modal-video iframe').removeAttr('src');
});

// Scroll to Top Button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
