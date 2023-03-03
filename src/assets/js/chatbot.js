// JavaScript source code
$(document).ready(function () {
    //chat icon click
   
        $('.hf-chat-wrapper').click(function () {

            $('#hf-chat').show(function () {
                $message = "Please find the below information";
                $int = 800;
                chatbotstaticMessage($message,$int);
            });
        
            
        
       
        });
        function chatbotstaticMessage($message,$int)
        {

                $('#hf-message-body').html(`<div class="d-flex flex-row justify-content-start mb-4">
                                          <img src="assets/img/ava1.webp"
                                            alt="avatar 1" style="width: 45px; height: 100%;">
                                          <div class="p-3 ms-3" style="border-radius: 15px; background-color: #d0e1fa;">
                                            <p class="small mb-0"><img src='assets/img/loader1.gif' alt='Loading.. \n Please wait' title='Loading.. \n Please wait' width = "100%" height="30px" /></p>
                                          </div>
                                        </div>`);
                setTimeout(
                    function () {
                        $('#hf-message-body').html(`<div class="d-flex flex-row justify-content-start mb-4">
                                          <img src="assets/img/ava1.webp"
                                            alt="avatar 1" style="width: 45px; height: 100%;">
                                          <div class="p-3 ms-3" style="border-radius: 15px; background-color: #d0e1fa;">
                                            <p class="small mb-0">`+$message+`</p>
                                          </div>
                                        </div>`)
                    }, $int);
                setTimeout(
                    function () {
                        $('#hf-message-body').append(`<div class="d-flex flex-row justify-content-start mb-4">
                                              <img src="assets/img/ava1.webp"
                                                alt="avatar 1" style="width: 45px; height: 100%;">
                                              <div class="p-3 ms-3" style="border-radius: 15px; background-color: #d0e1fa;">
                                                <p class="small mb-0"><img src='assets/img/loader1.gif' alt='Loading.. \n Please wait' title='Loading.. \n Please wait' width = "100%" height="30px" /></p>
                                              </div>
                                            </div>`);
                    }, 1600);
                setTimeout(
                    function () {
                        $('#hf-message-body').append(`<div class="d-flex flex-row justify-content-start mb-4">
                                              <img src="assets/img/ava1.webp"
                                                alt="avatar 1" style="width: 45px; height: 100%;">
                                              <div class="p-3 ms-3" style="border-radius: 15px; background-color: #d0e1fa;">
                                                <p class="small mb-0">hello</p>
                                              </div>
                                            </div>`);
                    }, 2200);
            
            
        }
    //chat close
    $('#hf-close-chat').click(function () {
        $('#hf-chat').hide();
    })

    //when chat submit or enter key
    $('#hf-chat-form').submit(function (e) {

        e.preventDefault();
        $value = $('#data').val();
        $msg = ` <div class="d-flex flex-row justify-content-end mb-4">
                                              <div class="p-3 me-3 border style=border-radius: 15px; background-color: #fbfbfb;">
                                                <p class="small mb-0">`+ $value + `</p>
                                              </div>
                                              <img src="assets/img/ava1.webp"
                                                alt="avatar 1" style="width: 45px; height: 100%;">
                                            </div>`;


        $('#hf-message-body').append($msg).delay(400);

        //ajax call send data to server

        $.ajax({
            url: 'message.php',
            type: 'POST',
            data: 'text=' + $value,
            success: function (result) {
                $replay = '<div class="d-flex flex-row justify-content-start mb-4"> <img src="assets/img/ava1.webp" alt="avatar 1" style="width: 45px; height: 100%;"><div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);"><p class="small mb-0">' + result + '</p></div> </div>';
                $('#hf-message-body').append($replay).delay(400).fadeIn();

                //when chat goes down the scroll bar automatically comes to the bottom
                $("#hf-message-body").scrollTop($("#hf-message-body")[0].scrollHeight);
            }
        });

    });

});