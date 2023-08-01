// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import 'prismjs/themes/prism.css';
// import Prism from 'prismjs';

// const SyntaxHighlight = () => {
//     const Module = ReactQuill.Quill.import('core/module');
//     class SyntaxHighlighter extends Module {
//       constructor(quill, options) {
//         super(quill, options);
//         this.quill = quill;
//         this.quill.on('text-change', this.highlightSyntax);
//       }
  
//       highlightSyntax = () => {
//         this.quill
//           .getLines(0, this.quill.getLength())
//           .forEach((line, index) => {
//             const { length } = line;
//             const formats = this.quill.getFormat(0, length + 1);
//             const codeBlock = formats['code-block'];
//             if (codeBlock) {
//               Prism.highlightElement(line.children[0]);
//             }
//           });
//       };
//     }
  
//     ReactQuill.Quill.register('modules/syntax', SyntaxHighlighter);
  
//     return null;
//   };

//   export default SyntaxHighlight;