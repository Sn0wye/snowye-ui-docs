import { styled } from "../styles/stitches";

export const Title = styled("h1", {
  textAlign: "center",
  margin: "0 25%",
  marginTop: "50px",
  marginBottom: "30px",
  fontSize: "40px",

  "@media (max-width: 500px)": {
    margin: "50px 0",
  },

  "@media (max-width: 600px)": {
    margin: "50px 5%",
  },
});

export const Highlight = styled("span", {
  background: "linear-gradient(269.99deg, #ed5c66, #f28099)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const Description = styled("p", {
  textAlign: "center",
  fontSize: "20px",
  color: "rgba(255, 255, 255, 0.8)",
});

export const Download = styled("div", {
  marginTop: "50px",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",

  "@media (max-width: 500px)": {
    display: "none",
  },
  "@media (max-width: 600px)": {
    margin: "0 20px",
    flexDirection: "column",
  },
});

export const Code = styled("code", {
  fontFamily: "monospace",
  fontSize: "18px",
  background: "#2e2e33",
  padding: "$5",
  borderRadius: "10px",
});

export const Copy = styled("button", {
  boxShadow: "0px 6px 21px 1px #ed5c662a",
  backgroundClip: "text",
  display: "flex",
  alignItems: "center",
  border: "none",
  padding: "$5 $7",
  background: "linear-gradient(269.99deg, #ed5c66, #f28099)",
  fontSize: "18px",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "0.2s",
  "&:hover": {
    transition: "0.2s",
    opacity: "0.8",
  },
  variants: {
    isClicked: {
      true: {
        background: "linear-gradient(269.99deg, #5CED80, #53D473)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
});

export const Community = styled("div", {
  marginTop: "50px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Stats = styled("div", {
  display: "flex",
  gap: "$6",
  margin: "0 auto",

  "@media (max-width: 1100px)": {
    marginTop: "$3",
    flexDirection: "column",
    gap: "$4",
  },
});

export const Card = styled("div", {
  borderRadius: "$md",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2e2e33",
  width: "200px",
  height: "200px",
  boxShadow: "0px 6px 21px 1px #0000007a",

  strong: {
    fontSize: "42px",
    color: "#f28099",
  },
});
