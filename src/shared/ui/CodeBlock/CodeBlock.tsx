import "./CodeBlock.css"

interface ICodeBlockProps {
  children: React.ReactNode;
  type?: 'error' | 'success';
}

export const CodeBlock = ({ children, type }: ICodeBlockProps) => {
  return <code className={`code-block code-block-${type}`}>{children}</code>;
};
