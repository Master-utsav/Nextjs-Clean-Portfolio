import React from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownEditorProps {
  markdown: string;
  setMarkdown: (val: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdown,
  setMarkdown,
}) => {
  return (
    <MDEditor
      value={markdown}
      height={500}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      className="bg-transparent text-black dark:text-white"
      onChange={(value) => setMarkdown(value || "")}
    />
  );
};

export default MarkdownEditor;
