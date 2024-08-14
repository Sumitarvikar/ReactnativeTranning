
interface Apptitleinterface {
  name: string;
}

const Apptitle: React.FC<Apptitleinterface> = ({ name}) => {
  return (
      <h1>Welcome to {name} app</h1>
  );
};

export default Apptitle;