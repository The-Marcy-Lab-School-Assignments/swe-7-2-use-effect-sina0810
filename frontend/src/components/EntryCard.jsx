import { deleteEntry } from '../fetch-helpers';

const EntryCard = ({ title, data, mood, content }) => {
  const handleDelete = async () => {

  };

  return (
    <li className="entry-card">
      <div className="entry-card-header">
        <span className="entry-card-title">{title}</span>
        <span className="entry-card-mood">{mood}</span>
      </div>
      <p className="entry-card-meta">{data}</p>
      <p className="entry-card-content">{content}</p>
      <div className="entry-card-controls">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default EntryCard;
