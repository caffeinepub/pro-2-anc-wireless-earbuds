import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  public type Order = {
    id : Text;
    customerName : Text;
    address : Text;
    quantity : Nat;
    amount : Nat;
    timestamp : Time.Time;
    status : Text;
    upiReference : ?Text;
  };

  let orders = Map.empty<Text, Order>();

  public shared ({ caller }) func createOrder(
    id : Text,
    customerName : Text,
    address : Text,
    quantity : Nat,
    amount : Nat,
  ) : async Order {
    let order = {
      id;
      customerName;
      address;
      quantity;
      amount;
      timestamp = Time.now();
      status = "pending_payment";
      upiReference = null;
    };
    orders.add(id, order);
    order;
  };

  public query ({ caller }) func getOrder(id : Text) : async ?Order {
    orders.get(id);
  };

  public shared ({ caller }) func submitUPIReference(orderId : Text, reference : Text) : async () {
    switch (orders.get(orderId)) {
      case (null) { Runtime.trap("Order does not exist") };
      case (?order) {
        let updatedOrder = { order with upiReference = ?reference };
        orders.add(orderId, updatedOrder);
      };
    };
  };

  public query ({ caller }) func listOrders() : async [Order] {
    orders.values().toArray();
  };
};
