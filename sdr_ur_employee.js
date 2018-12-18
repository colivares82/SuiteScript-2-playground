/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 */

define([],
  function () {
    function getFromUtility(param) {
    }

    function myAfterSubmit(context) {
    }

    function myBeforeLoad(context) {
    }

    return {
      afterSubmit: myAfterSubmit,
      beforeLoad: myBeforeLoad
      // This are "Entry Points", what means Hooks (afterSubmit, beforeLoad...), there are several of them
    };
  });

