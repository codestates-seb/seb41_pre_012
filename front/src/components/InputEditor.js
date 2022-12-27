import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";

const InputEditor = ({ content, setContent }) => {
  const editorRef = useRef();


  const handleChangeInput = () => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <div className="edit_wrap">
      <Editor
        initialValue={content}
        height="400px"
        initialEditType="markdown"
        useCommandShortcut={false}
        ref={editorRef}
        onChange={handleChangeInput}
        hideModeSwitch={true}
      />
    </div>
  );
};

export default InputEditor;
