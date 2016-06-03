App.Views = App.Views || {};

App.Views.ComboEnlazadoMultiple = Backbone.View.extend({
    el: '#container',
    departamentoList: [],
    provinciaList: [],
    departamentoProvinciaObj: [],
    mixtoProvinciaList: [],
    mixto2_departamentoList: [],
    mixto2_dptoProvObj: [],
    render: renderComboEnlazadoMultipleView,
    initialize: function(){
        this.departamentoList = ["Ayuntamiento","Diputación","Policía","Bomberos"];
        
        this.provinciaList = ["Álava","Vizcaya","Gipúzcoa"];
        
        this.departamentoProvinciaObj = {
			"Ayuntamiento@@Álava"	:["Ayuntamiento de Álava"],
			"Ayuntamiento@@Vizcaya"	:["Ayuntamiento de Vizcaya"],
			"Ayuntamiento@@Gipúzcoa":["Ayuntamiento de Gipúzcoa"],
			"Diputación@@Álava"		:["Diputación de Álava"],
			"Diputación@@Vizcaya"	:["Diputación de Vizcaya"],
			"Diputación@@Gipúzcoa"	:["Diputación de Gipúzcoa"],
			"Policía@@Álava"		:["Policía de Álava"],
			"Policía@@Vizcaya"		:["Policía de Vizcaya"],
			"Policía@@Gipúzcoa"		:["Policía de Gipúzcoa"],
			"Bomberos@@Álava"		:["Bomberos de Álava"],
			"Bomberos@@Vizcaya"		:["Bomberos de Vizcaya"],
			"Bomberos@@Gipúzcoa"	:["Bomberos de Gipúzcoa"]
		};
        
        this.mixtoProvinciaList = [
			{i18nCaption: "a", value:"1"},
			{i18nCaption: "b", value:"2"},
			{i18nCaption: "g", value:"3"}
		];
        
        this.mixto2_departamentoList = [
			{i18nCaption: "ayto", value:"1"},
			{i18nCaption: "dipu", value:"2"},
			{i18nCaption: "poli", value:"3"},
			{i18nCaption: "bomb", value:"4"}
		];
        
        this.mixto2_dptoProvObj = {
			"1##1":["Ayuntamiento de Álava"],
			"1##2":["Ayuntamiento de Vizcaya"],
			"1##3":["Ayuntamiento de Gipúzcoa"],
			"2##1":["Diputación de Álava"],
			"2##2":["Diputación de Vizcaya"],
			"2##3":["Diputación de Gipúzcoa"],
			"3##1":["Policía de Álava"],
			"3##2":["Policía de Vizcaya"],
			"3##3":["Policía de Gipúzcoa"],
			"4##1":["Bomberos de Álava"],
			"4##2":["Bomberos de Vizcaya"],
			"4##3":["Bomberos de Gipúzcoa"]
		};
    }
});


function renderComboEnlazadoMultipleView(){
    
    
    var template = App.Templates["app/components/combo/comboEnlazadoMultiple.hbs"],
        comboSourceParamObj = {label:"desc"+$.rup_utils.capitalizedLang(), value:"code", style:"css"};
    
    this.$el.html(template({}));
    
   //Feedback
	$("#x21aPilotoPatronesWar_feedback").rup_feedback({block:false});
	
	//LOCAL
	$('#departamento').rup_combo({
		source: this.departamentoList,
		blank:"-1",
		selected:1,
		change : function() { alert("my own change"); }
	});
	$('#provincia').rup_combo({
		source: this.provinciaList,
		change : function() { alert("my own change2"); }
	});
	$('#dptoProv').rup_combo({
		parent: [ "departamento", "provincia" ],
		source: this.departamentoProvinciaObj,
		multiValueToken: "@@"
	});

	//REMOTE
	$('#departamentoRemote').rup_combo({
		source : "comboEnlazadoMultiple/departamentoRemote",
		sourceParam : comboSourceParamObj,
		blank: "-1",
		selected:1
	});
	$('#provinciaRemote').rup_combo({
		source : "comboEnlazadoMultiple/provinciaRemote",
		sourceParam : comboSourceParamObj
	});
	$('#dptoProvRemote').rup_combo({
		parent: [ "departamentoRemote", "provinciaRemote" ],
		source : "comboEnlazadoMultiple/dptoProvRemote",
		sourceParam : comboSourceParamObj
	});
	
	//MIXTO I
	$('#mixto_departamentoRemote').rup_combo({
		source : "comboEnlazadoMultiple/departamentoRemote",
		sourceParam : comboSourceParamObj,
		blank: "-1",
		selected:1
	});
	$('#mixto_provincia').rup_combo({
		//source: ["Álava","Vizcaya","Gipúzcoa"]
		source: this.mixtoProvinciaList
	});
	$('#mixto_dptoProvRemote').rup_combo({
		parent: [ "mixto_departamentoRemote", "mixto_provincia" ],
		source : "comboEnlazadoMultiple/dptoProvRemote",
		sourceParam : comboSourceParamObj
	});
	
	
	//MIXTO II
	$('#mixto2_departamento').rup_combo({
		source: this.mixto2_departamentoList,
		blank: "-1",
		selected:1
	});
	$('#mixto2_provinciaRemote').rup_combo({
		source : "comboEnlazadoMultiple/provinciaRemote",
		sourceParam : comboSourceParamObj
	});
	$('#mixto2_dptoProv').rup_combo({
		parent: [ "mixto2_departamento", "mixto2_provinciaRemote" ],
		source: this.mixto2_dptoProvObj
	});
}





