// Launch Pop-Up Video (still not working)
//$('#videoLink').click(function () {
    var src = '';
    $('#modal-video iframe').attr('src', src);
});
// End Pop-Up Video when modal is closed
//$('#modal-video button.close').on('hidden.bs.modal', function () {
    $('#modal-video iframe').removeAttr('src');
});
