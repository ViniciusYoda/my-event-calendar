

const mockEvents = [
  { id: 1, title: "Evento 1", location: "Local 1", date: "2023-11-15" },
  { id: 2, title: "Evento 2", location: "Local 2", date: "2023-11-20" },
  { id: 3, title: "Evento 3", location: "Local 3", date: "2023-11-25" },
];

function EventList() {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      <ul>
        {mockEvents.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p><strong>Local:</strong> {event.location}</p>
            <p><strong>Data:</strong> {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
