$(function () {
    const validateAnswers = function () {
        let completed = false;

        $('input').each(function () {
            if (!$(this).val()) {
                completed = true;
            }
        });

        $('.custom-select').each(function (i, element) {
            if (!$(this).val()) {
                completed = true;
            }
        });

        return completed;
    }

    const displayModal = function (data) {

        $('#resultName').text(data.name);
        $('#resultImg').attr('src', data.pic);

        // Show the modal with the best match
        $('#modal').modal('toggle');
    }

    const submit = function (event) {
        event.preventDefault();
        if (validateAnswers()) {
            const userData = {
                name: $('#name').val().trim(),
                pic: $('#pic').val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val()
                ]};
            $.post('/api/employees', userData, displayModal);
        } else {
            $('#error')
                .text('You missed a field or question!')
                .addClass('alert');
        }}
    $('#submit').on('click', submit)
})