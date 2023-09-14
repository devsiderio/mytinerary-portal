import { Link as Anchor } from "react-router-dom";

function BackToCities() {
  return (
    <Anchor
      to="/cities"
      className="fixed bottom-14 right-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 mb-3"
    >
      ↩️ Back to Cities
    </Anchor>
  );
}

export default BackToCities;
