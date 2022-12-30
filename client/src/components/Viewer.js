import { Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const QuestionViewer = ({ content }) => {
  return (
    <div>
      <Viewer initialValue={content} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
    </div>
  );
};

export default QuestionViewer;
