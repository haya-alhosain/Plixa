import "./MainTitle.css";
export default function MainTitle({ title, subtitle }) {
  return (
    <>
      <div className="main-heading">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  );
}
