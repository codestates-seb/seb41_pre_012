import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";

const InputEditor = () => {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    console.log(data);
  };

  return (
    <div className="edit_wrap">
      <Editor
        initialValue=" "
        height="400px"
        initialEditType="markdown"
        useCommandShortcut={false}
        ref={editorRef}
        onChange={onChange}
      />
    </div>
  );
};

export default InputEditor;
