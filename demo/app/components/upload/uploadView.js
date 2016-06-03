App.Views = App.Views || {};

App.Views.Upload = Backbone.View.extend({
    el: '#container',
    render: renderUploadView,
});



function renderUploadView(){
    
    var template = App.Templates["app/components/upload/upload.hbs"];
    this.$el.html(template({}));

   	// Definicion de las pestanas
	$("#uploadTabs").rup_tabs({
		tabs : [ {
			i18nCaption : "upload",
			layer : "#fileupload_only"
		}, {
			i18nCaption : "uploadFormSimple",
			layer : "#fileupload_form"
		}, {
			i18nCaption : "uploadFormMultiple",
			layer : "#fileupload_form_multiple"
		}, {
			i18nCaption : "uploadFormPif",
			layer : "#fileupload_pif_form"
		} 
		]
	});
	
	// Creacion de los componentes feedback
	$("#feedback_fileupload_form").rup_feedback();
	$("#feedback_fileupload_form_multiple").rup_feedback();
	
	
	// Se utiliza jquery.form para realizar el submit de los formularios por AJAX
	$("#usuarioForm").ajaxForm(function(){
		$("#feedback_fileupload_form").rup_feedback("set","Los datos se han enviado correctamente");
	});
	 
	$("#usuarioFormSimple").ajaxForm(function(){
		$("#feedback_fileupload_form_multiple").rup_feedback("set","Los datos se han enviado correctamente");
	});
	
	// Creacion de los diferentes componentes Upload
	

	
	// Upload simple
//	$('#fileupload_only').rup_upload({
//		fileInput: $("#file_only"),
//		maxFileSize: 5000000
//	});
	
	
	$('#fileupload_only').rup_upload({
//		fileInput: $("#file_only"),
		// Uncomment the following to send cross-domain cookies:
		//xhrFields: {withCredentials: true},
		url: '../upload'
		});
	
	$('#fileupload').rup_upload({
//		fileInput: $("#file_only"),
		// Uncomment the following to send cross-domain cookies:
		//xhrFields: {withCredentials: true},
		url: '../upload'
		});
	
	 
	// Upload integrado en formulario
	$('#fileupload_form').rup_upload({
		fileInput: $("#file_form"),
		submitFormButton: $("#sendButton"),
		maxFileSize: 5000000,
		submitInForm:true
	});
	
	// Upload integrado en formulario
	$('#fileupload_pif_form').rup_upload({
		fileInput: $("#file_pif_form"),
		url: "../pifServlet",
		pif:{
			folderPath: "/x21a",
			fileTtl: 60,
			preserveName:true
		}
	});
	

//	// Dos controles Upload intergrados en un mismo formulario
	$('#fileupload_file_form_padre').rup_upload({
		form:"fileupload_form_multiple",
		fileInput: $("#file_form_padre"),
		submitFormButton: $("#sendButtonMultiple"),
		maxFileSize: 5000000,
		singleFileUploads:true,
		submitInForm:true
	});
	 
	$('#fileupload_file_form_madre').rup_upload({
		form:"fileupload_form_multiple",
		fileInput: $("#file_form_madre"),
		submitFormButton: $("#sendButtonMultiple"),
		maxFileSize: 5000000,
		singleFileUploads:true,
		submitInForm:true
	});
}




