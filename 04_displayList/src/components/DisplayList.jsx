const DisplayList = () => {
  const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];

  return (
    <div>
      {items.map((item, index) => (
        <ul key={index}>{item}</ul>
      ))}
    </div>
  );
};

export default DisplayList;
