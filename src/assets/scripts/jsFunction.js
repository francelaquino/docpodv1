

    $(document).ready(function () {


        $("#txtmaritalstatus").select2({
            placeholder: "Marital Status",
        });

        $("#txtcountryofbirth").select2({
            placeholder: "Country of Birth",
        });

        $("#txtkintitle").select2({
            placeholder: "Title",
        });
        $("#txtreligion").select2({
            placeholder: "Religion",
        });
        $("#txtnationality").select2({
            placeholder: "Nationality",
        });

        $("#txtkinrelation").select2({
            placeholder: "Relation",
        });

        $("#txtkingender").select2({
            placeholder: "Gender",
        });

        $("#txtgender").select2({
            placeholder: "Gender",
        });


        
       


                $("#fileupload").change(function () {
            


                    var file = $('#fileupload').get(0).files[0];
                    if (!file) {
                        return;
                    }
                    if ($('#fileupload').val() != "") {
                        var ext = $('#fileupload').val().split('.').pop().toLowerCase();
                        if ($.inArray(ext, ['jpg', 'png', 'bmp','pdf','doc','docx']) == -1) {
                            alert('Invalid file type');
                            return false;
                        }
                    }



                    if (file.size >= 2307206) {
                        alert("Filesize of " + file.size + " is too large. Maximum file size permitted is 2 MB");
                    } else {

                        $(".btnPrepareUpload").prop('disabled', true);
                        var loading = "<p class='loading'>Uploading <img src='../assets/layouts/layout/img/loading.gif' /></p>";



                        var formData = new FormData();
                        formData.append("txtempno", $("#txtdocempno").val());
                        formData.append("txtdoctype", $("#txtdoctype").val());
                        formData.append("file", file);
                        $.ajax({
                            url: '../en/profile/uploaddocument',
                            type: 'POST',
                            data: formData,
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data == "") {
                                    $(".btnPrepareUpload").prop('disabled', false);
                                    angular.element(document.getElementById('profileController')).scope().getDocument();
                                } else {
                                    alert(data);
                                    $(".btnPrepareUpload").prop('disabled', false);
                                }

                            }
                        });
                    }



                });

          
                $("#otherfileupload").change(function () {

                    $(".fileupload").val($('#otherfileupload').val());
                });
        

    });

