import React from "react";

export default function Filter({ alleTags, valgteTags, setValgteTags }) {
  function handleTagChange(tag) {
    if (valgteTags.includes(tag)) {
      setValgteTags(valgteTags.filter((t) => t !== tag));
    } else {
      setValgteTags([...valgteTags, tag]);
    }
  }
  const starterTags = ["cocktail", "øl", "alkoholfri", "shots"];

  const sortedTags = [...alleTags].sort((a, b) => {
    function sortValue(tag) {
      if (valgteTags.includes(tag)) return 0;
      if (starterTags.includes(tag)) return 1;
      return 2;
    }
    const diff = sortValue(a) - sortValue(b);
    return diff !== 0 ? diff : a.localeCompare(b);
  });

  return (
    <div className="mb-4">
      <h3 className="font-bold mb-2">Filter med tags</h3>
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        style={{
          WebkitOverflowScrolling: "touch",
          maxWidth: "100%",
        }}
      >
        {sortedTags.map((tag) => {
          const selected = valgteTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagChange(tag)}
              className={`rounded-full py-1 whitespace-nowrap border font-semibold focus:outline-none ${
                selected
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-purple-600 border-purple-600"
              }`}
              style={{ minWidth: 80 }}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
