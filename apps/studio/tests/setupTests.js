global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  getBoundingClientRect: () => ({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }),
  getClientRects: () => [],
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});
