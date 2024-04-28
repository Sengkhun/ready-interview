"use client";

import Link from "next/link";

import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";

export default function AddBlogPage() {
  // States
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current?.getContent) {
      console.log(editorRef.current.getContent());
    }
  };

  const onTextChange = (setState: any) => (e: any) => {
    setState(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:mb-4 gap-4">
      {/* Left panel */}
      <div className="cols-1 lg:col-span-2 *:mb-8">
        {/* Title */}
        <Input
          label="Title"
          type="text"
          name="title"
          placeholder="Enter blog title here..."
          onChange={onTextChange(setTitle)}
          value={title}
        />

        {/* Link */}
        <Input
          label="Link"
          type="text"
          name="link"
          placeholder="Enter blog link here..."
          onChange={onTextChange(setLink)}
          value={link}
        />

        {/* Content */}
        <div>
          <Label>Content</Label>
          <Editor
            tinymceScriptSrc="/js/tinymce/tinymce.min.js"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
      </div>

      {/* Right panel */}
      <div>
        {/* Image upload */}
        <FileUpload
          label="Featured Image"
          onImageChange={(file: File | null) => {
            setImage(file);
          }}
        />

        {/* Blog Control */}
        <Label>Controls</Label>
        {/* Controls */}
        <div className="border rounded-md px-4 py-2">
          {/* Status */}
          <div className="flex flex-row mb-2">
            <Label className="mr-2">Status:</Label>
            <b>Draft</b>
          </div>

          {/* Publish date */}
          <Input
            label="Publish on:"
            type="text"
            name="date"
            placeholder="DD/MM/YYYY"
            containerClass="mb-4"
            onChange={onTextChange(setDate)}
            value={date}
          />

          <div className="flex flex-row justify-between items-center mb-4">
            <Link href="#" className="block text-rose-600 hover:underline">
              Move to bin
              <FontAwesomeIcon
                className="ml-2 transition-all"
                icon={faTrashCan}
              />
            </Link>

            {/* Save draft button */}
            <Button
              size="sm"
              type="secondary"
              href="#"
              title="Save draft"
              className="block"
            >
              Save Draft
            </Button>
          </div>

          {/* Publish button */}
          <Button
            size="sm"
            type="primary"
            title="Publish"
            className="block"
            onClick={log}
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
