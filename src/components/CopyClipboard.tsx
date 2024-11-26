"use client";

import {useState} from "react";

function CopyClipboard({text}: {text: string}) {
  const [pressed, setPressed] = useState(false);

  const onCopyPress = () => {
    navigator.clipboard.writeText(text);

    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 1000);
  };

  return (
    <button
      className="absolute bottom-[-70px] right-0 inline-flex h-[50px] w-[50px] items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      disabled={pressed}
      type="button"
      onClick={onCopyPress}
    >
      {pressed === false ? (
        <span id="default-icon">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 18 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
          </svg>
        </span>
      ) : (
        <span className="inline-flex items-center" id="success-icon">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 16 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.917 5.724 10.5 15 1.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      )}
    </button>
  );
}

export default CopyClipboard;
