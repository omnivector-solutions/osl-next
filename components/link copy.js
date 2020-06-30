import { useRouter } from "next/router";
import { useTheme } from "@material-ui/core/styles";

function Link({ children, href }) {
  const theme = useTheme();
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: "black",
    borderBottom:
      router.pathname === href
        ? "2px solid " + theme.palette.primary.light
        : null,
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default Link;
