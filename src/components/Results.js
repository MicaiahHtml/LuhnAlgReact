export default function Results({ result }) {
  return (
    <h3 style={{ color: "red" }}>
      {result ? "" : "Please enter a valid card number."}
    </h3>
  );
}
