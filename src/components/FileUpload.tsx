"use client";

import { ChangeEvent, useCallback, useRef, useState } from "react";

import Label from "@/components/Label";

interface fileUploadProps {
  label?: string;
  prompt?: string;
  onImageChange: (file: File | null) => void;
}

export default function FileUpload(props: fileUploadProps) {
  // Refs
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Hooks
  const [file, setFile] = useState<File | null>(null);

  // Variables
  const { label, prompt, onImageChange } = props;

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFile(file);
        onImageChange(file);
      }
    },
    [onImageChange]
  );

  const clearFile = () => {
    setFile(null);
    onImageChange(null);

    if (fileRef?.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="mb-8">
      {/* Title */}
      <div
        className={`flex flex-row items-center ${
          label ? "justify-between" : "justify-end"
        }`}
      >
        {/* Label */}
        {label ? <Label>{label}</Label> : null}

        {/* Clear file button */}
        {file ? (
          <div
            className="text-xs font-bold text-rose-500 cursor-pointer"
            onClick={clearFile}
          >
            Clear
          </div>
        ) : null}
      </div>

      {/* File upload container */}
      <div
        className="relative outline-dashed outline-2 outline-gray-300 rounded h-40 flex justify-center items-center select-none"
        style={{
          backgroundImage: file ? `url(${URL.createObjectURL(file)})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <input
          ref={fileRef}
          className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {!file ? (
          <p className="text-gray-400">{prompt || "Select Image"}</p>
        ) : null}
      </div>
    </div>
  );
}
