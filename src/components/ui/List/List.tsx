type TDataList<T> = {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
};

const List = <T,>({ items, renderItems }: TDataList<T>) => {
  return (
    <ul>
      {items.map((item, key) => (
        <li key={key}>{renderItems(item)}</li>
      ))}
    </ul>
  );
};

export default List;
