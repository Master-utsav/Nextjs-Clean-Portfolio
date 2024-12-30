import React from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownEditorProps {
  markdown: string;
  setMarkdown: (val: string) => void;
  name: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdown,
  setMarkdown,
  name,
}) => {
  return (
    <div>
      <MDEditor
        value={markdown}
        height={500}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        className="bg-transparent text-black dark:text-white"
        onChange={(value) => setMarkdown(value || "")}
      />
      {/* Hidden input field to sync the Markdown content with the form */}
      <input
        type="hidden"
        name={name}
        value={markdown}
        onChange={() => {}}
      />
    </div>
  );
};

export default MarkdownEditor;
