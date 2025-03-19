import "./styles.scss";

const PageHeader = ({ headerText, icon }) => {
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeader;
