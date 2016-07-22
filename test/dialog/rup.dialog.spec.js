define(['app','rup/dialog'], function() {

  function executeSharedTests(createInstanceFn){


      describe("Construcción de un RUP Dialog", function(){
          var $message, $messageTitleDiv, $messageContentDiv, $messageButtonpaneDiv;

          beforeAll(function(){
              $message = createInstanceFn();

              $messageTitleDiv = jQuery(".ui-dialog-titlebar", $message);
              $messageContentDiv = jQuery(".ui-dialog-content", $message);
              $messageButtonpaneDiv = jQuery(".ui-dialog-buttonpane", $message);

          });

          it("deberia de existir un ui-dialog", function(){
              expect($message).toExist();
          });

          describe("Se ha construido una sección de título correcta", function(){
              it("deberia de existir una sección de título", function(){
                  expect($messageTitleDiv).toExist();
              });

              it("deberia de existir una botón de cerrar", function(){
                  expect($(".ui-dialog .ui-dialog-titlebar button").is(".ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close")).toBe(true);
              });

              it("deberia de existir un texto de cerrar", function(){
                  expect($(".ui-dialog .ui-dialog-titlebar a.ui-dialog-title span")).toExist();
                  expect($(".ui-dialog .ui-dialog-titlebar a.ui-dialog-title span")).toHaveText("rup_global.cerrar");
              });
          });

          describe("Construcción de la botonera", function(){
              it("deberia de existir una sección que contenga los botones", function(){
                  expect($messageButtonpaneDiv).toExist();
              });

              it("deberia de existir al menos el botón de Aceptar", function(){
                  expect($(".ui-dialog-buttonset button span.ui-button-text",$messageButtonpaneDiv)).toHaveText("rup_message.aceptar");
              });
          });


      });

  };

  describe("RUP Dialog Tests", function(){


      describe("Mostrar un mensaje de error", function(){

          function createInstance (){
              $.rup_messages("msgError", {
                   title: "Error",
                   message: "Se ha producido un error."
              });

              return jQuery(".ui-dialog");
          }


          executeSharedTests(createInstance);
          afterAll(function(){
              $(".ui-dialog>.ui-dialog-content").dialog("destroy").remove();
          });

          it("debería de existir un div con el icono de error", function(){
              expect($(".ui-dialog>.ui-dialog-content > div.rup-message_icon-error")).toExist();
          });

      });

      describe("Mostrar un mensaje de alert", function(){

          function createInstance (){
              $.rup_messages("msgAlert", {
                   title: "Alerta",
                   message: "Esto es un mensaje de alerta ."
              });

              return jQuery(".ui-dialog");
          }

          afterAll(function(){
              $(".ui-dialog>.ui-dialog-content").dialog("destroy").remove();
          });

          executeSharedTests(createInstance);

          it("debería de existir un div con el icono de alerta", function(){
              expect($(".ui-dialog>.ui-dialog-content > div.rup-message_icon-alert")).toExist();
          });


      });

      describe("Mostrar un mensaje de Ok", function(){

          function createInstance (){
              $.rup_messages("msgOK", {
                   title: "Correcto",
                   message: "Todo ha ido Ok"
              });

              return jQuery(".ui-dialog");
          }

          afterAll(function(){
              $(".ui-dialog>.ui-dialog-content").dialog("destroy").remove();
          });

          executeSharedTests(createInstance);

          it("debería de existir un div con el icono de Ok", function(){
              expect($(".ui-dialog>.ui-dialog-content > div.rup-message_icon-ok")).toExist();
          });


      });

       describe("Mostrar un mensaje de confirmación", function(){
          var callbacks={
              fncOkFunction: function(){
              alert('asdasd');}
          };

          function createInstance (){
              $.rup_messages("msgConfirm", {
                  message: "¿Está seguro que desea cancelar?",
                  title: "Confirmación",
                  OKFunction : callbacks.fncOkFunction
              });

              return jQuery(".ui-dialog");
          }

          beforeEach(function() {
              spyOn(callbacks, 'fncOkFunction');
          });

          afterAll(function(){
              $(".ui-dialog>.ui-dialog-content").dialog("destroy").remove();
          });

          executeSharedTests(createInstance);

          it("debería de existir un div con el icono de confirmación", function(){
              expect($(".ui-dialog>.ui-dialog-content > div.rup-message_icon-confirm")).toExist();
          });

          it("debería de existir un enlace en la botonera que permia cancelar", function(){
              expect($(".ui-dialog .ui-dialog-buttonset a.rup-enlaceCancelar")).toHaveText("rup_global.cancel");
          });

          it("debería de ejecutarse el callback del botón de aceptar", function(){
              $(".ui-dialog .ui-dialog-buttonset button:visible").click()
              expect(callbacks.fncOkFunction).toHaveBeenCalled();
          });
        });
    });
});
