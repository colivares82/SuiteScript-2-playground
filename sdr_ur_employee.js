/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 */

define([],
  function () {
    function getFromUtility(param) {
      return param * param
    }

    function myAfterSubmit(context) {
      var number = 2;
      var stringNumber = '4';
      console.log(getFromUtility(number));
      console.log(getFromUtility(parseInt(stringNumber)));
    }

    function myBeforeLoad(context) {
      log.debug('Hello World', + context);
    }

    return {
      afterSubmit: myAfterSubmit,
      beforeLoad: myBeforeLoad
      // This are "Entry Points", what means Hooks (afterSubmit, beforeLoad...), there are several of them
    };
  });

