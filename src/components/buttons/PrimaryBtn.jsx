import React from "react";

const PrimaryBtn = (props) => {
    const {action, text, isUpdating} = props;
  return (
    <button
      onClick={action}
      className="py-2 px-10 border border-sky-400 bg-sky-400 text-white rounded-md font-medium uppercase hover:bg-sky-600 transition-all duration-200"
    >
      {isUpdating ? "Update" : "Add"}
    </button>
  );
};

export default PrimaryBtn;
