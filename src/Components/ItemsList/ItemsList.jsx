import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemsList = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1 className="text-center text-3xl uppercase font-extrabold text-primary">
          dnd
        </h1>
      </div>
    </DndProvider>
  );
};

export default ItemsList;
