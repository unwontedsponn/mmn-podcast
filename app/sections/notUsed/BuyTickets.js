const BuyTickets = () => {
  const ticketOptions = [
    {
      title: "General Admission",
      price: "£25",
      features: [
        "Access to the event",
        "A complimentary drink",
        "Networking opportunities",
        "Meet the speakers",
        "Test on-site featured tech",
        "MMN Lottery ticket",
        "A jolly good evening"
      ],
      buttonLabel: "BUY TICKETS"
    },
    {
      title: "Annual Subscription VIP",
      price: "TBC",
      features: [
        "All year access to events",
        "Access to members only content",
        "Networking opportunities",
        "Participate in speaker suggestions",
        "Tech discounts",
        "2x MMN lottery tickets at events",
        "Part of a like-minded community"
      ],
      buttonLabel: "BUY TICKETS"
    }
  ];

  return (
    <div className="flex justify-center items-center bg-white py-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Buy Tickets</h1>
        <div className="grid grid-cols-2 gap-10">
          {ticketOptions.map((option, index) => (
            <div key={index} className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-3">{option.title}</h2>
              <p className="text-3xl text-red-500 mb-4">{option.price}</p>
              <p className="font-semibold mb-3">{`What's included?`}</p>
              <ul className="mb-6">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-1">
                    <span className="text-green-600 mr-2">✔</span>{feature}
                  </li>
                ))}
              </ul>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                {option.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
