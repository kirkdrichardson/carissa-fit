module.exports = {
  headerHeight: '60px',
  font: {
    header: "font-family: 'Rubik', sans-serif",
    primary: "font-family: 'Roboto', sans-serif"
  },
  cssSnippets: {
    flexRow: 'display: flex; flex-direction: row wrap; justify-content: center; align-items: center;',
    flexColumn: 'display: flex; flex-flow: column wrap; justify-content: center; align-items: center;'
  },
  input: `height: 50px;
          border-radius: 6px;
          font-size: 18px;
          padding-left: 14px;
          border: 1px solid gray;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          color: #222;
          ::placeholder {
            opacity: 0.5;
          }
  `,
  btn: `display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        box-sizing: border-box;
        padding: 6px;
        border-radius: 6px;
        font-size: 18px;
        font-weight: bold;
  `,
  btnPrimary: `color: #fafafa;
               background-color: #5f0f4e;
  `
};
