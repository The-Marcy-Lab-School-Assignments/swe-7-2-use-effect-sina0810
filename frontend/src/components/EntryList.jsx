import EntryCard from './EntryCard';

const EntryList = ({ entries }) => {
  return (
    <section>
      <h2>Past Entries</h2>
      <ul className="entry-list">

        {entries.map((entry) => ( 
          <EntryCard
            key={entry.id}
            title={entry.title}
            data={entry.data}
            mood={entry.mood}
            content={entry.content}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default EntryList;
