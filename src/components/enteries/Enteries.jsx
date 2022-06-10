const Enteries = () => {
  return (
    <table className="Enteries">
      <caption>User IP : 127.0.0.1</caption>
      <caption>Root : 127.0.0.2</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Size</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Account">CA5.pdf</td>
          <td data-label="Amount">12kb</td>
          <td data-label="Period">downloaded</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Enteries;
