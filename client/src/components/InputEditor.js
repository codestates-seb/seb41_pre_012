import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import { useRef } from "react";

const InputEditor = ({ content, setContent }) => {
  const editorRef = useRef();

  const handleChangeInput = () => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <div className="edit_wrap">
      <Editor
        initialValue={content || " "}
        height="400px"
        initialEditType="markdown"
        useCommandShortcut={false}
        ref={editorRef}
        onChange={handleChangeInput}
        hideModeSwitch={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </div>
  );
};

export default InputEditor;
