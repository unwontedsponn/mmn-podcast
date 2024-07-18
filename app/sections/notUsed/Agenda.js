const Agenda = () => {
  // Example data structure for the agenda
  const events = [
    { time: '6:00 pm', description: 'Live Music: Act 1 Opening', type: 'music' },
    { time: '6:30 pm', description: 'Speaker 1', type: 'speaker' },
    { time: '7:30 pm', description: 'Music: Act 2', type: 'music' },
    { time: '8:00 pm', description: 'Speaker 2', type: 'speaker' },
    { time: '9:00 pm', description: 'Tech Collab', type: 'tech' },
    { time: '9:30 pm', description: 'Speaker 3', type: 'speaker' },
    { time: '10:30 pm', description: 'Music: Act 3 Closing', type: 'music' }
  ];

  return (
    <div className="bg-red-950 text-white p-10">
      <h2 className="text-3xl font-bold mb-4">Agenda at a glance</h2>
      <div className="flex flex-col space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-center">
            <div className="w-32">{event.time}</div>
            <div className={`flex-grow border-l-2 pl-4 ${event.type === 'music' ? 'border-red-500' : event.type === 'speaker' ? 'border-white' : 'border-gray-500'}`}>
              <div className={`${event.type === 'music' ? 'text-red-500' : 'text-white'} font-semibold`}>{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
