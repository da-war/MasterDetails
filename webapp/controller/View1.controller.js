sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
],
    function (Controller,Filter,FilterOperator,FilterType) {
        "use strict";

        return Controller.extend("com.masterdetail.masterdetails.controller.View1", {
            onListPress: function (oEvent) {
                console.log("hello pressy pressy")
                const orderId=oEvent.getParameter('listItem').getBindingContext().getProperty("OrderID");
                const oFilter= new Filter("OrderID",FilterOperator.EQ,orderId);
                this.getView().byId("orderTable").getBinding("items").filter(oFilter,FilterType.Application);
            },
        });
    });
