import DescText from "../presentation/Text/DescText";
import LinkText from "../presentation/Text/LinkText";
import TitleText from "../presentation/Text/TitleText";

const Item = (props) => {
  return (
    <article className="flex flex-col items-center gap-2 bg-slate-100">
      <TitleText {...props} />
      <DescText {...props} />
      <LinkText {...props} />
    </article>
  );
};

export default Item;
