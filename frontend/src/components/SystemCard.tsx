type Props = {
  label: string;
  value: string | number;
};

export default function SystemCard({ label, value }: Props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      minWidth: "150px"
    }}>
      <h3>{label}</h3>
      <strong>{value}</strong>
    </div>
  );
}
