import { useState } from "react";

function AddMovie({ movies, setMovies }) {
  const [form, setForm] = useState({
    title: "",
    director: "",
    hasOscars: false,
    IMDBRating: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMovies([...movies, form]);

    setForm({
      title: "",
      director: "",
      hasOscars: false,
      IMDBRating: 0,
    });
  }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <label>Director: </label>
        <input
          type="text"
          name="director"
          value={form.director}
          onChange={handleChange}
        />

        <label>IMDB Rating: </label>
        <input
          type="number"
          name="IMDBRating"
          value={form.IMDBRating}
          onChange={handleChange}
        />

        <label>Won Oscars: </label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={form.hasOscars}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
