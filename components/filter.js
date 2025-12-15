"use client";

import React, { useState } from "react";

export default function Filter({ alleTags, valgteTags, setValgteTags }) {
  const starterTags = ["cocktail", "øl", "alkoholfri", "shots"];
  const [seFilter, setSeFilter] = useState(false);

  function handleTagChange(tag) {
    if (valgteTags.includes(tag)) {
      setValgteTags(valgteTags.filter((t) => t !== tag));
    } else {
      setValgteTags([...valgteTags, tag]);
    }
  }

  const sortedTags = [...alleTags].sort((a, b) => {
    function sortValue(tag) {
      if (valgteTags.includes(tag)) return 0;
      if (starterTags.includes(tag)) return 1;
      return 2;
    }
    const diff = sortValue(a) - sortValue(b);
    return diff !== 0 ? diff : a.localeCompare(b);
  });

  function toggleFilter() {
    if (seFilter) {
      setSeFilter(false);
      console.log("filter skjult");
    } else {
      setSeFilter(true);
      console.log("filter vist");
    }
  }

  return (
    <div className="mb-4">
      <h3
        className="underline text-right mb-3 font-semibold"
        onClick={toggleFilter}
      >
        Filtrer
      </h3>
      {/* Filter indhold */}
      {seFilter && (
        <div className="bg-white text-black p-6 mb-4 rounded-tr-[30px] rounded-bl-[30px]">
          <div className="flex flex-wrap gap-2">
            {sortedTags.map((tag) => {
              const selected = valgteTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagChange(tag)}
                  className={`rounded-tl-[10px] rounded-br-[10px] whitespace-nowrap border-[1.5px] border-black font-medium font-helvetica px-3 py-1 ${
                    selected
                      ? "bg-light-purple text-white border-light-purple"
                      : "bg-transparent text-black"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {sortedTags.map((tag) => {
          const selected = valgteTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagChange(tag)}
              className={`rounded-tl-[10px] rounded-br-[10px] whitespace-nowrap border-[1.5px] border-white font-medium font-helvetica ${
                selected ? "bg-white text-black" : "bg-transparent text-white"
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
