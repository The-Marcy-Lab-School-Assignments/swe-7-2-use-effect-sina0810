import { createEntry } from '../fetch-helpers';

const MOODS = ['😢', '😠', '😐', '😊', '😂'];

const EntryForm = ({ onEntrySaved }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const entryData = {
      title: form.elements.title.value,
      date: form.elements.date.value,
      mood: form.elements.mood.value,
      content: form.elements.content.value,
    };

    const { data, error } = await createEntry(entryData);

    if (error) {
      console.error ('something went wrong', error);
      return;
    }

    onEntrySaved();
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <h2>New Entry</h2>

      <label htmlFor="title-input">Title</label>
      <input id="title-input" name="title" type="text" required />

      <label htmlFor="date-input">Date</label>
      <input id="date-input" name="date" type="date" required />

      <label htmlFor="mood-select">Mood</label>
      <select id="mood-select" name="mood" required>
        <option value="">-- select --</option>
        {MOODS.map((emoji) => (
          <option key={emoji} value={emoji}>{emoji}</option>
        ))}
      </select>

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" rows={4} />

      <button type="submit">Save Entry</button>
    </form>
  );
};

export default EntryForm;
