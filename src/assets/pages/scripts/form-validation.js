var FormValidation = function () {



    var form_personalinformation_validation = function () {

        var form_personal = $('#personalinformationform');

        form_personal.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: ".ignore",
            rules: {
                txtfirstname_en: {
                    required: true,
                },
                txtmiddlename_en: {
                    required: true,
                },
                txtlastname_en: {
                    required: true,
                },
                txtfirstname_ar: {
                    required: true,
                },
                txtmiddlename_ar: {
                    required: true,
                },
                txtlastname_ar: {
                    required: true,
                },
                txtiqamano: {
                    required: true,
                },
                txtiqamaissuedate: {
                    required: true,
                },
                txtiqamaexpirydate: {
                    required: true,
                },
                txtiqamaplaceissue: {
                    required: true,
                },

                txtcountryofbirth: {
                    required: true,
                },
                txtcityofbirth: {
                    required: true,
                },
                txtpassportno: {
                    required: true,
                },
                txtmaritalstatus: {
                    required: true,
                },
                txtpassportissuedate: {
                    required: true,
                },
                txtpassportexpirydate: {
                    required: true,
                },
                txtpassportplaceissue: {
                    required: true,
                },
                txtgender: {
                    required: true,
                },
                txtreligion: {
                    required: true,
                },
                txtbirthdate: {
                    required: true,
                },
                txtmobileno: {
                    required: true,
                   minlength: 10,
                    maxlength: 10,
                    digits: true
                },
                txtiqamaprofession: {
                    required: true,
                },
                txttitle: {
                    required: true,
                },
                txtlocation: {
                    required: true,
                },
                txtnationality: {
                    required: true,
                },

                
                
               


            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                angular.element(document.getElementById('profileController')).scope().saveEmployeeInformation();
            }

        });




    }

    var form_kininformation_validation = function () {

        var form_kin = $('#kinform');

        form_kin.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input

            rules: {
               
                txtkintitle: {
                    required: true,
                },
                txtkinrelation: {
                    required: true,
                },
                txtkinfirstname_en: {
                    required: true,
                },
                txtkinmiddlename_en: {
                    required: true,
                },
                txtkinsecondname_en: {
                    required: true,
                },
                txtkinlastname_en: {
                    required: true,
                },
                txtkinfirstname_ar: {
                    required: true,
                },
                txkintsecondname_ar: {
                    required: true,
                },
                txtkinsecondname_ar: {
                    required: true,
                },
                txtkinlastname_ar: {
                    required: true,
                },
                txtkingender: {
                    required: true,
                },
                txtkinbirthdate: {
                    required: true,
                },
                txtnationality: {
                    required: true,
                },
                txtkincontact: {
                    required: true,
                },

                txtkincivil: {
                    required: true,
                },
                



            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                angular.element(document.getElementById('profileController')).scope().saveKinInformation();
            }

        });




    }


    var form_dependentinformation_validation = function () {

        var form_dependent = $('#dependentform');

        form_dependent.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: ".ignore",  // validate all fields including form hidden input

            rules: {
                txtdepfirstname_en: {
                    required: true,
                },
                txtdepmiddlename_en: {
                    required: true,
                },
                txtdeplastname_en: {
                    required: true,
                },
                txtdepfirstname_ar: {
                    required: true,
                },
                txtdepmiddlename_ar: {
                    required: true,
                },
                txtdeplastname_ar: {
                    required: true,
                },
                txtdepiqamano: {
                    required: true,
                },

                txtdeprelation: {
                    required: true,
                },
                txtdepgender: {
                    required: true,
                },
                txtdepbirthdate: {
                    required: true,
                },
                txtdepfile: {
                    required: true,
                },
                txtdeptitle: {
                    required: true,
                },
                txtdepotherfile: {
                    required: true,
                },
                
                



            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                angular.element(document.getElementById('profileController')).scope().saveDependentInformation();
            }

        });




    }

    var form_address_validation = function () {

        var form_address = $('#addressform');

        form_address.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input

            rules: {
                txtaddresstype: {
                    required: true,
                },
                txtaddress1: {
                    required: true,
                },
                txtbuildingno: {
                    required: true,
                },
                txtarea: {
                    required: true,
                },
                txtstreetname: {
                    required: true,
                },
                txtpocity: {
                    required: true,
                },
                txtcity: {
                    required: true,
                },
               


            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                angular.element(document.getElementById('profileController')).scope().saveAddresInformation();
            }

        });




    }


    var form_qualification_validation = function () {

        var form_qualification = $('#qualificationform');

        form_qualification.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input

            rules: {
                txtdegree: {
                    required: true,
                },
                txtdegreetitle: {
                    required: true,
                },
                txtinstitute: {
                    required: true,
                },
                txtdategraduate: {
                    required: true,
                },
                txtmajorminor: {
                    required: true,
                },
                txtquafile: {
                    required: true,
                },
                txtquaplaceissue: {
                    required: true,
                },
                




            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                angular.element(document.getElementById('profileController')).scope().saveQualificationInformation();
            }

        });




    }


    var form_experience_validation = function () {

        var form_experience = $('#experienceform');

        form_experience.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: ".ignore",  // validate all fields including form hidden input

            rules: {
                txtexpaddress: {
                    required: true,
                },
                txtexpcountry: {
                    required: true,
                },
                txtexptype: {
                    required: true,
                },
                txtexptitle: {
                    required: true,
                },
                txtempfrom: {
                    required: true,
                },
                txtempto: {
                    required: true,
                },
                txtempcategory: {
                    required: true,
                },
                txtexpfile: {
                    required: true,
                },

                


            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                angular.element(document.getElementById('profileController')).scope().saveExperienceInformation();
            }

        });




    }



    var form_training_validation = function () {
        var form_training = $('#trainingform');
        form_training.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: ".ignore",
            rules: {
                txttraningname: {
                    required: true,
                },
                txttrainingtype: {
                    required: true,
                },
                txttrainingstartdate: {
                    required: true,
                },
                txttrainingenddate: {
                    required: true,
                },
                txttrainingplace: {
                    required: true,
                },
                txttrainingcountry: {
                    required: true,
                },
                txttrainingcity: {
                    required: true,
                },
                txttrainfile: {
                    required: true,
                },
                
               

            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                    angular.element(document.getElementById('profileController')).scope().saveTrainingInformation();
            }

        });




    }

    var form_appreciation_validation = function () {

        var form_appreciation = $('#appreciationform');

        form_appreciation.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: ".ignore",

            rules: {
                txtapptype: {
                    required: true,
                },
                txtappreason: {
                    required: true,
                },
                txtappdate: {
                    required: true,
                },
                txtappgivenby: {
                    required: true,
                },
                txtappfile: {
                    required: true,
                },

                



            },


            highlight: function (element) { // hightlight error inputs


                if ($(element).hasClass('select2')) {
                    $(element).insertAfter($(element).next('span'));
                    $(element).closest('.form-group').addClass('has-error');
                } else if ($(element).hasClass('date')) {

                    //alert($(element).attr('id'));
                    //$(element).insertAfter($(element).next('button'));
                    $(element).insertAfter($(element).next('.input-group'));
                    $(element).closest('.form-group').addClass('has-error');
                } else {
                    $(element).closest('.form-group').addClass('has-error');
                }



            },
            errorPlacement: function (error, element) {
                //error.insertAfter(element);
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                angular.element(document.getElementById('profileController')).scope().saveAppreciationInformation();
            }

        });




    }



    return {
        //main function to initiate the module
        init: function () {
            form_personalinformation_validation();
            form_kininformation_validation();
            form_address_validation();
            form_qualification_validation();
            form_experience_validation();
            form_training_validation();
            form_appreciation_validation();
            form_dependentinformation_validation();

        }

    };

}();

jQuery(document).ready(function () {
    FormValidation.init();
});