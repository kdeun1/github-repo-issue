interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const CommonArticle = ({ children }: Props) => (
  <article className="common-article">
    {children}
  </article>
);

export default CommonArticle;
