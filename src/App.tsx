import CalculateAverage from "./sections/CalculateAverage";
import Modal from "./sections/ModalSection";

function App() {
  return (
    <div className="m-3 flex gap-10">
      <CalculateAverage />
      <Modal />
    </div>
  );
}

export default App;
