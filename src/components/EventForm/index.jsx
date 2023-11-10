import { useState } from "react";

function EventForm() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setLocation("");
    setDate("");
  };

  return (
    <div>
      <h2>Criar Novo Evento</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Localização:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <label>
          Data:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">Criar Evento</button>
      </form>
    </div>
  );
}

export default EventForm;
