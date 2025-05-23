import React from 'react'

const PaymentModal = ({ setIsOpen, isOpen, price }) => {

  // Close modal function
  const closeModal = () => {
    setIsOpen(false);
  };

    // Conditional rendering of the modal
  if (!isOpen) return null;


  const launchRazorPay = () => {
    
    let options = {
      key: "rzp_test_HwPiazHcdwP8M4",
      amount: price * 100,
      currency: "INR",
      name:"Book My Show Clone",
      description : "Movie purchase or rent",

      //Once the function gets trigged I closed the existing pop window and open new popup Window.
      handler: () => {
        setIsOpen(false);
        alert("Payment Successful")
      },
      theme: {color:"#c4242d"},
    };

    let razorPay = window.Razorpay(options);

    razorPay.open();

  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl mb-4">Proceed to Payment</h2>
          <p className="mb-4">Total Amount: ${price}</p>
          {/* Here you can add more payment processing logic */}
          <button
            onClick={launchRazorPay}
            className="bg-red-500 p-3 text-white font-semibold rounded-lg"
          >
            Pay ${price}
          </button>

          <button
            onClick={closeModal}
            className="bg-red-500 p-3 ml-5 text-white font-semibold rounded-lg"
          >
            Cancel Payement
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentModal
