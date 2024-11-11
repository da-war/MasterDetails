sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
    // "sap/ui/model/JSONModel"
],
    function (Controller, Filter, FilterOperator, FilterType, JSONModel) {
        "use strict";

        return Controller.extend("com.masterdetail.masterdetails.controller.View1", {
            onListPress: function (oEvent) {
                const orderId = oEvent.getParameter('listItem').getBindingContext().getProperty("OrderID");
                const oFilter = new Filter("OrderID", FilterOperator.EQ, orderId);
                this.getView().byId("orderTable").getBinding("items").filter(oFilter, FilterType.Application);
            },
            onPressOrderDetail: function (oEvent) {
                const that = this;
                const productId = oEvent.getSource().getBindingContext().getProperty("ProductID");
                const oModel = this.getOwnerComponent().getModel();

                // Read from the OData model and set directly to the view
                oModel.read("/Products(" + productId + ")", {
                    success: function (onData) {
                        // Set a new JSONModel with fetched data and assign it a name (e.g., "productDetail")
                        const productDetailModel = new JSONModel(onData);
                        that.getView().byId("simpleForm-1").setModel(productDetailModel, "productDetail");
                        that.getSplitContObj().to(that.createId("productsDetail"));
                    },
                    error: function (onError) {
                        console.log("Here is the error:", onError);
                    }
                });
            },
            getSplitContObj: function () {
                return this.byId("SplitCont"); // Matches the updated ID in XML
            }
        });
    });
